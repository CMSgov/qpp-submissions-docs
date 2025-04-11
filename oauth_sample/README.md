# QPP OAuth Sample Client

Example client application to demonstrate [OAuth 2.0](https://www.oauth.com/) + [OpenID Connect](https://openid.net/developers/how-connect-works/) integration with [QPP](https://qpp.cms.gov).

## Getting started

### Installation

This application has been tested on Node.js v22. Install dependencies by running `npm ci`.

### Setup

First, ensure you've created a QPP Developer Preview account and registered a new OAuth application by following the instructions on [this page](https://cmsgov.github.io/qpp-submissions-docs/getting-started-with-oauth).

Many of the fields required for registration may contain arbitrary "dummy" values (like `privacyPolicyURI` or `tosURI`), but the following **must** be configured correctly in order to use the sample client:
* `redirectURIs` - *must* contain the absolute URL to the `/logged_in` endpoint for your development server
    * e.g. `http://localhost:3000/logged_in`
* `logoutURIs` - *must* contain the absolute URL to the `/logged_out` endpoint for your development server
    * e.g. `http://localhost:3000/logged_out`
* `applicationType` - indicates what kind of application this is. Options are: `web`, `native`.
    * `web` applications are typical web apps with a backend server. They will receive both a client ID and a client secret.
    * `native` applications are client-side apps (e.g. mobile/desktop apps). They will receive only a client ID, since a client secret cannot be stored safely.

After registering the application, copy `.example.env` to `.env` and use your new client information to populate the following values in `.env`:
* `CLIENT_ID` - Registered client ID. Always required.
* `CLIENT_SECRET` - Registered client secret. Required for applications of type `web`, which can securely store a secret on the backend. For `native` applications, leave this blank.
* `LOGIN_REDIRECT_URL` - The registered post-login redirect URL (i.e. the value you chose to put in `redirectURIs`)
* `LOGOUT_REDIRECT_URL` - The registered post-logout redirect URL (i.e. the value you chose to put in `logoutURIs`)

### Run

Start the example application:

```bash
npm start
```
(Note that changes to the `.env` file will require restarting the application manually)

### Usage

**NOTE**: This client application must be accessed from a browser. The authentication flow leverages HTTP redirects that are not handled correctly by API development environments such as Postman.

#### `/`

Serves as a basic homepage for the application. Contains information about the current user, links to perform actions like verifying/refreshing the user's session, and a list of the user's authorizations in QPP.

#### `/login`

Begins the [OAuth 2.0 authorization code flow](https://www.oauth.com/oauth2-servers/pkce/authorization-request/). Note that, for additional security, the [Proof Key for Code Exchange](https://www.oauth.com/oauth2-servers/pkce/) extension is used regardless of the application type.

If you are testing your application in the QPP Developer Preview environment, please reserve scenarios beforehand using the [My Test Data](https://preview.qpp.cms.gov/user/test-data) section in the Developer Preview UI or the [QPP Synthetic Test Data API](https://preview.qpp.cms.gov/api/synthetic-data/docs/index.html).

#### `/logged_in`

Post-login redirect endpoint to receive the authorization code. This endpoint fetches tokens from the authorization server and sets the following cookies:
- `qpp_access_token` - the access token, used to authorize against QPP APIs like the [the Auth service API](https://preview.qpp.cms.gov/api/auth/docs) or the [submissions API](https://preview.qpp.cms.gov/api/submissions/public/docs/). The access token must be sent in the `Authorization` header in the format `Bearer <access_token>`. Your application **should not** attempt to parse the contents of this token.
- `qpp_refresh_token` - the refresh token, used to request a new access token from the authorization server
- `qpp_id_token` - the [ID token](https://www.oauth.com/oauth2-servers/openid-connect/id-tokens/), issued to your application as proof that the user is authenticated. Your application should parse/verify the contents of this token and use it to customize your UI if applicable.

#### `/verify`

Verifies the current ID token and returns its claims as a JSON object.

#### `/refresh`

Uses the refresh token to request new tokens from the authorization server.

#### `/logout`

[Revokes all tokens](https://oauth.net/2/token-revocation/) and [ends the user's session](https://openid.net/specs/openid-connect-rpinitiated-1_0.html).

#### `/logged_out`

Post-logout redirect endpoint to delete the saved ID token before redirecting back to the home page.

## License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
