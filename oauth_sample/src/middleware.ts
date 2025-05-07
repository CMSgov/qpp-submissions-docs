import crypto from 'node:crypto';

import { deleteCookie, getCookie } from 'hono/cookie';
import { createMiddleware } from 'hono/factory';

import qppAuth from './qpp-auth';

export default {
    /**
     * Bare-bones instrumentation. Feel free to use your own logging solution here.
     */
    instrumentation: createMiddleware(async (c, next) => {
        const reqId = c.req.query('state') || crypto.randomUUID();
        c.set('reqId', reqId);
        // Pass a unique request ID to all logging events
        c.set('log', {
            info: (msg, obj) => console.info(msg, { reqId, ...obj }),
            error: (msg, obj) => console.error(msg, { reqId, ...obj })
        });
        c.var.log.info(`${c.req.method} ${c.req.path}`, {
            ...c.req.query()
        });

        await next();
    }),

    /**
     * Parse and verify the user's ID token.
     */
    parseAuth: createMiddleware(async (c, next) => {
        const idToken = getCookie(c, 'qpp_id_token');
        if (idToken) {
            try {
                const { payload } = await qppAuth.verifyIdToken(idToken);
                c.set('auth', payload);
                c.var.log.info('authenticated user', {
                    username: payload.preferred_username
                });
            } catch (error) {
                c.var.log.error('invalid ID token', { error });
                deleteCookie(c, 'qpp_id_token');
            }
        }

        await next();
    }),

    /**
     * Enforce that a valid ID token was provided.
     */
    requireAuth: createMiddleware(async (c, next) => {
        if (!c.var.auth) return c.redirect('/');
        await next();
    })
};
