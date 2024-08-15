import { ExternalLink, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';
import { DocPageProps } from '../../../shared/types';

const Announcements: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/28/2024</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}}>Announcements</h2>

      <h3 className='ds-text-heading--xl'>General</h3>
      <p className='ds-text-body--md'>
        See <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-developer-preview-docs/announcements`} text='Developer Preview Announcements' />
      </p>

      <h3 className='ds-text-heading--xl'>Submission API</h3>
      <ul>
        <li>
          Updates for traditional MIPS submissions and scoring for PY 2024 are now available.
          </li>
        <li>
          For APM participants only, APP submissions and scoring rules for PY 2024 are now available.
          </li>
        <li>
          The Submissions API has received infastructure updates with minor changes to end users.
        </li>
        <li>
          See <LinkToId to='/change-log' text='Change Log' /> and <LinkToId to='/error-codes' text='Error Codes' /> pages for specific details.
        </li>
      </ul>

      <h3 className='ds-text-heading--xl'>Measures Repository</h3>
      <ul>
        <li>
          2024 Measures are published and available here: <ExternalLink href='https://github.com/CMSgov/qpp-measures-data/tree/develop/measures' />
        </li>
        <li>
          2024 MVP Measures are published and available here: <ExternalLink href='https://github.com/CMSgov/qpp-measures-data/tree/develop/mvp' />
        </li>
      </ul>
    </div>
  );
};

export default Announcements;
