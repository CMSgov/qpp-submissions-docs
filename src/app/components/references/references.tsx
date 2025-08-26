import { ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';
import { DocPageProps } from '../../../shared/types';

const References: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/28/2025</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}} id='references'>References</h2>

      <h3 className='ds-text-heading--xl'>General References</h3>
      <ul>
        <li>
          Resource Library: <ExternalLink href={`${envConfig.qppCmsUrl}/about/resource-library`} />
        </li>
      </ul>

      <h3 className='ds-text-heading--xl'>Submissions and Scoring API</h3>
      <ul>
        <li>
          Interactive QPP Submissions API Documentation: <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} />
        </li>
        <li>
          Interactive QPP Scoring API Documentation: <ExternalLink href={`${envConfig.qppCmsUrl}/api/scoring/docs`} />
        </li>
        <li>
          Measures, Activities, and Benchmarks Repository: <ExternalLink href={`https://github.com/CMSgov/qpp-measures-data`} />
        </li>
        <li>
          Explore Measures page: <ExternalLink href={`${envConfig.qppCmsUrl}/mips/explore-measures/quality-measures`} />
        </li>
        <li>
          QRDA III to JSON Conversion Tool in Production: <ExternalLink href={`https://github.com/CMSgov/qpp-conversion-tool`} />
        </li>
      </ul>

      <h3 className='ds-text-heading--xl'>Eligibility API</h3>
      <ul>
        <li>
          QPP Participation Status Lookup Tool: <ExternalLink href={`${envConfig.qppCmsUrl}/participation-lookup`} />
        </li>
        <li>
          Interactive QPP Eligibility API Documentation: <ExternalLink href={`${envConfig.qppCmsUrl}/api/eligibility/docs`} />
        </li>
      </ul>

      <h3 className='ds-text-heading--xl'>Authentication and Authorization API</h3>
      <ul>
        <li>
          Interactive AUTH API Documentation: <ExternalLink href={`${envConfig.qppCmsUrl}/api/auth/docs`} />
        </li>
      </ul>
    </div>
  );
};

export default References;
