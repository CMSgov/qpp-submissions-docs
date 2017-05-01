import React, {PureComponent} from 'react';
import Benchmark from './benchmark';

export default class Benchmarks extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="ds-h1">Benchmarks</h1>
        <p className="ds-text--lead">Benchmarks are passed to the scoring engine and used to score submissions.</p>
        <p className="ds-text--lead">Each benchmark is unique based on its combination of measureId, submissionMethod, and performanceYear. The benchmarks object passed to the scoring engine is keyed by the measureId and then by submissionMethod.</p>
        <h2 className="ds-h2">Resource Representation</h2>
        <div className='markup markup--html'>
          <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  [measureId]: {
    [submissionMethod]:`} <a href="#benchmark">Benchmark</a>
              {`
}`}
          </pre>
        </div>
        <Benchmark/>
      </div>
    );
  }
}
