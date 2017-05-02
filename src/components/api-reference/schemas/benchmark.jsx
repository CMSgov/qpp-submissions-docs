import React, {PureComponent} from 'react';
import DataModelTable from '../common/data-model-table';

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
        <h2 className="ds-h1">Benchmark</h2>
        <p className="ds-text">Historical benchmarks can be found in the <a href="https://github.com/CMSgov/qpp-measures-data/">qpp-measures-data repository</a>. Benchmarks are not directly accessible via the qpp-submissions-api.</p>
        <p className="ds-text">Benchmarks are calculated using the performance rate data of a specified benchmarkYear. Each benchmark is unique based on its combination of measureId, submissionMethod, and performanceYear.*</p>
        <h3 className="ds-h2">Resource Representation</h3>
        <div className='markup markup--html'>
          <pre className='ds-u-border--1 ds-u-padding--1'>
          {`{
  benchmarkYear: integer,
  performanceYear: integer,
  deciles: List<float>,
  status: string
}`}
          </pre>
        </div>
        <DataModelTable fields={FIELDS} />
      </div>
    );
  }
}
