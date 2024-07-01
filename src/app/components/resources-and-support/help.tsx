import { ExternalLink, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';
import { DocPageProps } from '../../../shared/types';

const Help: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}}>Help</h2>

      <p className='ds-text-body--md'>
        Please contact the Quality Payment Program Service Center <ExternalLink href={`${envConfig.qppCmsUrl}/about/help-and-support`} /> if you have policy or API questions.
        </p>

      <p className='ds-text-body--md'>
        For information around Quality Payment Program requirements, please visit <ExternalLink href={envConfig.qppCmsUrl} />
      </p>

      <p className='ds-text-body--md'>
        For frequently asked questions regarding APIs please see the <LinkToId to='/frequently-asked-questions' text='FAQ Section' />
      </p>

      <p className='ds-text-body--md'>
        Please bring any questions not answered by our available documentation to the monthly support calls/Virtual Office Hours.  Or contact the Quality Payment Program service center: <ExternalLink href={`${envConfig.qppCmsUrl}/about/help-and-support`} />
      </p>
    </div>
  );
};

export default Help;
