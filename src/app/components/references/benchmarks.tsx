import React from 'react';

import { ExternalLink, CodeTab, DataModelTable, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';
import { submissionsTabs, submissionsFields } from './data';

const titleAndId = {
  'Historical Benchmarks': 'historical-benchmarks',
  'Current Benchmarks': 'current-benchmarks',
  'Benchmark Calculations': 'benchmark-calculations',
};

const Benchmarks = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}} id='current-benchmarks'>Benchmarks</h2>
      <ul>
        {Object.entries(titleAndId).map(([title, id], i) =>
          <li key={i}>
            <LinkToId to={`#${id}`} text={title} offset='120' />
          </li>,
        )}
      </ul>
      <p className='ds-text--lead'>
        Benchmarks serve as the reference points for measurements and are used to score submissions. Each benchmark is unique based upon its combination of measureId, submissionMethod, and performanceYear, and each has a list of 9 deciles. Deciles are the data points that divide the range of measurements recorded into ten equal-sized populations.
      </p>
      <p className='ds-text--lead'>
        <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/Benchmarks`} text='Try it out!' />
      </p>
      <h3 className='ds-h3'>Resource Representation</h3>
      <CodeTab data={submissionsTabs.fields} />
      <DataModelTable data={submissionsFields.fields} />

      <h3 className='ds-h3' id={titleAndId['Historical Benchmarks']}>Historical Benchmarks</h3>
      <p className='ds-text--lead'>
        Historical benchmarks are stored in and read from the <ExternalLink href='https://github.com/CMSgov/qpp-measures-data' text='qpp-measures-data repository' />. A historical benchmark's performanceYear will be two years after the benchmarkYear. For example, data from 2015 was used to create historical benchmarks which will then be used to score submissions from the 2017 performanceYear.
      </p>

      <h3 className='ds-h3' id={titleAndId['Current Benchmarks']}>Current Benchmarks</h3>
      <p className='ds-text--lead'>
        Current benchmarks (and the scores based on them) are not final and only used for scoring when a historical benchmark does not exist* for a given measureId, submissionMethod, and performanceYear combination. Current benchmarks are periodically updated** using new data points until all data for that benchmark year has been collected. At that time, that current benchmark will be converted into a historical benchmark. Until it is converted into a historical benchmark, a current benchmark's benchmarkYear and performanceYear will be the same. In the case of a current benchmark with a benchmarkYear and performanceYear of 2017, its performanceYear will change over to 2019 when it becomes a historical benchmark and will be used to score submissions in 2019.
      </p>
      <p>
        It is possible for there to be both a current and historical benchmark for any given measureId, submissionMethod, and performanceYear combination. In such a case, the historical benchmark will always be the one returned by the API and used in scoring a submission.
      </p>

      <p className='ds-text--lead'>
        <b>Notes:</b>
      </p>
      <p className='ds-text'>
        *A historical benchmark may not exist for several reasons including an insufficient number of data points for that measure and submission method in that benchmark year.
      </p>
      <p className='ds-text'>
        **A current benchmark will not exist in the database until at least 20 data points exist for that benchmark. Until such time, that benchmark will be represented as an empty benchmark with the status of 'currentInsufficientData'.
      </p>

      <h3 className='ds-h3' id={titleAndId['Benchmark Calculations']}>Benchmark Calculations</h3>
      <p className='ds-text--lead'>
        A current benchmark's deciles property is populated and updated periodically when at least 20 data points exist for its measureId, submissionMethod, and performanceYear combination.
      </p>
      <p className='ds-text--lead'>
        The Math.js library's quantileSeq function is used to calculate the deciles.
      </p>
    </>
  );
};

export default Benchmarks;
