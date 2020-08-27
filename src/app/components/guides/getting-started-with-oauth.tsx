import React from 'react';

import { LinkToId, ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';

const GettingStartedUsingQppOauth = () => {
  return (
    <>
      <p className='ds-text'>
        Using OAuth with the Submissions API allows QPP participants to use their own QPP credentials to login through your application to submit their data to and view performance feedback from QPP.
        </p>
      <p className='ds-text'>
        To get started using OAuth:
      </p>
      <ol>
        <li>Read through the <ExternalLink href={`${envConfig.qppCmsUrl}/api/auth/docs`} text='GitHub documentation' />.</li>
        <li>Join our <ExternalLink href={envConfig.googleGroupUrl}  text='Developer Group for QPP APIs' /> to ask questions.</li>
        <li><LinkToId to='#oauth' text='Register your application' offset='120' /> in the Developer Preview</li>
        <li><LinkToId to='#create-user' text='Test Submissions API integration' offset='120' /> with test users from our Test Data Service</li>
      </ol>
      <p className='ds-text'>
        Once you've successfully completed your integration in the Developer Preview, you can request access to the production Submissions API. We will provide details on this production access process this fall.
      </p>

      <h2 className='ds-h2' id='oauth'>Using OAuth in the Developer Preview</h2>
      <p className='ds-text'>
        To use the QPP Submissions API with OAuth, you must create a Developer Preview account and register the application.
      </p>

      <h3 className='ds-h3'>Create Developer Preview Account</h3>
      <p className='ds-text'>
        You will need to create a new HARP account to use with Developer Preview.
      </p>
      <p className='ds-text'>
        The Developer Preview account is separate from your account used on the main QPP website.
      </p>
      <p className='ds-text'>
        <em>Please note: remote identity proofing will not work in Developer Preview.</em>
      </p>

      <p className='ds-text'>
        <strong>Step 1</strong>
      </p>
      <p className='ds-text'>
        Go to <ExternalLink href='https://impl.harp.qualitynet.org/register/profile-info' />.
      </p>
      <p className='ds-text'>
        On the first page of Account Registration, enter:
      </p>
      <ul>
        <li>Valid name</li>
        <li>Valid email address</li>
        <li>Valid phone number</li>
        <li>Valid home address</li>
        <li>Test social security number (000-00-0000 will work)</li>
      </ul>

      <p className='ds-text'>
        <strong>Step 2</strong>
      </p>
      <p className='ds-text'>
        On the second page of Account Registration, create:
      </p>
      <ul>
        <li>Username</li>
        <li>Password - which must be at least 12 characters and include a lowercase letter, uppercase letter, number (0-9), and symbol (!@#$%^&*)</li>
        <li>Challenge question</li>
      </ul>
      <p className='ds-text'>
        Click Next - the next page may take a minute to load.
      </p>
      <p className='ds-text'>
        You will see the error message: "We were unable to verify the information you provided. If you think you have entered the correct information" This is the expected outcome.
      </p>
      <p className='ds-text'>
        You can close the page.
      </p>

      <p className='ds-text'>
        <strong>Step 3</strong>
      </p>
      <p className='ds-text'>
        Call or email QPP Service Desk ({envConfig.phoneNumber} or <a href={`mailto:${envConfig.qppEmail}`}>{envConfig.qppEmail}</a> ).
      </p>
      <p className='ds-text'>
        Tell them you're trying to register for a Developer Preview account and give them the username you just created. The agent will verify your account and identity.
      </p>

      <p className='ds-text'>
        <strong>Step 4</strong>
      </p>
      <p className='ds-text'>
        Once you've completed this process, log in to Developer Preview at: <ExternalLink href={envConfig.qppCmsPreviewUrl} />.
      </p>
      <p className='ds-text'>
        Upon login, you'll be prompted to go back to HARP to set up multi-factor authentication (MFA).
      </p>

      <h3 className='ds-h3'>Connect to EHR or reporting application</h3>
      <p className='ds-text'>
        Log into Developer Preview at <ExternalLink href={envConfig.qppCmsPreviewUrl} />.
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
      <p className='ds-text'>
        Registering and testing your application within the Developer Preview is required prior to being granted production OAuth access.
      </p>

      <h2 className='ds-h2' id='create-user'>Create test users in the Developer Preview</h2>
      <p className='ds-text'>
        To support Developer Preview integration and testing, we created the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/data-faker/synthetic-data/docs/index.html`} text='Test Data Service' />. Using this API, you can reserve specific scenarios in the Test Data Service to test granting access to their QPP authorizations and try out different special scoring scenarios. Please visit the Interactive Documentation to learn more about setting up test users in Developer Preview.
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
        To request production access, please email the QPP Help Desk at QPP@cms.hhs.gov to set up a demonstration with the QPP team.
      </p>
    </>
  );
};

export default GettingStartedUsingQppOauth;

