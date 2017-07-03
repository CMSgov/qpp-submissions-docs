import React from 'react';

import TechnicalDetailsPane from './common/technical-details-pane';
import InlineApiExample from './common/inline-api-example';

class BasicTutorial extends React.PureComponent {
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
        <div className="ds-c-alert__body">
          <h3 className="ds-c-alert__heading">Example code on mobile</h3>
          <p className="ds-c-alert__text">Looks like the screen is too narrow to show you the API payloads alongside the tutorial. As you see references to code on the right, you'll be able to find it all the way at the bottom. Clicking the buttons to progress through the tutorial will update the code!</p>
        </div>
      </div>
      <div className="temp-grid-container">
        <div className="temp-grid-half">
          <h1 className="ds-h1">API Tutorial</h1>
          <p>The Submissions API is an easy way to manage your performance data with CMS. Performance data is organized into <em>submissions</em>, which can have many <em>measurements</em>. Measurements within a submission are also grouped by category (e.g. Improvement Activities) and submission method (e.g. CMS web interface) into <em>measurement sets</em>.</p>
          <p>Since the API and scoring calculations are still being finalized, please note that some numbers (especially scoring) may be inaccurate. The <a href="https://qpp-submissions-sandbox.navapbc.com/api-explorer">interactive API</a> will always reflect the latest design.</p>
          <p>Let's walk through an example of how we might submit performance data!</p>
          <h2 className="ds-h2" id="creating-a-submission">
            <a
              className="tutorial-header-link"
              href="#creating-a-submission"
              onClick={this.showStartOfStep}>
                Creating a new submission
            </a>
          </h2>
          <p>We need to create a <em>submission</em> first. We can do that by asking the API to create a submission record in the CMS database. In API terms, this means making a <code>POST</code> (synonym for <em>create</em>) request to the <code>/v1/submissions</code> endpoint. We'll also need to supply some information to tell CMS how to identify this particular submission, which you can see below - every submission is unique to the combination of the fields provided.</p>
          <p>Note that we enforce fake TINs (starting with <code>000</code>) during the preview period to avoid accidentally collecting personally identifiable information. Also, we can submit performance data in this first request as well, but we'll do it in a future request to keep this one small. On the right side, you can see the <code>JSON</code> version of the information below - click the 'Create Submission' button when you're ready.</p>
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
                    <td>0123456789</td></tr>
                <tr><td>Performance Year</td>
                    <td>2017</td></tr>
              </tbody>
            }
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#creating-a-submission"
                onClick={this.showResponseOfStep}>
                Create Submission
              </button>
            }/>
          <p>Every API request gives us back an immediate response with useful information, which we can see to the right. Much like a good conversation, this response includes a restatement of what we said, plus additional input from CMS's understanding to make sure we're both on the same page.</p>
          <p>This response has two key pieces of information - the <em>response code</em>, which is a number that indicates success (<code>200</code> to <code>299</code>) or failure (<code>400</code> to <code>499</code>). The other piece is the <em>response body</em>, which contains <code>JSON</code> or <code>XML</code> describing in more detail the record stored with CMS.</p>
          <p>We know that the <code>POST</code> request succeeded from the response code (<code>201 Created</code>). CMS also gives us an <code>id</code> that tells how to refer to this submission later, some timestamps to let us know when this submission was created and last updated, and that there are no measurement sets for this submission yet (an empty list, represented by <code>[]</code>).</p>
          <p>If you're interested in comparing the API requests and responses, you can click between the tabs on the right side at any time.</p>
          <p>Anyway, CMS can't do much without our performance numbers. Let's add some!</p>
          <button
            className="ds-c-button ds-c-button--primary"
            data-hash="#adding-measurements"
            onClick={this.showStartOfStep}>
            Next step
          </button>
          <h2 className="ds-h2" id="adding-measurements">
            <a
              className="tutorial-header-link"
              href="#adding-measurements"
              onClick={this.showStartOfStep}>
              Adding measurements
            </a>
          </h2>
          <p>In our example, we have performance data for one measure that we want to send to CMS. Much like creating the submission, we need to create a measurement by making a <code>POST</code> request. This time it'll be addressed to a different endpoint, and we'll include the submission <code>id</code> from earlier so CMS knows which submission we're talking about.</p>
          <p>Remember that measurements are grouped into measurement sets? The data in our <code>POST</code> request will be organized this way, with the measurement nested inside the data for a measurement set - you can see what that looks like on the right. Our example includes a boolean (<code>true</code> or <code>false</code>) value for measure <code>IA_EPA_4</code>.</p>
          <p>If we want to add measurements from different categories (Advancing Care Information vs our Improvement Activity) or submission methods (not the CMS web interface), we would need to do that in another measurement set. Measurement sets become more important during scoring, since there can be performance data concerning the same care but submitted by different people - we'll dig into that in our advanced tutorial. For now, let's ask the API to add our IA measurement:</p>
          <InlineApiExample
            verb="POST"
            url="/v1/measurement-sets"
            params={
              <tbody>
                <tr><td>Submission ID</td>
                    <td>b6423273-d3a3-42ef-9728-1871b246477e</td></tr>
                <tr><td>Category</td>
                    <td>IA</td></tr>
                <tr><td>Submission Method</td>
                    <td>CMS Web Interface</td></tr>
                <tr><td>Performance period</td>
                    <td>2016-01-01 through 2016-06-01</td></tr>
                <tr><td className="nested-once">Measurements</td></tr>
                <tr><td className="nested-twice"><code>IA_EPA_4</code></td>
                    <td><code>true</code></td></tr>
              </tbody>
            }
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#adding-measurements"
                onClick={this.showResponseOfStep}>
                Create Measurement Set
              </button>}/>
          <p>Another <code>201 Created</code>, and we can see that this time the measurement set and measurement have both been assigned <code>id</code>s. Nothing too surprising in this step, but we've given CMS everything necessary to score this submission.</p>
          <button
            className="ds-c-button ds-c-button--primary"
            data-hash="#scoring-a-submission"
            onClick={this.showStartOfStep}>
            Next step
          </button>
          <h2 className="ds-h2" id="scoring-a-submission">
            <a
              className="tutorial-header-link"
              href="#scoring-a-submission"
              onClick={this.showStartOfStep}>
              Scoring a submission
            </a>
          </h2>
          <p>With the submission <code>id</code> we were given, we can ask the API to calculate the submission score with a GET request. We don't need to include a request body this time since we're only interested in retrieving the score, and CMS doesn't need any information other than the submission <code>id</code>.</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"
            button={
              <button
                className="ds-c-button ds-c-button--primary"
                data-hash="#scoring-a-submission"
                onClick={this.showResponseOfStep}>
                Get Submission Score
              </button>}/>
          <p>Our API response includes a bunch of new info this time, so let's break it down.</p>
          <p>The <code>Final Score</code> has a value of <code>3.75</code>. <code>Final</code> here doesn't mean it's the final end of year score for this submission - think of this instead as the <em>current aggregate estimate</em> of your total score.</p>
          <p>If you look at the first chunk of <code>JSON</code> in the <code>"parts"</code> list, the IA component of final score reads <code>3.75</code>. The <code>"detail"</code> makes clear that the scoring is based on the measurement set we submitted earlier (check the <code>id</code>s, they match!).</p>
          <p>The second chunk in <code>"parts"</code> is straightforward - we did not submit any ACI data, so our aggregate score has no contribution from ACI measures.</p>
          <p>That's it! We've used three API requests to (1) create a submission, (2) add measurements into a measurement set, and (3) get the score, all in minutes. Each API response gives us useful information for the next step.</p>
          <p>In general, we can think about the Submissions API as a way to have a live conversation with CMS about performance measurements. Rather than waiting months to hear back about missing information or a score, the API gives us feedback that is immediate, specific, and actionable - we can easily make another API request if necessary.</p>
          <p>What we've shown is an example of working directly with the API - typically these requests are made through a web interface or script, but the requests & responses above illustrate the kind of power and speed the Submissions API and applications built against it can provide.</p>
          <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
          <h3>Next steps</h3>
          <p>Explore a more complex and powerful workflow in our <a href="/qpp-submissions-docs/advanced-tutorial">advanced tutorial</a>.</p>
          <a className="ds-c-button ds-c-button--primary ds-c-button--big" href="/qpp-submissions-docs/advanced-tutorial">Start the advanced tutorial</a>
          <p>To learn more about what else you can do with the API, visit our <a href="https://qpp-submissions-sandbox.navapbc.com/api-explorer">API reference</a>.</p>
        </div>
        <div className="temp-grid-half">
          <TechnicalDetailsPane
            tutorial="basic"
            hash={this.state.hash}
            tabIndex={this.state.tabIndex}
            selectTab={this.selectTab}/>
        </div>
      </div>
      </div>
    );
  }
}

export default BasicTutorial;
