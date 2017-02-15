import React from 'react';

import InlineApiExample from './inline-api-example';
import TechnicalDetailsPane from './technical-details-pane';

class AdvancedFlow extends React.PureComponent {
  render() {
    return (
      <div className="usa-grid">
        <div className="usa-width-one-half">
          <h1>Advanced API Flow</h1>
          <p>In the <a>basic flow</a>, we covered how to create a submission, add a measurement set with IA performance data, and retrieve the score in three different API requests. This time we're going to look at creating a submission with embedded ACI performance data in one request, go through ACI scoring (which is a little more complicated than IA), and see how to update a measure with new info.</p>
          <h2>Creating a submission with performance data</h2>
          <p>Now that we know how to submit and score a submission with IA measurements, let's try the same with ACI measurements! The scoring is more complicated for ACI measures, so we'll spend more time going through that.</p>
          <p>Here's a POST request to create a new submission. This time, we're going to create the measurement set and submission together by nesting the measurement set inside the submission info, much like we nested measurements within measurement sets.</p>
          <InlineApiExample
            verb="POST"
            url="/v1/submissions"
            body={`Program Name: MIPS
Entity: Individual
Taxpayer Identification Number: 000345678
National Provider Identifier: 9876543210
Performance Year: 2016

Measurement Set:
  Category: ACI
  Source: Provider
  Performance date range: 2016-01-01 thru 2016-06-01

  Measurements:
    ACI_INFBLO_1: true
    ACI_ONCDIR_1: true
    ACI_EP_1: 100 out of 100
    ACI_PPHI_1: true
    ACI_PEA_1: 50 out of 100
    ACI_HIE_1: 10 out of 100
    ACI_HIE_2: 20 out of 100
`}/>
          <p>It may help to look at the request payload on the right side - it can be harder to read, but it contains all of the info above. Since we're able to create a complete and scorable submission in one request, it's common to take this approach instead of creating an empty submission and adding performance data later.</p>
          <p>Also, we're using a different TIN here - if we wanted to add ACI measurements to an existing submission instead of creating a new one, we would have to make a PUT (full record update) or PATCH (partial record update) request and specify the submission <code>ID</code>. Each unique combination of TIN, NPI, program name, and entity gets one submission record per performance year.</p>
          <button className="usa-button" onClick={this.createSubmission}> Create Submission
          </button>
          <p>A <code>201 Created</code> - great. We can get the score next:</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"/>
          <button className="usa-button" onClick={this.createSubmission}> Get Submission Score
          </button>
          <h2>Updating a measure</h2>
          <p>So far we've only been creating new submission and measurement set records. Since performance data can change over time, we'll need to update CMS. Let's update an existing measure with new performance data! In addition to a measurement <code>ID</code>, we need to provide the measurement set <code>ID</code> and the measure <code>ID</code>. For the performance data itself, let's update the <code>ACI_HIE_1</code> proportion from 10 out of 100 to 50 out of 100.</p>
          <InlineApiExample
            verb="PATCH"
            url="/v1/measurements/:id"
            body={`{
  "id": "a3cb7c78-2380-4573-b726-8c8e3b70529a",
  "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
  "measureId": "ACI_HIE_1",
  "value": {
    "numerator": 50,
    "denominator": 100
  }
}`}/>
          <button className="usa-button" onClick={this.createSubmission}>
            Update Measurement
          </button>
          <p>A <code>200 OK</code> means we've updated the measurement in question. We can now fetch the latest score:</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"/>
          <button className="usa-button" onClick={this.createSubmission}>
            Get Submission Score
          </button>
          <p>A few things have changed - the final score increased to 15.5. We know this change is due to our PATCH by looking at the score component contributed by <code>ACI_HIE_1</code> - it increased from 1 to 5. The ACI base score went up from 58 to 62, and with the ACI component being 25% of the score our final score increased by 1.</p>
        </div>
        <div className="usa-width-one-half">
          <TechnicalDetailsPane />
        </div>
      </div>
    );
  }
}

export default AdvancedFlow;