import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import DataModelTable from '../common/data-model-table';

const FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the measurement set.'},
  {name: 'createdAt', value: 'datetime', description: 'The creation time of the measurement set in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  {name: 'updatedAt', value: 'datetime', description: 'The modification time of the measurement set in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  {name: 'submissionId', value: 'string', description: 'The id of the submission in which the measurement set belongs.'},
  {name: 'category', value: 'datetime', description: 'The category of the measurement set. Acceptable values are <b>"ia"</b>, <b>"aci"</b> and <b>"quality"</b>.', notes: 'writable'},
  {name: 'submissionMethod', value: 'string', description: 'The method by which the measurement set data was submitted. Acceptable values are <b>"cmsWebInterface"</b>, <b>"electronicHealthRecord"</b>, <b>"claims"</b>, <b>"registry"</b>, <b>"certifiedSurveyVendor"</b> and <b>"administrativeClaims"</b>.', notes: 'writable'},
  {name: 'performanceStart', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The first date when the measurement data is applicable.', notes: 'writable'},
  {name: 'performanceEnd', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The last date when the measurement data is applicable.', notes: 'writable'},
  {name: 'measureSet', value: 'string', description: 'The speciality set which the measurement set is attesting. Acceptable values are "generalSurgery" or "other"', notes: 'writable, optional'},
  {name: 'measurements', value: 'array<measurements>', description: 'Measurements associated with the measurement set.',  notes: 'writable, optional'}
];

export default class MeasurementSets extends React.PureComponent {

  render() {
    return (
      <div>
        <h1 className="ds-h1">Measurement Sets</h1>
        <p className="ds-text--lead">The MeasurementSets resource represents performance data for a specified category. Each Submission can have multiple MeasurementSets. Each MeasurementSet in a given Submission must be uniquely identified by category and submission method. MeasurementSets contain Measurements, which can be accessed both via MeasurementSets methods and Measurements methods.</p>
        <p className="ds-text--lead"><a href="https://qpp-submissions-sandbox.navapbc.com/#/MeasurementSets">Try it out!</a></p>
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
  "submissionId": string,
  "category": string,
  "submissionMethod": string,
  "performanceStart": date,
  "performanceEnd": date,
  "measureSet": string,
  "measurements": array<`}
    <a href="measurements">Measurements Resource</a>
  {`>
}`}
            </pre>
          </TabPanel>
          <TabPanel>
            <pre>
{`<data>
  <id>string</id>
  <createdAt>datetime</createdAt>
  <updatedAt>datetime</updatedAt>
  <submissionId>string>/submissionId>
  <category>string</category>
  <submissionMethod>string</submissionMethod>
  <performanceStart>date</performanceStart>
  <performanceEnd>date</performanceEnd>
  <measureSet>string</measureSet>
  <measurements>array[`}
    <a href="measurements">Measurements Resource</a>
  {`]</measurements>
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
