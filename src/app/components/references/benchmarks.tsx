
import { ExternalLink, CodeTab, DataModelTable } from '../../../shared';
import envConfig from '../../../envConfig';
import { benchmarksTabs, benchmarksFields } from './data';
import { DocPageProps } from '../../../shared/types';

const Benchmarks: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/31/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}} id='current-benchmarks'>Benchmarks</h2>
      <p className='ds-text--lead'>
        Benchmarks serve as the reference points for measurements and are used to score submissions. Each benchmark is unique based upon its combination of measureId, submissionMethod, and performanceYear, and each has a list of 9 data points.
      </p>
      <p>
        Please see the <ExternalLink href={`${envConfig.amazoneawsUrl}/uploads/2272/2023%20Quality%20Benchmarks.zip`}
        text='2023 Merit-based Incentive Payment System (MIPS) Quality Measure Benchmarks Overview' /> for more information on MIPS Quality Benchmarks.
      </p>
      <p>
        You can view the benchmarks for a Performance Year using the publicly accessible <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/Public%20Endpoints/listBenchmarks`} text='benchmarks endpoint' />.
      </p>
      <CodeTab data={benchmarksTabs.fields} />
      <DataModelTable data={benchmarksFields.fields} />

    </div>
  );
};

export default Benchmarks;
