import React from 'react';

import { ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';

const GettingStartedUsingQppOauth = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/31/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Getting Started Using QPP OAuth</h2>
      <p className='ds-text'>
        Using OAuth with the Submissions API allows QPP participants to use their own QPP credentials to login through your application to submit their data to and view performance feedback from QPP. Before you can request production access, you will need to use the Developer Preview Environment to build, test and demo your OAuth application.
        </p>

      <h2 className='ds-h2' id='oauth'>Using OAuth in the Developer Preview</h2>
      <p className='ds-text'>
        To use the QPP Submissions API with OAuth, you must create a Developer Preview account and register the application.
      </p>
      <p className='ds-text'>
        Create an account for Developer Preview at <ExternalLink href={envConfig.qppCmsPreviewUrl} />.
      </p>

      <h3 className='ds-h3'>Connect to EHR or reporting application</h3>
      <p className='ds-text'>
        Log in to Developer Preview (<ExternalLink href={envConfig.qppCmsPreviewUrl} />).
      </p>
      <p className='ds-text'>
        Locate your EHR (search by the EHR name as it appears in the <ExternalLink href={envConfig.chplHealthItUrl} text='CHPL database' />).
      </p>
      <p className='ds-text'>
        If you cannot locate your EHR or are a registry user, create one manually.
      </p>
      <p className='ds-text'>
        After requesting the role, it may take a few minutes to populate.
      </p>

      <h3 className='ds-h3'>Register an Application</h3>
      <p className='ds-text'>
        Once you are connected, you can use the OAuth APIs directly on the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/auth/docs/#/OAuth`} text='Auth API' />. Also, Development Preview contains a UI (<ExternalLink href={`${envConfig.qppCmsPreviewUrl}/user/applications`} text='here' />) where you can create and manage your OAuth applications.
      </p>
      <p className='ds-text'>
        Registering and testing your application within the Developer Preview is required prior to being granted production OAuth access.
      </p>
      <p className='ds-text'>
        To register the application, you will need:
      </p>
      <ul>
        <li>Application name</li>
        <li>Application URL</li>
        <li>Logo URI</li>
        <li>Client Type</li>
        <li>Redirect URIs</li>
        <li>
          Terms of Service and Privacy Policy are optional for the test environment, but required for production.
        </li>
      </ul>
      <p className='ds-text'>
        In the test environment, a registered application is assigned a client ID and, if applicable, a client secret. The secret should only be used if it can be kept confidential, such as for communication between your server and the Submissions API.
      </p>
      <p className='ds-text'>
        Additional support along with a sample OAuth Client, can be found in the QPP Github at: <ExternalLink href='https://github.com/CMSgov/qpp-submissions-docs/tree/master/oauth_sample' />.
      </p>

      <h2 className='ds-h2' id='create-user'>Create test users in the Developer Preview</h2>
      <p className='ds-text'>
        To support Developer Preview integration and testing, we created the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/synthetic-data/docs/index.html`} text='Test Data Service' />. Using this API, you can reserve specific scenarios in the Test Data Service to test granting access to their QPP authorizations and try out different special scoring scenarios. Please visit the Interactive Documentation to learn more about setting up test users in Developer Preview.
      </p>

      <h2 className='ds-h2' id='production-api-access'>Production API Access</h2>
      <p className='ds-text'>
        To submit data via OAuth and the Submissions API during the submission window, your application must be approved for production use by QPP. To apply for production access, you must demonstrate your application to QPP and attest that your organization:
      </p>
      <ul>
        <li>Is a US-based company</li>
        <li>Agrees to CMS API Terms of Use</li>
        <li>Participated in the CMS QPP Submissions API Developer Preview</li>
      </ul>
      <p className='ds-text'>
        You will also be asked to provide:
      </p>
      <ul>
        <li>A company website</li>
        <li>A point of contact</li>
        <li>URL to Application Privacy or Terms of Use</li>
      </ul>
      <p className='ds-text'>
        To request production access, please email the QPP Help Desk at QPP@cms.hhs.gov to set up a demonstration with the QPP team. In order to have sufficient time to go through the approval process, requests for production access for an upcoming submission period should be made no later than November 1 prior to submissions opening.
      </p>
    </>
  );
};

export default GettingStartedUsingQppOauth;

