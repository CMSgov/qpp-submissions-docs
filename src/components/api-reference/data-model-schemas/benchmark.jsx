import React, {PureComponent} from 'react';
import DataModelTable from './common/data-model-table';

const FIELDS = [
  {name: 'benchmarkYear', value: 'integer', description: 'A four digit integer', notes: 'Read-only<br/>Optional<br/><br/>The benchmarkYear corresponds to the year of performance data that was used to generate this benchmark. In other words, submissions for performanceYear x will be compared against the benchmarkYear y\'s results.'},
  {name: 'performanceYear', value: 'integer', description: 'A four digit integer', notes: 'Read-only<br/>Optional<br/><br/>The performanceYear corresponds to the time period in which the performance data that was submitted for scoring originated.'},
  {name: 'deciles', value: 'List<float>', description: 'A list of 9 floats', notes:'Read-only<br/>Optional<br/><br/>This list represents the deciles for a given measure, submitted via a particular submission method in a particular performance year. The nine numbers represent the inclusive lower bounds of deciles 2 through 10. The upper and lower bounds of the measurement value range are implied to be 100 and 0 respectively for direct measures and 0 and 100 respectively for inverse measures. The range of any given decile begins at its lower bound and continues up to but does not include the subsequent decile\'s lower bound. If the subsequent decile\'s lower bound is equal to the current decile\'s lower bound, then that decile is undefined or, in other words, empty.'},
  {name: 'status', value: 'string', description: '\'current\', \'currentInsufficientData\', \'historical\', or \'historicalNoData\'', notes: 'Read-only<br/>Required<br/><br/><b>\'current\'</b>: current benchmark subject to ongoing updates.<b>\'currentInsufficientData\'</b>: unable to calculate current benchmark. <b>\'historical\'</b>: historical data present. <b>\'historicalNoData\'</b>: historical data expected but not present.'}
];

export default class Benchmark extends PureComponent {
  render() {
  return (
    <div id="benchmark">
      <h1 className="ds-h1">Benchmark</h1>
      <p className="ds-text--lead">Benchmarks are calculated using the performance rate data of a specified benchmarkYear. Each benchmark is unique based on its combination of measureId, submissionMethod, and performanceYear.*</p>
      <h2 className="ds-h2">Types of Benchmarks</h2>
      <p className="ds-text--lead"><b>Historical Benchmarks:</b> Historical benchmarks are stored in the <a href="https://github.com/CMSgov/qpp-measures-data/">qpp-measures-data repository</a>. A historical benchmark's performanceYear will be two years after the benchmarkYear. For example, data from 2015 was used to create historical benchmarks which will be used to score submissions from the 2017 performanceYear.</p>
      <p className="ds-text--lead"><b>Current Benchmarks:</b> Current benchmarks (and the scores based on them) are not final and only used for scoring when a historical benchmark does not exist for a given measureId, submissionMethod, and performanceYear combination. Current benchmarks are periodically updated** using new data points until all data for that benchmark year has been collected. At that time, that current benchmark will be converted into a historical benchmark. Until it is converted into a historical benchmark, a current benchmark's benchmarkYear and performanceYear will be the same. In the case of a current benchmark with a benchmarkYear and performanceYear of 2017, its performanceYear will change over to 2019 when it becomes a historical benchmark and will be used to score submissions in 2019.</p>
      <p className="ds-text--lead"><b>Notes:</b></p>
      <p className="ds-text--lead">*It is possible for there to be both a current and historical benchmark for any given measureId, submissionMethod, and performanceYear combination. In such a case, the historical benchmark will always be the one to be passed to the scoring engine.</p>
      <p className="ds-text--lead">**A current benchmark will not exist in the database until at least 20 data points exist for that benchmark. Until such time, that benchmark will be passed to the scoring engine as an empty benchmark with the status of 'currentInsufficientData'.</p>
      <p className="ds-text--lead">A historical benchmark may not exist for several reasons including an insufficient number of data points for that measure and submission method in that benchmark year.</p>
      <h2 className="ds-h2">Resource Representation</h2>
      <div className='markup markup--html'>
        <pre className='ds-u-border--1 ds-u-padding--1'>
        {`{
  benchmarkYear: integer,
  performanceYear: integer,
  deciles: List<float>,
  status: string
}`}
        </pre>
      </div><DataModelTable fields={FIELDS} />
    </div>
    );
  }
}
