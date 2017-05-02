import React, {PureComponent} from 'react';
import DataModelTable from './common/data-model-table';

const FIELDS = [
  {name: 'submission', value: 'Submission', description: '', notes: 'Please see <a href="#submissions">Submissions</a> in API Reference.'},
  {name: 'provider', value: 'Provider', description: '', notes: ''},
  {name: 'benchmarks', value: 'Benchmarks', description: '', notes: 'Please see <a href="#benchmarks">Benchmarks</a> in Scoring API Reference'},
];

export default class ScoringEngine extends PureComponent {
  render() {
    return (
      <div id="scoring-engine">
        <h1 className="ds-h1">Scoring</h1>
        <p className="ds-text--lead">The scoring engine package (@cmsgov/qpp-scoring-engines) used by the qpp-submissions-api to score submissions can be found <a href="https://github.com/CMSgov/qpp-scoring-engines">here</a> on github.</p>
        <h2 className="ds-h2">Method Signature</h2>
        <p className="ds-text--lead">Improvement activities (IA), advancing care information (ACI), and quality measures are scored differently. The scoring engine package provides three distinct scoring engines, all with the same method signature.</p>
        <div className='markup markup--html'>
          <pre className='ds-u-border--1 ds-u-padding--1'>
            {`calculateImprovementActivitiesScore(submission, provider, benchmarks)
calculateAdvancingCareInformationScore(submission, provider, benchmarks)
calculateQualityScore(submission, provider, benchmarks)
`}
          </pre>
        </div>
        <DataModelTable fields={FIELDS} />
      </div>
    );
  }
}
