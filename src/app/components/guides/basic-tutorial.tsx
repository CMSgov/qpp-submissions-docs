import { ExternalLink, CodeTab, ApiExample, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';
import { steps, apiExamples } from './data';
import { DocPageProps } from '../../../shared/types';

const BasicTutorial: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/28/2024</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}}>Tutorial: Create and Score Data via API</h2>
      <p>
        The Submissions API is an easy way to manage your performance data with CMS. Performance data is organized into submissions, which can have many measurements. Measurements within a submission are also grouped by category (e.g. quality) and submission method (e.g. registry) and program name (e.g. mips) into measurement sets.
      </p>
      <p>
        Since the API and scoring logic are updated on a regular basis as per the annual publication of the QPP Final Rule, please use the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Docs' /> and the Developer Preview Testing Environment as they will be updated annually to reflect the QPP Final Rule.
      </p>
      <p>
        Let's walk through an example of how you might submit performance data as a registry API user!
      </p>

      <h3 className='ds-text-heading--xl' id='creating-a-measurement-set'>Create a new measurement set</h3>
      <p>
        We need to create a <em>measurement set</em> first. We can do that by asking the API to create a measurement set record in the CMS database. In API terms, this means making a <code>POST</code> (synonym for <em>create</em>) request to the <code>/measurement-sets</code> endpoint.
      </p>
      <p>
        When submitting, you can pass an <code>Accept</code> header to specify the API version and type of response back by using our custom mime type, <code>application/vnd.qpp.cms.gov.v1+json</code>. We support JSON by using <code>+json</code>. Right now, only version <code>v1</code> is supported. You can also continue to use a standard <code>application/json</code> header, which will point to the latest version.
      </p>
      <p>
        We'll also need to supply some information to tell CMS how to identify this particular submission, which you can see below. Every submission is unique to the combination of the fields provided. Note that we enforce fake TINs (starting with <code>000</code>) in the Developer Preview Testing Environment to avoid accidentally collecting personally identifiable information.
      </p>
      <p>
        Take a look at the request below, and then click the 'Response' tab to see what the API returns when we submit this request!
      </p>
      <ApiExample data={apiExamples.measurementSets} />
      <CodeTab data={steps.basic1} />

      <h3 className='ds-text-heading--xl' id='scoring-a-submission'>Scoring a submission</h3>
      <p>
        With the submission <code>id</code> we were given, we can ask the API to calculate the submission score with a GET request. We don't need to include a request body this time since we're only interested in retrieving the score, and CMS doesn't need any information other than the submission <code>id</code>.
      </p>
      <ApiExample data={{verb: 'GET', url: '/submissions/:id/score'}} />
      <CodeTab data={steps.basic2} />

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
        Updating and correcting performance data is also easy - avoid losing time by solving issues as they arise, rather than reacting months later. Go to <LinkToId to='/advanced-tutorial' text='Tutorial: Add and Update data via API' offset='130' /> to see how you can update a measurement set that you've previously submitted.
      </p>
    </div>
  );
};

export default BasicTutorial;

