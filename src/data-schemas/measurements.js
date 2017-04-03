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
  {name: 'numerator', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>denominator</b>.', notes: 'writable'},
  {name: 'denominator', value: 'integer', description: 'The total number of patients. Must be greater than or equal to zero.', notes: 'writable'},
];

var PERFORMANCE_RATE_FIELDS = [
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported  via certified EHR technology without any manual interference.', notes: 'writable'},
  {name: 'strata', value: 'list', description: 'The strata associated with the performance rate measurement.', notes: 'writable'}
];

var STRATA_FIELDS = [
  {name: 'measurementId', value: 'string', description: 'The id of the measurement in which the stratum belongs.'},
  {name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>populationTotal</b>', notes: 'writable'},
  {name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional'},
  {name: 'performanceExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure.', notes: 'writable, optional'},
  {name: 'populationTotal', value: 'integer', description: 'The total number of patients. Must be greater than or equal to zero.', notes: 'writable'},
  {name: 'stratum', value: 'string', description: 'The strata associated with the performance rate measurement.', notes: 'writable, optional if only one stratum in the performance rate measurement'}
];

class Measurements extends React.PureComponent {

  render() {

    return (
       <div>
          <h1 className="ds-h1">Measurements</h1>
          <p className="ds-text--lead">The Measurements resource represents performance data for a specific measure within a MeasurementSet. There are three types of Measurements: Boolean, Proportion and Performance Rate. Each MeasurementSet can have multiple Measurements. No two Measurements in a given MeasurementSet can have the same measureId.</p>
          <p className="ds-text--lead">For a list of methods for this resource, view the <a href="https://qpp-submissions-sandbox.navapbc.com/#/Measurements">OpenAPI documentation</a>.</p>
          <h2 className="ds-h2">Resource Representation</h2>
          <div className='markup markup--html'>
            <pre className='ds-u-border--1 ds-u-padding--1'>
              {`{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": [`}
    <a href="#boolean">Boolean</a> | <a href="#proportion">Proportion</a> | <a href="#performance-rate">Performance Rate</a>
  {`]
}`}
            </pre>
          </div>
          <DataModelTable fields={FIELDS} />
          <h1 className="ds-h1" id="boolean">Boolean Measurements</h1>
          <p className="ds-text--lead">Boolean Measurements are applicable to Improvement Activity (IA) and Advancing Care Information (ACI) measures.</p>
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
          <h1 className="ds-h1" id="proportion">Proportion Measurements</h1>
          <p className="ds-text--lead">Proportion Measurements are applicable to Advancing Care Information (ACI) measures.</p>
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
          <h1 className="ds-h1" id="performance-rate">Performance Rate Measurements</h1>
          <p className="ds-text--lead">Performance Rate Measurements are applicable to Quality measures. There are two types of Performance Rate Measurements: single and multi. Single-Performance Rate Measurements contain only one stratum. Multi-Performance Rate Measurements contain multiple strata and the stratum field is required for each.</p>
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
      <a href="#stratum">Performance Rate Stratum</a>
    {`]
  }
}`}
            </pre>
          </div>
          <DataModelTable fields={PERFORMANCE_RATE_FIELDS} />
          <h1 className="ds-h1" id="stratum">Performance Rate Stratum</h1>
          <p className="ds-text--lead">A Performance Rate Stratum represents the performance data for a specified subset of the population, as described by the stratum field. In the case where the stratum field is null, the performance data is applicable to the entire population.</p>
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
    );
  }
}

export default Measurements;
