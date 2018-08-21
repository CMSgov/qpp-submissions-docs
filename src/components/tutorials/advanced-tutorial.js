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
            <h1 className='ds-h1'>Tutorial: Update Data</h1>
            <p>In the <a href='/qpp-submissions-docs/tutorial'>first tutorial</a> we covered how to create a measurement set with category performance data, and retrieve the score in three different API requests. This time we're going to build on the previous tutorial look at adding more Quality performance data to the measurement set we created in the previous tutorial (all while running into a problem along the way). All of these examples serve to illustrate how the Submissions API can make it easier to react to and fix issues that arise.</p>
            <p>
          Like the previous tutorial, please remember that the score calculation may be inaccurate until the API is finalized. The <a href='https://qpp-submissions-sandbox.navapbc.com/'>Interactive Docs</a> will always return the latest score calculation.</p>
            <h2 className='ds-h2' id='add-more-measures'>
              <a
                className='tutorial-header-link'
                href='#add-more-measures'>
              Add more measures to an existing measurement set
            </a>
            </h2>
            <p>Previously, we created a measurement set containing quality measures. As you may know, a clinician must submit 6 Quality measures in order to get a score for that category. So let's try adding 2 more measures to the measurement set we created in the previous tutorial.</p>
            <p>Here's a <code>PATCH</code> request to add more measures to an existing measurement set. You can pass an <code>Accept</code> header to specify the API version and the desired response format by using our custom mime type, <code>application/vnd.qpp.cms.gov.v1+json</code>. We support JSON and XML by using <code>+json</code> or <code>+xml</code>. Right now, only version <code>v1</code> is supported. You can also continue to use a standard <code>application/json</code> or <code>application/xml</code> header, which will point to the latest version (currently v1).</p>
            <p>The request payload on the right can be harder to read, but it contains the same info as below formatted exactly as it's sent through the API. Check it out then click response!</p>
            <InlineApiExample
              verb='PATCH'
              url='/measurement-sets'
              params={
                <tbody>
                  <tr><td>Entity</td>
                    <td>Individual</td></tr>
                  <tr><td>Taxpayer Identification Number</td>
                    <td>000456789</td></tr>
                  <tr><td>National Provider Identifier</td>
                    <td>0123456789</td></tr>
                  <tr><td>Performance Year</td>
                    <td>2016</td></tr>
                  <tr><td className='nested-once'>Measurement Set</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_INFBLO_1</code></td>
                    <td><code>true</code></td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_ONCDIR_1</code></td>
                    <td><code>true</code></td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_EP_1</code></td>
                    <td>100 out of 100</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_PPHI_1</code></td>
                    <td><code>true</code></td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_PEA_1</code></td>
                    <td>50 out of 100</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_HIE_1</code></td>
                    <td>10 out of 100</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_HIE_2</code></td>
                    <td>20 out of 100</td></tr>
                </tbody>
            } />
            <Advanced1 />
            <p>Something unexpected: a <code>422 Unprocessable Entity</code> response code. This indicates that the syntax of the request was correct, but the semantics were problematic. The response body includes more specific information: <code>ValidationError</code>. One of the measures, measureId "3290", we've attempted to add is not recognized by the API. The <code>PATCH</code> API request we just sent uses the same identifiers as we did in our first tutorial, but CMS already has a submission on record for this individual.</p>
            <p>Since the API (and CMS) can't assume what the correct course of action is to take for this problematic API request, the messaging in the response is handy for immediately showing us something went wrong, and what specifically.</p>
            <p>It looks like we accidentally added measureId 3290, which doesn't exist. We meant to add measureId 329. So, let's correct our request payload and try again.</p>
            <InlineApiExample
              verb='PATCH'
              url='/measurement-sets'
              params={
                <tbody>
                  <tr><td>Entity</td>
                    <td>Individual</td></tr>
                  <tr><td>Taxpayer Identification Number</td>
                    <td>000345678</td></tr>
                  <tr><td>National Provider Identifier</td>
                    <td>0123456789</td></tr>
                  <tr><td>Performance Year</td>
                    <td>2016</td></tr>
                  <tr><td className='nested-once'>Measurement Set</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_INFBLO_1</code></td>
                    <td><code>true</code></td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_ONCDIR_1</code></td>
                    <td><code>true</code></td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_EP_1</code></td>
                    <td>100 out of 100</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_PPHI_1</code></td>
                    <td><code>true</code></td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_PEA_1</code></td>
                    <td>50 out of 100</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_HIE_1</code></td>
                    <td>10 out of 100</td></tr>
                  <tr><td className='nested-twice'>Measure <code>ACI_HIE_2</code></td>
                    <td>20 out of 100</td></tr>
                </tbody>
            } />
            <Advanced2 />
            <p>A <code>201 Created</code> - great. We'll look at what the score for the updated submission record looks like next:</p>
            <h2 id='updated-scoring'>
              <a
                className='tutorial-header-link'
                href='#updated-scoring'>
                Get a score for the submission record with the updated measurement set
            </a>
            </h2>
            <p>For submissions with more performance data, this breakdown gives us visibility
           how the individual measurements contribute to the aggregate. The additional visibility helps because sometimes a submission can be valid, but incomplete for scoring purposes.</p>
            <InlineApiExample
              verb='GET'
              url='/submissions/:id/score' />
            <Advanced3 />
            <p>The ACI component of our score shows many parts this time. There's a lot of numbers here, but let's decode how we arrive at the total:</p>
            <p>The <code>aci_base</code> starts at 50 because we've attested to the two required measures (<code>ACI_INFBLO_1</code>, <code>ACI_ONCDIR_1</code>).</p>
            <p>Three optional measures listed (<code>ACI_PEA_1</code>, <code>ACI_HIE_1</code>, <code>ACI_HIE_2</code>) give a possible 10 points each, multiplied by the proportion attested to, leading to partial contributions of 5, 2, and 1 points respectively.</p>
            <p>Two measures we included have 0 weighting (<code>ACI_EP_1</code>, <code>ACI_PPHI_1</code>), so they are excluded from scoring.</p>
            <p>We didn't attest to any measures that qualify for ACI or CEHRT bonuses, so those parts do not contribute to our score. These five measures give us our base ACI score of 58. With ACI contributing 25% of the total score as described in the response, our overall score is 14.5 (25% of 58).</p>
            <p>As we can see, ACI scoring requires an understanding of what measures are required and how they're weighted. However, if we become familiar with these measures, scoring via the API immediately gives us a clear picture of our score and what parts contribute - this is a big advantage in making sure we get the score we understand and expect.</p>
            <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
            <p>What if we're later in the year and can attest to a greater proportion for one of the measures? We can easily do that in the API as well!</p>
            <h2 id='updating-a-measure'>
              <a
                className='tutorial-header-link'
                href='#updating-a-measure'>
              Updating a measure
            </a>
            </h2>
            <p>Since performance data can change over time, we'll need to update CMS. Let's update an existing measure with new performance data! In addition to a measurement <code>ID</code>, we need to provide the measurement set <code>ID</code> and the measure <code>ID</code>. For the performance data itself, let's update the <code>ACI_HIE_1</code> proportion from 10 out of 100 to 50 out of 100 and see how that affects our score.</p>
            <InlineApiExample
              verb='PATCH'
              url='/measurements/:id'
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
            } />
            <Advanced4 />
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
            <p>A few things have changed - the final score increased to 15.5. We know this change is due to our PATCH by looking at the score component contributed by <code>ACI_HIE_1</code> - it increased from 1 to 5, since the proportion increased from 10 to 50 out of 100 with ten possible points from this measure. The ACI base score went up from 58 to 62, and with the ACI component being 25% of the score our final score increased by 1.</p>
            <p>It's important to note that we've been working in one measurement set for this tutorial. One of the reasons that performance data for measures is organized into measurement sets is that multiple submission methods can add their own measurement sets into one submission - measure scores that might overlap the ones we provide, or differ in their attested values. In the case of multiple measurement sets, the Submissions API will calculate scores for each measurement set and pick the highest to present as the final score - that's why the API identifies that the scoring for the ACI component is based on a specific measurement set ID.</p>
            <p>We've done a lot of work in 5 API requests! In this advanced tutorial, we updated a submission with quality performance data, scored it, and updated a piece of one measurement to see how the final score reacts. That means we've successfully used each API endpoint (submission, measurement set, measurement) and understood what the responses tell us, adjusting our approach as needed. Again, all of this work is done on our terms, at our pace - no months-long round trip required.</p>
            <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
            <h3>Next steps</h3>
            <p>While we've used each API endpoint, we're far from having used every kind of API action. These tutorials have used <code>POST</code>, <code>PATCH</code>, and <code>GET</code> - there are also <code>PUT</code> for each of the three resources we worked with and <code>DELETE</code> for the measurementSet and measurement resources.</p>
            <p>The tutorials have shown how requests can be strung together to complete complex workflows in minutes rather than months. </p>
            <p>Now, try using the <a href='https://qpp-submissions-sandbox.navapbc.com/'>Interactive Docs</a> or sign up for the Developer Preview to experiment with some of your data.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedTutorial;
