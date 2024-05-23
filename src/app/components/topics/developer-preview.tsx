import { ExternalLink } from '../../../shared';

import envConfig from '../../../envConfig';
import { DocPageProps } from '../../../shared/types';

const DeveloperPreview: React.FC<DocPageProps> = ({dataTestId}) =>{
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Developer Preview</h2>
      <p className='ds-text'>
        See updated documents <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-developer-preview-docs`} text='Developer Preview Testing Environment' />
      </p>
    </div>
  );
};

export default DeveloperPreview;
