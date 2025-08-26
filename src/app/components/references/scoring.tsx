import { ExternalLink, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';
import { DocPageProps } from '../../../shared/types';

interface ITextAndId {
  [k: string]: {
    id: string;
    sub: {
      [k: string]: string;
    }
  };
}

const textAndId: ITextAndId = {
  'Improvement Activities': {
    id: 'ia',
    sub: {
      'Improvement Activity Submissions': 'ia-sub',
      'Improvement Activity Scoring Response': 'ia-response',
    },
  },
  'Promoting Interoperability': {
    id: 'pi',
    sub: {
      'Promoting Interoperability Submissions': 'pi-sub',
      'Promoting Interoperability Scoring Response': 'pi-response',
    },
  },
  'Quality': {
    id: 'quality',
    sub: {
      'Quality Submissions': 'quality-sub',
      'Quality Scoring Response': 'quality-response',
    },
  },
};

const Scoring: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/28/2025</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}}>Scoring</h2>
      <p className='ds-text-body--lg'>
        The scoring engine is responsible for interpreting submissions and outputting a score. Each category score is utilized to create the QPP score object.
      </p>
      <p className='ds-text-body--lg'>
        Note: Registries and QCDRs submitting on behalf of others will only have access to view the score for the data they submitted.  If they need to see the complete score, they will need permission from the practice.
      </p>
      <h3 className='ds-text-heading--xl'>Developer Preview Testing Environment</h3>
      <p className='ds-text-body--lg'>
        In the Developer Preview Testing Environment you can use the <code>POST .../score-preview</code> endpoint to view the scoring object returned for the data you are proposing to submit.
        The data is not saved. Try the <code>POST .../submissions/score-preview</code> endpoint <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/Submissions/SubmissionsController_scorePreview`} text='here' />.
      </p>
      <p className='ds-text-body--lg'>
        Note: You can use the <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-developer-preview-docs/tutorial-special-scoring-scenarios`}text='special scoring scenarios test data'/> to see the score responses for different types of eligibility profiles.
      </p>
      <h3 className='ds-text-heading--xl'>During Submissions Window</h3>
      <p>
        Once submitting quality data during the Submission window you can use the <code>GET .../submissions/&#123;id&#125;/score</code> to view the score for the data after it is submitted.
        This submission data is saved under the submissionId and retrieved to view the score.
        Try the <code>GET .../submissions/&#123;id&#125;/score</code> endpoint <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/Submissions/SubmissionsController_getScore`} text='here' />.
      </p>
      <h2 className='ds-text-heading--2xl' id={textAndId['Improvement Activities'].id}>Improvement Activities (IA) Scoring</h2>
      <p className='ds-text-body--lg'>
        The only available option for reporting Improvement Activities is boolean, and only Activities completed need to be reported.
      </p>
      <ul>
        <li>
          <LinkToId to='/measurements#boolean-measurements' text='Boolean Measures' offset='120' />
        </li>
      </ul>

      <h2 className='ds-text-heading--2xl'>Promoting Interoperability (PI) Scoring</h2>
      <p className='ds-text-body--lg'>
        The Promoting Interoperability Category requires all measures associated with the category to either be reported or their corresponding exclusion to be claimed. Additionally, to receive credit for the category, all the criteria below must be fulfilled:
      </p>
      <ul>
        <li>Utilization of the required CEHRT and the reporting of the corresponding CMS CEHRT ID in the submission</li>
      </ul>

      <p className='ds-text-body--lg'>
        For additional information on reporting Promoting Interoperability, visit the Resource Library for your specific program needs.
      </p>
      <ul>
        <li><ExternalLink href='https://qpp.cms.gov/mips/promoting-interoperability?py=2025' text='Traditional MIPS' /></li>
        <li><ExternalLink href='https://qpp.cms.gov/mips/explore-mips-value-pathways' text='Explore MVPs' /></li>
        <li><ExternalLink href='https://qpp.cms.gov/mips/app-promoting-interoperability' text='PI: APP Requirements' /></li>
      </ul>

      <p className='ds-text-body--lg'>
        The measure types available for submission are outlined below. Each measure in the repo will dictate which type is to be utilized.
      </p>
      <ul>
        <li>
          <LinkToId to='/measurements#proportion-measurements' text='Proportion Measures' offset='120' />
        </li>
        <li>
          <LinkToId to='/measurements#boolean-measurements' text='Boolean' offset='120' />
        </li>
      </ul>

      <h2 className='ds-text-heading--2xl' id={textAndId.Quality.id}>Quality</h2>
      <p className='ds-text-body--lg'>
        For additional information on reporting Quality, visit the <ExternalLink href={`${envConfig.qppCmsUrl}/resources/resource-library`} text='Resource Library' /> for your specific program needs.
      </p>
      <ul>
        <li><ExternalLink href={`${envConfig.qppCmsUrl}/mips/quality-requirements?py=2025`} text='Traditional MIPS' /></li>
        <li><ExternalLink href={`${envConfig.qppCmsUrl}/mips/explore-mips-value-pathways`} text='Explore MVPs' /></li>
        <li><ExternalLink href={`${envConfig.qppCmsUrl}/mips/app-quality-requirements`} text='Quality: APP Requirements' /></li>
      </ul>

      <p className='ds-text-body--lg'>
        Submission structure in the Quality category are contingent on the measure being submitted. If there are questions around the data to be submitted in the fields, please refer to the measure specification. The available types related to the measures are outlined below:
      </p>
      <ul>
        <li>
          <LinkToId to='/measurements#non-proportion-measurements' text='Non-Proportion Measures' offset='120' />
        </li>
        <li>
          <LinkToId to='/measurements#single-performance-rate-measurements' text='Single Performance Rates' offset='120' />
        </li>
        <li>
          <LinkToId to='/measurements#multi-performance-rate-measurements' text='Multi-Performance Rates' offset='120' />
        </li>
      </ul>

      <p className='ds-text-body--lg'>
        eCQMs require the utilization of CEHRT and the reporting of the corresponding CMS CEHRT ID in the submission.
      </p>
    </div>
  );
};

export default Scoring;
