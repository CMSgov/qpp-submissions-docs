import crypto from 'node:crypto';

import qppAuth from './qpp-auth.js';

export default {
    /**
     * Middleware for enforcing a valid access token.
     */
    requireAuth(req, res, next) {
        if (!req.auth) return res.redirect('/');
        next();
    },

    /**
     * Middleware for bare-bones instrumentation. Feel free to use your own logging solution here.
     */
    instrumentation(req, _res, next) {
        req.id = req.query.state || crypto.randomUUID();
        // Pass a unique request ID to all logging events
        req.log = {
            info: (msg, obj) => console.info(msg, { reqId: req.id, ...obj }),
            error: (msg, obj) => console.error(msg, { reqId: req.id, ...obj }),
        };
        req.log.info(`${req.method} ${req.path}`, { ...req.params, ...req.query });

        next();
    },

    /**
     * Middleware for parsing and verifying the user's ID token.
     * If successful, stores the token's claims in req.auth.
     */
    async parseAuth(req, res, next) {
        const idToken = req.cookies.qpp_id_token;
        if (idToken) {
            try {
                const { claims } = await qppAuth.verifyIdToken(idToken);
                req.auth = claims;
                req.log.info('authenticated user', {
                    username: req.auth.preferred_username,
                });
            } catch (error) {
                req.log.error('invalid ID token', { error });
                res.clearCookie('qpp_id_token');
            }
        }

        next();
    },
};
