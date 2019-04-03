import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Quality Payment Program Submissions API Will Close for Official Reporting April 2, 2019 at 8 PM ET</h2>
        <p className='ds-text'>Performance data for the 2018 Quality Payment Program (QPP) must be submitted prior to April 2, 2019 at 8 PM ET. After this date, 2018 Qualified Registries and Qualified Clinical Data Registries who have an API token will have limited access to specific endpoints of the Submissions API.</p>

        <h2 className='ds-h2'>API Access After the 2018 QPP Submission Window Closes</h2>
        <p className='ds-text'>After April 2, 2019, 2018 Qualified Registries and Qualified Clinical Data Registries who have an API token will not be able to access <strong>write</strong> and <strong>update</strong> endpoints in the production environment. In other words, the following endpoints, which were available during the submission window, will no longer be accessible:</p>

        <p className='ds-text'>MeasurementSets
          <ul>
            <li>POST https://qpp.cms.gov/api/submissions/submissions/measurement-sets</li>
            <li>PUT, PATCH, POST, DELETE https://qpp.cms.gov/api/submissions/submissions/measurement-sets/{'{'}id{'}'}</li>
          </ul>
        </p>
        <p className='ds-text'>Measurements
          <ul>
            <li>POST https://qpp.cms.gov/api/submissions/submissions/measurements</li>
            <li>PUT, PATCH, DELETE https://qpp.cms.gov/api/submissions/submissions/measurements/{'{'}id{'}'}</li>
          </ul>
        </p>
        <p className='ds-text'>Attempting to access any of these endpoints after April 2, 2019 at 8 PM ET will return a 401 error.</p>

        <p className='ds-text'>POST https://qpp.cms.gov/api/submissions/submissions/score-preview will still be accessible, as this data is not persisted. Please remember that this endpoint will not return a score for special scoring scenarios and is set up for 2018 PY scoring logic.</p>

        <p className='ds-text'>GET https://qpp.cms.gov/api/submissions/submissions/{'{'}id{'}'}/score will also remain accessible. Please note that this endpoint returns the score for a submission object, and does <strong>not</strong> represent the final score for a TIN/NPI.</p>
        <h2 className='ds-h2'>Easily submit and score QPP data in real-time via API</h2>
        <p className='ds-text'>The Submissions API enables submissions and real-time performance scoring of Quality Payment Program (QPP) data.</p>
        <p className='ds-text'>The Submissions API is a RESTful API. It has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. It uses standard HTTP features, like HTTPS authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.</p>
        <p className='ds-text'>The Submissions API supports cross-origin resource sharing, allowing you to interact securely with the API from a client-side web application (though you should never expose your secret API key in any public website’s client-side code).</p>
        <p className='ds-text'>API responses can be returned in JSON or XML, including errors.</p>

        <h2 className='ds-h2'>Explore and integrate with the Submissions API</h2>
        <p className='ds-text'>To make the API as explorable as possible, we have <a href='https://preview.qpp.cms.gov/api/submissions/public/docs/'>Interactive Documentation</a>, which not only documents the endpoints available but also allows you to make requests to the API and see what response you would get. The Interactive Documentation is connected to the Developer Preview, which is an integration environment for registries and QCDRs.</p>
        <p className='ds-text'>Requests made in the Interactive Documentation and Developer Preview are not officially submitted to CMS. You can learn more about the Developer Preview <a href='https://cmsgov.github.io/qpp-submissions-docs/developer-preview'>here</a></p>

        <h2 className='ds-h2'>Stay Up Date</h2>
        <p className='ds-text'>The <a href='https://groups.google.com/forum/#!forum/qpp-apis' target='_blank'>QPP APIs Google Group</a> is where developers and the CMS QPP Product Managers discuss your questions and feedback. New announcements and discussions are being added everyday.</p>
        <p className='ds-text'>For questions about QPP measures, scores, policy or how the program works, please contact the Quality Payment Program Service Center at <a href='QPP@cms.hhs.gov'>QPP@cms.hhs.gov</a> or 1-866-288-8292.</p>
      </div>
    );
  }
}

export default Introduction;
