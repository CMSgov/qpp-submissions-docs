import { ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';
import { DocPageProps } from '../../../shared/types';

const GettingStartedUsingQppOauth: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 04/14/2025</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}} id='getting-started-oauth'>Getting Started Using QPP OAuth</h2>
      <p className='ds-text-body--md'>
        Using OAuth with the Submissions API allows QPP participants to use their own QPP credentials to login through your application to submit their data to and view performance feedback from QPP. Since OAuth is such a broad and complex topic, be sure your team has a good understanding of <ExternalLink href='https://www.oauth.com/' text='OAuth 2.0' /> and <ExternalLink href='https://openid.net/developers/how-connect-works/' text='OpenID Connect' /> before proceeding with your implementation. Before you can request production access, you will need to use the Developer Preview Environment to build, test, and demonstrate your application.
      </p>

      <h2 className='ds-text-heading--2xl' id='using-oauth'>Using OAuth in Developer Preview</h2>
      <p className='ds-text-body--md'>
        To use QPP APIs with OAuth, you must first create a Developer Preview account and register your application.
      </p>
      <p className='ds-text-body--md'>
        Create an account for Developer Preview by navigating to <ExternalLink href={envConfig.qppCmsPreviewUrl} /> and clicking the "Register for Developer Preview" button.
      </p>

      <h3 className='ds-text-heading--xl' id='connect-to-ehr'>Connect to EHR or reporting application</h3>
      <p className='ds-text-body--md'>
        Once you have a Developer Preview account, log into <ExternalLink href={envConfig.qppCmsPreviewUrl} /> using your Developer Preview credentials.
      </p>
      <p className='ds-text-body--md'>
        On the "Manage Access" page, click "Connect to another EHR", and then search using your organization name as it appears in the <ExternalLink href={envConfig.chplHealthItUrl} text='CHPL database' />. If you cannot locate your organization, you may create one manually.
      </p>
      <p className='ds-text-body--md'>
        Once you complete the request form, it may take a minute or so for the role to be added to your account. If you are the first person in your organization to request access, it will be granted automatically. If someone else from your organization has already connected using their Developer Preview account, they must sign in and approve your request in order for your account to receive access.
      </p>

      <h3 className='ds-text-heading--xl' id='register-app'>Register an Application</h3>
      <p className='ds-text-body--md'>
        Once you are connected, navigate to the "My Applications" page <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/user/applications`} text='here' />, and click on "Register Application". Complete the form to create your application and receive your OAuth credentials.
      </p>
      <p className='ds-text-body--md'>
        To complete the form, you will need to provide the following:
      </p>
      <ul>
        <li>Application name</li>
        <li>Application URI</li>
        <li>Logo URI</li>
        <li>Client Type ('web' or 'native')</li>
        <li>Post-login & post-logout redirect URIs</li>
        <li>Terms of Service and Privacy Policy URIs (these are optional for Developer Preview, but will be required for production)</li>
      </ul>
      <p className='ds-text-body--md'>
        Submitting the form will provide you with an OAuth client ID, and, if applicable, a client secret. If you recieve a client secret, treat it the same as you would a password: keep it confidential, and never share it publicly.
      </p>

      <h3 className='ds-text-heading--xl' id='reserve-test-data'>Reserve test data in Developer Preview</h3>
      <p className='ds-text-body--md'>
        To test with the Developer Preview environment, you must reserve some test data. Navigate to the "My Test Data" page <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/user/test-data`} text='here' /> and click on "Connect another scenario".
      </p>
      <p className='ds-text-body--md'>
        Choose whichever scenario from the gallery most closely matches your application's expected use case. You may reserve multiple scenarios, if desired. After selecting a password for your scenario's users, click on "Manage Scenario" from the "My Test Data" page to view information about the test users and organizations within the scenario.
      </p>

      <h3 className='ds-text-heading--xl' id='test-app'>Test your application in Developer Preview</h3>
      <p className='ds-text-body--md'>
        Once you have reserved some test data, test your application's functionality by signing in using the username and password of a test user from any reserved scenario.
      </p>
      <p className='ds-text-body--md'>
        QPP provides a simple OAuth-enabled application that you may use as a reference when implementing and testing your own functionality. You can find the source code here: <ExternalLink href='https://github.com/CMSgov/qpp-submissions-docs/tree/master/oauth_sample' />.
      </p>

      <h2 className='ds-text-heading--2xl' id='production-api-access'>Production API Access</h2>
      <p className='ds-text-body--md'>
        Please note: you must register and test your application within the Developer Preview environment first before applying for OAuth access in production.
      </p>
      <p className='ds-text-body--md'>
        To submit data via OAuth and the Submissions API during the submission window, your application must be approved for production use by QPP. To apply for production access, you must present a live demonstration of your application's functionality to QPP engineers and attest that your organization:
      </p>
      <ul>
        <li>Is a US-based company</li>
        <li>Agrees to the <ExternalLink href='https://cmsgov.github.io/qpp-developer-preview-docs/terms-of-service' text='CMS API Terms of Use' /></li>
        <li>Has completed testing in the QPP Developer Preview environment</li>
      </ul>
      <p className='ds-text-body--md'>
        You will also be asked to provide:
      </p>
      <ul>
        <li>A company website</li>
        <li>A point of contact</li>
        <li>URLs to your application's privacy policy and terms of use</li>
      </ul>
      <p className='ds-text-body--md'>
        To request production access, please email the QPP Service Center at QPP@cms.hhs.gov to set up a demonstration with the QPP team. In order to have sufficient time to go through the approval process, requests for production access for an upcoming submission period should be made no later than November 1 prior to submissions opening.
      </p>
    </div>
  );
};

export default GettingStartedUsingQppOauth;

