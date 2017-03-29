import React from 'react';
import '../technical-details-pane-examples.css'
import DataModelTable from './data-model-table';

var FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the measurement set.'},
  {name: 'submissionId', value: 'string', description: 'The id of the submission in which the measurement set belongs.'},
  {name: 'category', value: 'datetime', description: 'The category of the measurement set. Acceptable values are <b>"ia"</b>, <b>"aci"</b> and <b>"quality"</b>.', notes: 'writable'},
  {name: 'submissionMethod', value: 'string', description: 'The method by which the measurement set data was submitted. Acceptable values are <b>"cmsWebInterface"</b>, <b>"ehr"</b>, <b>"claims"</b>, <b>"registry"</b>, <b>"csv"</b> and <b>"administrativeClaims"</b>.', notes: 'writable'},
  {name: 'performanceStart', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The first date when the measurement data is applicable.', notes: 'writable, optional'},
  {name: 'performanceEnd', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The last date when the measurement data is applicable.', notes: 'writable, optional'},
  {name: 'measureSet', value: 'string', description: 'The speciality set which the measurement set is attesting. Only applicable to quality measurement sets.', notes: 'writable, optional'},
  {name: 'measurements', value: 'list', description: 'Measurements associated with the measurement set.',  notes: 'writable, optional'}
];

class MeasurementSets extends React.PureComponent {

  render() {

    return (
       <div>
          <h1 className="ds-h1">Measurement Sets</h1>
          <p className="ds-text--lead">The Measurement Sets resource represents performance data for a specified category. Each <a href="/qpp-submissions-docs/submission">Submission</a> has multiple Measurement Sets. Each Measurement Set in a given Submission must be uniquely identified by category and submission method.</p>
          <p className="ds-text--lead">For a list of methods for this resource, view the <a href="https://qpp-submissions-sandbox.navapbc.com/#/MeasurementSets">OpenAPI documentation</a>.</p>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "id": string,
  "submissionId": string,
  "category": string,
  "submissionMethod": string,
  "performanceStart": date,
  "performanceEnd": date,
  "measureSet": string,
  "measurements": [`}
    <a href="/qpp-submissions-docs/measurements">measurements Resource</a>
  {`]
}`}
            </pre>
          </div>
          <DataModelTable fields={FIELDS} />
        </div>
    );
  }
}

export default MeasurementSets;
