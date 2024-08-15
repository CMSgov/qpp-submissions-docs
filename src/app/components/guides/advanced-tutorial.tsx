import { CodeTab, LinkToId, ExternalLink, ApiExample } from '../../../shared';
import { steps, apiExamples } from './data';
import envConfig from '../../../envConfig';

import '../../../styles/components/tutorial.scss';
import { DocPageProps } from '../../../shared/types';

const AdvancedTutorial: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/28/2024</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}} id='advanced-tutorial'>Tutorial: Add and update data via API</h2>
      <p>
        In the <LinkToId to='/tutorial' text='first tutorial' /> we covered how to create a measurement set and retrieve the score in two different API requests. We're now going to build on the previous tutorial by adding another measure to the measurement set we created in the previous tutorial. All of these examples serve to illustrate how the Submissions API can make it easier to react to and fix issues that arise.
      </p>

      <h3 className='tutorial-header-link' id='add-more-measures'>Add more measures to an existing measurement set</h3>
      <p>
        Here's a <code>PATCH</code> request to add more measures to an existing measurement set. You can pass an <code>Accept</code> header to specify the API version and the desired response format by using our custom mime type, <code>application/vnd.qpp.cms.gov.v1+json</code>. We support JSON by using <code>+json</code>. You can also continue to use a standard <code>application/json</code> header, which will point to the latest version. Check out the response and request below!
      </p>
      <ApiExample data={apiExamples.measurementSetsId2} />
      <CodeTab data={steps.advanced2} />

      <h3>Next steps</h3>
      <p>
        While we've used each API endpoint, we're far from having used every kind of API action. These tutorials have used <code>POST</code>, <code>PATCH</code>, and <code>GET</code> - there are also <code>PUT</code> and <code>DELETE</code> for the measurementSet and measurement resources.
      </p>
      <p>
        The tutorials have shown how requests can be strung together to complete complex workflows in minutes rather than months.
      </p>
      <p>
        Now, try using the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Docs' /> to experiment with some of your data.
      </p>
    </div>
  );
};

export default AdvancedTutorial;
