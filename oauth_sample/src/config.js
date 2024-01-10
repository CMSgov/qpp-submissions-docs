import 'dotenv/config';

const Config = {
    /*
     * Client ID of OAuth application in IDM
     */
    clientId: import.meta.env.CLIENT_ID,
    /*
     * Client secret of OAuth application in IDM, if applicable
     */
    clientSecret: import.meta.env.CLIENT_SECRET,
    /*
     * Port on which to run the HTTP server
     */
    port: import.meta.env.PORT,
    /**
     * Login redirect URL configured in the OAuth application in IDM
     */
    loginRedirectUrl: import.meta.env.LOGIN_REDIRECT_URL,
    /**
     * Post-logout redirect URL configured in the OAuth application in IDM
     */
    logoutRedirectUrl: import.meta.env.LOGOUT_REDIRECT_URL,
    /**
     * Base URL for QPP
     */
    qppBaseUrl: import.meta.env.QPP_BASE_URL,
};

export default Config;
