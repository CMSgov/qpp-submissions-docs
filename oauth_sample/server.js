'use strict';

const express = require('express');
const rp = require('request-promise');
const uuid = require('uuid/v4');
const querystring = require('querystring');
const urljoin = require('url-join');
const PKCE = require('./pkce');
const Cache = require('./cache');

const app = express();

// --------------------------------------------------------------------------------
//                              Configuration
// --------------------------------------------------------------------------------
/* eslint-disable camelcase, no-use-before-define */

const {
    CLIENT_ID,
    CLIENT_SECRET,
    APP_BASE_URL,
    APP_PORT,
    QPP_BASE_URL
} = require('./config');

const APP_HOST = `${APP_BASE_URL}:${APP_PORT}`;

// The QPP Auth API version is embedded in the `Accept` header
const QPP_VERSION_ACCEPT_HEADER = 'application/vnd.qpp.cms.gov.v1+json';

const QPP_AUTHZ_PATH = '/authz';
const QPP_VERIFY_PATH = '/sessions/verify';
const QPP_ENDPOINT_DISCOVERY_PATH = '/oauth';

// Simple in-memory storage data structure
const codeCache = new Cache();
const tokenCache = new Cache();

// --------------------------------------------------------------------------------
//                              Application-level middleware
// --------------------------------------------------------------------------------
app.use(require('body-parser').json());

app.use(async function reqSetup(req, res, next) {
    req.id = req.get('x-request-id') || uuid();

    // Pass unique request ID to all logging events
    req.log = {
        info: console.log.bind(null, { reqId: req.id }),
        error: console.error.bind(null, { reqId: req.id })
    };

    res.locals.params = Object.assign({}, req.query, req.params);
    req.log.info({ params: res.locals.params }, `${req.method} ${req.path}`);
    next();
});

// --------------------------------------------------------------------------------
//                              User-facing client routes
// --------------------------------------------------------------------------------
/*
 * Ask the user's permission to access their data. If the user approves,
 * the OAuth2 server sends an authorization code to the client
 *
 * The following scopes may be requested:
 *
 * `openid` - Required
 *     Specifices that the OpenID Connection protocol will be
 *     used for Authentication
 *
 * `offline_access` - Optional
 *     Requests a refresh token used to obtain more access tokens
 *     without re-prompting the user for authentication
 *
 * `qpp_data` - Required for QPP
 *     Requires consent from user. Provides access to all
 *     the user's QPP data.
 */
app.get('/login', async (req, res, next) => {
    const qs = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        scope: ['openid', 'offline_access', 'qpp_data'].join(' '),
        redirect_uri: `${APP_HOST}/logged_in`,
        state: req.id
    });

    const { authorization_endpoint } = await discoverEndpoints();

    const url = urljoin(authorization_endpoint, `?${qs}`);

    res.redirect(302, url);
});

app.get('/login-pkce', async (req, res, next) => {
    const { code_challenge, code_verifier } = PKCE();

    const options = {
        client_id: CLIENT_ID,
        response_type: 'code',
        scope: ['openid', 'offline_access', 'qpp_data'].join(' '),
        redirect_uri: `${APP_HOST}/logged_in`,
        state: req.id,
        code_challenge: code_challenge,
        code_challenge_method: 'S256'
    };

    codeCache.set(req.id, {
        code_challenge,
        code_verifier
    });

    const qs = querystring.stringify(options);

    const { authorization_endpoint } = await discoverEndpoints();

    const url = urljoin(authorization_endpoint, `?${qs}`);

    res.redirect(302, url);
});

// Redirected from `/login`
//
// Send the authorization code and client secret to the OAuth2
// server to get the access token
app.get('/logged_in', async (req, res, next) => {
    const { state, code } = res.locals.params;

    const form = {
        client_id: CLIENT_ID,
        grant_type: 'authorization_code',
        redirect_uri: urljoin(APP_HOST, '/logged_in'),
        code
    };

    const pkceCode = codeCache.get(state);

    if (pkceCode) {
        form.code_verifier = pkceCode.code_verifier;
    } else {
        form.client_secret = CLIENT_SECRET;
    }

    const { token_endpoint } = await discoverEndpoints();

    try {
        const responseBody = await rp({
            method: 'POST',
            uri: token_endpoint,
            headers: {
                accept: 'application/json',
                'content-type': 'application/x-www-form-urlencoded'
            },
            form
        });

        const tokens = JSON.parse(responseBody);

        req.log.info({ tokens }, 'Auth Grant Success');

        const { refresh_token, access_token, id_token } = tokens;

        // The authorization server will not return the username in the response,
        // so use the `introspection` endpoint to verify the JWT and extract token data
        const { username } = await introspectToken(access_token);

        // Clear out any existing user tokens

        tokenCache.set(username, {
            refresh_token,
            access_token,
            id_token
        });

        res.status(200).send(
            'QPP OAuth Example can now access your information!'
        );
    } catch (e) {
        req.log.error({ err: e.message, stack: e.stack }, 'Auth Grant Error');
        res.status(500).send({ error: e.message });
    }
});

// Check the validity of access tokens, and find out other information such as which
// user and which scopes are associated with the token
app.get('/introspect/:userid', async (req, res) => {
    const { userid } = req.params;

    const { access_token } = tokenCache.get(userid);

    try {
        const tokenData = await introspectToken(access_token);

        res.status(200).send(tokenData);
    } catch (e) {
        req.log.error({ error: e.message }, 'Introspection error');
        res.status(500).send('Error from Okta');
    }
});

// Verify that QPP recognizes and validates the OAuth2 access token
app.get('/verify/:userid', async (req, res) => {
    const { userid } = req.params;

    const { access_token } = tokenCache.get(userid);

    try {
        await rp({
            uri: urljoin(QPP_BASE_URL, QPP_VERIFY_PATH),
            headers: {
                authorization: `Bearer ${access_token}`,
                accept: QPP_VERSION_ACCEPT_HEADER
            }
        });

        res.status(204).send();
    } catch (e) {
        req.log.error(
            { error: e.message, stack: e.stack },
            'Authentication error'
        );
        res.status(500).send('Error authenticating to QPP');
    }
});

// Get list of user roles from QPP
app.get('/authorizations/:userid', async (req, res) => {
    const { userid } = req.params;

    const { access_token } = tokenCache.get(userid);

    try {
        const responseBody = await rp({
            uri: urljoin(QPP_BASE_URL, QPP_AUTHZ_PATH),
            headers: {
                authorization: `Bearer ${access_token}`,
                accept: QPP_VERSION_ACCEPT_HEADER
            }
        });

        const { data } = JSON.parse(responseBody);

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send('Error authenticating to QPP');
    }
});

/*
 * Revoke and store a new OAuth2 access token using an existing refresh token.
 *
 * `Refresh tokens are credentials used to obtain access tokens.  Refresh
 * tokens are issued to the client by the authorization server and are
 * used to obtain a new access token when the current access token
 * becomes invalid or expires.` (https://tools.ietf.org/html/rfc6749#section-1.5)
 *
 **/
app.get('/refresh/:userid', async (req, res) => {
    const { userid } = req.params;

    const { refresh_token } = tokenCache.get(userid);

    try {
        const response = await newAccessToken(refresh_token);
        const newTokens = JSON.parse(response);

        tokenCache.set(userid, {
            access_token: newTokens.access_token
        });

        res.status(200).send(`Refreshed the access token for ${userid}`);
    } catch (e) {
        req.log.error({ error: e.message, stack: e.stack }, 'Refresh error');
        res.status(500).send('Error refreshing access token');
    }
});

// Revoke the access token. A refresh token can be used to retrieve a new access token.
app.get('/revoke/:userid', async (req, res) => {
    const { userid } = req.params;

    const { access_token } = tokenCache.get(userid);

    try {
        const response = await revokeAccessToken(access_token);

        req.log.info({ response, userid }, 'Revoked access token');

        res.status(200).send(`Revoked access token for ${userid}`);
    } catch (e) {
        req.log.error({ error: e.message, stack: e.stack }, 'Revocation error');
        res.status(500).send('Error revoking access token');
    }
});

// Revoke both the access and refresh token for a user
app.get('/logout/:userid', async (req, res) => {
    const { userid } = req.params;

    const { access_token, refresh_token, id_token } = tokenCache.get(userid);

    try {
        await Promise.all([
            revokeAccessToken(access_token),
            revokeRefreshToken(refresh_token),
            sessionLogout(id_token)
        ]);

        req.log.info({ userid }, 'Revoked access and refresh tokens');

        res.status(200).send(`Revoked access and refresh tokens for ${userid}`);
    } catch (e) {
        req.log.error({ error: e.message, stack: e.stack }, 'Revocation error');
        res.status(500).send('Error logging out user');
    }
});

// --------------------------------------------------------------------------------
//                               Utils
// --------------------------------------------------------------------------------
async function discoverEndpoints() {
    const response = await rp({
        uri: urljoin(QPP_BASE_URL, QPP_ENDPOINT_DISCOVERY_PATH),
        headers: {
            accept: QPP_VERSION_ACCEPT_HEADER
        }
    });

    const { data } = JSON.parse(response);

    return data;
}

async function newAccessToken(refreshToken) {
    const form = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    };

    const { token_endpoint } = await discoverEndpoints();

    return rp({
        method: 'POST',
        uri: token_endpoint,
        headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
        },
        form
    });
}

async function revokeToken(tokenType, token) {
    const form = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        token_type_hint: tokenType,
        token
    };

    const { revocation_endpoint } = await discoverEndpoints();

    return rp({
        method: 'POST',
        uri: revocation_endpoint,
        headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
        },
        form
    });
}

function revokeAccessToken(accessToken) {
    return revokeToken('access_token', accessToken);
}

function revokeRefreshToken(refreshToken) {
    return revokeToken('refresh_token', refreshToken);
}

async function sessionLogout(token) {
    const { end_session_endpoint } = await discoverEndpoints();

    return rp({
        method: 'GET',
        uri: end_session_endpoint,
        qs: {
            id_token_hint: token
        }
    });
}

async function introspectToken(accessToken) {
    const form = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        token_type_hint: 'access_token',
        token: accessToken
    };

    const { introspection_endpoint } = await discoverEndpoints();

    const response = await rp({
        uri: introspection_endpoint,
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        form
    });

    return JSON.parse(response);
}

app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}`);
});
