import React, {PureComponent} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../styles/common/example-code-tabs.css';

import DataModelTable from './common/data-model-table';

// Dummy fields for now to help layout page
const FIELDS = [
  {name: 'submission', value: 'Submission', description: '', notes: 'Please see <a href="/schemas#submissions">Submissions</a> in API Reference.'},
  {name: 'provider', value: 'Provider', description: '', notes: ''},
  {name: 'benchmarks', value: 'Benchmarks', description: '', notes: 'Please see <a href="/schemas#benchmarks">Benchmarks</a> in API Reference.'}
];

const SCORE_RESOURCE = {
  title: 'Score Resource',
  description: 'The Score resource represents the top level scoring data for a submission object. Each Score will have multiple Score Parts and may have multiple Score Warnings or Score Errors. The Score Detail field lists the current version of the Scoring Engine used to score the corresponding submission.',
  example: `"score": {
    "name": string,
    "title": string,
    "detail": string,
    "value": number
    "parts": array(ScorePart),
    "metadata": object(ScoreMetadata),
    "warnings": array(string),
    "errors": array(string)
  }`
};

const SCORE_PART_RESOURCE = {
  title: 'Score Part Resource',
  description: 'The Score Part resource represents the Categorical scoring data for a submission object. Categorical scoring refers to one of the three QPP Performance Categories, which are IA, ACI or Quality.',
  example: `[
    "name": string,
    "title": string,
    "detail": string,
    "value": number,
    "original": object(CategoryScore),
    "metadata": object(ScorePartMetadata)
  ]`
};

const CATEGORY_SCORE_RESOURCE = {
  title: 'Category Score Resource',
  description: 'The Category Score resource represents for each of the three individual category scoring engines, the scoring output for a category’s measurement sets contained in a submission.',
  example: `"original": {
    "name": string,
    "value": number,
    "detail": string,
    "parts": array(MeasurementSetScorePart)
  }`
};

const MEASUREMENT_SET_SCORE_PART_RESOURCE = {
  title: 'Measurement Set Score Part Resource',
  description: 'The Scored Measurement Set represents the scoring output for each category measurement set in a submission.',
  example: `[
    "name": string,
    "value": number,
    "title": string,
    "detail": string,
    "parts": array(MeasurementScore | MeasurementScorePart),
    "metadata": object(MeasurementSetScorePartMetadata)
  ]`
};

const CodeBlock = ({code}) => {
  const reformattedCode = code.split('\n').map(l => l.trim()).map((line, idx, arr) => idx > 0 && idx < arr.length - 1 ? '  ' + line : line).join('\n');

  return (
    <div className='markup markup--html'>
      <pre className='ds-u-border--1 ds-u-padding--1'>
        <code>
          {`${reformattedCode}`}
        </code>
      </pre>
    </div>
  );
};

const Resource = ({title, description, example}) => {
  return (
    <div className='ds-u-margin-bottom--4'>
      <h1 className='ds-h1'>{title}</h1>
      <p className='ds-text--lead'>{description}</p>
      <h2 className='ds-h2'>{title} Representation</h2>
      <CodeBlock code={example} />
      <h2 className='ds-h2'>{title} Details</h2>
      <DataModelTable fields={FIELDS} />
    </div>
  );
};

export default class ScoringEngine extends PureComponent {
  render() {
    return (
      <div id='scoring-engine'>
        <h1 className='ds-h1'>Scoring</h1>
        <h1 className='ds-h1'>Overview</h1>
        <p className='ds-text--lead'>
          The Scoring Engine resides within the QPP Submissions API application and calculates a performance score when it receives QPP submission data. A performance score is generated in two different ways. Firstly, submission by GET request with the identifier of a stored submission to the Submissions API’s submissions endpoint located at /submissions/:id/score will produce a score, and secondly, submission by POST request with a full submission in QPP JSON format to the Submissions API’s score preview endpoint located at /submissions/score-preview will also produce a score.
          Using the provided submission sent through the Submissions API, the scoring engine evaluates the contained: provider profile information, measurement set performance data, and available benchmarking data, for each performance category.
        </p>
        <p className='ds-text--lead'>
          Next, each performance category is individually processed and scored by evaluating the corresponding measurement sets. Processing “metadata" and "messages" attached to the scored measurement sets and measurements are also compiled to generate a Score Object.
        </p>
        <p className='ds-text--lead'>
          Lastly, the Score Object is passed back to the QPP Submissions API, which builds the application response by inserting the Score Object into the response body and returns this response to the requester. This response body contains JSON describing in detail the record of the current aggregate estimate of the submission score.
        </p>
        <h1 className='ds-h1'>Score Object Navigation</h1>
        <p className='ds-text--lead'>
          Too be built...
        </p>
        <Resource {...SCORE_RESOURCE} />
        <Resource {...SCORE_PART_RESOURCE} />
        <Resource {...CATEGORY_SCORE_RESOURCE} />
        <Resource {...MEASUREMENT_SET_SCORE_PART_RESOURCE} />
        <p className='ds-text--lead'>Improvement activities (IA), advancing care information (ACI), and Quality measures are scored differently. The scoring engine package used provides one scoring engine that scores and combines these three categories.</p>
        <div>
          <p className='ds-text--lead'>Scores are calculated by a scoring engine package. This functionality is not yet publicly exposed.</p>
          <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
        </div>
      </div>
    );
  }
}
