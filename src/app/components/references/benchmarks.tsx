import React from 'react';

import { ExternalLink, CodeTab, DataModelTable } from '../../../shared';
import envConfig from '../../../envConfig';
import { submissionsTabs, submissionsFields } from './data';

const Benchmarks = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 06/23/2021</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}} id='current-benchmarks'>Benchmarks</h2>
      
      <p className='ds-text--lead'>
        Benchmarks serve as the reference points for measurements and are used to score submissions. Each benchmark is unique based upon its combination of measureId, submissionMethod, and performanceYear, and each has a list of 9 deciles. Deciles are the data points that divide the range of measurements recorded into ten equal-sized populations.
      </p>
      <p>
        Please see the <ExternalLink href={`${envConfig.amazoneawsUrl}/uploads/1275/2021%20MIPS%20Quality%20Benchmarks.zip`} 
        text='2021 Merit-based Incentive Payment System (MIPS) Quality Measure Benchmarks Overview' /> for more information on MIPS Quality Benchmarks.
      </p>
      <p>
        You can view the benchmarks for a Performance Year using the publicly accessible <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/Public%20Endpoints/listBenchmarks`} text='benchmarks endpoint' />.
      </p>
      

      <h3 className='ds-h3'>Resource Representation</h3>
      <CodeTab data={submissionsTabs.fields} />
      <DataModelTable data={submissionsFields.fields} />

    </>
  );
};

export default Benchmarks;
