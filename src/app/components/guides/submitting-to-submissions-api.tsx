import React from 'react';

import { ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';

const SubmittingToQppSubmissionApi = () => {
  return (
    <>
      <h2 className='ds-h2'>The Submissions API enables submissions and real-time performance scoring of Quality Payment Program (QPP) data. </h2>
      <p className='ds-text'>
        The Submissions API is a RESTful API. It has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. It uses standard HTTP features, like HTTPS authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.
      </p>
      <p className='ds-text'>
        The Submissions API supports cross-origin resource sharing, allowing you to interact securely with the API from a client-side web application (though you should never expose your secret API key in any public websiteâ€™s client-side code).
      </p>
      <p className='ds-text'>API responses are returned in JSON, including errors.</p>

      <h2 className='ds-h2'>Object Types</h2>
      <ul>
        <li>
          Submissions: A submission object contains any performance data submitted on behalf of a single MIPS-eligible clinician, practice or group.
        </li>
        <li>
          Measurement sets: A measurement set object represents a set of performance data related to one specific category (Promoting Interoperability, Improvement Activities, Quality), and is tied to a submission object.
        </li>
        <li>
          Measurements: A measurement object represents one single data point related to a specific measure in a given category, and is tied to a measurement set object.
        </li>
      </ul>

      <p className='ds-text'>
        Visit the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Documentation' /> to learn more about the endpoints available in the Submissions API.
      </p>
    </>
  );
};

export default SubmittingToQppSubmissionApi;

