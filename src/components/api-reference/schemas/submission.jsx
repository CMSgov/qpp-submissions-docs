import React from 'react';
import DataModelTable from '../common/data-model-table';

const FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the submission.'},
  {name: 'createdAt', value: 'datetime', description: 'The creation time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  {name: 'updatedAt', value: 'datetime', description: 'The modification time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.'},
  {name: 'programName', value: 'string', description: 'The quality payment program under which the submission belongs. Acceptable values are <b>"mips"</b>.', notes: 'writable'},
  {name: 'entityType', value: 'string', description: 'The type of provider associated with the submission. Acceptable values are <b>"individual"</b> and <b>"group"</b>.', notes: 'writable'},
  {name: 'taxypayerIdentificationNumber', value: 'string', description: 'The 9-digit identifier of the provider associated with the submission. As the API does not yet collect personally identifying information, all TINs must begin with "000".', notes: 'writable'},
  {name: 'nationalProviderIdentifier', value: 'string', description: 'The 10-digit identifier of the provider associated with the submission.', notes: 'writable, optional if entityType is "individual"'},
  {name: 'performanceYear', value: 'integer', description: 'The year in which performance data for the submission was collected.',  notes: 'writable'},
  {name: 'measurementSets', value: 'array<measurementSet>', description: 'Measurement sets associated with the submission.',  notes: 'writable, optional'}
];

export default class Submission extends React.PureComponent {
  render() {
    return (
       <div>
          <h1 className="ds-h1">Submissions</h1>
          <p className="ds-text--lead">The Submissions resource represents one year of performance data for a given individual or group. Submissions contain MeasurementSets which can be accessed both via Submissions methods and MeasurementSets methods.</p>
          <p className="ds-text--lead">For a list of methods for this resource, view the <a href="https://qpp-submissions-sandbox.navapbc.com/#/Submissions">OpenAPI documentation</a>.</p>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "id": string,
  "createdAt": datetime,
  "updatedAt": datetime,
  "programName": string,
  "entityType": string,
  "taxpayerIdentificationNumber": string,
  "nationalProviderIdentifier": string,
  "performanceYear": integer,
  "measurementSets": array<`}
    <a href="#">MeasurementSets Resource</a>
  {`>
}`}
            </pre>
          </div>
          <DataModelTable fields={FIELDS} />
        </div>
    );
  }
}
