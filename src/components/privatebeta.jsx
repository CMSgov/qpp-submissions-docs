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
          <h2 className="ds-h2">Developer Preview</h2>
          <h1 className="ds-h1">QPP Submissions API</h1>  
          <h3 className="ds-h3">July 25, 2017 - November 1, 2017</h1>          
          <p className="ds-text--lead">CMS is inviting developers to provide feedback on the new Submissions API for the purpose of improved development. During this three-month period, participants in the Developer Preview can build direct integrations with other software to test programmatically submitting Quality Payment Program (QPP) performance data to CMS. The API’s functionality in the Developer Preview closely matches that of the QPP system which will be put into production on January 1, 2018 when the Submissions window opens for QPP Year 1 (2017) reporting.</p>

          <h2 className="ds-h2">How to use the API</h2>
          <p class="ds-text">The Submissions API is accessed on <b><code>https://qpp.cms.gov/api/submissions</code></b>.</p>
          <p class="ds-text">Visit the <a href="https://qpp-submissions-sandbox.navapbc.com/">interactive API reference</a> for an exhaustive list of endpoints with example request and response payloads.</p>
        
          <h2 className="ds-h2">What developers can do with the Submissions API</h2>
          <p class="ds-text">Using the data exposed through the API, developers can:</p>
          <ul>
            <li>Submit, update or delete Advancing Care Information, Improvement Activities and Quality measures data</li>
            <li>Receive feedback on whether or not you correctly formatted your submission</li>
            <li>Receive a <b>sample</b> score for a submission. Since sample scores only reflect measure categories submitted to date, they do not represent a guarantee of the final score, and therefore, should not be used to make business decisions. Additionally, in the current version, third party vendors can only view scores based on data they submitted.</li>
            <li>Read, update, and delete submissions. Developers can read, update, and delete data that the developer submitted. However, only a MIPS-eligible doctor or practice can edit a submission object for their own performance data. Organizations, such as Qualified Registries and Qualified Clinical Data Registries, can create measurement sets and add them to any submission object.</li>
          </ul>
          </p>

          <h2 className="ds-h2">Object Types</h2>
          <p class="ds-text">The Submissions API has three types of objects:
            <ul>
              <li><b>Submissions</b>: A submission object contains any performance data submitted on behalf of a single MIPS-eligible clinician, practice or group.</li>
              <li><b>Measurement sets</b>: A measurement set object represents a set of performance data related to one specific category (Quality, Improvement Activities, or Advancing Care Information), and is tied to a submission object.</li>
              <li><b>Measurements</b>: A measurement object represents one single data point related to a specific measure in a given category, and is tied to a measurement set object.</li>
            </ul>
          </p>
      
          <h2 className="ds-h2">Authentication</h2>
          <p class="ds-text">The Developer Preview is different from the <a href="https://qpp-submissions-sandbox.navapbc.com">public sandbox</a> in that API calls require a JSON Web Token for authentication purposes since submissions may contain personally identifiable information (e.g., Taxpayer Identification Numbers, or TINs).</p>
          <p class="ds-text">API keys can be requested by contacting the Quality Payment Program Service Center at <a href="mailto:QPP@cms.hhs.gov?subject=Request%20API%20Key%20for%20Submissions%20API%20Beta">QPP@cms.hhs.gov</a>. CMS will verify that the requestor’s organization is a 2017 Qualified Registry or QCDR (additional partners such as EHR vendors may soon qualify), and generate the API key. API keys expire at the end of the Developer Preview period, at which time new API keys will become available through an automated, self-service process.</p>
          <p class="ds-text">Participants can authenticate their accounts when using the API by including individualized API keys in the header of every API request using the key value: <code>"Authentication":"Bearer [YOUR API TOKEN]"</code>. API keys carry many privileges, and must not be shared in publicly accessible areas such as GitHub and in client-side code.  Even within organizations, access must be limited to staff embedding it in software. For security reasons, CMS will only re-send the API key once, and after that, new API keys must be requested by contacting <a href="mailto:QPP@cms.hhs.gov?subject=Request%20API%20Key%20for%20Submissions%20API%20Beta">QPP@cms.hhs.gov</a>.</p>

          <h2 className="ds-h2">Notes</h2>
          <p class="ds-text">
            <ul>
              <li>All data submitted to the Submissions API Developer Preview will be discarded at the end of the Developer Preview and will not count toward a MIPS-eligible clinician or group's final score in Quality Payment Program Year 1 (2017).</li>
              <li>Since this is a preview release of the Submissions API, it may be changed in ways that break backward compatibility and is not subject to any service level guarantees or deprecation policy.</li>
        </ul>
        </p>

          <h2 className="ds-h2">Where to go for support</h2>
          <p class="ds-text">
            <ul>
              <li>Contact the <a href="mailto:qpp@cms.hhs.gov">QPP Service Center</a>.</li>
              <li>If you're a developer, read the <a href="https://cmsgov.github.io/qpp-submissions-docs/">API documentation</a>.</li>
              <li>Feedback about the Developer Preview can be posted in the <a href="https://groups.google.com/forum/#!forum/qpp-apis">Google Group for QPP APIs</a>.</li>
            </ul>
          </p>

          <h3 className="ds-h3">All done?</h3>
          <p class="ds-text">Return to the <a href="https://qpp.cms.gov/resources/developers">QPP Developer Resources</a>.</p>
        </div>
   );
  }
 }
