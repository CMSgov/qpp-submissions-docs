import React from 'react';

class DeveloperPreview extends React.Component {
  render() {
    return (
      <div>
        <h1 className='ds-h1'>Developer Preview</h1>
        <ul>
          <li><a href='#overview'>Overview</a></li>
          <li><a href='#api-key'>Get an API Key</a></li>
          <li><a href='#authentication'>Authentication</a></li>
          <li><a href='#authorization'>Authorization</a></li>
          <li><a href='#endpoints'>Endpoints</a></li>
          <li><a href='#special-scoring'>How to Test Special Scoring Scenarios</a></li>
        </ul>

        <h1 className='ds-h1' id='overview'>Overview</h1>
        <p className='ds-text'>The Developer Preview allows developers to build direct integrations with other software to test programmatically submitting Quality Payment Program (QPP) performance data to CMS. The API’s functionality in the Developer Preview closely matches that of the QPP system that is in production.</p>
        <p className='ds-text'>The base URL for the Developer Preview is: https://preview.qpp.cms.gov/api/submissions/</p>

        <h2 className='ds-h2'>What 3rd party developers can do with the Submissions API</h2>
        <p className='ds-text'>Using the data exposed through the API, developers can:
          <ul>
            <li>Submit, update or delete Promoting Interoperability and Quality measures, as well as Improvement Activities.</li>
            <li>Receive feedback on whether or not you correctly formatted your data.</li>
            <li>Receive a sample score for a submission. Since sample scores only reflect measure categories submitted to date, they do not represent a guarantee of the final score, and therefore, should not be used to make business decisions. Additionally, as a 3rd party developer, you can only view scores based on data you have submitted.</li>
            <li>Read, update, and delete data. Developers can read, update, and delete data that they submitted. Qualified Registries and Qualified Clinical Data Registries that are CMS-approved for the current performance year can create measurement sets and add them to any submission object.</li>
          </ul>
        </p>

        <h2 className='ds-h2'>Object Types</h2>
        <p className='ds-text'>The Submissions API has three types of objects:
          <ul>
            <li><strong>Submissions</strong>: A submission object contains any performance data submitted on behalf of a single MIPS-eligible clinician, practice or group.</li>
            <li><strong>Measurement sets</strong>: A measurement set object represents a set of performance data related to one specific category (Promoting Interoperability, Improvement Activities, Quality), and is tied to a submission object.</li>
            <li><strong>Measurements</strong>: A measurement object represents one single data point related to a specific measure in a given category, and is tied to a measurement set object.</li>
          </ul>
        </p>

        <h2 className='ds-h2'>Authentication</h2>
        <p className='ds-text'>Both the Developer Preview and the Production environments require a JSON Web Token ("API key") for authentication purposes.</p>

        <a className='ds-c-button ds-c-button--primary' href='/qpp-submissions-docs/developer-preview#api-key'>Get an API Key</a>

        <h2 className='ds-h2'>Notes</h2>
        <ul>
          <li>Any data submitted in the Developer Preview will not count toward a MIPS-eligible clinician or group's final score in the Quality Payment Program.</li>
          <li>Since the Developer Preview is an integration environment for the Submissions API, it may be changed in ways that break backward compatibility and is not subject to any service-level guarantees or deprecation policy.</li>
        </ul>

        <h2 className='ds-h2'>Where to go for support</h2>
        <ul>
          <li>Send test API requests in the <a href='https://qpp-submissions-sandbox.navapbc.com/'>Interactive Documentation</a> using your Developer Preview API key.</li>
          <li>Contact the QPP Service Center.</li>
          <li>Post product feedback about the Developer Preview in the <a href='https://groups.google.com/forum/#!forum/qpp-apis'>Google Group for QPP APIs</a>.</li>
        </ul>

        <h1 className='ds-h1' id='api-key'>Get an API Key</h1>
        <p className='ds-text'>To make requests in the Developer Preview, you must be a 2018 CMS-approved Qualified Registry (“registry”) or Qualified Clinical Data Registry (“QCDR”).</p>
        <p className='ds-text'>Most of the API endpoints require basic authentication, meaning that you must send an API key with your request to receive a response. To get an API key, follow the steps below.</p>

        <ol className='ds-text'>
          <li className='ds-h2'>Create an EIDM account</li>
          <p>If you do not have an EIDM account, navigate to the <a href='http://links.govdelivery.com/track?type=click&enid=ZWFzPTEmbXNpZD0mYXVpZD0mbWFpbGluZ2lkPTIwMTgwNzEwLjkyMzYwOTAxJm1lc3NhZ2VpZD1NREItUFJELUJVTC0yMDE4MDcxMC45MjM2MDkwMSZkYXRhYmFzZWlkPTEwMDEmc2VyaWFsPTE4MzQ5MTg1JmVtYWlsaWQ9aXZhbmFAbmF2YWhxLmNvbSZ1c2VyaWQ9aXZhbmFAbmF2YWhxLmNvbSZ0YXJnZXRpZD0mZmw9JmV4dHJhPU11bHRpdmFyaWF0ZUlkPSYmJg==&&&102&&&https://portal.cms.gov/wps/portal/unauthportal/home/'>CMS Enterprise Portal</a> and select ‘New User Registration’ to create one. The following information is required for registration:</p>
          <ul>
            <li>Application Name</li>
            <li>Application Role</li>
            <li>Organization Legal Business Name, Address, and Phone Number</li>
            <li>Taxpayer Identification Number (TIN) and corresponding individual Provider Transaction Access Number (PTAN)</li>
          </ul>
          <p>Your organization or CMS can help you identify the information needed for your application.</p>
          <p>Once you complete your EIDM account registration, you will receive an e-mail acknowledging your successful account creation with your EIDM User ID. Use your unique EIDM User ID and Password to login to the <a href='https://qpp.cms.gov/login'>Quality Payment Program Portal</a>.</p>

          <li className='ds-h2'>Confirm that your account is associated with your registry.</li>
          <p>Login to the <a href='https://qpp.cms.gov/login'>Quality Payment Program Portal</a>, and ensure that you can view the Registry Dashboard.</p>

          <li className='ds-h2'>Retrieve your API keys.</li>
          <p>Send a request to the following endpoints:</p>
          <ul>
            <li>https://preview.qpp.cms.gov/api/auth/authn - to authenticate</li>
            <li>https://preview.qpp.cms.gov/api/auth/verify - to verify your multi-factor authentication</li>
            <li>https://preview.qpp.cms.gov/api/auth/registries - to retrieve your API key(s)</li>
          </ul>
          <p>The response payload from https://preview.qpp.cms.gov/api/auth/registries will contain your API key(s). If your QPP/EIDM username has the Security Official role for more than one organization, this endpoint will return an API key for each of those organizations.</p>
        </ol>

        <h2 className='ds-h2'>Resources</h2>
        <ul>
          <li>Review the <a href='https://www.cms.gov/Medicare/Quality-Payment-Program/Resource-Library/Enterprise-Identity-Data-Management-EIDM-User-Guide.pdf'>EIDM User Guide</a></li>
          <li>Contact the Quality Payment Program at QPP@cms.hhs.gov or 1-866-288-8292/TTY: 1-877-715-6222.</li>
        </ul>

        <h1 className='ds-h1' id='authentication'>Authentication</h1>
        <p className='ds-text'>You must authenticate your account when using the <a href='https://cmsgov.github.io/qpp-submissions-docs/developer-preview'>Developer Preview</a> (base url: https://preview.qpp.cms.gov/api/submissions/). Authenticate via bearer auth by adding your API token to the header of every request using the key value: <strong>Authorization: Bearer [YOUR API TOKEN]</strong>.</p>
        <p className='ds-text'>API keys carry many privileges, and must not be shared in publicly accessible areas such as GitHub and in client-side code.  Even within organizations, access must be limited to staff embedding it in software.</p>
        <p className='ds-text'>Your API key carries many privileges, so be sure to keep it secret! Do not share your secret API key in publicly accessible areas such GitHub, client-side code, and so forth.</p>
        <p className='ds-text'>All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests in the Developer Preview without authentication will also fail.</p>
        <p className='ds-text'>For instructions on how to get an API token, click <a href='/qpp-submissions-docs/developer-preview#api-key'>here</a>.</p>

        <h1 className='ds-h1' id='Authorization'>Authorization</h1>
        <p className='ds-text'>If you are a Registry or QCDR using the Developer Preview, you have an API key that is associated with an 'organization'. This affects what endpoints you are authorized to use, and what behavior each endpoint has.</p>
        <p className='ds-text'>In general, if you have an organization-type API key, you can:</p>
        <ul>
          <li>Submit data for any TIN without any prior certification</li>
          <li>Edit data that you have submitted</li>
          <li>View scores based on data you've submitted</li>
        </ul>
        <p className='ds-text'>Below is a comprehensive list of how each endpoint behaves if you are using an organization-type API key:</p>
        <table className='ds-c-table ds-c-table--borderless ds-u-font-size--small'>
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>HTTP Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/submissions</td>
              <td>GET</td>
              <td>Returns all submissions that you have submitted measurement sets for, and within those submissions, returns only the measurement sets that you have  submitted. If qpp-taxpayer-identification-number is specified in the header as a query parameter, and you haven't submitted any measurement sets for the specified TIN, this endpoint returns a submission object with an empty measurement sets array.</td>
            </tr>
            <tr>
              <td>/submissions/:id</td>
              <td>GET</td>
              <td>If you have submitted a measurement set for this id, then this endpoint returns only the measurement sets that you've submitted for that id. If you have not submitted a measurement set for the id specified, this endpoint returns a submission object with an empty measurement sets array. If id doesn't exist, this endpoint returns '404 Not Found'.</td>
            </tr>
            <tr>
              <td>/submissions</td>
              <td>POST</td>
              <td>Returns '401 Unauthorized'.</td>
            </tr>
            <tr>
              <td>/measurement-sets</td>
              <td>GET</td>
              <td>Returns all measurement sets that you have submitted.</td>
            </tr>
            <tr>
              <td>/measurement-sets/:id</td>
              <td>GET</td>
              <td>Returns measurement set if id belongs to you, otherwise '404 Not Found'.</td>
            </tr>
            <tr>
              <td>/measurement-sets</td>
              <td>POST</td>
              <td>This endpoint allows to create a measurement set. The API will find/create the matching submission.</td>
            </tr>
            <tr>
              <td>/measurement-sets/:id</td>
              <td>PUT</td>
              <td>This endpoint allows you to update measurement sets you have submitted (full replacement). Returns '404 Not Found' if id doesn't belong to you. If id is invalid or if id was not found.</td>
            </tr>
            <tr>
              <td>/measurement-sets/:id</td>
              <td>PATCH</td>
              <td>This endpoint allows you to update measurement sets you have submitted (only replaces fields submitted). Returns '404 Not Found' if id doesn't belong to you or if id was not found.</td>
            </tr>
            <tr>
              <td>/measurement-sets/:id</td>
              <td>DELETE</td>
              <td>This endpoint allows you to delete measurement sets you have submitted. Returns '404 Not Found' if id doesn't belong to you or if id was not found.</td>
            </tr>
            <tr>
              <td>/measurements</td>
              <td />
              <td>Same as /measurement-sets</td>
            </tr>
          </tbody>
        </table>

        <h1 className='ds-h1' id='endpoints'>Endpoints</h1>
        <p className='ds-text'>Visit the <a href='https://qpp-submissions-sandbox.navapbc.com/#!'>Interactive Documentation</a> to learn more about the endpoints available in the Submissions API.</p>
        <p className='ds-text'>If you are a Registry or QCDR using the Developer Preview, you have an API key that is associated with an 'organization'. This affects what endpoints you are authorized to use, and what behavior each endpoint has.</p>
        <p className='ds-text'>At a high level, your API key allows you to create and edit data using the <code>/measurement-sets</code> and <code>/measurements</code> endpoints. You cannot create data using the <code>/submissions</code> endpoint. For more information about what you're authorized to do with the Submissions API, click <a href='/qpp-submissions-docs/developer-preview#authorization'>here</a>.</p>

        <h1 className='ds-h1' id='special-scoring'>How to Test Special Scoring Scenarios</h1>
        <p className='ds-text'>A submission to the Submissions API requires a Taxpayer Identification Number (TIN) and may include a National Provider Identifier (NPI). These identifiers are used to accurately attribute the submission to a provider. A provider's profile includes information which is used to trigger special scoring scenarios.</p>
        <p className='ds-text'>Currently, no special scoring scenarios are applied in the production environment. Every submission is attributed with the default provider profile, which incurs no special scoring.</p>
        <p className='ds-text'>In order to support the testing of special scoring scenarios, the Submissions API features a provider profile stub in the Developer Preview environment for the /score-preview endpoint. The provider profile stub is not applied to the /score endpoint.</p>
        <p className='ds-text'>In the Developer Preview, there are 23 pre-defined TINs that represent various special scoring scenarios. By using these TINs to submit data, you will be able to see how certain characteristics of a provider's profile can impact a provider's composite score.</p>

        <table className='ds-c-table ds-c-table--borderless ds-u-font-size--small'>
          <thead>
            <tr>
              <th>Taxpayer Identification Number</th>
              <th>Scenario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>000000001</td>
              <td>Participates in a Shared Savings Plan (SSP) APM, and has both primary and secondary provider relationships to the SSP APM</td>
            </tr>
            <tr>
              <td>000000002</td>
              <td>Does not participate in an APM</td>
            </tr>
            <tr>
              <td>000000003</td>
              <td>Participates in a Shared Savings Plan (SSP) APM, and has only primary provider relationships to the SSP APM</td>
            </tr>
            <tr>
              <td>000000004</td>
              <td>Participates in a NextGen APM, and has both primary and secondary provider relationships to the NextGen APM</td>
            </tr>
            <tr>
              <td>000000005</td>
              <td>Does not participate in an APM</td>
            </tr>
            <tr>
              <td>000000006</td>
              <td>Is a small practice</td>
            </tr>
            <tr>
              <td>000000007</td>
              <td>Is a non-patient facing practice</td>
            </tr>
            <tr>
              <td>000000008</td>
              <td>Is a rural practice</td>
            </tr>
            <tr>
              <td>000000009</td>
              <td>Is in a Health Professional Shortage Area (HPSA)</td>
            </tr>
            <tr>
              <td>000000010</td>
              <td>Is affected by the Extreme and Uncontrollable Circumstances Policy</td>
            </tr>
            <tr>
              <td>000000011</td>
              <td>Has hospital-based MIPS-eligible clinicians</td>
            </tr>
            <tr>
              <td>000000012</td>
              <td>Participates in an Improvement Activity Study</td>
            </tr>
            <tr>
              <td>000000013</td>
              <td>Has ambulatory surgical center (ASC)-based MIPS-eligible clinicians</td>
            </tr>
            <tr>
              <td>000000014</td>
              <td>Has MIPS-eligible clinicians whose specialty is eligible for ACI reweighting</td>
            </tr>
            <tr>
              <td>000000015</td>
              <td>Is eligible for ACI reweighting</td>
            </tr>
            <tr>
              <td>000000016</td>
              <td>Qualifies for Promoting Interoperability hardship exception</td>
            </tr>
            <tr>
              <td>000000017</td>
              <td>Is a small practice, and qualifies for Promoting Interoperability hardship exception</td>
            </tr>
            <tr>
              <td>000000018</td>
              <td>Is a non-patient-facing practice, and qualifies for Promoting Interoperability hardship exception</td>
            </tr>
            <tr>
              <td>000000019</td>
              <td>Has hospital-based MIPS-eligible clinicians, and qualifies for Promoting Interoperability hardship exception</td>
            </tr>
            <tr>
              <td>000000020</td>
              <td>Participates in a standard MIPS APM</td>
            </tr>
            <tr>
              <td>000000021</td>
              <td>Participates in a Comprehensive End Stage Renal Disease Care APM</td>
            </tr>
            <tr>
              <td>000000022</td>
              <td>Participates in an Oncology Care Model APM</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeveloperPreview;
