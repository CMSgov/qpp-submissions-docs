import React from 'react';

import TechnicalDetailsPane from './common/technical-details-pane';
import InlineApiExample from './common/inline-api-example';

class AdvancedTutorial extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hash: props.hash,
      tabIndex: 0
    };

    this.selectTab = this.selectTab.bind(this);
    this.showStartOfStep = this.showStartOfStep.bind(this);
    this.showResponseOfStep = this.showResponseOfStep.bind(this);
  }

  selectTab(index) {
    this.setState({
      tabIndex: index
    });
  }

  showStartOfStep(event) {
    // the hash of an anchor tag or stored in data
    const hash = event.target.hash || event.target.dataset.hash;
    window.location.hash = hash;
    this.setState({
      hash,
      tabIndex: 0
    });
  }

  showResponseOfStep(event) {
    const hash = event.target.dataset.hash;
    window.location.hash = hash;
    this.setState({
      hash,
      tabIndex: 1
    });
  }

  render() {
    return (
      <div>
      <div className="ds-c-alert ds-c-alert--info narrow-screen-warning">
        <div className="ds-c-alert--body">
          <h3 className="ds-c-alert--heading">Example code on mobile</h3>
          <p className="ds-c-alert--text">Looks like the screen is too narrow to show you the API payloads alongside the tutorial. As you see references to code on the right, you'll be able to find it all the way at the bottom. Clicking the buttons to progress through the tutorial will update the code!</p>
        </div>
      </div>
      <div className="temp-grid-container">
        <div className="temp-grid-half">
          <h1 className="ds-h1">Advanced API Tutorial</h1>
          <p>In the <a href="/qpp-submissions-docs/tutorial">first tutorial</a> we covered how to create a submission, add a measurement set with IA category performance data, and retrieve the score in three different API requests. This time we're going to build on the previous tutorial and look at creating a submission with embedded ACI performance data in one request, go through ACI scoring and how measures compose a score, and see how to update a measure with new info (all while running into a problem along the way). All of these examples serve to illustrate how the Submissions API can make it easier to react to and fix issues that arise.</p>
          <h2 className="ds-h2" id="submitting-with-performance-data">
            <a
              className="tutorial-header-link"
              href="#submitting-with-performance-data"
              onClick={this.showStartOfStep}>
              Creating a submission with embedded performance data
            </a>
          </h2>
          <p>Previously, we created a submission and added a measurement set in two requests. It's common to want to do these at the same time - the first time we want to submit performance data for any individual, for instance. It's convenient to be able to do both, so let's try that with ACI performance data.</p>
          <p>Here's a <code>POST</code> request to create a submission. We're including the  measurement set and submission together by nesting the measurement set inside the submission info, much like we nested measurements within measurement sets.</p>
          <p>The request payload on the right can be harder to read, but it contains the same info as below formatted exactly as it's sent through the API. Check it out then click the button!</p>
          <InlineApiExample
            verb="POST"
            url="/v1/submissions"
            params={
              <tbody>
                <tr><td>Program Name</td>
                    <td>MIPS</td></tr>
                <tr><td>Entity</td>
                    <td>Individual</td></tr>
                <tr><td>Taxpayer Identification Number</td>
                    <td>000456789</td></tr>
                <tr><td>National Provider Identifier</td>
                    <td>9876543210</td></tr>
                <tr><td>Performance Year</td>
                    <td>2016</td></tr>
                <tr><td className="nested-once">Measurement Set</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_INFBLO_1</code></td>
                    <td><code>true</code></td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_ONCDIR_1</code></td>
                    <td><code>true</code></td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_EP_1</code></td>
                    <td>100 out of 100</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_PPHI_1</code></td>
                    <td><code>true</code></td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_PEA_1</code></td>
                    <td>50 out of 100</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_HIE_1</code></td>
                    <td>10 out of 100</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_HIE_2</code></td>
                    <td>20 out of 100</td></tr>
              </tbody>
            }
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#submitting-with-performance-data"
                onClick={this.showResponseOfStep}>
                Create Submission
              </button>
            }/>
          <p>Something unexpected: a <code>422 Unprocessable Entity</code> response code. This indicates that the syntax of the request was correct, but the semantics were problematic. The response body includes more specific information: <code>DuplicateEntryError</code>. We've tried to create a duplicate submission - earlier we noted that each taxpayer/provider ID combination can have one submission per year. The <code>POST</code> API request we just sent uses the same identifiers as we did in our first tutorial, but CMS already has a submission on record for this individual.</p>
          <p>There are a variety of reasons why this collision might happen: it's plausible that we (or someone else) has tried to <code>POST</code> this individual's performance data before, or someone made a typo and used our TIN by accident. Either way, we asked the API to <em>create</em> a record where one already exists. Since the API (and CMS) can't assume what the correct course of action is to take for this problematic API request, the messaging in the response is handy for immediately showing us something went wrong, and what specifically.</p>
          <p>If we wanted to <em>update</em> the existing submission we could use a <code>PUT</code> (full record update) or <code>PATCH</code> (partial record update) request, but since we're trying to show how we can create a new submission with measurement data embedded, let's use a different TIN and try again.</p>
          <InlineApiExample
            verb="POST"
            url="/v1/submissions"
            params={
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
                <tr><td className="nested-once">Measurement Set</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_INFBLO_1</code></td>
                    <td><code>true</code></td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_ONCDIR_1</code></td>
                    <td><code>true</code></td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_EP_1</code></td>
                    <td>100 out of 100</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_PPHI_1</code></td>
                    <td><code>true</code></td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_PEA_1</code></td>
                    <td>50 out of 100</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_HIE_1</code></td>
                    <td>10 out of 100</td></tr>
                <tr><td className="nested-twice">Measure <code>ACI_HIE_2</code></td>
                    <td>20 out of 100</td></tr>
              </tbody>
            }
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#submitting-with-performance-data-pt2"
                onClick={this.showResponseOfStep}>
                Create Submission
              </button>
            }/>
          <p>A <code>201 Created</code> - great. We'll look at what ACI scores look like next:</p>
          <button
            className="ds-c-button ds-c-button--primary"
            data-hash="#aci-scoring"
            onClick={this.showStartOfStep}>
            Next step
          </button>
          <h2 id="aci-scoring">
            <a
              className="tutorial-header-link"
              href="#aci-scoring"
              onClick={this.showStartOfStep}>
              ACI Scoring
            </a>
          </h2>
          <p>It's possible that a different measurement set added to this submission could score differently, for example.</p>
          <p>For submissions with more performance data, this breakdown gives us visibility
           how the individual measurements contribute to the aggregate. The additional visibility helps because sometimes a submission can be valid, but incomplete for scoring purposes.</p>
         <p>The scoring is more complicated for ACI measures, so we'll spend more time going through that.</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#aci-scoring"
                onClick={this.showResponseOfStep}>
                Get Submission Score
              </button>
            }/>
          <p>The ACI component of our score shows many parts this time. There's a lot of numbers here, but let's decode how we arrive at the total:</p>
          <p>The <code>aci_base</code> starts at 50 because we've attested to the two required measures (<code>ACI_INFBLO_1</code>, <code>ACI_ONCDIR_1</code>).</p>
          <p>Three optional measures listed (<code>ACI_PEA_1</code>, <code>ACI_HIE_1</code>, <code>ACI_HIE_2</code>) give a possible 10 points each, multiplied by the proportion attested to, leading to partial contributions of 5, 2, and 1 points respectively.</p>
          <p>Two measures we included have 0 weighting (<code>ACI_EP_1</code>, <code>ACI_PPHI_1</code>), so they are excluded from scoring.</p>
          <p>We didn't attest to any measures that qualify for ACI or CEHRT bonuses, so those parts do not contribute to our score. These five measures give us our base ACI score of 58. With ACI contributing 25% of the total score as described in the response, our overall score is 14.5 (25% of 58).</p>
          <p>As we can see, ACI scoring requires an understanding of what measures are required and how they're weighted. However, if we become familiar with these measures, scoring via the API immediately gives us a clear picture of our score and what parts contribute - this is a big advantage in making sure we get the score we understand and expect.</p>
          <p>What if we're later in the year and can attest to a greater proportion for one of the measures? We can easily do that in the API as well!</p>
          <button
            className="ds-c-button ds-c-button--primary"
            data-hash="#updating-a-measure"
            onClick={this.showStartOfStep}>
            Next step
          </button>
          <h2 id="updating-a-measure">
            <a
              className="tutorial-header-link"
              href="#updating-a-measure"
              onClick={this.showStartOfStep}>
              Updating a measure
            </a>
          </h2>
          <p>So far we've only been creating new submission and measurement set records. Since performance data can change over time, we'll need to update CMS. Let's update an existing measure with new performance data! In addition to a measurement <code>ID</code>, we need to provide the measurement set <code>ID</code> and the measure <code>ID</code>. For the performance data itself, let's update the <code>ACI_HIE_1</code> proportion from 10 out of 100 to 50 out of 100 and see how that affects our score.</p>
          <InlineApiExample
            verb="PATCH"
            url="/v1/measurements/:id"
            params={
              <tbody>
                <tr><td>Measurement ID</td>
                    <td>a3cb7c78-2380-4573-b726-8c8e3b70529a</td></tr>
                <tr><td>Measurement Set ID</td>
                    <td>b702d4ee-5a75-4e10-9aaf-3539123956e7</td></tr>
                <tr><td>Measure ID</td>
                    <td><code>ACI_HIE_1</code></td></tr>
                <tr><td>Proportion</td>
                    <td>50 out of 100</td></tr>
              </tbody>
            }
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#updating-a-measure"
                onClick={this.showResponseOfStep}>
                Update Measurement
              </button>
            }/>
          <p>A <code>200 OK</code> means we've updated the measurement in question. We can now fetch the latest score:</p>
          <button
            className="ds-c-button ds-c-button--primary"
            data-hash="#comparing-scoring-changes"
            onClick={this.showStartOfStep}>
            Next step
          </button>
          <h2 id="comparing-scoring-changes">
            <a
              className="tutorial-header-link"
              href="#comparing-scoring-changes"
              onClick={this.showStartOfStep}>
              Comparing scoring changes
            </a>
          </h2>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#comparing-scoring-changes"
                onClick={this.showResponseOfStep}>
                Get Submission Score
              </button>
            }/>
          <p>A few things have changed - the final score increased to 15.5. We know this change is due to our PATCH by looking at the score component contributed by <code>ACI_HIE_1</code> - it increased from 1 to 5, since the proportion increased from 10 to 50 out of 100 with ten possible points from this measure. The ACI base score went up from 58 to 62, and with the ACI component being 25% of the score our final score increased by 1.</p>
          <p>It's important to note that we've been working in one measurement set for this tutorial. One of the reasons that performance data for measures is organized into measurement sets is that multiple submission methods can add their own measurement sets into one submission - measure scores that might overlap the ones we provide, or differ in their attested values. In the case of multiple measurement sets, the Submissions API will calculate scores for each measurement set and pick the highest to present as the final score - that's why the API identifies that the scoring for the ACI component is based on a specific measurement set ID.</p>
          <p>We've done a lot of work in 5 API requests! In this advanced tutorial, we created a submission with ACI performance attestations, scored it, and updated a piece of one measurement to see how the final score reacts. That means we've successfully used each API endpoint (submission, measurement set, measurement) and understood what the responses tell us, adjusting our approach as needed. Again, all of this work is done on our terms, at our pace - no months-long round trip required.</p>
          <h3>Next steps</h3>
          <p>While we've used each API endpoint, we're far from having used every kind of API action. These tutorials have used <code>POST</code>, <code>PATCH</code>, and <code>GET</code> - there are also <code>PUT</code> and <code>DELETE</code> for each of the three resources we worked with.</p>
          <p>The tutorials have shown how requests can be strung together to complete complex workflows in minutes rather than months. For more technical detail about these API requests, check out our interactive <a href="https://qpp-submissions-sandbox.navapbc.com/api-explorer">API reference</a>.</p>
        </div>
        <div className="temp-grid-half">
          <TechnicalDetailsPane
            tutorial="advanced"
            hash={this.state.hash}
            tabIndex={this.state.tabIndex}
            handleSelect={this.handleSelect}/>
        </div>
      </div>
      </div>
    );
  }
}

export default AdvancedTutorial;
