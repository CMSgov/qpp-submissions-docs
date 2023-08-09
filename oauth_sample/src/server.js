import crypto from 'node:crypto';

import express from 'express';
import cookieParser from 'cookie-parser';

import Config from './config.js';
import middleware from './middleware.js';
import qppAuth from './qpp-auth.js';

// Decorator to allow async route handlers. Won't be necessary once Express v5 is released.
const asyncHandler = fn => (req, res, next) =>
    // eslint-disable-next-line promise/no-callback-in-promise
    Promise.resolve(fn(req, res, next)).catch(next);

const app = express();
app.use(cookieParser());
app.use(middleware.instrumentation);
app.use(asyncHandler(middleware.parseAuth));

// Basic homepage. Displays info about the user and their session if authenticated, otherwise
// displays a link to log in.
app.get(
    '/',
    asyncHandler(async (req, res) => {
        if (req.auth) {
            const { name, preferred_username, exp } = req.auth;
            const expiration = new Date(exp * 1000);
            const secsRemaining = Math.round((expiration - Date.now()) / 1000);
            const authorizations = JSON.stringify(
                await qppAuth.getAuthorizations(req.cookies.qpp_access_token),
                null,
                2,
            );
            res.send(
                `<h1>Example Application</h1>
                 <h2>Authenticated with QPP as ${name} (${preferred_username})</h2>
                 <p>Your session will expire in ${secsRemaining} seconds, at <b>${expiration}</b>.</p>
                 <a href="/verify">Verify</a>&nbsp;
                 <a href="/refresh">Refresh</a>&nbsp;
                 <a href="/logout">Log Out</a>
                 <p>User authorizations: <pre>${authorizations}</pre></p>`,
            );
        } else {
            let loginLink = Config.clientSecret
                ? '<a href="/login">/login</a>'
                : '<a href="/login-pkce">/login-pkce</a>';
            res.send(
                `<h1>Example Application</h1>
                 <h2>You are currently logged out.</h2>
                 <p>To log in, go to ${loginLink}.</p>`,
            );
        }
    }),
);

// Begin the authorization code flow.
// Details: https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/
app.get(
    '/login',
    asyncHandler(async (req, res) => {
        const { authorization_endpoint } = await qppAuth.discoverOAuthEndpoints();
        req.log.info('redirecting to authorization_endpoint');
        res.redirect(`${authorization_endpoint}?${qppAuth.authorizationParams(req.id)}`);
    }),
);

// Begin the authorization code flow with PKCE.
// Details: https://developer.okta.com/docs/guides/implement-grant-type/authcodepkce/main/
app.get(
    '/login-pkce',
    asyncHandler(async (req, res) => {
        const codeVerifier = crypto.randomBytes(64).toString('base64url');
        const codeChallenge = crypto
            .createHash('sha256')
            .update(codeVerifier)
            .digest('base64url');

        const { authorization_endpoint } = await qppAuth.discoverOAuthEndpoints();
        const authorizationParams = qppAuth.authorizationParams(req.id, codeChallenge);
        req.log.info('redirecting to authorization_endpoint');
        res.cookie('qpp_pkce_code_verifier', codeVerifier);
        res.redirect(`${authorization_endpoint}?${authorizationParams}`);
    }),
);

// Login redirect endpoint. Path should match what's in Config.loginRedirectUrl.
app.get(
    '/logged_in',
    asyncHandler(async (req, res) => {
        if (!req.query.code) {
            throw new Error(
                `Failed to log in. Details from IDM: ${JSON.stringify(req.query)}`,
            );
        }

        const { expires_in, access_token, refresh_token, id_token } =
            await qppAuth.getTokens(req.query.code, req.cookies.qpp_pkce_code_verifier);

        req.log.info('got tokens', { access_token, refresh_token, id_token });
        res.cookie('qpp_access_token', access_token, { maxAge: expires_in * 1000 });
        res.cookie('qpp_refresh_token', refresh_token);
        res.cookie('qpp_id_token', id_token, { maxAge: expires_in * 1000 });
        res.clearCookie('qpp_pkce_code_verifier');
        res.redirect('/');
    }),
);

// Token verification endpoint, returns the token claims as JSON.
app.get('/verify', middleware.requireAuth, (req, res) => res.send(req.auth));

// Refresh the user's session using the current refresh token.
app.get(
    '/refresh',
    asyncHandler(async (req, res) => {
        const refreshToken = req.cookies.qpp_refresh_token;
        if (!refreshToken) return res.redirect('/');

        const { expires_in, access_token, refresh_token, id_token } =
            await qppAuth.refreshAccessToken(refreshToken);
        req.log.info('refreshed tokens', { access_token, refresh_token, id_token });
        res.cookie('qpp_access_token', access_token, { maxAge: expires_in * 1000 });
        res.cookie('qpp_refresh_token', refresh_token);
        res.cookie('qpp_id_token', id_token, { maxAge: expires_in * 1000 });
        res.redirect('/');
    }),
);

// Revoke access/refresh tokens and end the user's Okta browser session.
// Details:
// - https://developer.okta.com/docs/guides/revoke-tokens/main/
// - https://developer.okta.com/docs/reference/api/oidc/#logout
app.get(
    '/logout',
    middleware.requireAuth,
    asyncHandler(async (req, res) => {
        const { end_session_endpoint } = await qppAuth.discoverOAuthEndpoints();
        const params = new URLSearchParams({
            id_token_hint: req.cookies.qpp_id_token,
            post_logout_redirect_uri: Config.logoutRedirectUrl,
            state: req.id,
        });

        await Promise.all([
            qppAuth.revokeToken('access_token', req.cookies.qpp_access_token),
            qppAuth.revokeToken('refresh_token', req.cookies.qpp_refresh_token),
        ]);
        res.clearCookie('qpp_access_token');
        res.clearCookie('qpp_refresh_token');

        req.log.info('redirecting to end_session_endpoint');
        res.redirect(`${end_session_endpoint}?${params}`);
    }),
);

// Logout redirect endpoint. Path should match what's in Config.logoutRedirectUrl.
app.get(
    '/logged_out',
    middleware.requireAuth,
    asyncHandler(async (req, res) => {
        req.log.info('successfully logged out');
        res.clearCookie('qpp_id_token');
        res.redirect('/');
    }),
);

// Simple 404 handler
app.use((_req, res) => res.status(404).send('<h1>404 Not Found</h1>'));

// Default error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
    if (res.statusCode < 400) res.status(500);
    const error = { status: res.statusCode, message: err.message, stack: err.stack };
    req.log.error('error', error);
    res.clearCookie('qpp_pkce_code_verifier');
    res.send({ error });
});

app.listen(Config.port, () => console.log(`Listening on port ${Config.port}`));
