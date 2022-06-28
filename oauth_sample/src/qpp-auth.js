import OktaJwtVerifier from '@okta/jwt-verifier';
import fetch from 'node-fetch';

import Config from './config.js';

const QPP_ACCEPT_HEADER = 'application/vnd.qpp.cms.gov.v1+json';

let oauthEndpoints;
let oktaJwtVerifier;

export default {
    /**
     * Scopes for access tokens issued by the authorization server.
     * `openid`         - REQUIRED, indicates that the OpenID connect protocol is used
     * `offline_access` - OPTIONAL, enables the use of refresh tokens
     * `profile`        - OPTIONAL, includes user profile information in the ID token
     * `email`          - OPTIONAL, includes the user's email in the ID token
     * `qpp_data`       - REQUIRED (for QPP), enables access to the user's data/submissions
     */
    TOKEN_SCOPES: ['openid', 'offline_access', 'profile', 'email', 'qpp_data'],

    /**
     * Discover and cache OAuth-related endpoints for QPP.
     */
    async discoverOAuthEndpoints() {
        if (!oauthEndpoints) {
            const response = await fetch(`${Config.qppBaseUrl}/api/auth/oauth`, {
                headers: new Headers({ accept: QPP_ACCEPT_HEADER }),
            });
            oauthEndpoints = (await response.json()).data;
        }

        // We explicitly enumerate properties here for extra type info.
        return {
            issuer: oauthEndpoints.issuer,
            authorization_endpoint: oauthEndpoints.authorization_endpoint,
            end_session_endpoint: oauthEndpoints.end_session_endpoint,
            introspection_endpoint: oauthEndpoints.introspection_endpoint,
            jwks_uri: oauthEndpoints.jwks_uri,
            registration_endpoint: oauthEndpoints.registration_endpoint,
            revocation_endpoint: oauthEndpoints.revocation_endpoint,
            token_endpoint: oauthEndpoints.token_endpoint,
        };
    },

    /**
     * Generate query string parameters for a request to begin the authorization code
     * flow.
     *
     * codeChallenge can also be provided if you're using the authorization code flow
     * with PKCE.
     */
    authorizationParams(state, codeChallenge = null) {
        return new URLSearchParams({
            client_id: Config.clientId,
            response_type: 'code',
            scope: this.TOKEN_SCOPES.join(' '),
            redirect_uri: Config.loginRedirectUrl,
            state,
            ...(codeChallenge && {
                code_challenge_method: 'S256',
                code_challenge: codeChallenge,
            }),
        });
    },

    /**
     * Fetch a new set of tokens from the authorization server's token_endpoint.
     *
     * codeVerifier can also be provided if you're using the authorization code flow with
     * PKCE.
     */
    async getTokens(code, codeVerifier = null) {
        const { token_endpoint } = await this.discoverOAuthEndpoints();
        const form = new URLSearchParams({
            client_id: Config.clientId,
            // For PKCE, we pass a code verifier. Otherwise, pass the client secret.
            ...(codeVerifier
                ? { code_verifier: codeVerifier }
                : { client_secret: Config.clientSecret }),
            grant_type: 'authorization_code',
            redirect_uri: Config.loginRedirectUrl,
            code,
        });

        const response = await fetch(token_endpoint, {
            method: 'POST',
            headers: new Headers({ accept: 'application/json' }),
            body: form,
        });

        if (!response.ok) {
            const body = await response.json();
            throw new Error(
                `Failed to get tokens: ${body.error_description} (${body.error})`
            );
        }

        const tokenInfo = await response.json();

        // We explicitly enumerate properties here for extra type info.
        return {
            token_type: tokenInfo.token_type,
            expires_in: tokenInfo.expires_in,
            access_token: tokenInfo.access_token,
            scope: tokenInfo.scope,
            refresh_token: tokenInfo.refresh_token,
            id_token: tokenInfo.id_token,
        };
    },

    /**
     * Verify that an ID token has a valid signature, was issued by the authorization
     * server, and that the aud claim matches the configured client ID.
     */
    async verifyIdToken(idToken) {
        if (!oktaJwtVerifier) {
            const { issuer } = await this.discoverOAuthEndpoints();
            oktaJwtVerifier = new OktaJwtVerifier({ issuer, clientId: Config.clientId });
        }
        return oktaJwtVerifier.verifyIdToken(idToken, Config.clientId);
    },

    /**
     * Refresh an existing set of tokens by providing a refresh token to the authorization
     * server's token_endpoint.
     */
    async refreshAccessToken(refreshToken) {
        const { token_endpoint } = await this.discoverOAuthEndpoints();
        const form = new URLSearchParams({
            client_id: Config.clientId,
            // Client secret may be omitted for refresh tokens obtained w/ PKCE
            ...(Config.clientSecret && { client_secret: Config.clientSecret }),
            grant_type: 'refresh_token',
            redirect_uri: Config.loginRedirectUrl,
            scope: this.TOKEN_SCOPES.join(' '),
            refresh_token: refreshToken,
        });

        const response = await fetch(token_endpoint, {
            method: 'POST',
            headers: new Headers({ accept: 'application/json' }),
            body: form,
        });

        if (!response.ok) {
            const body = await response.json();
            throw new Error(
                `Failed to refresh token: ${body.error_description} (${body.error})`
            );
        }

        const tokenInfo = await response.json();

        // We explicitly enumerate properties here for extra type info.
        return {
            token_type: tokenInfo.token_type,
            expires_in: tokenInfo.expires_in,
            access_token: tokenInfo.access_token,
            scope: tokenInfo.scope,
            refresh_token: tokenInfo.refresh_token,
            id_token: tokenInfo.id_token,
        };
    },

    /**
     * Revoke the given token with the given token type. Token type can be one of
     * 'access_token', 'refresh_token'.
     *
     * This does not delete the user's session in IDM - it just revokes your
     * client-specific tokens. If you'd like to log the user out of IDM as well, refer to
     * the /logout endpoint.
     */
    async revokeToken(tokenType, token) {
        const { revocation_endpoint } = await this.discoverOAuthEndpoints();
        const form = new URLSearchParams({
            client_id: Config.clientId,
            // Client secret may be omitted for tokens obtained w/ PKCE
            ...(Config.clientSecret && { client_secret: Config.clientSecret }),
            token_type_hint: tokenType,
            token,
        });

        const response = await fetch(revocation_endpoint, {
            method: 'POST',
            headers: new Headers({ accept: 'application/json' }),
            body: form,
        });

        if (!response.ok) {
            const body = await response.json();
            throw new Error(
                `Failed to revoke token: ${body.error_description} (${body.error})`
            );
        }
    },

    /**
     * Fetch the list of user authorizations from the QPP Auth service using the given
     * access token.
     */
    async getAuthorizations(accessToken) {
        const response = await fetch(`${Config.qppBaseUrl}/api/auth/authz`, {
            headers: new Headers({
                accept: QPP_ACCEPT_HEADER,
                authorization: `Bearer ${accessToken}`,
            }),
        });
        const body = await response.json();

        if (response.ok) {
            return body.data.authorizations;
        } else {
            throw new Error(`Failed to fetch authorizations: ${body.error.message}`);
        }
    },
};
