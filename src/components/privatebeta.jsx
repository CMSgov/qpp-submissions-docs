import React from 'react';
import url from 'url';
import '../../node_modules/uswds/dist/js/uswds.js';

import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

export default class Beta extends React.PureComponent {
  render() {
    return (
        <div className="ds-u-measure--wide">
          <h1 className="ds-h1">Submissions API Private Beta</h1>
          <p className="ds-text--lead">Learn more about how to participate in the private beta, what you can do with your unique API key, and what functionality is available in the private beta.</p>

          <h2 className="ds-h2">What you can do with the private beta Submissions API</h2>
          <p class="ds-text">Build direct integrations with other software to test programmatically submitting QPP performance data to CMS. Using the data we expose through the API, you can:
          <ul>
            <li>Submit, update or delete ACI, IA and quality measures data</li>
            <li>Receive feedback on the content and accuracy of a submission</li>
            <li>Receive the preliminary score for a submission, based on the finalized policy</li>
          </ul>
          </p>
          <p class="ds-text">The private beta is different from the public sandbox in that it is authenticated and accepts personally identifiable information (e.g. Taxpayer Identification Numbers). This mirrors the general availability Submissions API, which will be released in mid-December, so that integrators can better prepare to integrate with the Submissions API for official usage.</p>

          <h2 className="ds-h2">Authentication</h2>
          <p class="ds-text">Authenticate your account when using the API by including your secret API key in the header of every request to the API using the key value pair: <code>"Authentication":"Bearer [YOUR API TOKEN]"</code>.</p>
          <p class="ds-text">Learn more about requesting an API key below. Your API key carries many privileges, so be sure to keep it secret! Do not share your API key in publicly accessible areas such as GitHub, client-side code, and so forth. Within your organization, limit access to only the staff person/s who will embed it in your software.</p>
          <p class="ds-text">API requests without authentication will fail.</p>

          <h2 className="ds-h2">Permissions</h2>
          <p class="ds-text">The Submissions API has three types of objects: 
            <ul>
            <li>submissions</li>
            <li>measurement sets</li>
            <li>measurements</li>
            </ul>
          </p>
          
          <p class="ds-text">A submission object contains any performance data submitted on behalf of a single MIPS-eligible clinician, practice or group. A measurement set object represents a set of performance data related to one specific category (Quality, Improvement Activities, or Advancing Care Information), and is tied to a submission object. A measurement object represents one single data point related to a specific measure in a given category, and is tied to a measurement set object.</p>

          <h2 className="ds-h2">Creating, reading, updating and deleting data</h2>
          <p class="ds-text">In general, you can read, update and delete data that you yourself have submitted, regardless of whether you are a clinician/practice or an organization. However, only a MIPS-eligible doctor or practice can edit a submission object for their own performance data. Organizations, such as Qualified Registries and Qualified Clinical Data Registries, can create measurement sets and add them to any submission object. In other words, MIPS-eligible doctors and practices can make POST /submissions/ requests, but organizations can only make POST /measurement-sets/ and POST /measurements/ requests.</p>

          <h2 className="ds-h2">Scoring data</h2>
          <p class="ds-text">If you are associated with a third party vendor, you can only view scores based on the data you've submitted. In the future, there will be a way for MIPS-eligible clinicians and practices to grant organizations additional permissions so that the organization can get a final score that represents all data submitted on the clinician/practice's behalf (not just based on data they've submitted).</p>

          <h2 className="ds-h2">How to request an API key</h2>
          <p class="ds-text">At this time, the private beta is open only to 2017 CMS-approved Qualified Registries ("registries") and Qualified Clinical Data Registries ("QCDRs").  Request an API key by contacting the Quality Payment Program Service Center at <a href="mailto:QPP@cms.hhs.gov?subject=Request%20API%20Key%20for%20Submissions%20API%20Beta">QPP@cms.hhs.gov</a>.</p>
          <p class="ds-text">We will verify that you are associated with a 2017 CMS-approved registry or QCDR, and manually generate an API key for you. Your API key permits authenticated access to the Submissions API private beta, and will expire November 1, 2017. After this date, you will be able to request a new API key through an automated, self-service process.</p>
          <p class="ds-text">When you get this key:
          <ul>
            <li>Keep it secure. Treat your API key like you would treat any account password.</li>
            <li>Copy and save it for your records. For security reasons, we will only re-send the API key to you once. After that, you will need to contact <a href="mailto:qpp@cms.hhs.gov?subject=Request%20API%20Key%20for%20Submissions%20API%20Beta">QPP@cms.hhs.gov</a> to request a new API key.</li>
            <li>Do not share your API key with anyone outside your organization.</li>
            <li>Within your organization, limit access to only the staff person/s who will embed it in your software.</li>
          </ul>
          </p>

          <h2 className="ds-h2">Notes</h2>
          <p class="ds-text">Data submitted to the Submissions API private beta will not count toward a MIPS-eligible clinician's final score in the 2017 Quality Payment Program.</p>
          <p class="ds-text">Since this is a Beta release of the Submissions API, this API may be changed in backward-incompatible ways and is not subject to any SLA or deprecation policy. This API is not intended for real-time usage in critical applications.</p>

          <h2 className="ds-h2">Where to go for support</h2>
          <p class="ds-text">
            <ul>
              <li>Request an API key for the private beta by contacting the Quality Payment Program Service Center at <a href="mailto:QPP@cms.hhs.gov?subject=Request%20API%20Key%20for%20Submissions%20API%20Beta">QPP@cms.hhs.gov</a>.</li>
              <li>If you're a developer, visit the <a href="https://cmsgov.github.io/qpp-submissions-docs/">API documentation</a>.</li>
            </ul>
          </p>
          <p class="ds-text">If you have feedback about working with the private beta Submissions API, post in the <a href="https://groups.google.com/forum/#!forum/qpp-apis">Google Group for QPP APIs</a>.</p>

          <h3 className="ds-h3">All done?</h3>
          <p class="ds-text">Return to the <a href="https://qpp.cms.gov/resources/developers">QPP Developer Resources</a>.</p>
        </div>
   );
  }
 }
