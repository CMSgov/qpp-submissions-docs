import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from './common/inline-api-example';
import Basic1 from './common/steps/basic-1';
import Basic2 from './common/steps/basic-2';

class BasicTutorial extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Tutorial: Create and Score Data</h1>
            <p>The Submissions API is an easy way to manage your performance data with CMS. Performance data is organized into submissions, which can have many measurements. Measurements within a submission are also grouped by category (e.g. Quality) and submission method (e.g. registry) into measurement sets.</p>
            <p>Since the API and scoring logic are updated on a regular basis as per the annual publication of the QPP Final Rule, please note that some numbers (especially scoring) in the tutorial below may be inaccurate. The <a href='https://qpp-submissions-sandbox.navapbc.com/'>Interactive Docs</a> and Developer Preview will always reflect the latest design.</p>
            <p>Let's walk through an example of how you might submit performance data as a registry API user!</p>
            <h2 className='ds-h2' id='creating-a-measurement-set'>
              <a
                className='tutorial-header-link'
                href='#creating-a-measurement-set'>
                Create a new measurement set
            </a>
            </h2>
            <p>We need to create a <em>measurement set</em> first. We can do that by asking the API to create a mesurement set record in the CMS database. In API terms, this means making a <code>POST</code> (synonym for <em>create</em>) request to the <code>/measurement-sets</code> endpoint. </p>
            <p>When submitting, you can pass an <code>Accept</code> header to specify the API version and type of response back by using our custom mime type, <code>application/vnd.qpp.cms.gov.v1+json</code>. We support JSON and XML by using <code>+json</code> or <code>+xml</code>. Right now, only version <code>v1</code> is supported. You can also continue to use a standard <code>application/json</code> or <code>application/xml</code> header, which will point to the latest version (currently v1).</p>
            <p>We'll also need to supply some information to tell CMS how to identify this particular submission, which you can see below. Every submission is unique to the combination of the fields provided. Note that we enforce fake TINs (starting with <code>000</code>) in the Developer Preview to avoid accidentally collecting personally identifiable information.</p>
            <p>In this first request, we will submit one Improvement Activity. Take a look at the request below, and then click the 'Response' tab to see what the API returns when we submit this request!</p>
            <InlineApiExample
              verb='POST'
              url='/measurement-sets'
              params={
                <tbody>
                  <tr><td>Entity</td>
                    <td>Individual</td></tr>
                  <tr><td>Taxpayer Identification Number</td>
                    <td>000456789</td></tr>
                  <tr><td>National Provider Identifier</td>
                    <td>000000002</td></tr>
                  <tr><td>Performance Year</td>
                    <td>2018</td></tr>
                </tbody>
            } />
            <Basic1 />
            <br />
            <p>Every API request gives us back an immediate response with useful information, which we can see above. Much like a good conversation, this response includes a restatement of what we said, plus additional input from CMS's understanding to make sure we're both on the same page.</p>
            <p>This response has two key pieces of information - the <em>response code</em>, which is a number that indicates success (<code>200</code> to <code>299</code>) or failure (<code>400</code> to <code>499</code>). The other piece is the <em>response body</em>, which contains <code>JSON</code> or <code>XML</code> describing in more detail the record stored with CMS.</p>
            <p>We know that the <code>POST</code> request succeeded from the response code (<code>201 Created</code>). CMS also gives us an <code>id</code> that tells how to refer to this submission and measurement set later, some timestamps to let us know when this submission was created and last updated, and what measurements CMS received from us.</p>
            <p>If you're interested in comparing the API requests and responses, you can click between the tabs above at any time.</p>
            <h2 className='ds-h2' id='scoring-a-submission'>
              <a
                className='tutorial-header-link'
                href='#scoring-a-submission'>
              Scoring a submission
            </a>
            </h2>
            <p>With the submission <code>id</code> we were given, we can ask the API to calculate the submission score with a GET request. We don't need to include a request body this time since we're only interested in retrieving the score, and CMS doesn't need any information other than the submission <code>id</code>.</p>
            <InlineApiExample
              verb='GET'
              url='/submissions/:id/score' />
            <Basic2 />
            <br />
            <p>Our API response includes a bunch of new info this time, so let's break it down.</p>
            <p>The <code>Final Score</code> has a value of <code>7.5</code>. <code>Final</code> here doesn't mean it's the final end of year score for this submission - think of this instead as the <em>current aggregate estimate</em> of your total score.</p>
            <p>If you look at the first chunk of <code>JSON</code> in the <code>"parts"</code> list, the IA component of final score reads <code>7.5</code>. The <code>"detail"</code> makes clear that the scoring is based on the measurement set we submitted earlier (check the <code>id</code>s, they match!).</p>
            <p>That's it! We've used three API requests to (1) create a submission and (2) get the score, all in minutes. Each API response gives us useful information for the next step.</p>
            <p>In general, we can think about the Submissions API as a way to have a live conversation with CMS about performance measurements. Rather than waiting months to hear back about missing information or a score, the API gives us feedback that is immediate, specific, and actionable - we can easily make another API request if necessary.</p>
            <p>What we've shown is an example of working directly with the API - typically these requests are made through a web interface or script, but the requests & responses above illustrate the kind of power and speed the Submissions API and applications built against it can provide.</p>
            <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>

            <h3>Next steps</h3>
            <p>Updating and correcting performance data is also easy - avoid losing time by solving issues as they arise, rather than reacting months later. Go to the next tutorial to see how you can update a measurement set that you've previously submitted.</p>
            <a className='ds-c-button ds-c-button--primary' href='/qpp-submissions-docs/advanced-tutorial'>Add and update data</a>

          </div>
        </div>
      </div>
    );
  }
}

export default BasicTutorial;
