import React, {PureComponent} from 'react';
import Benchmark from './benchmark';

export default class Benchmarks extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="ds-h1" id="benchmarks">Benchmarks</h2>
        <ul>
          <li><a href="#benchmark">Benchmark</a></li>
          <li><a href="#historical-benchmarks">Historical Benchmarks</a></li>
          <li><a href="#current-benchmarks">Current Benchmarks</a></li>
          <li><a href="#benchmark-calculations">Benchmark Calculations</a></li>
        </ul>
        <p className="ds-text--lead">Benchmarks are used to score submissions. They are passed to the scoring engine as nested objects keyed by measureId and then by submissionMethod.</p>
        <p className="ds-text">Each benchmark is unique based on its combination of measureId, submissionMethod, and performanceYear.</p>
        <p className="ds-text">For information on the benchmark data model itself please see <a href="/schemas#benchmark">Benchmark</a>.</p>
        <h3 className="ds-h2">Resource Representation</h3>
        <div className='markup markup--html'>
          <pre className='ds-u-border--1 ds-u-padding--1'>
      {`{
  [measureId]: {
    [submissionMethod]:`} <a href="/schemas#benchmark">Benchmark</a>
      {`
}`}
          </pre>
        </div>
        <Benchmark/>
        <h2 className="ds-h1">Types of Benchmarks</h2>
        <h3 className="ds-h2" id="historical-benchmarks">Historical Benchmarks</h3>
        <p className="ds-text--lead" >Historical benchmarks are stored in and read from the <a href="https://github.com/CMSgov/qpp-measures-data/">qpp-measures-data repository</a>. A historical benchmark's performanceYear will be two years after the benchmarkYear. For example, data from 2015 was used to create historical benchmarks which will then be used to score submissions from the 2017 performanceYear.</p>
        <h3 className="ds-h2" id="current-benchmarks">Current Benchmarks</h3>
        <p className="ds-text--lead" id="current-benchmarks">Current benchmarks (and the scores based on them) are not final and only used for scoring when a historical benchmark does not exist for a given measureId, submissionMethod, and performanceYear combination. Current benchmarks are periodically updated** using new data points until all data for that benchmark year has been collected. At that time, that current benchmark will be converted into a historical benchmark. Until it is converted into a historical benchmark, a current benchmark's benchmarkYear and performanceYear will be the same. In the case of a current benchmark with a benchmarkYear and performanceYear of 2017, its performanceYear will change over to 2019 when it becomes a historical benchmark and will be used to score submissions in 2019.</p>
        <p className="ds-text--lead"><b>Notes:</b></p>
        <p className="ds-text">*It is possible for there to be both a current and historical benchmark for any given measureId, submissionMethod, and performanceYear combination. In such a case, the historical benchmark will always be the one to be passed to the scoring engine and used for scoring.</p>
        <p className="ds-text">**A current benchmark will not exist in the database until at least 20 data points exist for that benchmark. Until such time, that benchmark will be passed to the scoring engine as an empty benchmark with the status of 'currentInsufficientData'.</p>
        <p className="ds-text">A historical benchmark may not exist for several reasons including an insufficient number of data points for that measure and submission method in that benchmark year.</p>
        <h3 className="ds-h2" id="benchmark-calculations">Benchmark Calculations</h3>
        <p className="ds-text--lead">A current benchmark's deciles property is populated and updated periodically when at least 20 data points exist for its measureId, submissionMethod, and performanceYear combination.</p>
        <p className="ds-text--lead">The Math.js library's quantileSeq function is used to calculate the deciles.</p>
      </div>
    );
  }
}
