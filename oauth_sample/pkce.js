'use strict';

/*
 * pkce.js
 *
 * This module provides utilities in support of OAuth 2.0 authentication
 * using the Authorization Code Flow with Proof Key for Code Exchange
 * (PKCE).
 *
 * ```
 * The PKCE-enhanced Authorization Code Flow introduces a secret created by the
 * calling application that can be verified by the authorization server; this
 * secret is called the Code Verifier. Additionally, the calling app creates a
 * transform value of the Code Verifier called the Code Challenge and sends
 * this value over HTTPS to retrieve an Authorization Code. This way, a
 * malicious attacker can only intercept the Authorization Code, and they
 * cannot exchange it for a token without the Code Verifier.
 * ```
 *
 * (https://auth0.com/docs/flows/concepts/auth-code-pkce)
 */

const crypto = require('crypto');

function base64URLEncode(buffer) {
    return buffer
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

function sha256(buffer) {
    return crypto
        .createHash('sha256')
        .update(buffer)
        .digest();
}

/* eslint-disable camelcase */
function generatePKCE() {
    const seed = crypto.randomBytes(32);

    const code_verifier = base64URLEncode(seed);
    const code_challenge = base64URLEncode(sha256(code_verifier));

    return { code_verifier, code_challenge };
}

module.exports = generatePKCE;
