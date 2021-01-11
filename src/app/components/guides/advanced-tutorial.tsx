import React from 'react';

import { CodeTab, LinkToId, ExternalLink, ApiExample } from '../../../shared';
import { steps, apiExamples } from './data';
import envConfig from '../../../envConfig';

import '../../../styles/components/tutorial.scss';

const AdvancedTutorial = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}} id='advanced-tutorial'>Tutorial: Add and update Data</h2>
      <p>
        In the <LinkToId to='tutorial' text='first tutorial' /> we covered how to create a measurement set containing Improvement Activities, and retrieve the score in two different API requests. We're now going to build on the previous tutorial by adding another Improvement Activity to the measurement set we created in the previous tutorial (all while running into a problem along the way). All of these examples serve to illustrate how the Submissions API can make it easier to react to and fix issues that arise.
      </p>
      <p>
        Like the previous tutorial, please remember that the score calculation in this tutorial may not be up to date. The <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Docs' /> will always return the latest score calculation.
      </p>

      <h3 className='tutorial-header-link' id='add-more-measures'>Add more measures to an existing measurement set</h3>
      <p>
        Previously, we created a measurement set containing one Improvement Activity. Let's try adding another Improvement Activity to this measurement set.
      </p>
      <p>
        Here's a <code>PATCH</code> request to add more measures to an existing measurement set. You can pass an <code>Accept</code> header to specify the API version and the desired response format by using our custom mime type, <code>application/vnd.qpp.cms.gov.v1+json</code>. We support JSON by using <code>+json</code>. Right now, only version <code>v1</code> is supported. You can also continue to use a standard <code>application/json</code> header, which will point to the latest version (currently v1). Check out the response and request below!
      </p>
      <ApiExample data={apiExamples.measurementSetsId1} />
      <CodeTab data={steps.advanced1} />
      <p>
        Something unexpected: a <code>422 Un-processable Entity</code> response code. This indicates that the syntax of the request was correct, but the semantics were problematic. The response body includes more specific information: <code>ValidationError</code>. The Improvement Activity we've attempted to add is not recognized by the API. The <code>PATCH</code> API request we just sent uses the same identifiers as we did in our first tutorial, but CMS already has a submission on record for this individual.
      </p>
      <p>
        Since the API (and CMS) can't assume what the correct course of action is to take for this problematic API request, the messaging in the response is handy for immediately showing us something went wrong, and what specifically.
      </p>
      <p>
        So, let's correct our request payload and try again.
      </p>
      <ApiExample data={apiExamples.measurementSetsId2} />
      <CodeTab data={steps.advanced2} />
      <p>
        A <code>201 Created</code> - great. We'll look at what the score for the updated submission record looks like next:
      </p>

      <h3 className='tutorial-header-link' id='updated-scoring'>
        Get a score for the submission record with the updated measurement set
      </h3>
      <p>
        For submissions with more performance data, this breakdown gives us visibility into how the individual measurements contribute to the aggregate. The additional visibility helps because sometimes a submission can be valid, but incomplete for scoring purposes.
      </p>

      <ApiExample data={{verb: 'GET', url: '/submissions/:id/score'}} />
      <CodeTab data={steps.advanced3} />
      <p>
        Notice that the final score has changed from 7.5 to 15. This is because we've added an additional Improvement Activity to this submission.
      </p>

      <h3 className='tutorial-header-link' id='updating-a-measure'>Updating a measure</h3>
      <p>
        Since performance data can change over time, we'll need to update CMS. Let's update an existing measure with new performance data! In addition to a measurement <code>ID</code>, we need to provide the measurement set <code>ID</code> and the measure <code>ID</code>. For the performance data itself, let's update the <code>IA_EPA_4</code> from <code>true</code> to <code>false</code> and see how that affects our score.
      </p>

      <ApiExample data={apiExamples.measurementsId} />
      <CodeTab data={steps.advanced4} />
      <p>
        A <code>200 OK</code> means we've updated the measurement in question. We can now fetch the latest score:
      </p>

      <h3 className='tutorial-header-link' id='comparing-scoring-changes'>Comparing scoring changes</h3>
      <ApiExample data={{verb: 'GET', url: '/submissions/:id/score'}} />
      <CodeTab data={steps.advanced5} />
      <p>
        A few things have changed - the final score decreased from 15 to 7.5. We know this change is due to our PATCH by looking at the score component for IA. Since we changed IA_EPA_4 to false, it is no longer considered for scoring.
      </p>
      <p>
        It's important to note that we've been working in one measurement set for this tutorial. One of the reasons that performance data for measures is organized into measurement sets is that multiple submission methods can add their own measurement sets into one submission - measure scores that might overlap the ones we provide, or differ in their attested values. In the case of multiple measurement sets, the Submissions API will calculate scores for each measurement set and pick the highest to present as the final score - that's why the API identifies that the scoring for the IA component is based on a specific measurement set ID.
      </p>
      <p>
        We've done a lot of work in 4 API requests! In this advanced tutorial, we updated a submission with Improvement Activities performance data, scored it, and updated a piece of one measurement to see how the final score reacts. That means we've successfully used each API endpoint (submission, measurement set, measurement) and understood what the responses tell us, adjusting our approach as needed. Again, all of this work is done on our terms, at our pace - no months-long round trip required.
      </p>
      <p>
        <em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.
      </p>

      <h3>Next steps</h3>
      <p>
        While we've used each API endpoint, we're far from having used every kind of API action. These tutorials have used <code>POST</code>, <code>PATCH</code>, and <code>GET</code> - there are also <code>PUT</code> and <code>DELETE</code> for the measurementSet and measurement resources.
      </p>
      <p>
        The tutorials have shown how requests can be strung together to complete complex workflows in minutes rather than months.
      </p>
      <p>
        Now, try using the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Docs' /> or sign up for the Developer Preview to experiment with some of your data.
      </p>
    </>
  );
};

export default AdvancedTutorial;
