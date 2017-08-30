import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import DataModelTable from '../common/data-model-table';

const FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the submission.'},
  {name: 'createdAt', value: 'datetime', description: 'The creation time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  {name: 'updatedAt', value: 'datetime', description: 'The modification time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  {name: 'programName', value: 'string', description: 'The quality payment program under which the submission belongs. Acceptable values are <b>"mips"</b>.', notes: 'writable'},
  {name: 'entityType', value: 'string', description: 'The type of provider associated with the submission. Acceptable values are <b>"individual"</b> and <b>"group"</b>.', notes: 'writable'},
  {name: 'taxypayerIdentificationNumber', value: 'string', description: 'The 9-digit identifier of the provider associated with the submission. As the API does not yet collect personally identifying information, all TINs must begin with "000".', notes: 'writable'},
  {name: 'nationalProviderIdentifier', value: 'string', description: 'The 10-digit identifier of the provider associated with the submission. As the API does not yet collect personally identifying information, all NPIs must begin with "0"', notes: 'writable, optional if entityType is "group" or entityId is provided'},
  {name: 'entityId', value: 'string', description: ' The identifier for Alternative Payment Models (APM)', notes: 'writable, optional'},
  {name: 'performanceYear', value: 'integer', description: 'The year in which performance data for the submission was collected.',  notes: 'writable'},
  {name: 'measurementSets', value: 'array(measurementSet)', description: 'Measurement sets associated with the submission.',  notes: 'writable, optional'}
];

export default class Submission extends React.Component {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);
    return (
       <div>
          <h1 className="ds-h1">Submissions</h1>
          <p className="ds-text--lead">The Submissions resource represents one year of performance data for a given individual or group. Submissions contain MeasurementSets which can be accessed both via Submissions methods and MeasurementSets methods.</p>
          <p className="ds-text--lead"><a href="https://qpp-submissions-sandbox.navapbc.com/#/Submissions">Try it out!</a></p>
          <h2 className="ds-h2">Resource Representation</h2>
          <div>
            <Tabs
              className='technical-details-pane'>
            <TabList>
              <Tab>JSON</Tab>
              <Tab>XML</Tab>
            </TabList>
            <TabPanel>
              <pre>
              {`{
  "id": string,
  "createdAt": datetime,
  "updatedAt": datetime,
  "programName": string,
  "entityType": string,
  "taxpayerIdentificationNumber": string,
  "nationalProviderIdentifier": string,
  "entityId": string,
  "performanceYear": integer,
  "measurementSets": array(`}
    <a href="measurement-sets">MeasurementSets Resource</a>
  {`)
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
{`<data>
  <id>string</id>
  <createdAt>datetime</createdAt>
  <updatedAt>datetime</updatedAt>
  <programName>string</programName>
  <entityType>string</entityType>
  <taxpayerIdentificationNumber>string</taxpayerIdentificationNumber>
  <nationalProviderIdentifier>string</nationalProviderIdentifier>
  <entityId>string</entityId>
  <performanceYear>integer</performanceYear>
  <measurementSets>array(`}
    <a href="measurement-sets">MeasurementSets Resource</a>
  {`)</measurementSets>
</data>
`}
              </pre>
            </TabPanel>
            </Tabs>
          </div>
          <DataModelTable fields={FIELDS} />
        </div>
    );
  }
}
