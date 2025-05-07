import 'dotenv/config';

export default {
    /*
     * Application client ID
     */
    clientId: process.env.CLIENT_ID ?? '',
    /*
     * Application client secret, if applicable
     */
    clientSecret: process.env.CLIENT_SECRET,
    /*
     * Port on which to run the HTTP server
     */
    port: Number(process.env.PORT ?? 3000),
    /**
     * Login redirect URL configured in the OAuth application
     */
    loginRedirectUrl:
        process.env.LOGIN_REDIRECT_URL ?? `http://localhost:3000/logged_in`,
    /**
     * Post-logout redirect URL configured in the OAuth application
     */
    logoutRedirectUrl:
        process.env.LOGOUT_REDIRECT_URL ?? `http://localhost:3000/logged_out`,
    /**
     * Base URL for QPP
     */
    qppBaseUrl: process.env.QPP_BASE_URL ?? `https://preview.qpp.cms.gov`
};
