import React, {PureComponent} from 'react';

export default class Benchmarks extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="ds-h1" id="benchmarks">Benchmarks</h2>
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
      </div>
    );
  }
}
