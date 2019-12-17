import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Easily submit and score QPP data in real-time via API</h2>
        <p className='ds-text'>The Submissions API enables submissions and real-time performance scoring of Quality Payment Program (QPP) data.</p>
        <p className='ds-text'>The Submissions API is a RESTful API. It has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. It uses standard HTTP features, like HTTPS authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.</p>
        <p className='ds-text'>The Submissions API supports cross-origin resource sharing, allowing you to interact securely with the API from a client-side web application (though you should never expose your secret API key in any public website’s client-side code).</p>
        <p className='ds-text'>API responses are returned in JSON, including errors.</p>

        <h2 className='ds-h2'>Explore and integrate with the Submissions API</h2>
        <p className='ds-text'>To make the API as explorable as possible, we have <a href='https://preview.qpp.cms.gov/api/submissions/public/docs/'>Interactive Documentation</a>, which not only documents the endpoints available but also allows you to make requests to the API and see what response you would get. The Interactive Documentation is connected to the Developer Preview, which is an integration environment.</p>
        <p className='ds-text'>The <a href='https://cmsgov.github.io/qpp-submissions-docs/developer-preview'>Developer Preview</a> environment is a testing environment open to CMS-approved Qualified Registries (“registries”), Qualified Clinical Data Registries (“QCDRs”), and Electronic Health Record applications. Participants in the Developer Preview can build integrations with their software to test submission and scoring of Quality Payment Program performance data via the Submissions API.</p>
        <p className='ds-text'>Requests made in the Interactive Documentation and Developer Preview are not officially submitted to CMS.</p>

        <h2 className='ds-h2'>Stay Up Date</h2>
        <p className='ds-text'>The <a href='https://groups.google.com/forum/#!forum/qpp-apis' target='_blank' rel='noopener noreferrer'>QPP APIs Google Group</a> is where developers and the CMS QPP Product Managers discuss your questions and feedback. New announcements and discussions are being added everyday.</p>
        <p className='ds-text'>For questions about QPP measures, scores, policy or how the program works, please contact the Quality Payment Program Service Center at <a href='QPP@cms.hhs.gov'>QPP@cms.hhs.gov</a> or 1-866-288-8292.</p>
      </div>
    );
  }
}

export default Introduction;
