import React from 'react';

import TechnicalDetailsPane from './technical-details-pane';
import InlineApiExample from './inline-api-example';

class BasicTutorial extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hash: props.hash,
      tabIndex: 0
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.createSubmission = this.createSubmission.bind(this);
    this.createMeasurementSet = this.createMeasurementSet.bind(this);
    this.scoreSubmission = this.scoreSubmission.bind(this);
  }

  handleSelect(index) {
    this.setState({
      tabIndex: index
    });
  }

  createSubmission() {
    window.location.hash = '#creating-a-submission';
    this.setState({
      hash: '#creating-a-submission',
      tabIndex: 1
    });
  }

  createMeasurementSet() {
    window.location.hash = '#adding-measurements';
    this.setState({
      hash: '#adding-measurements',
      tabIndex: 1
    });
  }

  scoreSubmission() {
    window.location.hash = '#scoring-a-submission';
    this.setState({
      hash: '#scoring-a-submission',
      tabIndex: 1
    });
  }

  render() {
    return (
      <div className="usa-grid">
        <div className="usa-width-one-half">
          <h1>API Tutorial</h1>
          <p>The Submissions API is an easy way to manage your performance data with CMS. Performance data is organized into <em>submissions</em>, which can have many <em>measurements</em>. Measurements within a submission are also grouped by category (e.g. Improvement Activities) and source (e.g. provider) into <em>measurement sets</em>.</p>
          <p>Let's walk through an example of how we might submit performance data!</p>
          <h2 id="creating-a-submission"><a className="tutorial-header-link" href="#creating-a-submission">Creating a new submission</a></h2>
          <p>We need to create a <em>submission</em> first. We can do that by asking the API to create a submission record. In API terms, this means making a POST (synonym for <em>create</em>) request to the <code>/v1/submissions</code> endpoint. We'll also need to supply some information to tell CMS how to identify this particular submission:</p>
          <p>Note that we enforce fake TINs (starting with 000) during the preview period to avoid accidentally collecting personally identifiable information.</p>
          <p>We can submit performance data in this first request as well, but we'll do it in a separate request next to keep this one small.</p>
          <InlineApiExample
            verb="POST"
            url="/v1/submissions"
            params={<tbody>
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
            </tbody>}
            button={<button className="usa-button" onClick={this.createSubmission}>Create Submission</button>}/>
          <p>Every API request gives us back an immediate response with useful information, which we can see to the right.</p>
          <p>We know that the POST request succeeded from response code (<code>201 Created</code>). CMS also gives us an <code>id</code> that tells how to refer to this submission later, some timestamps to let us know when this submission was created and last updated (just now!), and that there are no measurement sets for this submission yet (an empty list, represented by <code>[]</code>).</p>
          <p>CMS can't do much without our performance numbers. Let's add some!</p>
          <h2 id="adding-measurements"><a className="tutorial-header-link" href="#adding-measurements">Adding measurements</a></h2>
          <p>In our example, we have performance data for two measures that we want to send to CMS. Much like creating the submission, we need to create a measurement by making a POST request. This time it'll be addressed to a different endpoint, and we'll include the submission <code>id</code> from earlier so CMS knows which submission we're talking about.</p>
          <p>Remember that measurements are grouped by measurement sets? The data in our POST request will be organized this way, with measurements nested inside:</p>
          <p>We'll be sending a little more data here than last time. We're creating a measurement set, which includes a list of measurements that each have their own types and values. Here we've illustrated how a boolean (true or false) measurement and a proportion (x out of x people) measurement would be formatted. If we wanted to add measurements from different categories (Advancing Care Information vs Improvement Activity) or sources (provider vs CMS Web UI), note that we would need to create two separate measurement sets. For now, let's ask the API to add this to our submission!</p>
          <InlineApiExample
            verb="POST"
            url="/v1/measurement-sets"
            params={<tbody>
              <tr><td>Submission ID</td>
                  <td>060eb4b1-1a93-467e-b3eb-0b8518ed4d49</td></tr>
              <tr><td>Category</td>
                  <td>ACI</td></tr>
              <tr><td>Source</td>
                  <td>Provider</td></tr>
              <tr><td>Performance period</td>
                  <td>2016-01-01 through 2016-06-01</td></tr>
              <tr><td>Performance data</td>
                  <td>Measure ACI_HIE_3: 1 out of 2</td></tr>
              <tr><td></td>
                  <td>Measure ACI_PHCDRR_5: true</td></tr>
            </tbody>}
            button={<button className="usa-button inline-api-example__button" onClick={this.createMeasurementSet}>Create Measurement Set</button>}/>
          <p>Another <code>201 Created</code>, and we can see that this time the measurement set and two created measurements all have been assigned <code>id</code>s. Nothing too surprising in this step, but we've given CMS everything necessary to score this submission.</p>
          <h2 id="scoring-a-submission"><a className="tutorial-header-link" href="#scoring-a-submission">Scoring a submission</a></h2>
          <p>With the same submission <code>id</code> we've been working with, we can ask the API for the submission score via GET request. We don't need to include a request body this time since we're only interested in retrieving the score, not updating an existing record.</p>
          <InlineApiExample
            verb="GET"
            url="/v1/submissions/:id/score"
            button={<button className="usa-button" onClick={this.scoreSubmission}>Get Submission Score</button>}/>
          <p>Our API response includes a score and a breakdown of how the individual measurements contribute to the aggregate. The additional visibility helps because sometimes a submission can be valid, but incomplete for scoring purposes.</p>
          <p>That's it! We've used three API requests to create a submission, add measurements into a measurement set, and get the score, all in minutes. Each API response gives us useful information for the next step.</p>
          <p>In general, we can think about the Submissions API as a way to have a live conversation with CMS about performance measurements. Rather than waiting months to hear back about missing information or a score, the API gives us feedback that is immediate, specific, and actionable - we can easily make another API request if necessary.</p>
          <p>What we've shown is an example of working directly with the API - typically these requests are made through a web interface or script, but the requests & responses above illustrate the kind of power and speed the Submissions API and applications built against it can provide.</p>
          <h3>Next steps</h3>
          <p>Explore a more complex workflow in our <a href="/qpp-submissions-docs/advanced-tutorial">advanced tutorial</a>.</p>
          <p>To learn more about what else you can do with the API, visit our <a href="https://qpp-submissions-sandbox.navapbc.com/api-explorer">API reference</a>.</p>
        </div>
        <div className="usa-width-one-half">
          <TechnicalDetailsPane
            tutorial="basic"
            hash={this.state.hash}
            tabIndex={this.state.tabIndex}
            handleSelect={this.handleSelect}/>
        </div>
      </div>
    );
  }
}

export default BasicTutorial;
