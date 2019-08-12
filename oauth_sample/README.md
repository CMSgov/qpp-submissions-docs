# QPP OAuth2 Sample Client

Node.js client application to demonstrate OAuth2 integration with [QPP](https://qpp.cms.gov).

OAuth2 allows users to grant access to desired resources for third party applications,
giving them the ability to enable and disable this access whenever they want.

This client supports the [Authorization Code Flow](http://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.1) and [Authorization Code Flow with PKCE](https://tools.ietf.org/html/rfc7636).

## Requirements

The Node client library is tested against Node 10 LTS.

## Getting started

### Installation

Install the dependencies:

```bash
npm install
```

### Setup
[Register your application](https://qpp.cms.gov/api/auth/docs/#/Oauth/post_api_auth_oauth_applications__resource_id_) with QPP. 

The URIs specified when creating the application should reflect the `APP_BASE_URL` and `APP_PORT` values in the provided `config.js` file. By default, the application host is `http://localhost:3000`.

Many of the fields required for registration may contain arbitrary "dummy" values, but the following *must* be configured correctly in order to use the sample client:

* `redirectURIs`: **must** contain the absolute URI path to the `/logged_in` endpoint for your local instance of this application
    * E.g. `http://localhost:3000/logged_in`
* `applicationType`: ("web" | "native")
    * `web` applications will receive both a client ID and a client secret
    * `native` applications will receive only a client ID

Upon registering the application, use the returned OAuth 2.0 credentials to populate the following values in `config.js`:

  * `CLIENT_ID` - Service registered client id. Required.
  * `CLIENT_SECRET` - Service registered client secret. Required for applications which can securely store a secret. Native or mobile applications will not have a client secret and will use the [PKCE Flow](https://auth0.com/docs/flows/concepts/auth-code-pkce) for authorization.

### Run
Start the example application, either with:

```bash
npm start
```

Or, to automatically restart the server upon source changes, start it with:

```bash
npm run watch
```

(Note that changes to the configuration file will require restarting the application manually)

### Usage

**NOTE**: This client application must be used in the browser. The authentication flow leverages HTTP redirects that are not handled correctly by API development environments such as Postman.

This application demonstrates the `Authorization Code` flow for granting your application acccess to QPP data. Native applications will use a modified version of this flow called [Authorization Code Grant Flow with PKCE](https://tools.ietf.org/html/rfc7636).

#### `/login`

Serves as the entrypoint for the application.

The Authorization Code flow is made up of two parts. First, a client application asks the user for permission to access their data. If the user approves, the OAuth2 server sends an authorization code to the client. 

Second, the client POSTs the authorization code and its client secret to the OAuth server in return for an access token.

After authenticating with a password (first time) and granting the permissions, an
OAuth2 access token and a refresh token will be stored in the database for later use.

#### `/login-pkce`

Entrypoint for native or mobile applications which may not securely store a client secret. These applications use a version of the Authorization Code flow with Proof Key for Code Exchange (PKCE), which acts like a secret but isn't hard-coded, to keep the Authorization Code flow secure.

#### `/introspect/:userid`

Checks the validity of access tokens, and determines the active state of the token.

If the token is active, the response will include additional metadata such as approved scopes, user data, and context in which the token was issued.

#### `/verify/:userid`

Verify that QPP recognizes and validates the OAuth2 access token. 

Responds with `204 No-Content` if token was verified by QPP.

#### `/authorizations/:userid`

Responds with a list of QPP roles associated with the user.

#### `/refresh/:userid`

Retrieves and stores a new OAuth2 access token using an existing refresh token.

Refresh tokens are credentials used to obtain access tokens.  Refresh tokens are issued during the Authorization Code flow when the 'offline_access' scope is requested and are used to obtain new access tokens when the current beomes invalid or expires.

#### `/revoke/:userid`

Revokes the access token. A refresh token can be used to retrieve a new access token.

#### `/logout/:userid`

Revoke access and refresh tokens and end the session.

## Customization & Extension

Once a user has granted the application permission to access their QPP data, their access
token may be used to authorize against [the QPP Auth service](https://qpp.cms.gov/api/auth/docs).

The access token must be sent in the `Authorization` header with the format `Bearer {{access_token}}`.

For example, to get a list of the current user's authorizations:

```javascript
const QPP_BASE_URL = 'http://dev.qpp.cms.gov';

app.get('/authorizations/:userid', async (req, res) => {
    const { userid } = req.params;

    // Refresh tokens and access tokens for a user are stored in-memory in a simple cache
    const { access_token } = tokenCache.get(userid);

    try {
        const responseBody = await rp({
            uri: `${QPP_BASE_URL}/api/auth/authz`,
            headers: {
                authorization: `Bearer ${access_token}`,
                accept: 'application/vnd.qpp.cms.gov.v1+json' // API version
            }
        });

        const { data } = JSON.parse(responseBody);

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send('Error authenticating to QPP');
    }
});
```

## License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

