import React from 'react';

import { ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';

const Introduction = () => {
  return (
    <>
      <h2 className='ds-h2'>Easily submit and score QPP data in real-time via API</h2>
      <p className='ds-text'>
        The Submissions API enables submissions and real-time performance scoring of Quality Payment Program (QPP) data.
      </p>
      <p className='ds-text'>
        The Submissions API is a RESTful API. It has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. It uses standard HTTP features, like HTTPS authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.
      </p>
      <p className='ds-text'>
        The Submissions API supports cross-origin resource sharing, allowing you to interact securely with the API from a client-side web application (though you should never expose your secret API key in any public website's client-side code).
      </p>
      <p className='ds-text'>
        API responses are returned in JSON, including errors.
      </p>
      <p className='ds-text'>
        The link to submit Quality data using the API in Production is: <ExternalLink href={`${envConfig.qppCmsUrl}/api/submissions`} />
      </p>
      <p className='ds-text'>
        The link to submit LVT Opt-In decisions using the Eligibility API in Production is: <ExternalLink href={`${envConfig.qppCmsUrl}/api/eligibility`} />
      </p>

      <h2 className='ds-h2'>Explore and integrate with the Submissions API</h2>
      <p className='ds-text'>
        To make the API as explorable as possible, we have <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Documentation' />, which not only documents the endpoints available but also allows you to make requests to the API and see what response you would get. The Interactive Documentation is connected to the Developer Preview, which is an integration environment.
      </p>
      <p className='ds-text'>
        The <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-submissions-docs/developer-preview`} text='Developer Preview' /> environment is a testing environment open to CMS-approved Qualified Registries ("registries"), Qualified Clinical Data Registries ("QCDRs"), and Electronic Health Record applications. Participants in the Developer Preview can build integrations with their software to test submission and scoring of Quality Payment Program performance data via the Submissions API.
      </p>
      <p className='ds-text'>
        Requests made in the Interactive Documentation and Developer Preview are not officially submitted to CMS.
      </p>

      <h2 className='ds-h2'>Stay Up Date</h2>
      <p className='ds-text'>
        The developer documentation is a living document that is constantly maintained to stay in sync with policy, technical changes, and test data changes. Additionally we update the content to provide answers to frequently asked questions.  Please refer back to this regularly to keep aware of recent changes.
      </p>
      <p className='ds-text'>
        Please bring any questions not answered by our available documentation to the monthly support calls/Virtual Office Hours, or contact the Quality Payment Program at {envConfig.phoneNumber}, Monday through Friday, 8:00 AM-8:00 PM ET or by e-mail at: <a href={`mailto:${envConfig.qppEmail}`}>{envConfig.qppEmail}</a>
      </p>
    </>
  );
};

export default Introduction;
