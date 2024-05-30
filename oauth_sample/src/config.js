import 'dotenv/config';

const Config = {
    /*
     * Client ID of OAuth application in IDM
     */
    clientId: process.env.CLIENT_ID,
    /*
     * Client secret of OAuth application in IDM, if applicable
     */
    clientSecret: process.env.CLIENT_SECRET,
    /*
     * Port on which to run the HTTP server
     */
    port: process.env.PORT,
    /**
     * Login redirect URL configured in the OAuth application in IDM
     */
    loginRedirectUrl: process.env.LOGIN_REDIRECT_URL,
    /**
     * Post-logout redirect URL configured in the OAuth application in IDM
     */
    logoutRedirectUrl: process.env.LOGOUT_REDIRECT_URL,
    /**
     * Base URL for QPP
     */
    qppBaseUrl: process.env.QPP_BASE_URL,
};

export default Config;
