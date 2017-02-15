import React from 'react';

import InlineApiExample from './inline-api-example';
import TechnicalDetailsPane from './technical-details-pane';

class AdvancedFlow extends React.PureComponent {
  render() {
    return (
      <div className="usa-grid">
        <div className="usa-width-one-half">
          <h1>Submissions API</h1>
          <p>We need to create a <em>submission</em> first. We can do that by asking the API to create a submission record. In API terms, this means making a POST (synonym for <em>create</em>) request to the <code>/v1/submissions</code> endpoint. We'll also need to supply some information to tell CMS how to identify this particular submission:</p>
          <InlineApiExample
            verb="POST"
            url="/v1/submissions"
            body={`Program Name: MIPS
Entity: Individual
Taxpayer Identification Number: 000456789
National Provider Identifier: 9876543210
Performance Year: 2016`}/>
          <p>Note that the TIN starts with 000 - CMS is currently only accepting fake TINs to avoid capturing personal information during the preview period.</p>
          <p>We can submit performance data in this first request as well, but we'll do it in a separate request next to keep this one small.</p>
          <p>If that looks good, let's click the button to send this information to the API!</p>
          <button className="usa-button" onClick={this.createSubmission}> Create Submission
          </button>
        </div>
        <div className="usa-width-one-half">
          <TechnicalDetailsPane />
        </div>
      </div>
    );
  }
}

export default AdvancedFlow;