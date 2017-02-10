import React, { Component } from 'react';
import './App.css';
import '../node_modules/uswds/dist/css/uswds.css';
import '../node_modules/uswds/dist/js/uswds.js';

import Header from './header';
import Footer from './footer';
import InlineApiExample from './inline-api-example';

class App extends Component {
  render() {
    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <Header />
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="logo">
              <em className="usa-logo-text">
                <a href="#" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
              </em>
            </div>
          </div>
        </div>
        <div className="usa-grid">
          <div className="usa-width-one-half">
            <h1>Submissions API</h1>
            <h2>Creating & scoring a new submission</h2>
            <p>There is new performance data to submit - let's send it to CMS! We can do that by asking the API to save our measurement information. In API terms, this means making a POST (synonym for <em>create</em>) request that looks like the following:</p>
            <InlineApiExample verb="POST" url="/v1/submissions"/>

            <p>Every API request gives us back an immediate response with useful information:</p>
            <pre className="api-request-example">
{`{
  "measureId": "IA_EPA_4",
  "value": true,
  "id": "b24aa2c2-f1ab-4d28-a7a4-882d93e5a31d",
  "measurementSetId": "d2acc2af-8382-402e-aa97-0fd118451b22"
}`}
            </pre>
            <p>From this response, we know that the POST request succeeded, implying that our submission was saved and CMS has a record of your submission. Let's see how we scored!</p>
            <p>Since we're going to be making many submissions, we need to ask the API for the score of a specific submission. CMS assigns each submission a unique `id`, and our previous API response includes the `id` for the freshly created submission. We can use that when we ask the API for the submission's score, which is done with a GET request:</p>
            <InlineApiExample verb="GET" url="/v1/submissions/:id/score"/>
            <pre className="api-request-example">show API response</pre>
            <p>Our API response includes a score and a breakdown of how the individual measurements contribute to the aggregate. The additional visibility helps because sometimes a submission can be valid, but incomplete for scoring purposes - if you're missing information needed to generate a score, the response will make that clear. We can fix the API request and try again.</p>
            <p>We can also edit a previous submission if we want to add another measurement - to do that, we make a PATCH request including a submission ID for the one we want to update:</p>
            <InlineApiExample verb="PATCH" url="/v1/submissions/:id"/>
            <pre className="api-request-example">show API response</pre>
            <p>This time, the API response shows us the updated submission to confirm that the update was successful. When we try to GET the score again, it will reflect the updates to the submission:</p>
            <InlineApiExample verb="GET" url="/v1/submissions/:id/score"/>
            <p>In general, we can think about the Submissions API as a way to have a live conversation with CMS about performance measurements.</p>
            <pre className="api-request-example">potential diagram</pre>
            <p>Rather than waiting months to hear back about missing information or a score, the API gives us feedback that is immediate, specific, and actionable - we can easily make another API request.</p>
            <p>What we've shown so far is an example of working directly with the API - typically these requests are made through a web interface or script, but the requests & responses above illustrate the kind of power and speed the Submissions API and applications built against it can provide.</p>
            <p>To learn more about what else you can do with the API, visit our API reference here: <a href="">link to API reference</a>.</p>
          </div>
          <div className="usa-width-one-half">
            <pre>
{`{
  "data": {
    "startIndex": 0,
    "itemsPerPage": 100,
    "submissions": [
      {
        "id": "060eb4b1-1a93-467e-b3eb-0b8518ed4d49",
        "createdAt": "2016-11-16T06:43:32.000Z",
        "updatedAt": "2016-11-16T06:43:32.000Z",
        "programName": "mips",
        "entityType": "individual",
        "taxpayerIdentificationNumber": "000456789",
        "nationalProviderIdentifier": "9876543210",
        "performanceYear": 2016,
        "measurementSets": [
          {
            "id": "060eb4b1-1a93-467e-b3eb-0b8518ed4d49",
            "submissionId": "060eb4b1-1a93-467e-b3eb-0b8518ed4d49",
            "category": "ia",
            "source": "provider",
            "performanceStart": "2016-01-01",
            "performanceEnd": "2016-06-01",
            "measurements": [
              {
                "measureId": "IA_EPA_4",
                "value": true,
                "id": "b24aa2c2-f1ab-4d28-a7a4-882d93e5a31d",
                "measurementSetId": "d2acc2af-8382-402e-aa97-0fd118451b22"
              }
            ]
          },
          {
            "id": "060eb4b1-1a93-467e-b3eb-0b8518ed4d49",
            "submissionId": "060eb4b1-1a93-467e-b3eb-0b8518ed4d49",
            "category": "aci",
            "source": "provider",
            "performanceStart": "2016-01-01",
            "performanceEnd": "2016-06-01",
            "measurements": [
              {
                "measureId": "ACI_PHCDRR_5",
                "value": true,
                "id": "b24aa2c2-f1ab-4d28-a7a4-882d93e5a31d",
                "measurementSetId": "d2acc2af-8382-402e-aa97-0fd118451b22"
              },
              {
                "value": {
                  "numerator": 1,
                  "denominator": 2
                },
                "id": "060eb4b1-1a93-467e-b3eb-0b8518ed4d49",
                "measurementSetId": "060eb4b1-1a93-467e-b3eb-0b8518ed4d49",
                "measureId": "ACI_HIE_3"
              }
            ]
          }
        ]
      }
    ]
  }
}`}
            </pre>
          </div>
        </div>
        <script src="/assets/js/vendor/uswds.min.js"></script>
        <Footer />
      </div>
    );
  }
}

export default App;
