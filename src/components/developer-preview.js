import React from 'react';

class DeveloperPreview extends React.Component {
  render() {
    return (
      <div>
        <p className='ds-text'>The Developer Preview allows developers to build direct integrations with other software to test programmatically submitting Quality Payment Program (QPP) performance data to CMS. The API’s functionality in the Developer Preview closely matches that of the QPP system that is in production.</p>
        <p className='ds-text'>The Submissions API base URL for the Developer Preview is: <strong>https://preview.qpp.cms.gov/api/submissions/</strong></p>

        <h2 className='ds-h2'>What 3rd party developers can do with the Submissions API</h2>
        <p className='ds-text'>Using the data exposed through the API, developers can:
          <ul>
            <li>Submit, update or delete Promoting Interoperability and Quality measures, as well as Improvement Activities.</li>
            <li>Receive feedback on whether or not you correctly formatted your data.</li>
            <li>Receive a sample score for a submission. Since sample scores only reflect measure categories submitted to date, they do not represent a guarantee of the final score, and therefore, should not be used to make business decisions.</li>
            <li>Read, update, and delete data. Developers can read, update, and delete data that they submitted.</li>
          </ul>
        </p>

        <h2 className='ds-h2'>Authentication</h2>
        <p className='ds-text'>Both the Developer Preview and the Production environments require a JSON Web Token ("API key") for authentication purposes. If you are a CMS-approved Qualified Registry or QCDR, your token is available for download on <a href='https://qpp.cms.gov/'>qpp.cms.gov</a>.</p>
        <p className='ds-text'>Anyone may continue to test the current iteration of the Developer Preview environment through our Interactive Documentation. A default API token is embedded on this website, which you may also use for testing. To retrieve this token, test any endpoint on the website and then copy it from the API's cURL response. Please keep in mind this token reflect Qualified Registry and QCDR access to the Developer Preview Submissions API endpoints.</p>
        <p className='ds-text'>OAuth is a new authentication method for the Submissions API beginning with the PY2019 submission window. To learn more about testing OAuth in the Developer Preview, please see <a href='/getting-started-with-oauth2'>Getting Started Using QPP OAuth2</a>.</p>

        <h1 className='ds-h1' id='special-scoring'>How to Test Special Scoring Scenarios</h1>
        <p className='ds-text'>A submission to the Submissions API requires a Taxpayer Identification Number (TIN) and may include a National Provider Identifier (NPI). These identifiers are used to accurately attribute the submission to a provider. A provider's profile includes information which is used to trigger special scoring scenarios.</p>
        <p className='ds-text'>In order to support the testing of special scoring scenarios, the Submissions API features a provider profile stub in the Developer Preview environment for the <code>/score-preview</code> endpoint. The provider profile stub is not applied to the <code>/score</code> endpoint.</p>
        <p className='ds-text'>In the Developer Preview, there are 23 pre-defined TINs that represent various special scoring scenarios. By using these TINs to submit data, you will be able to see how certain characteristics of a provider's profile can impact a provider's composite score.</p>
        <p className='ds-text'>For Qualified Registries and QCDRs, we recommend using the <code>/score-preview</code> endpoint to test special scoring scenarios.</p>
        <p className='ds-text'>For applications using OAuth which requires a test user for submissions, please refer to the <a href='https://preview.qpp.cms.gov/api/data-faker/synthetic-data/docs/index.html'>Test Data Service</a>.</p>

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
            <tr>
              <td>000000023</td>
              <td>Participates in a Shared Savings Plan (SSP) APM, has only primary provider relationships to the SSP APM, and participates in an Improvement Activity Study</td>
            </tr>
            <tr>
              <td>000000024</td>
              <td>Participates in a standard MIPS APM, and participates in an Improvement Activity Study</td>
            </tr>
          </tbody>
        </table>

        <h2 className='ds-h2'>Notes</h2>
        <ul>
          <li>Any data submitted in the Developer Preview will not count toward a MIPS-eligible clinician or group's final score in the Quality Payment Program.</li>
          <li>Since the Developer Preview is an integration environment for the Submissions API, it may be changed in ways that break backward compatibility and is not subject to any service-level guarantees or deprecation policy.</li>
        </ul>

        <h2 className='ds-h2'>Where to go for support</h2>
        <ul>
          <li>Send test Submissions API requests in the <a href='https://preview.qpp.cms.gov/api/submissions/public/docs/'>Interactive Documentation</a>.</li>
          <li>Register an application to test <a href='https://preview.qpp.cms.gov/'>OAuth in Developer Preview</a></li>
          <li>Contact the <a href='https://qpp.cms.gov/about/help-and-support#qpp-service-center'>QPP Service Center</a>.</li>
          <li>Post product feedback about the Developer Preview in the <a href='https://groups.google.com/forum/#!forum/qpp-apis' target='_blank' rel='noopener noreferrer'>Google Group for QPP APIs</a>.</li>
        </ul>
      </div>
    );
  }
}

export default DeveloperPreview;
