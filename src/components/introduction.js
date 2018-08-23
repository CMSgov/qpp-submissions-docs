import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Easily submit and score QPP data in real-time via API</h2>
        <p className='ds-text'>The Submissions API enables submissions and real-time performance scoring of Quality Payment Program (QPP) data.</p>
        <p className='ds-text'>The Submissions API is a RESTful API. It has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. It uses standard HTTP features, like HTTPS authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.</p>
        <p className='ds-text'>The Submissions API supports cross-origin resource sharing, allowing you to interact securely with the API from a client-side web application (though you should never expose your secret API key in any public website’s client-side code).</p>
        <p className='ds-text'>API responses can be returned in JSON or XML, including errors.</p>

        <h2 className='ds-h2'>Explore and integrate with the Submissions API</h2>
        <p className='ds-text'>To make the API as explorable as possible, we have <a href='https://qpp-submissions-sandbox.navapbc.com/'>Interactive Documentation</a>, which not only documents the endpoints available but also allows you to make requests to the API and see what response you would get. The Interactive Documentation is connected to the Developer Preview, which is an integration environment for registries and QCDRs.</p>
        <p className='ds-text'>The <a href='https://cmsgov.github.io/qpp-submissions-docs/developer-preview'>Developer Preview environment</a> will be available in Fall 2018, and is open to 2018 CMS-approved Qualified Registries (“registries”) and Qualified Clinical Data Registries (“QCDRs”). Participants in the Developer Preview can build integrations with their software to test submission and scoring of Quality Payment Program performance data via API.</p>
        <p className='ds-text'>Requests made in the Interactive Documentation and Developer Preview are not officially submitted to CMS.</p>

        <h2 className='ds-h2'>Stay Up Date</h2>
        <p className='ds-text'>The <a href='https://groups.google.com/forum/#!forum/qpp-apis' target='_blank'>QPP APIs Google Group</a> is where developers and the CMS QPP Product Managers discuss your questions and feedback. New announcements and discussions are being added everyday.</p>
        <p className='ds-text'>For questions about QPP measures, scores, policy or how the program works, please contact the Quality Payment Program Service Center at <a href='QPP@cms.hhs.gov'>QPP@cms.hhs.gov</a> or 1-866-288-8292.</p>
      </div>
    );
  }
}

export default Introduction;
