import React, {PureComponent} from 'react';
import DataModelTable from './common/data-model-table';

const FIELDS = [
  {name: 'submission', value: 'Submission', description: '', notes: 'Please see <a href="/schemas#submissions">Submissions</a> in API Reference.'},
  {name: 'provider', value: 'Provider', description: '', notes: ''},
  {name: 'benchmarks', value: 'Benchmarks', description: '', notes: 'Please see <a href="/schemas#benchmarks">Benchmarks</a> in API Reference.'},
];

export default class ScoringEngine extends PureComponent {
  render() {
    return (
      <div id="scoring-engine">
        <h1 className="ds-h1">Scoring</h1>
        <p>Scores are calculated by a scoring engine package. This functionality is not yet publicly exposed.</p>
        <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
        <h2 className="ds-h2">Method Signature</h2>
        <p>Improvement activities (IA), advancing care information (ACI), and quality measures are scored differently. The scoring engine package used provides one scoring engine that scores and combines these three categories.</p>
        <div className='markup markup--html'>
          <pre className='ds-u-border--1 ds-u-padding--1'>
            {`score(submission, provider, benchmarks)
`}
          </pre>
        </div>
        <DataModelTable fields={FIELDS} />
      </div>
    );
  }
}
