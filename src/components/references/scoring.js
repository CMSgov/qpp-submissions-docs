import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../styles/common/example-code-tabs.css';

import DataModelTable from './common/data-model-table';

import submissionJsonExampleIa from './common/submission-example-ia.json';
import submissionJsonExampleAci from './common/submission-example-aci.json';
import submissionJsonExampleQuality from './common/submission-example-quality.json';
import scoringJsonExampleIa from './common/scoring-example-output-ia.json';
import scoringJsonExampleAci from './common/scoring-example-output-aci.json';
import scoringJsonExampleQuality from './common/scoring-example-output-quality.json';

const submissionJsonExampleStringIa = JSON.stringify(submissionJsonExampleIa, null, 2);
const submissionJsonExampleStringAci = JSON.stringify(submissionJsonExampleAci, null, 2);
const submissionJsonExampleStringQuality = JSON.stringify(submissionJsonExampleQuality, null, 2);
const scoringJsonExampleStringIa = JSON.stringify(scoringJsonExampleIa, null, 2);
const scoringJsonExampleStringAci = JSON.stringify(scoringJsonExampleAci, null, 2);
const scoringJsonExampleStringQuality = JSON.stringify(scoringJsonExampleQuality, null, 2);

/**
 * Reformats a multi-line string to display correctly in <pre></pre> tags, so a developer does not need to manage
 * indentation within JSON blobs
 * @param code
 */
const reformattedCode = (code) => {
  return code
    .split('\n')
    .map(l => l.trim())
    .map((line, idx, arr) => {
      if (idx > 0 && idx < arr.length - 1) {
        return `  ${line}`;
      }

      return line;
    })
    .join('\n');
};

const CodeBlock = ({json}) => {
  const reformattedJSON = reformattedCode(json);

  return (
    <Tabs className='example-code-tabs'>
      <TabList>
        <Tab>Sample JSON</Tab>
      </TabList>
      <TabPanel>
        <pre dangerouslySetInnerHTML={{__html: `${reformattedJSON}`}} />
      </TabPanel>
    </Tabs>
  );
};

CodeBlock.propTypes = {
  json: PropTypes.string.isRequired
};

const DataTableWithHeader = ({fields, header}) => {
  if (!fields) return null;
  return (
    <div className='ds-u-margin-top--2'>
      <h3 className='ds-h3'>{header}</h3>
      <DataModelTable fields={fields} />
    </div>
  );
};

DataTableWithHeader.propTypes = {
  fields: PropTypes.array,
  header: PropTypes.string.isRequired
};

const MetadataMessagesTitle = ({id}) => <h2 id={`${id}-meta`} className='ds-h2'>Metadata and Message Resource</h2>;

MetadataMessagesTitle.propTypes = {
  id: PropTypes.string.isRequired
};

const MetadataMessagePropType = PropTypes.shape({
  metadata: PropTypes.arrayOf(PropTypes.object),
  messages: PropTypes.arrayOf(PropTypes.object)
});

const MetadataMessages = ({id, base, ia, aci, quality}) => {
  if (Object.values(base).length > 0) {
    return (
      <div className='ds-u-margin-top--4'>
        <MetadataMessagesTitle id={id} />
        <DataTableWithHeader fields={base.metadata} header='Metadata' />
        <DataTableWithHeader fields={base.messages} header='Messages' />
      </div>
    );
  } else if (Object.values(ia).concat(Object.values(aci).concat(Object.values(quality))).length > 0) {
    return (
      <div className='ds-u-margin-top--4'>
        <MetadataMessagesTitle id={id} />
        <DataTableWithHeader fields={ia.metadata} header='Improvement Activities Metadata' />
        <DataTableWithHeader fields={ia.messages} header='Improvement Activities Messages' />
        <DataTableWithHeader fields={aci.metadata} header='Advancing Care Information Metadata' />
        <DataTableWithHeader fields={aci.messages} header='Advancing Care Information Messages' />
        <DataTableWithHeader fields={quality.metadata} header='Quality Metadata' />
        <DataTableWithHeader fields={quality.messages} header='Quality Messages' />
        <DataTableWithHeader fields={quality.cpc_plus_metadata} header='Quality CPC+ Metadata' />
        <DataTableWithHeader fields={quality.messages} header='Quality CPC+ Messages' />
      </div>
    );
  } else {
    return null;
  }
};

MetadataMessages.propTypes = {
  id: PropTypes.string.isRequired,
  base: MetadataMessagePropType,
  ia: MetadataMessagePropType,
  aci: MetadataMessagePropType,
  quality: MetadataMessagePropType
};

const Resource = ({id, title, description, example, fields, metadataMessages}) => {
  return (
    <div className='ds-u-margin-bottom--4'>
      <h1 className='ds-h1' id={id}>{title}</h1>
      <p className='ds-text--lead'>{description}</p>
      <h2 className='ds-h2'>Resource Representation</h2>
      <CodeBlock {...example} />
      <DataModelTable fields={fields} />
      <MetadataMessages {...metadataMessages} id={id} />
    </div>
  );
};

const ResourceFieldsPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.string
}).isRequired;

const ResourceMetadataMessagesPropType = PropTypes.shape({
  base: MetadataMessagePropType,
  ia: MetadataMessagePropType,
  aci: MetadataMessagePropType,
  quality: MetadataMessagePropType
});

Resource.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  example: PropTypes.objectOf(PropTypes.string).isRequired,
  fields: PropTypes.arrayOf(ResourceFieldsPropType).isRequired,
  metadataMessages: ResourceMetadataMessagesPropType.isRequired
};

export default class ScoringEngine extends PureComponent {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);

    return (
      <div id='scoring-engine'>
        <h1 className='ds-h1'>Scoring</h1>
        <ul>
          <li><a href='#IA'>Improvement Activities</a></li>
          <ul>
            <li><a href='#IA-Sub'>Improvment Activity Submissions</a></li>
            <li><a href='IA-Response'>Improvement Activity Scoring Response</a></li>
          </ul>
          <li><a href='#PI'>Promoting Interoperability</a></li>
          <ul>
            <li><a href='#PI-Sub'>Promoting Interoperability Submissions</a></li>
            <li><a href='#PI-Response'>Promoting Interoperability Scoring Response</a></li>
          </ul>
          <li><a href='#Quality'>Quality</a></li>
          <ul>
            <li><a href='#Quality-Sub'>Quality Submissions</a></li>
            <li><a href='#Quality-Response'>Quality Scoring Response</a></li>
          </ul>
        </ul>
        <div>
          <h1 className='ds-h1'>Overview</h1>
          <p className='ds-text--lead'>
            The scoring engine is responsible for interpreting submissions and outputting a score. Each category score is utilized to create the Overall Score for QPP. Related to Registry and QCDR submissions, only an Overall Score will be given. To view a Final Score, permission from the practice must be given.
          </p>
          <p className='ds-text--lead'>
            A performance score is generated in two different ways. First, submission by GET request with the identifier of a stored submission to the Submissions API’s submissions endpoint located at <code>/submissions/:id/score</code> will produce a score. Second, submission by POST request with a full submission in QPP JSON format to the Submissions API’s score preview endpoint located at <code>/submissions/score-preview</code> will also produce a score.
          </p>
          <p className='ds-text--lead'>
            In the sections below, each category within QPP that can be submitted will be explained and examples provided. Measures and Activities available for submission can be found here: <a href='https://github.com/CMSgov/qpp-measures-data/blob/master/measures/2018/measures-data.json'>qpp-measures-data</a>.
          </p>
          <p className='ds-text--lead'>
            Last, the Score Object is passed back to the QPP Submissions API, which builds the application response by inserting the Score Object into the response body and returns this response to the requester. This response body contains JSON describing in detail the record of the current aggregate estimate of the submission score.
          </p>
        </div>
        <div>
          <h1 className='ds-h1'>Group Vs. Individual Submission</h1>
          <p className='ds-text--lead'>
            There are two available options for submission, either Group, or Individual. These create two different records and are not combined to create a single score. If you are reporting as a Group, it is important to report every category you are reporting as a Group. If you are reporting as an individual, the same premise applies. The <code>"entityType"</code> field is the indicator within the submission to determine what is being reported. If reporting as a group, only the <code>"taxpayerIdentificationNumber"</code> is applicable. If you are reporting as an individual, you must report both the <code>"taxpayerIdentificationNumber"</code> and the corresponding <code>"nationalProviderIdentifier"</code>.
          </p>
          <br />
        </div>
        <div>
          <h1 className='ds-h1' id='IA'>Improvement Activities (IA)</h1>
          <p className='ds-text--lead'>
          The only available option for reporting Improvement Activities is boolean, and only Activities completed need to be reported.
          </p>
          <ul>
            <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#boolean'>Boolean</a></li>
          </ul>
          <div>
            <h2 className='ds-h2' id='IA-Sub'>Example IA Submission</h2>
            <p className='ds-text--lead'>
          The example submission below contains 4 activities. The reported activities contain both High and Medium weighted activities.
            </p>
            <br />
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${submissionJsonExampleStringIa}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <br />
        <div>
          <h2 className='ds-h2' id='IA-Response'>Example IA Submission Output Object</h2>
          <p className='ds-text--lead'>
          The output below shows the score at multiple levels. Although the IA category score has exceed the maximum points, you can never receive a score higher than the max. Activities that are High weighted are receiving a <code>"value": 20</code> at the actvity level in the response. Medium weighted activities are receiving <code>"value": 10</code>. The category has a <code>"maxContribution"</code> of 40 and the a <code>"maxContribution"</code> of 15 toward Overall Score.
          </p>
          <Tabs className='example-code-tabs'>
            <TabList>
              <Tab>Sample JSON</Tab>
            </TabList>
            <TabPanel>
              <pre>{`${scoringJsonExampleStringIa}`}</pre>
            </TabPanel>
          </Tabs>
        </div>
        <br />
        <div>
          <h1 className='ds-h1' id='PI'>Promoting Interoperability (PI)</h1>
          <p className='ds-text--lead'>
          The Promoting Interoperability Category has been updated since last year and now requires all measures associated with the category to either be reported or their corresponding exclusion to be claimed. Additionally, to receive credit for the category, all the criteria below must be fulfilled:
          </p>
          <ul>
            <li>Utilization of 2015 CEHRT and the reporting of the corresponding CMS CEHRT ID in the submission</li>
            <li>Minimum 90 day performance period</li>
            <li>Completion of Required Attestation Statements</li>
            <li>Completion of All Required Measures</li>
            <li>Bonus Measures</li>
          </ul>
          <div>
            <h2 className='ds-h2' id='PI-Sub'>Example PI Submission</h2>
            <p className='ds-text--lead'>
            The measure types available for submission are outlined below. Each measure in the repo will dictate which type is to be utilized.
              <ul>
                <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#proportion-measurements'>Proportion Measures</a></li>
                <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#boolean'>Boolean</a></li>
              </ul>
            </p>
            <br />
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${submissionJsonExampleStringAci}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
          <br />
          <div>
            <h2 className='ds-h2' id='PI-Response'>Example PI Submission Output Object</h2>
            <p className='ds-text--lead'>
            The output below shows the score at multiple levels. Although the PI category score has exceed the maximum points, you can never receive a score higher than the max. If no score is return, check the <code>"attestationStatementCheck"</code> and <code>"baseMeasureCheck</code> wihin the <code>"metadata</code>. If either of these are listed as incomplete, the submission must be fixed to receive a score. The category has a <code>"maxContribution"</code> of 100 and the a <code>"maxContribution"</code> of 25 toward Overall Score.
            </p>
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${scoringJsonExampleStringAci}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <br />
        <div>
          <h1 className='ds=h1' id='Quality'>Quality</h1>
          <p className='ds-text--lead'>
          The Quality category requires 6 measures to receive full credit, one of which must be either an Outcome measure or High Priority. If no Outcome or High Priority measure is submitted, you will only be scored on the top 5 measures and receive a score of 0 for the sixth measure.
          </p>
          <br />
          <div>
            <h2 className='ds-h2' id='Quality-Sub'>Example Quality Submission</h2>
            <p className='ds-text--lead'>
              Submission structure in the Quality category are contingent on the measure being submitted. If there are questions around the data to be submitted in the fields, please refer to the measure specification. The available types related to the measures are outlined below:
            </p>
            <ul>
              <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#non-proportion-measurements'>Non-Proportion Measures</a></li>
              <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#single-performance-rate-measurements'>Single Performance Rates</a></li>
              <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#multi-performance-rate-measurements'>Multi-Performance Rates</a></li>
            </ul>
            <p className='ds-text--lead'>
              In the sample below, measure 046 is a multi-strata, 110 is a single performance measure, ACRAD15 is a non-proportion measure.
            </p>
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${submissionJsonExampleStringQuality}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
          <br />
          <div>
            <h2 className='ds-h2' id='Quality-Response'>Example Quality Submission Output Object</h2>
            <p className='ds-text--lead'>
          Based on the submission details, a data completness and performance rate is created. The measures are broken into three categories to determine score output.
            </p>
            <ul>
              <li>Class 1 - The measure has met both the data completeness threshold and minimum eligible population criteria</li>
              <ol type='a'>
                <li>If the measure has a benchmark, the measure will be compared to a benchmark and a score will be awarded based on performance compared to the benchmark</li>
                <li>If the measure does not have a benchmark, a score of 3 will be awarded</li>
              </ol>
              <li>Class 2 - The measure does not meet the 60% data completeness threshold or has below 20 eligible patients in the <code>eligiblePopulation</code> field, the measure will not be compared to a benchmark.</li>
              <ol type='a'>
                <li>If the clinician is a small practice, they will be awarded 3 points, irregardless of whether they have not either data completess or minimum eligible population criteria</li>
                <li>If the clinician is not a small practice and has met the data completenss rate but did not meet the minimum eligible population criteria score of 3 will be awarded</li>
              </ol>
              <li>Class 3 - If the clinician is not a small practice and has met the necessary eligible population criteria but has met the data completenss rate a score of 1 will be awarded</li>
            </ul>
            <br />
          </div>
          <Tabs className='example-code-tabs'>
            <TabList>
              <Tab>Sample JSON</Tab>
            </TabList>
            <TabPanel>
              <pre>{`${scoringJsonExampleStringQuality}`}</pre>
            </TabPanel>
          </Tabs>
        </div>
        <br />
        <div>
          <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
        </div>
      </div>
    );
  }
}
