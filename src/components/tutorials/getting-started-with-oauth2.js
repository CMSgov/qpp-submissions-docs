import React from 'react';

class GettingStartedUsingQppOauth2 extends React.Component {
  render() {
    return (
      <div>
        <p className='ds-text'>Using OAuth with the Submissions API allows QPP participants to use their own QPP credentials to login through your application to submit their data to and view performance feedback from QPP.</p>
        <p className='ds-text'>To get started using OAuth:</p>
        <ol>
          <li>Read through the <a href='https://qpp.cms.gov/api/auth/docs/#/'>GitHub documentation</a>.</li>
          <li>Join our <a href='https://groups.google.com/forum/#!forum/qpp-apis'>Developer Group for QPP APIs</a> to ask questions.</li>
          {/* insert links to below */}
          <li>Register your application in the Developer Preview</li>
          <li>Test Submissions API integration with test users from our Test Data Service</li>
        </ol>
        <p className='ds-text'>Once you've successfully completed your integration in the Developer Preview, you can request access to the production Submissions API. We will provide details on this production access process this fall.</p>

        <h1 className='ds-h1' id='oauth'>Using OAuth in the Developer Preview</h1>
        <p className='ds-text'>To use the QPP Submissions API with OAuth, a developer must first register their application in the Developer Preview.</p>
        <p className='ds-text'>A registered application is given a client ID and a client secret for this testing environment. The secret should only be used if it can be kept confidential, such as communication between your server and the Submissions API.</p>
        <p className='ds-text'>Registering and testing your application within the Developer Preview is required prior to being granted production Submissions API access.</p>
        <p className='ds-text'>You can register your application at <a href='https://preview.qpp.cms.gov/'>https://preview.qpp.cms.gov/</a>.</p>

        <h1 className='ds-h1' id='create-user'>Create test users in the Developer Preview</h1>
        {/* Need link to datafaker swagger */}
        <p className='ds-text'>To support Developer Preview integration and testing, we created the Test Data Service. Using this API, you can reserve specific scenarios in the Test Data Service to test granting access to their QPP authorizations and try out different special scoring scenarios. Please visit the Interactive Documentation (link to data faker's swagger) to learn more about setting up test users in Developer Preview.</p>

        <h1 className='ds-h1' id='production-api-access'>Production API Access</h1>

        <p className='ds-text'>To submit data via OAuth and the Submissions API during the submission window, your application must be approved for production use by QPP. QPP will release more information about the production access process this fall.</p>
      </div>
    );
  }
}

export default GettingStartedUsingQppOauth2;
