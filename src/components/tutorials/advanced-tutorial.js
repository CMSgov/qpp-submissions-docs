import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from './common/inline-api-example';
import Advanced1 from './common/steps/advanced-1';
import Advanced2 from './common/steps/advanced-2';
import Advanced3 from './common/steps/advanced-3';
import Advanced4 from './common/steps/advanced-4';
import Advanced5 from './common/steps/advanced-5';

class AdvancedTutorial extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Tutorial: Add and update Data</h1>
            <p>In the <a href='/qpp-submissions-docs/tutorial'>first tutorial</a> we covered how to create a measurement set containing Improvement Activities, and retrieve the score in two different API requests. We're now going to build on the previous tutorial by adding another Improvement Activity to the measurement set we created in the previous tutorial (all while running into a problem along the way). All of these examples serve to illustrate how the Submissions API can make it easier to react to and fix issues that arise.</p>
            <p>
          Like the previous tutorial, please remember that the score calculation in this tutorial may not be up to date. The <a href='https://preview.qpp.cms.gov/api/submissions/public/docs/'>Interactive Docs</a> will always return the latest score calculation.</p>
            <h2 className='ds-h2' id='add-more-measures'>
              <a
                className='tutorial-header-link'
                href='#add-more-measures'>
              Add more measures to an existing measurement set
            </a>
            </h2>
            <p>Previously, we created a measurement set containing one Improvement Activity. Let's try adding another Improvement Activity to this measurement set.</p>
            <p>Here's a <code>PATCH</code> request to add more measures to an existing measurement set. You can pass an <code>Accept</code> header to specify the API version and the desired response format by using our custom mime type, <code>application/vnd.qpp.cms.gov.v1+json</code>. We support JSON and XML by using <code>+json</code> or <code>+xml</code>. Right now, only version <code>v1</code> is supported. You can also continue to use a standard <code>application/json</code> or <code>application/xml</code> header, which will point to the latest version (currently v1). Check out the response and request below!</p>
            <InlineApiExample
              verb='PATCH'
              url='/measurement-sets/:id'
              params={
                <tbody>
                  <tr><td>Submission ID</td>
                    <td>0313d351-624d-409b-837f-500d603819aa</td></tr>
                  <tr><td>Measurement Set ID</td>
                    <td>0313d351-a094-4dc2-b632-23cd88bffb5e</td></tr>
                  <tr><td>Category</td>
                    <td>IA</td></tr>
                  <tr><td>Submission Method</td>
                    <td>Registry</td></tr>
                  <tr><td>Performance Start</td>
                    <td>2018-01-01</td></tr>
                  <tr><td>Performance End</td>
                    <td>2018-06-01</td></tr>
                  <tr><td className='nested-once'>Measurements</td></tr>
                  <tr><td className='nested-twice'>Measure <code>IA_EPA_10</code></td>
                    <td><code>true</code></td></tr>
                </tbody>
            } />
            <Advanced1 />
            <br />
            <p>Something unexpected: a <code>422 Unprocessable Entity</code> response code. This indicates that the syntax of the request was correct, but the semantics were problematic. The response body includes more specific information: <code>ValidationError</code>. The Improvement Activity we've attempted to add is not recognized by the API. The <code>PATCH</code> API request we just sent uses the same identifiers as we did in our first tutorial, but CMS already has a submission on record for this individual.</p>
            <p>Since the API (and CMS) can't assume what the correct course of action is to take for this problematic API request, the messaging in the response is handy for immediately showing us something went wrong, and what specifically.</p>
            <p>So, let's correct our request payload and try again.</p>
            <InlineApiExample
              verb='PATCH'
              url='/measurement-sets/:id'
              params={
                <tbody>
                  <tr><td>Submission ID</td>
                    <td>0313d351-624d-409b-837f-500d603819aa</td></tr>
                  <tr><td>Measurement Set ID</td>
                    <td>0313d351-a094-4dc2-b632-23cd88bffb5e</td></tr>
                  <tr><td>Category</td>
                    <td>IA</td></tr>
                  <tr><td>Submission Method</td>
                    <td>Registry</td></tr>
                  <tr><td>Performance Start</td>
                    <td>2018-01-01</td></tr>
                  <tr><td>Performance End</td>
                    <td>2018-06-01</td></tr>
                  <tr><td className='nested-once'>Measurements</td></tr>
                  <tr><td className='nested-twice'>Measure <code>IA_EPA_3</code></td>
                    <td><code>true</code></td></tr>
                </tbody>
            } />
            <Advanced2 />
            <br />
            <p>A <code>201 Created</code> - great. We'll look at what the score for the updated submission record looks like next:</p>
            <h2 id='updated-scoring'>
              <a
                className='tutorial-header-link'
                href='#updated-scoring'>
                Get a score for the submission record with the updated measurement set
            </a>
            </h2>
            <p>For submissions with more performance data, this breakdown gives us visibility into how the individual measurements contribute to the aggregate. The additional visibility helps because sometimes a submission can be valid, but incomplete for scoring purposes.</p>
            <InlineApiExample
              verb='GET'
              url='/submissions/:id/score' />
            <Advanced3 />
            <br />
            <p>Notice that the final score has changed from 7.5 to 15. This is because we've added an additional Improvement Activity to this submission.</p>
            <h2 id='updating-a-measure'>
              <a
                className='tutorial-header-link'
                href='#updating-a-measure'>
              Updating a measure
            </a>
            </h2>
            <p>Since performance data can change over time, we'll need to update CMS. Let's update an existing measure with new performance data! In addition to a measurement <code>ID</code>, we need to provide the measurement set <code>ID</code> and the measure <code>ID</code>. For the performance data itself, let's update the <code>IA_EPA_4</code> from <code>true</code> to <code>false</code> and see how that affects our score.</p>
            <InlineApiExample
              verb='PATCH'
              url='/measurements/:id'
              params={
                <tbody>
                  <tr><td>Measurement ID</td>
                    <td>0313d5c6-1a2d-4564-9ac3-d006bf03efac</td></tr>
                  <tr><td>Measurement Set ID</td>
                    <td>0313d351-a094-4dc2-b632-23cd88bffb5e</td></tr>
                  <tr><td>Measure <code>IA_EPA_4</code></td>
                    <td><code>false</code></td></tr>
                </tbody>
            } />
            <Advanced4 />
            <br />
            <p>A <code>200 OK</code> means we've updated the measurement in question. We can now fetch the latest score:</p>
            <h2 id='comparing-scoring-changes'>
              <a
                className='tutorial-header-link'
                href='#comparing-scoring-changes'>
              Comparing scoring changes
            </a>
            </h2>
            <InlineApiExample
              verb='GET'
              url='/submissions/:id/score' />
            <Advanced5 />
            <br />
            <p>A few things have changed - the final score decreased from 15 to 7.5. We know this change is due to our PATCH by looking at the score component for IA. Since we changed IA_EPA_4 to false, it is no longer considered for scoring.</p>
            <p>It's important to note that we've been working in one measurement set for this tutorial. One of the reasons that performance data for measures is organized into measurement sets is that multiple submission methods can add their own measurement sets into one submission - measure scores that might overlap the ones we provide, or differ in their attested values. In the case of multiple measurement sets, the Submissions API will calculate scores for each measurement set and pick the highest to present as the final score - that's why the API identifies that the scoring for the IA component is based on a specific measurement set ID.</p>
            <p>We've done a lot of work in 4 API requests! In this advanced tutorial, we updated a submission with Improvement Activities performance data, scored it, and updated a piece of one measurement to see how the final score reacts. That means we've successfully used each API endpoint (submission, measurement set, measurement) and understood what the responses tell us, adjusting our approach as needed. Again, all of this work is done on our terms, at our pace - no months-long round trip required.</p>
            <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
            <h3>Next steps</h3>
            <p>While we've used each API endpoint, we're far from having used every kind of API action. These tutorials have used <code>POST</code>, <code>PATCH</code>, and <code>GET</code> - there are also <code>PUT</code> and <code>DELETE</code> for the measurementSet and measurement resources.</p>
            <p>The tutorials have shown how requests can be strung together to complete complex workflows in minutes rather than months.</p>
            <p>Now, try using the <a href='https://preview.qpp.cms.gov/api/submissions/public/docs'>Interactive Docs</a> or sign up for the Developer Preview to experiment with some of your data.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedTutorial;
