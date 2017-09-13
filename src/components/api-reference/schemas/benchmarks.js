import React, {PureComponent} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../styles/common/example-code-tabs.css';

import DataModelTable from '../common/data-model-table';

const FIELDS = [
  {name: 'benchmarkYear', value: 'integer', description: 'A four digit integer', notes: 'Read-only<br/><br/>The benchmarkYear corresponds to the year of performance data that was used to generate this benchmark. In other words, submissions for performanceYear x will be compared against the benchmarkYear y\'s results.'},
  {name: 'performanceYear', value: 'integer', description: 'A four digit integer', notes: 'Read-only<br/><br/>The performanceYear corresponds to the time period in which the performance data that was submitted for scoring originated.'},
  {name: 'submissionMethod', value: 'string', description: 'The method by which data is submitted for this benchmark', notes: 'Read-only<br/><br/>Acceptable values are <b>cmsWebInterface</b>, <b>electronicHealthRecord</b>, <b>claims</b>, <b>registry</b>, <b>certifiedSurveyVendor</b>, and <b>administrativeClaims</b>.'},
  {name: 'measureId', value: 'string', description: 'The id of the measure for which the benchmark has decile values.', notes: 'Read-only<br/><br/>All measures and their IDs are available in <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a>.'},
  {name: 'deciles', value: 'array(float)', description: 'A list of 9 floats', notes: 'Read-only<br/>Optional<br/><br/>This list represents the deciles for a given measure, submitted via a particular submission method in a particular performance year. The nine numbers represent the inclusive lower bounds of deciles 2 through 10. The upper and lower bounds of the measurement value range are implied to be 100 and 0 respectively for direct measures and 0 and 100 respectively for inverse measures. The range of any given decile begins at its lower bound and continues up to but does not include the subsequent decile\'s lower bound. If the subsequent decile\'s lower bound is equal to the current decile\'s lower bound, then that decile is undefined or, in other words, empty.'},
  {name: 'status', value: 'string', description: '\'current\', \'currentInsufficientData\', \'historical\', or \'historicalNoData\'', notes: 'Read-only<br/>Required<br/><br/><b>\'current\'</b>: current benchmark subject to ongoing updates.<b>\'currentInsufficientData\'</b>: unable to calculate current benchmark. <b>\'historical\'</b>: historical data present. <b>\'historicalNoData\'</b>: historical data expected but not present.'}
];

export default class Benchmarks extends PureComponent {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);
    return (
      <div>
        <h2 className='ds-h1' id='benchmarks'>Benchmarks</h2>
        <ul>
          <li><a href='#historical-benchmarks'>Historical Benchmarks</a></li>
          <li><a href='#current-benchmarks'>Current Benchmarks</a></li>
          <li><a href='#benchmark-calculations'>Benchmark Calculations</a></li>
        </ul>
        <p className='ds-text--lead'>Benchmarks serve as the reference points for measurements and are used to score submissions. Each benchmark is unique based upon its combination of measureId, submissionMethod, and performanceYear, and each has a list of 9 deciles. Deciles are the data points that divide the range of measurements recorded into ten equal-sized populations.</p>
        <p className='ds-text--lead'><a href='https://qpp-submissions-sandbox.navapbc.com/#/Benchmarks'>Try it out!</a></p>
        <h3 className='ds-h2'>Resource Representation</h3>
        <div>
          <Tabs
            className='example-code-tabs'>
            <TabList>
              <Tab>JSON</Tab>
              <Tab>XML</Tab>
            </TabList>
            <TabPanel>
              <pre>
                {`{
  "benchmarkYear": integer,
  "performanceYear": integer,
  "submissionMethod": string,
  "measureId": string,
  "deciles": array(float),
  "status": string
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <benchmarkYear>integer</benchmarkYear>
  <performanceYear>integer</performanceYear>
  <submissionMethod>string</submissionMethod>
  <measureId>string</measureId>
  <deciles>array(float)</deciles>
  <status>string</status>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={FIELDS} />
        <h3 className='ds-h1' id='historical-benchmarks'>Historical Benchmarks</h3>
        <p className='ds-text--lead' >Historical benchmarks are stored in and read from the <a href='https://github.com/CMSgov/qpp-measures-data/'>qpp-measures-data repository</a>. A historical benchmark's performanceYear will be two years after the benchmarkYear. For example, data from 2015 was used to create historical benchmarks which will then be used to score submissions from the 2017 performanceYear.</p>
        <h3 className='ds-h1' id='current-benchmarks'>Current Benchmarks</h3>
        <p className='ds-text--lead'>Current benchmarks (and the scores based on them) are not final and only used for scoring when a historical benchmark does not exist* for a given measureId, submissionMethod, and performanceYear combination. Current benchmarks are periodically updated** using new data points until all data for that benchmark year has been collected. At that time, that current benchmark will be converted into a historical benchmark. Until it is converted into a historical benchmark, a current benchmark's benchmarkYear and performanceYear will be the same. In the case of a current benchmark with a benchmarkYear and performanceYear of 2017, its performanceYear will change over to 2019 when it becomes a historical benchmark and will be used to score submissions in 2019.<br /><br />It is possible for there to be both a current and historical benchmark for any given measureId, submissionMethod, and performanceYear combination. In such a case, the historical benchmark will always be the one returned by the API and used in scoring a submission.</p>
        <p className='ds-text--lead'><b>Notes:</b></p>
        <p className='ds-text'>*A historical benchmark may not exist for several reasons including an insufficient number of data points for that measure and submission method in that benchmark year.</p>
        <p className='ds-text'>**A current benchmark will not exist in the database until at least 20 data points exist for that benchmark. Until such time, that benchmark will be represented as an empty benchmark with the status of 'currentInsufficientData'.</p>
        <h3 className='ds-h1' id='benchmark-calculations'>Benchmark Calculations</h3>
        <p className='ds-text--lead'>A current benchmark's deciles property is populated and updated periodically when at least 20 data points exist for its measureId, submissionMethod, and performanceYear combination.</p>
        <p className='ds-text--lead'>The Math.js library's quantileSeq function is used to calculate the deciles.</p>
      </div>
    );
  }
}
