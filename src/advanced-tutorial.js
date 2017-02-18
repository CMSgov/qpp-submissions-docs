import React from 'react';

import TechnicalDetailsPane from './technical-details-pane';
import InlineApiExample from './inline-api-example';

class AdvancedTutorial extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hash: props.hash,
      tabIndex: 0
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.createSubmission = this.createSubmission.bind(this);
    this.getInitialSubmissionScore = this.getInitialSubmissionScore.bind(this);
    this.updateMeasurement = this.updateMeasurement.bind(this);
    this.getFinalSubmissionScore = this.getFinalSubmissionScore.bind(this);
  }

  handleSelect(index) {
    this.setState({
      tabIndex: index
    });
  }

  createSubmission() {
    window.location.hash = '#submitting-with-performance-data';
    this.setState({
      hash: '#submitting-with-performance-data',
      tabIndex: 1
    });
  }

  getInitialSubmissionScore() {
    window.location.hash = '#aci-scoring';
    this.setState({
      hash: '#aci-scoring',
      tabIndex: 1
    });
  }

  updateMeasurement() {
    window.location.hash = '#updating-a-measure';
    this.setState({
      hash: '#updating-a-measure',
      tabIndex: 1
    });
  }

  getFinalSubmissionScore() {
    window.location.hash = '#comparing-scoring-changes';
    this.setState({
      hash: '#comparing-scoring-changes',
      tabIndex: 1
    });
  }

  render() {
    return (
      <div className="usa-grid">
        <div className="usa-width-one-half">
          <h1>Advanced API Tutorial</h1>
          <p>In the <a href="/qpp-submissions-docs/tutorial">first tutorial</a>, we covered how to create a submission, add a measurement set with IA performance data, and retrieve the score in three different API requests. This time we're going to look at creating a submission with embedded ACI performance data in one request, go through ACI scoring (which is a little more complicated than IA), and see how to update a measure with new info.</p>
          <h2 id="submitting-with-performance-data"><a className="tutorial-header-link" href="#submitting-with-performance-data">Creating a submission with performance data</a></h2>
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
            params={<div>
              <table className="inline-api-example__params">
                <tbody>
                  <tr><td>Program Name</td>
                      <td>MIPS</td></tr>
                  <tr><td>Entity</td>
                      <td>Individual</td></tr>
                  <tr><td>Taxpayer Identification Number</td>
                      <td>000345678</td></tr>
                  <tr><td>National Provider Identifier</td>
                      <td>9876543210</td></tr>
                  <tr><td>Performance Year</td>
                      <td>2016</td></tr>
                  <tr><td>Measurement Set</td>
                      <td>Measure ACI_INFBLO_1: true</td></tr>
                  <tr><td></td>
                      <td>Measure ACI_ONCDIR_1: true</td></tr>
                  <tr><td></td>
                      <td>Measure ACI_EP_1: 100 out of 100</td></tr>
                  <tr><td></td>
                      <td>Measure ACI_PPHI_1: true</td></tr>
                  <tr><td></td>
                      <td>Measure ACI_PEA_1: 50 out of 100</td></tr>
                  <tr><td></td>
                      <td>Measure ACI_HIE_1: 10 out of 100</td></tr>
                  <tr><td></td>
                      <td>Measure ACI_HIE_2: 20 out of 100</td></tr>
                </tbody>
              </table>
              <button className="usa-button inline-api-example__button" onClick={this.createMeasurementSet}>Create Measurement Set</button>
            </div>}/>
          <p>The request payload on the right can be harder to read, but it contains all of the info above exactly as it's sent through the API. Since we're able to create a complete and scorable submission in one request, it's common to take this approach instead of creating an empty submission and adding performance data later as we did in the first tutorial.</p>
          <p>Also, we're using a different TIN here - if we wanted to add ACI measurements to an existing submission instead of creating a new one, we would have to make a PUT (full record update) or PATCH (partial record update) request and specify the submission <code>ID</code>. Each unique combination of TIN, NPI, program name, and entity gets one submission record per performance year.</p>
          <button className="usa-button api-example-button" onClick={this.createSubmission}>Create Submission</button>
          <p>A <code>201 Created</code> - great. We can get the score next:</p>
          <h2 id="aci-scoring"><a className="tutorial-header-link" href="#aci-scoring">ACI Scoring</a></h2>
          <p>describe ACI scoring</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"/>
          <button className="usa-button api-example-button" onClick={this.getInitialSubmissionScore}>Get Submission Score</button>
          <p>explain ACI score</p>
          <h2 id="updating-a-measure"><a className="tutorial-header-link" href="#updating-a-measure">Updating a measure</a></h2>
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
          <button className="usa-button api-example-button" onClick={this.updateMeasurement}>Update Measurement</button>
          <p>A <code>200 OK</code> means we've updated the measurement in question. We can now fetch the latest score:</p>
          <h2 id="comparing-scoring-changes"><a className="tutorial-header-link" href="#comparing-scoring-changes">Comparing scoring changes</a></h2>
          <p>explain how scores can change</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"/>
          <button className="usa-button api-example-button" onClick={this.getFinalSubmissionScore}>Get Submission Score</button>
          <p>A few things have changed - the final score increased to 15.5. We know this change is due to our PATCH by looking at the score component contributed by <code>ACI_HIE_1</code> - it increased from 1 to 5. The ACI base score went up from 58 to 62, and with the ACI component being 25% of the score our final score increased by 1.</p>
        </div>
        <div className="usa-width-one-half">
          <TechnicalDetailsPane
            tutorial="advanced"
            hash={this.state.hash}
            tabIndex={this.state.tabIndex}
            handleSelect={this.handleSelect}/>
        </div>
      </div>
    );
  }
}

export default AdvancedTutorial;