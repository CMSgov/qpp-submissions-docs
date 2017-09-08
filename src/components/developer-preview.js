import React from 'react';
import 'uswds/dist/js/uswds.js';

import '@cmsgov/design-system-core/dist/index.css';
import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

import SubmissionsObjects from './submissions-objects';

export default class DeveloperPreview extends React.Component {
  render() {
    return (
      <div>
        <h1 className='ds-h1'>Developer Preview</h1>
        <h3 className='ds-h3'>July 25, 2017 - November 1, 2017</h3>
        <p className='ds-text'>CMS is inviting Developers to provide feedback on the new Submissions API for the purpose of improved development. During this three-month period, participants in the Developer Preview can build integrations and test submitting Quality Payment Program (QPP) performance data to CMS via API. </p>
        <p className='ds-text'>The API’s functionality in the Developer Preview closely matches that which will be put into production on January 1, 2018 when the Submissions window opens for QPP Year 1 (2017) reporting.</p>

        <h2 className='ds-h2'>Step 1: Get an API Token</h2>
        <p className='ds-text'>Email <a href='mailto:QPP@cms.hhs.gov?subject=Request%20API%20Key%20for%20Submissions%20API%20Developer%20Preview'>QPP@cms.hhs.gov</a> to request your API Token for the Developer Preview.</p>
        <p className='ds-text'>CMS will verify that the requestor’s organization is a 2017 Qualified Registry or QCDR (additional partners such as EHR vendors may soon qualify) and contact you with your API Token. </p>
        <p className='ds-text'>Please note: API Tokens expire at the end of the Developer Preview period, at which time new API Tokens will become available through an automated, self-service process.</p>

        <h2 className='ds-h2'>Step 2: Explore the API</h2>
        <p className='ds-text'>For a comprehensive list of endpoints and documentation on how to format your requests, play around with the <a href='https://qpp-submissions-sandbox.navapbc.com/'>Interactive Docs</a> using your own data.</p>
        <SubmissionsObjects />

        <p className='ds-text'>Walk through how to create a new submission, submit measures and receive real-time scoring in the below tutorial.</p>
        <a className='ds-c-button ds-c-button--primary' href='/qpp-submissions-docs/tutorial'>Start the tutorial</a>

        <h2 className='ds-h2'>Step 3: Make your first API call</h2>
        <p className='ds-text'>Base URL: <b><code>https://qpp.cms.gov/api/submissions</code></b></p>
        <p className='ds-text'>Add your API Token to the header of every API request using the key value: <code>Authorization: Bearer [YOUR API TOKEN]</code>. </p>
        <p className='ds-text'>
          Check out the video below to help you get started:
        </p>
        <p className='ds-text'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/702HKMoYqI0?rel=0" frameborder="0" allowfullscreen></iframe>
        </p>
        <p className='ds-text'>
          Today, Developers are using the Submission API to:
        </p>
        <ul>
          <li>Submit, update or delete Advancing Care Information, Improvement Activities and Quality measures data</li>
          <li>Receive feedback on whether or not you correctly formatted your submission</li>
          <li>Receive a <b>sample</b> score for a submission. Since sample scores only reflect measure categories submitted to date, they do not represent a guarantee of the final score, and therefore, should not be used to make business decisions. Additionally, in the current version, third party vendors can only view scores based on data they submitted.</li>
          <li>Read, update, and delete submissions. Developers can read, update, and delete data that the developer submitted. However, only a MIPS-eligible doctor or practice can edit a submission object for their own performance data. Organizations, such as Qualified Registries and Qualified Clinical Data Registries, can create measurement sets and add them to any submission object.</li>
        </ul>

        <h2 className='ds-h2'>Step 4: Ask Questions and Give Feedback</h2>
        <p className='ds-text'>
          The QPP Developer Community is where fellow Developers and the CMS QPP Product Managers discuss your questions and feedback.  New discussions are being added everyday.
        </p>
        <a className='ds-c-button ds-c-button--primary' href='https://groups.google.com/forum/#!forum/qpp-apis'>Join the Community</a>

        <h2 className='ds-h2'>Additional Notes about the Developer Preview</h2>
        <ul>
          <li>You can submit 200 requests per second per IP address over a 5 second window.</li>
          <li>All data submitted to the Submissions API Developer Preview will be discarded at the end of the Developer Preview and will not count toward a MIPS-eligible clinician or group's final score in Quality Payment Program Year 1 (2017).</li>
          <li>Since this is a preview release of the Submissions API, it may be changed in ways that break backward compatibility and is not subject to any service level guarantees or deprecation policy.</li>
        </ul>

        <p className='ds-text'>Return to the <a href='https://qpp.cms.gov/resources/developers'>QPP Developer Tools</a>.</p>
      </div>
    );
  }
}
