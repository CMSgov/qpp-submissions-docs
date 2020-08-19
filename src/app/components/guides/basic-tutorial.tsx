import React from 'react';

import { ExternalLink, CodeTab, ApiExample, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';
import { steps, apiExamples } from './data';

const BasicTutorial = () => {
  return (
    <>
      <h2 className='ds-h2'>Tutorial: Create and Score Data</h2>
      <p>
        The Submissions API is an easy way to manage your performance data with CMS. Performance data is organized into submissions, which can have many measurements. Measurements within a submission are also grouped by category (e.g. Quality) and submission method (e.g. registry) into measurement sets.
      </p>
      <p>
        Since the API and scoring logic are updated on a regular basis as per the annual publication of the QPP Final Rule, please note that some numbers (especially scoring) in the tutorial below may be inaccurate. The <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Docs' /> and Developer Preview will always reflect the latest design.
      </p>
      <p>
        Let's walk through an example of how you might submit performance data as a registry API user!
      </p>

      <h3 className='ds-h3' id='creating-a-measurement-set'>Create a new measurement set</h3>
      <p>
        We need to create a <em>measurement set</em> first. We can do that by asking the API to create a measurement set record in the CMS database. In API terms, this means making a <code>POST</code> (synonym for <em>create</em>) request to the <code>/measurement-sets</code> endpoint.
      </p>
      <p>
        When submitting, you can pass an <code>Accept</code> header to specify the API version and type of response back by using our custom mime type, <code>application/vnd.qpp.cms.gov.v1+json</code>. We support JSON by using <code>+json</code>. Right now, only version <code>v1</code> is supported. You can also continue to use a standard <code>application/json</code> header, which will point to the latest version (currently v1).
      </p>
      <p>
        We'll also need to supply some information to tell CMS how to identify this particular submission, which you can see below. Every submission is unique to the combination of the fields provided. Note that we enforce fake TINs (starting with <code>000</code>) in the Developer Preview to avoid accidentally collecting personally identifiable information.
      </p>
      <p>
        In this first request, we will submit one Improvement Activity. Take a look at the request below, and then click the 'Response' tab to see what the API returns when we submit this request!
      </p>
      <ApiExample data={apiExamples.measurementSets} />
      <CodeTab data={steps.basic1} />

      <h3 className='ds-h3' id='scoring-a-submission'>Scoring a submission</h3>
      <p>
        With the submission <code>id</code> we were given, we can ask the API to calculate the submission score with a GET request. We don't need to include a request body this time since we're only interested in retrieving the score, and CMS doesn't need any information other than the submission <code>id</code>.
      </p>
      <ApiExample data={{verb: 'GET', url: '/submissions/:id/score'}} />
      <CodeTab data={steps.basic2} />

      <p>
        Our API response includes a bunch of new info this time, so let's break it down.
      </p>
      <p>
        The <code>Final Score</code> has a value of <code>7.5</code>. <code>Final</code> here doesn't mean it's the final end of year score for this submission - think of this instead as the <em>current aggregate estimate</em> of your total score.
      </p>
      <p>
        If you look at the first chunk of <code>JSON</code> in the <code>"parts"</code> list, the IA component of final score reads <code>7.5</code>. The <code>"detail"</code> makes clear that the scoring is based on the measurement set we submitted earlier (check the <code>id</code>s, they match!).
      </p>
      <p>
        That's it! We've used three API requests to (1) create a submission and (2) get the score, all in minutes. Each API response gives us useful information for the next step.
      </p>
      <p>
        In general, we can think about the Submissions API as a way to have a live conversation with CMS about performance measurements. Rather than waiting months to hear back about missing information or a score, the API gives us feedback that is immediate, specific, and actionable - we can easily make another API request if necessary.
      </p>
      <p>
        What we've shown is an example of working directly with the API - typically these requests are made through a web interface or script, but the requests &amp; responses above illustrate the kind of power and speed the Submissions API and applications built against it can provide.
      </p>
      <p>
        <em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.
      </p>

      <h3>Next steps</h3>
      <p>
        Updating and correcting performance data is also easy - avoid losing time by solving issues as they arise, rather than reacting months later. Go to the next tutorial to see how you can update a measurement set that you've previously submitted.
      </p>
      <LinkToId to='advanced-tutorial' text='Add and update data' attrs={{ className: 'ds-c-button ds-c-button--primary' }} offset='130' />
    </>
  );
};

export default BasicTutorial;

