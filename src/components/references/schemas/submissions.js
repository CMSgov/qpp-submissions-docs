import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../styles/common/example-code-tabs.css';

import DataModelTable from '../common/data-model-table';

const FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the submission.'},
  {name: 'createdAt', value: 'datetime', description: 'The creation time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  {name: 'updatedAt', value: 'datetime', description: 'The modification time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  { name: 'entityType', value: 'string', description: 'Acceptable values are <b>"apm"</b>, <b>"group"</b>, <b>"individual"</b>, <b>"virtualGroup"</b>', notes: 'writable, required' },
  {name: 'entityId', value: 'string', description: 'The unique identifier for the virtual group or APM associated with the submission.  If a CPC+ APM, the entityID is the CPC+ PracticeID', notes: 'writable, required if entityType is "apm" or "virtualGroup" '},
  {name: 'taxpayerIdentificationNumber', value: 'string', description: 'The 9-digit identifier of the provider associated with the submission.', notes: 'writable if entityType is "individual" or "group"'},
  {name: 'nationalProviderIdentifier', value: 'string', description: 'The 10-digit identifier of the provider associated with the submission.', notes: 'writable only if entityType is "individual"'},
  {name: 'performanceYear', value: 'integer', description: 'The year in which performance data for the submission was collected.', notes: 'writable, required'},
  {name: 'measurementSets', value: 'array(measurementSet)', description: 'Measurement sets associated with the submission.', notes: 'writable, optional'}
];

export default class Submissions extends React.Component {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);
    return (
      <div>
        <h1 className='ds-h1'>Submissions</h1>
        <p className='ds-text--lead'>The Submissions resource represents one year of performance data for a given individual or group. Submissions contain MeasurementSets which can be accessed both via Submissions methods and MeasurementSets methods. Submissions resources are 'shared' in the sense that they contain Measurement Sets that may be created by multiple users.</p>
        <p className='ds-text--lead'>Submissions resources are 'shared' in the sense that they contain Measurement Sets that may be created by multiple users.</p>
        <p className='ds-text--lead'><a href='https://preview.qpp.cms.gov/api/submissions/public/docs/#/Submissions'>Try it out!</a></p>
        <h2 className='ds-h2'>Resource Representation</h2>
        <div>
          <Tabs className='example-code-tabs'>
            <TabList>
              <Tab>Sample JSON</Tab>
            </TabList>
            <TabPanel>
              <pre>
                {`{
  "id": string,
  "createdAt": datetime,
  "updatedAt": datetime,
  "entityType": string,
  "taxpayerIdentificationNumber": string,
  "nationalProviderIdentifier": string,
  "performanceYear": integer,
  "measurementSets": array(`}
                <a href='measurement-sets'>MeasurementSets Resource</a>
                {`)
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={FIELDS} />
      </div>
    );
  }
}
