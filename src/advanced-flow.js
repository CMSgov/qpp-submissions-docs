import React from 'react';

import InlineApiExample from './inline-api-example';
import TechnicalDetailsPane from './technical-details-pane';

class AdvancedFlow extends React.PureComponent {
  render() {
    return (
      <div className="usa-grid">
        <div className="usa-width-one-half">
          <h1>Advanced API Flow</h1>
          <p>Heads up - this tutorial assumes we're up to speed with the <a>basic flow</a>!</p>
          <p>Now that we know how to submit and score a submission with IA measurements, let's try the same with ACI measurements! The scoring is more complicated for ACI measures, so we'll spend more time going through that.</p>
          <p>Here's a POST request to create a new submission. This time, we're going to create the measurement set and submission together by nesting the measurement set inside the submission info, much like we nested measurements within measurement sets.</p>
          <InlineApiExample
            verb="POST"
            url="/v1/submissions"
            body={`Program Name: MIPS
Entity: Individual
Taxpayer Identification Number: 000345678
National Provider Identifier: 9876543210
Performance Year: 2016`}/>
          <p>We're using a new fake TIN here - if we wanted to add ACI measurements to an existing submission, we would have to make a PUT (full record update) or PATCH (partial record update) request and specify the submission <code>ID</code>. Each unique combination of TIN, NPI, program name, entity, and performance year gets one submission record.</p>
          <button className="usa-button" onClick={this.createSubmission}> Create Submission
          </button>
          <p>A <code>201 Created</code> - great. Let's score it too!</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"/>
          <button className="usa-button" onClick={this.createSubmission}> Get Submission Score
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