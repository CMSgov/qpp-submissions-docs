import crypto from 'node:crypto';

import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import { JWTPayload } from 'jose';

import config from './config';
import middleware from './middleware';
import qppAuth from './qpp-auth';

declare module 'hono' {
    interface ContextVariableMap {
        reqId: string;
        auth?: JWTPayload;
        log: {
            info: (msg: string, obj?: Record<string, any>) => void;
            error: (msg: string, obj?: Record<string, any>) => void;
        };
    }
}

const app = new Hono();
app.use(middleware.instrumentation);
app.use(middleware.parseAuth);

// Basic homepage. Displays info about the user and their session if authenticated, otherwise
// displays a link to log in.
app.get('/', async c => {
    if (c.var.auth) {
        const { name, preferred_username, exp } = c.var.auth;
        const expiration = new Date(Number(exp) * 1000);
        const secsRemaining = Math.round(
            (expiration.valueOf() - Date.now()) / 1000
        );
        const authorizations = JSON.stringify(
            await qppAuth.getAuthorizations(getCookie(c, 'qpp_access_token')),
            null,
            2
        );
        return c.html(
            `<h1>Example Application</h1>
             <h2>Authenticated with QPP as ${name} (${preferred_username})</h2>
             <p>Your session will expire in ${secsRemaining} seconds, at <b>${expiration}</b>.</p>
             <a href="/verify">Verify</a>&nbsp;
             <a href="/refresh">Refresh</a>&nbsp;
             <a href="/logout">Log Out</a>
             <p>User authorizations: <pre>${authorizations}</pre></p>`
        );
    } else {
        return c.html(
            `<h1>Example Application</h1>
             <h2>You are currently logged out.</h2>
             <p>To log in, go to  <a href="/login">/login</a>.</p>`
        );
    }
});

// Begin the authorization code flow with PKCE.
//
// Details: https://www.oauth.com/oauth2-servers/pkce/authorization-request/
app.get('/login', async c => {
    const codeVerifier = crypto.randomBytes(64).toString('base64url');
    const codeChallenge = crypto
        .createHash('sha256')
        .update(codeVerifier)
        .digest('base64url');

    const { authorization_endpoint } = await qppAuth.discoverOAuthEndpoints();
    const authorizationParams = qppAuth.authorizationParams(
        c.var.reqId,
        codeChallenge
    );

    setCookie(c, 'qpp_pkce_code_verifier', codeVerifier);
    c.var.log.info('redirecting to authorization_endpoint');
    return c.redirect(`${authorization_endpoint}?${authorizationParams}`);
});

// Post-login redirect endpoint - exchange authorization code for tokens.
// Endpoint path should match what's in config.loginRedirectUrl.
//
// Details: https://www.oauth.com/oauth2-servers/pkce/authorization-code-exchange/
app.get('/logged_in', async c => {
    const code = c.req.query('code');
    if (!code) {
        throw new Error(
            `Failed to log in. Details from IDM: ${JSON.stringify(c.req.query())}`
        );
    }

    const { expires_in, access_token, refresh_token, id_token } =
        await qppAuth.getTokens(
            code,
            String(getCookie(c, 'qpp_pkce_code_verifier'))
        );

    c.var.log.info('got tokens', { access_token, refresh_token, id_token });

    setCookie(c, 'qpp_access_token', access_token, {
        maxAge: expires_in * 1000
    });
    setCookie(c, 'qpp_refresh_token', refresh_token);
    setCookie(c, 'qpp_id_token', id_token, { maxAge: expires_in * 1000 });
    deleteCookie(c, 'qpp_pkce_code_verifier');

    return c.redirect('/');
});

// ID token verification endpoint. Returns the ID token claims as JSON.
//
// Details: https://www.oauth.com/oauth2-servers/openid-connect/id-tokens/
app.get('/verify', middleware.requireAuth, async c => c.json(c.var.auth));

// Refresh the user's session using the current refresh token.
app.get('/refresh', async c => {
    const refreshToken = getCookie(c, 'qpp_refresh_token');
    if (!refreshToken) return c.redirect('/');

    const { expires_in, access_token, refresh_token, id_token } =
        await qppAuth.refreshAccessToken(refreshToken);

    c.var.log.info('refreshed tokens', {
        access_token,
        refresh_token,
        id_token
    });
    setCookie(c, 'qpp_access_token', access_token, {
        maxAge: expires_in * 1000
    });
    setCookie(c, 'qpp_refresh_token', refresh_token);
    setCookie(c, 'qpp_id_token', id_token, { maxAge: expires_in * 1000 });
    return c.redirect('/');
});

// OAuth token revocation and OpenID Connect logout procedure.
//
// Details:
// - https://oauth.net/2/token-revocation/
// - https://openid.net/specs/openid-connect-rpinitiated-1_0.html
app.get('/logout', middleware.requireAuth, async c => {
    // OAuth token revocation
    await Promise.all([
        qppAuth.revokeToken('access_token', getCookie(c, 'qpp_access_token')),
        qppAuth.revokeToken('refresh_token', getCookie(c, 'qpp_refresh_token'))
    ]);
    deleteCookie(c, 'qpp_access_token');
    deleteCookie(c, 'qpp_refresh_token');

    // OpenID Connect logout
    const { end_session_endpoint } = await qppAuth.discoverOAuthEndpoints();
    const params = new URLSearchParams({
        id_token_hint: getCookie(c, 'qpp_id_token') ?? '',
        post_logout_redirect_uri: config.logoutRedirectUrl,
        state: c.var.reqId
    });
    c.var.log.info('redirecting to end_session_endpoint');
    return c.redirect(`${end_session_endpoint}?${params}`);
});

// Post-logout redirect endpoint. Endpoint path should match what's in config.logoutRedirectUrl.
app.get('/logged_out', middleware.requireAuth, async c => {
    c.var.log.info('successfully logged out');
    deleteCookie(c, 'qpp_id_token');
    return c.redirect('/');
});

// Default error handler
app.onError((err, c) => {
    const error = { message: err.message, stack: err.stack };
    console.error('error', error);
    deleteCookie(c, 'qpp_pkce_code_verifier');
    return c.json({ error }, 500);
});

serve({ ...app, port: config.port }, info => {
    console.log(`listening on port ${info.port}`);
});
