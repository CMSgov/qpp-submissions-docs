import React from 'react';

class SubmittingToSubmissionsApi extends React.Component {
  render() {
    return (
      <div>
        <p className='ds-text'>Qualified Registries and QCDRs entities that are authorized by the Centers for Medicare & Medicaid Services (CMS) to submit Quality Measures, Promoting Interoperability Measures, and/or Improvement Activities on behalf of MIPS eligible clinicians, groups, and/or virtual groups for a specified performance year can submit directly to the Submissions API using an API token.</p>
        <p className='ds-text'>Tokens are specific to your organization and are specific to the environment within the Submissions API. Developer Preview tokens are for testing against the Submissions API in the Developer Preview environment. Production token are for submitting during the specific performance year's submissions window to the production environment of the Submissions API.</p>
        <p className='ds-text'>If you are a Registry or QCDR using the Developer Preview, you have an API key that is associated with an 'organization'. This affects what endpoints you are authorized to use, and what behavior each endpoint has. </p>
        <p className='ds-text'>At a high level, your API key allows you to create and edit data using the <code>/measurement-sets</code> and <code>/measurements</code> endpoints. You cannot create data using the <code>/submissions</code> endpoint. For more information about what you're authorized to do with the Submissions API, click <a href='/qpp-submissions-docs/developer-preview#authorization'>here</a>.</p>

        <h1 className='ds-h1' id='authentication'>Authentication</h1>
        <p className='ds-text'>You must authenticate your account when using the Submissions API. Authenticate via bearer auth by adding your API token to the header of every request using the key value: <strong>Authorization: Bearer [YOUR API TOKEN]</strong>.</p>
        <p className='ds-text'>API keys carry many privileges, and must not be shared in publicly accessible areas such as GitHub and in client-side code.  Even within organizations, access must be limited to staff embedding it in software.</p>
        <p className='ds-text'>Your API key carries many privileges, so be sure to keep it secret! Do not share your secret API key in publicly accessible areas such GitHub, client-side code, and so forth.</p>
        <p className='ds-text'>All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests in the Developer Preview without authentication will also fail.</p>
        <p className='ds-text'>For instructions on how to get an API token, click <a href='/qpp-submissions-docs/developer-preview#api-key'>here</a>.</p>
        <h1 className='ds-h1' id='Authorization'>Authorization</h1>
        <p className='ds-text'>If you are a current Qualified Registry or QCDR using the Submissions API, you have an API key that is associated with an 'organization'. This affects what endpoints you are authorized to use, and what behavior each endpoint has.</p>
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
                <td>
                    <p>Returns all submissions that you have submitted measurement sets for, and within those submissions, returns only the measurement sets that you have  submitted. If <code>qpp-taxpayer-identification-number</code> is specified in the header as a query parameter, and you haven't submitted any measurement sets for the specified TIN, this endpoint returns a submission object with an empty measurement sets array.</p>
                    <p>A Registry token is allowed to see only the measurementSets and measurements that were submitted by that Registry.  A Registry token cannot see quality data submitted through other submissionMethods.</p>
                </td>
            </tr>
            <tr>
              <td>/submissions/:id</td>
              <td>GET</td>
              <td>If you have submitted a measurement set for this id, then this endpoint returns only the measurement sets that you've submitted for that id. If you have not submitted a measurement set for the id specified, this endpoint returns a submission object with an empty measurement sets array. If id doesn't exist, this endpoint returns '404 Not Found'.</td>
            </tr>
            <tr>
              <td>/submissions</td>
              <td>POST</td>
              <td>Returns '401 Unauthorized'.  Registry tokens are NOT allowed to do a POST /submission, as there are other users, as well as external systems, that POST /measurement-sets data for an entity which would cause the submission object to already be created for a TIN, TIN+NPI, or an entity.  Once a submission object is created for an entity a POST /submissions request would result in a duplicate entry error.  A submission object contains all of the submission data for an entity from all submissionMethods for a given Performance Year.</td>
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

        <h1 className='ds-h1'>Retrieve your API tokens</h1>
        <p className='ds-text'>To retrieve your Developer Preview and production tokens, you must have a HARP account that has a Security Official role for your Qualified Registry or QCDR. Using these credentials, you can access these tokens on <a href='https://qpp.cms.gov/'>qpp.cms.gov</a>.</p>

      </div>
    );
  }
}

export default SubmittingToSubmissionsApi;
