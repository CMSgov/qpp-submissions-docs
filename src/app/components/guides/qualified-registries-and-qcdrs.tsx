import React from 'react';

import { LinkToId, ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';

const tableData = [
  {
    endPoint: '/submissions',
    method: 'GET',
    description: `<p>Returns all submissions that you have submitted measurement sets for, and within those submissions, returns only the measurement sets that you have  submitted. If <code>qpp-taxpayer-identification-number</code> is specified in the header as a query parameter, and you haven't submitted any measurement sets for the specified TIN, this endpoint returns a submission object with an empty measurement sets array.</p><p>A Registry token is allowed to see only the measurementSets and measurements that were submitted by that Registry.  A Registry token cannot see quality data submitted through other submissionMethods.</p>`,
  },
  {
    endPoint: '/submissions/:id',
    method: 'GET',
    description: `Returns '401 Unauthorized'.  Registry tokens are NOT allowed to do a POST /submission, as there are other users, as well as external systems, that POST /measurement-sets data for an entity which would cause the submission object to already be created for a TIN, TIN+NPI, or an entity.  Once a submission object is created for an entity a POST /submissions request would result in a duplicate entry error.  A submission object contains all of the submission data for an entity from all submissionMethods for a given Performance Year.`,
  },
  {
    endPoint: '/measurement-sets',
    method: 'GET',
    description: 'Returns all measurement sets that you have submitted.',
  },
  {
    endPoint: '/measurement-sets/:id',
    method: 'GET',
    description: `Returns measurement set if id belongs to you, otherwise '404 Not Found'.`,
  },
  {
    endPoint: '/measurement-sets',
    method: 'POST',
    description: 'This endpoint allows to create a measurement set. The API will find/create the matching submission.',
  },
  {
    endPoint: '/measurement-sets/:id',
    method: 'PUT',
    description: `This endpoint allows you to update measurement sets you have submitted (full replacement). Returns '404 Not Found' if id doesn't belong to you. If id is invalid or if id was not found.`,
  },
  {
    endPoint: '/measurement-sets/:id',
    method: 'PATCH',
    description: `This endpoint allows you to update measurement sets you have submitted (only replaces fields submitted). Returns '404 Not Found' if id doesn't belong to you or if id was not found.`,
  },
  {
    endPoint: '/measurement-sets/:id',
    method: 'DELETE',
    description: `This endpoint allows you to delete measurement sets you have submitted. Returns '404 Not Found' if id doesn't belong to you or if id was not found.`,
  },
  {
    endPoint: '/measurements',
    method: '',
    description: `Same as <code>/measurement-sets</code>`,
  },
];

const QualifiedRegistriesAndQcdrs = () => {
  return (
    <>
      <p className='ds-text'>
        Qualified Registries and QCDRs entities that are authorized by the Centers for Medicare &amp; Medicaid Services (CMS) to submit Quality Measures, Promoting Interoperability Measures, and/or Improvement Activities on behalf of MIPS eligible clinicians, groups, and/or virtual groups for a specified performance year can submit directly to the Submissions API using an API token.
      </p>
      <p className='ds-text'>
        Tokens are specific to your organization and are specific to the environment within the Submissions API. Developer Preview tokens are for testing against the Submissions API in the Developer Preview environment. Production token are for submitting during the specific performance year's submissions window to the production environment of the Submissions API.
      </p>
      <p className='ds-text'>
        If you are a Registry or QCDR using the Developer Preview, you have an API key that is associated with an 'organization'. This affects what endpoints you are authorized to use, and what behavior each endpoint has.
      </p>
      <p className='ds-text'>
        At a high level, your API key allows you to create and edit data using the <code>/measurement-sets</code> and <code>/measurements</code> endpoints. You cannot create data using the <code>/submissions</code> endpoint. For more information about what you're authorized to do with the Submissions API, click <LinkToId to='developer-preview#authorization' text='here' offset='130' />.
      </p>

      <h2 className='ds-h2' id='authentication'>Authentication</h2>
      <p className='ds-text'>
        You must authenticate your account when using the Submissions API. Authenticate via bearer auth by adding your API token to the header of every request using the key value: <strong>Authorization: Bearer [YOUR API TOKEN]</strong>.
      </p>
      <p className='ds-text'>
        API keys carry many privileges, and must not be shared in publicly accessible areas such as GitHub and in client-side code.  Even within organizations, access must be limited to staff embedding it in software.
      </p>
      <p className='ds-text'>
        Your API key carries many privileges, so be sure to keep it secret! Do not share your secret API key in publicly accessible areas such GitHub, client-side code, and so forth.
      </p>
      <p className='ds-text'>
        All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests in the Developer Preview without authentication will also fail.
      </p>
      <p className='ds-text'>
        For instructions on how to get an API token, click <LinkToId to='developer-preview#api-key' text='here' offset='130' />.
      </p>

      <h2 className='ds-h2' id='authorization'>Authorization</h2>
      <p className='ds-text'>
        If you are a current Qualified Registry or QCDR using the Submissions API, you have an API key that is associated with an 'organization'. This affects what endpoints you are authorized to use, and what behavior each endpoint has.
      </p>
      <p className='ds-text'>
        In general, if you have an organization-type API key, you can:
      </p>
      <ul>
        <li>Submit data for any TIN without any prior certification</li>
        <li>Edit data that you have submitted</li>
        <li>View scores based on data you've submitted</li>
      </ul>

      <p className='ds-text'>
        Below is a comprehensive list of how each endpoint behaves if you are using an organization-type API key:
      </p>
      <table className='ds-c-table ds-c-table--borderless ds-u-font-size--small'>
        <thead>
          <tr>
            {['Endpoint', 'HTTP Method', 'Description'].map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ endPoint, method, description }, i) =>
            <tr key={i}>
              <td><code>{endPoint}</code></td>
              <td>{method}</td>
              {envConfig.htmlRegex.test(description)
                ? <td dangerouslySetInnerHTML={{ __html: description }} />
                : <td>{description}</td>
              }
            </tr>,
          )}
        </tbody>
      </table>

      <h2 className='ds-h2'>Retrieve your API tokens</h2>
      <p className='ds-text'>
        To retrieve your Developer Preview and production tokens, you must have a HARP account that has a Security Official role for your Qualified Registry or QCDR. Using these credentials, you can access these tokens on <ExternalLink href={envConfig.qppCmsUrl} />.
      </p>
    </>
  );
};

export default QualifiedRegistriesAndQcdrs;

