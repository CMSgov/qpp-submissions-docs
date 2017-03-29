import React from 'react';
import '../technical-details-pane-examples.css'
import DataModelTable from './data-model-table';

var FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the measurement.'},
  {name: 'measurementSetId', value: 'string', description: 'The id of the measurement set in which the measurement belongs.'},
  {name: 'measureId', value: 'string', description: 'The id of the measure to which the measurement is attesting. All measures and their IDs are available in <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a>.', notes: 'writable'},
  {name: 'value', value: 'object', description: 'Different measurements will have different values. Acceptable measurement types are <b>boolean</b>, <b>proportion</b> and <b>performance rate</b>.', notes: 'writable'}
];

var BOOLEAN_FIELDS = [
  {name: 'value', value: 'boolean', description: 'True if attesting to the associated measure.', notes: 'writable'}
];

var PROPORTION_FIELDS = [
  {name: 'numerator', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than zero and less than or equal to the <b>denominator</b>.', notes: 'writable'},
  {name: 'denominator', value: 'integer', description: 'The total number of patients. Must be greater than zero.', notes: 'writable'},
];

var PERFORMANCE_RATE_FIELDS = [
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported  via certified EHR technology without any manual interfence.', notes: 'writable'},
  {name: 'strata', value: 'list', description: 'The strata associated with the performance rate measurement.', notes: 'writable'}
];

var STRATA_FIELDS = [
  {name: 'measurementId', value: 'string', description: 'The id of the measurement in which the stratum belongs.'},
  {name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied.', notes: 'writable'},
  {name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional'},
  {name: 'performanceExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure.', notes: 'writable, optional'},
  {name: 'populationTotal', value: 'integer', description: 'The total number of patients. Must be greater than zero.', notes: 'writable'},
  {name: 'stratum', value: 'string', description: 'The strata associated with the performance rate measurement.', notes: 'writable, optional if only one stratum in the performance rate measurement'}
];

class Measurements extends React.PureComponent {

  render() {

    return (
      <div className="usa-grid a-bit-wider">
        <div className="ds-u-measure--wide">
          <h1 className="ds-h1">Measurements</h1>
          <p className="ds-text--lead">The Measurements resource represents performance data for a specified category. Each <a href="/qpp-submissions-docs/submission">Submission</a> has multiple Measurement Sets. Each Measurement Set in a given Submission must be uniquely identified by category and submission method.</p>
          <p className="ds-text--lead">For a list of methods for this resource, view the <a href="https://qpp-submissions-sandbox.navapbc.com/#/Measurements">OpenAPI documentation</a>.</p>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": [`}
    <a href="/qpp-submissions-docs/measurements">value Resource</a>
  {`]
}`}
            </pre>
          </div>
          <DataModelTable fields={FIELDS} />
          <h1 className="ds-h1">Boolean Measurements</h1>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": boolean
}`}
            </pre>
          </div>
          <DataModelTable fields={BOOLEAN_FIELDS} />
          <h1 className="ds-h1">Proportion Measurements</h1>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "numerator": integer,
    "denominator": integer
  }
}`}
            </pre>
          </div>
          <DataModelTable fields={PROPORTION_FIELDS} />
          <h1 className="ds-h1">Performance Rate Measurements</h1>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "isEndToEndReported": boolean,
    "strata": [`}
      <a href="/qpp-submissions-docs/measurements">perforamance rate stratum Resource</a>
    {`]
  }
}`}
            </pre>
          </div>
          <DataModelTable fields={PERFORMANCE_RATE_FIELDS} />
          <h1 className="ds-h1">Performance Rate Strata</h1>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "measurementId": string,
  "performanceMet": integer,
  "performanceNotMet": integer,
  "performanceExclusion": integer,
  "populationTotal": integer,
  "stratum": string
}`}
            </pre>
          </div>
          <DataModelTable fields={STRATA_FIELDS} />
        </div>
      </div>
    );
  }
}

export default Measurements;
