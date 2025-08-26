import envConfig from '../../../envConfig';
import { ExternalLink } from '../../../shared';
import { DocPageProps } from '../../../shared/types';

const ErrorCodes: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/28/2025</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}} id='references'>Error Codes</h2>

      <h3 className='ds-text-heading--lg'>To review a list of response codes provided by the API, please visit the <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} text='Interactive Docs' />.</h3>
    </div>
  );
};

export default ErrorCodes;