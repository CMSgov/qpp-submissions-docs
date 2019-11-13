import React from 'react';

class GettingStartedUsingQppOauth2 extends React.Component {
  render() {
    return (
      <div>
        <p className='ds-text'>Using OAuth with the Submissions API allows QPP participants to use their own QPP credentials to login through your application to submit their data to and view performance feedback from QPP.</p>
        <p className='ds-text'>To get started using OAuth:</p>
        <p className='ds-text'>
          <ol>
            <li>Read through the <a href='https://qpp.cms.gov/api/auth/docs/#/'>GitHub documentation</a>.</li>
            <li>Join our <a href='https://groups.google.com/forum/#!forum/qpp-apis'>Developer Group for QPP APIs</a> to ask questions.</li>
            <li><a href='#oauth'>Register your application</a> in the Developer Preview</li>
            <li><a href='#create-user'>Test Submissions API integration</a> with test users from our Test Data Service</li>
          </ol>
        </p>
        <p className='ds-text'>Once you've successfully completed your integration in the Developer Preview, you can request access to the production Submissions API. We will provide details on this production access process this fall.</p>

        <h1 className='ds-h1' id='oauth'>Using OAuth in the Developer Preview</h1>
        <p className='ds-text'>To use the QPP Submissions API with OAuth, you must create a Developer Preview account and register the application.</p>
        <h2 className='ds-h2' id='oauth'>Create Developer Preview Account</h2>
        <p className='ds-text'>You will need to create a new HARP account to use with Developer Preview.</p>
        <p className='ds-text'>The Developer Preview account is separate from your account used on the main QPP website.</p>
        <p className='ds-text'><em>Please note: remote identity proofing will not work in Developer Preview.</em></p>
        <p className='ds-text'><strong>Step 1</strong></p>
        <p className='ds-text'>Go to <a href='https://impl.harp.qualitynet.org/register/profile-info'>https://impl.harp.qualitynet.org/register/profile-info</a>.</p>
        <p className='ds-text'>On the first page of Account Registration, enter:</p>
        <ul>
          <li>Valid name</li>
          <li>Valid email address</li>
          <li>Valid phone number</li>
          <li>Valid home address</li>
          <li>Test social security number (000-00-0000 will work)</li>
        </ul>
        <p className='ds-text'><strong>Step 2</strong></p>
        <p className='ds-text'>On the second page of Account Registration, create:</p>
        <ul>
          <li>Username</li>
          <li>Password - which must be at least 12 characters and include a lowercase letter, uppercase letter, number (0-9), and symbol (!@#$%^&*)</li>
          <li>Challenge question</li>
        </ul>
        <p className='ds-text'>Click Next —the next page may take a minute to load.</p>
        <p className='ds-text'>You will see the error message: “We were unable to verify the information you provided. If you think you have entered the correct information…” This is the expected outcome.</p>
        <p className='ds-text'>You can close the page.</p>
        <p className='ds-text'><strong>Step 3</strong></p>
        <p className='ds-text'>Call or email QPP Service Desk (1-866-288-8292 or QPP@cms.hhs.gov).</p>
        <p className='ds-text'>Tell them you’re trying to register for a Developer Preview account and give them the username you just created. The agent will verify your account and identity.</p>
        <p className='ds-text'><strong>Step 4</strong></p>
        <p className='ds-text'>Once you’ve completed this process, log in to Developer Preview at: <a href='https://preview.qpp.cms.gov'>https://preview.qpp.cms.gov</a>.</p>
        <p className='ds-text'>Upon login, you’ll be prompted to go back to HARP to set up multi-factor authentication (MFA).</p>

        <h2 className='ds-h2' id='oauth'>Connect to EHR or reporting application</h2>
        <p className='ds-text'>Log into Developer Preview at <a href='https://preview.qpp.cms.gov'>https://preview.qpp.cms.gov</a>.</p>
        <p className='ds-text'>Locate your EHR (search by the EHR name as it appears in the <a href='https://chpl.healthit.gov/'>CHPL database</a>).</p>
        <p className='ds-text'>If you cannot locate your EHR or are a registry user, create one manually. </p>
        <p className='ds-text'>After requesting the role, it may take a few minutes to populate.</p>

        <h2 className='ds-h2' id='oauth'>Register an Application</h2>
        <p className='ds-text'>To register the application, you will need:</p>
        <ul>
          <li>Application name</li>
          <li>Application URL</li>
          <li>Logo URI</li>
          <li>Client Type</li>
          <li>Redirect URIs</li>
          <li>Terms of Service and Privacy Policy are optional for the test environment, but required for production.</li>
        </ul>
        <p className='ds-text'>In the test environment, a registered application is assigned a client ID and, if applicable, a client secret. The secret should only be used if it can be kept confidential, such as for communication between your server and the Submissions API.</p>
        <p className='ds-text'>Additional support along with a sample OAuth Client, can be found in the QPP Github at: <a href='https://github.com/CMSgov/qpp-submissions-docs/tree/master/oauth_sample'>https://github.com/CMSgov/qpp-submissions-docs/tree/master/oauth_sample</a>.</p>
        <p className='ds-text'>Registering and testing your application within the Developer Preview is required prior to being granted production OAuth access.</p>

        <h1 className='ds-h1' id='create-user'>Create test users in the Developer Preview</h1>
        <p className='ds-text'>To support Developer Preview integration and testing, we created the <a href='https://preview.qpp.cms.gov/api/data-faker/synthetic-data/docs/index.html'>Test Data Service</a>. Using this API, you can reserve specific scenarios in the Test Data Service to test granting access to their QPP authorizations and try out different special scoring scenarios. Please visit the Interactive Documentation to learn more about setting up test users in Developer Preview.</p>

        <h1 className='ds-h1' id='production-api-access'>Production API Access</h1>

        <p className='ds-text'>To submit data via OAuth and the Submissions API during the submission window, your application must be approved for production use by QPP. QPP will release more information about the production access process this fall.</p>
      </div>
    );
  }
}

export default GettingStartedUsingQppOauth2;
