import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../styles/common/example-code-tabs.css';

import DataModelTable from '../common/data-model-table';

const FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the measurement.'},
  {name: 'measurementSetId', value: 'string', description: 'The id of the measurement set in which the measurement belongs.'},
  {name: 'measureId', value: 'string', description: 'The id of the measure to which the measurement is attesting. All measures and their IDs are available in <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a>. For quality measures, the measureId is the same as the quality number. For an advancing care information (ACI) measure, the measureId is the measure identifier for the ACI measure, and for an improvement activity (IA) measure, the measureId is the measure identifier for the IA measure.', notes: 'writable'},
  {name: 'value', value: 'object', description: 'Different measurements will have different values. Acceptable measurement types are <b>boolean</b>, <b>proportion</b>, <b>non-proportion</b>, and <b>performance rate</b>.', notes: 'writable'}
];

const BOOLEAN_FIELDS = [
  {name: 'value', value: 'boolean', description: 'True if attesting to the associated measure.', notes: 'writable'}
];

const PROPORTION_FIELDS = [
  {name: 'numerator', value: 'integer', description: 'The number of patients or episodes of care for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>denominator</b>.', notes: 'writable'},
  {name: 'denominator', value: 'integer', description: 'The total number of patients or episodes of care as described by the measure. Must be greater than or equal to zero. Can only be 0 if the numerator is 0 as well.', notes: 'writable'}
];

const NON_PROPORTION_FIELDS = [
  {name: 'numerator', value: 'float', description: 'The numerator as described in the QCDR measure specification.', notes: 'writable'},
  {name: 'denominator', value: 'float', description: 'The denominator as described in the QCDR measure specification.', notes: 'writable'},
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported via certified EHR technology without any manual interference.', notes: 'writable'},
  {name: 'numeratorExclusion', value: 'float', description: 'The exclusions from the numerator field as described in the QCDR measure specification.', notes: 'writable, optional'},
  {name: 'denominatorException', value: 'float', description: 'The exceptions from the denominator field as described in the QCDR measure specification.', notes: 'writable, optional'}
];

const SINGLE_PERFORMANCE_RATE_FIELDS = [
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported via certified EHR technology without any manual interference.', notes: 'writable'},
  {name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>eligiblePopulation</b>', notes: 'writable'},
  {name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional'},
  {name: 'eligiblePopulationExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure. In the measures specifications, this field is also referred to as "Numerator Exclusion".', notes: 'writable, optional'},
  {name: 'eligiblePopulationException', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied but who are excluded from the measure. In the measures specifications, this field is also referred to as "Denominator Exception".', notes: 'writable, optional'},
  {name: 'eligiblePopulation', value: 'integer', description: 'The total number of eligible patients as described by the measure. Must be greater than or equal to zero. In the measures specifications, this field is also referred to as "Eligible Population Numerator/Denominator".', notes: 'writable'},
  {name: 'reportingRate', value: 'float', description: 'The reporting rate, ranging from zero to one-hundred and representing a percentage, is equal to ((performanceMet + eligiblePopulationExclusion + eligiblePopulationException + performanceNotMet) / eligiblePopulation) * 100.'},
  {name: 'performanceRate', value: 'float', description: 'The performance rate for a single performance rate measurement, ranging from zero to one-hundred and representing a percentage, is equal to (performanceMet / (performanceMet + performanceNotMet)) * 100.'}
];

const MULTI_PERFORMANCE_RATE_FIELDS = [
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported  via certified EHR technology without any manual interference.', notes: 'writable'},
  {name: 'strata', value: 'array(performanceRateStratum)', description: 'The strata name associated with the performance rate measurement. Needs to match with the measure strata names in <a href="https://github.com/CMSgov/qpp-measures-data">qpp-measures-data</a>.', notes: 'writable'}
];

const STRATA_FIELDS = [
  {name: 'measurementId', value: 'string', description: 'The id of the measurement in which the stratum belongs.'},
  {name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>eligiblePopulation</b>', notes: 'writable'},
  {name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional'},
  {name: 'eligiblePopulationExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure. In the measures specifications, this field is also referred to as "Numerator Exclusion".', notes: 'writable, optional'},
  {name: 'eligiblePopulationException', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied but who are excluded from the measure. In the measures specifications, this field is also referred to as "Denominator Exception".', notes: 'writable, optional'},
  {name: 'eligiblePopulation', value: 'integer', description: 'The total number of eligible patients as described by the measure. Must be greater than or equal to zero. In the measures specifications, this field is also referred to as "Eligible Population Numerator/Denominator".', notes: 'writable'},
  {name: 'stratum', value: 'string', description: 'The strata associated with the performance rate measurement.', notes: 'writable'},
  {name: 'reportingRate', value: 'float', description: 'The reporting rate, ranging from zero to one-hundred and representing a percentage, is equal to ((performanceMet + eligiblePopulationExclusion + eligiblePopulationException + performanceNotMet) / eligiblePopulation) * 100.'},
  {
    name: 'performanceRate',
    value: 'float',
    description: 'Performance rates are stored and represented as percentages with values from 0.00 to 100.00. The performance rate for a multiple performance rate measurement is calculated based on the overallAlgorithm of the corresponding measure. ' +
      'Performance rate algorithms exclude any "overall" strata in calculations. Currently, a measure\'s overallAlgorithm may be one of the following:<ul>' +
      '<li><b>simpleAverage:</b> <samp>(sum strata\'s performance rates) / (number of strata) * 100</samp>,</li>' +
      '<li><b>weightedAverage:</b> <samp>((sum strata\'s performanceMet) / (sum strata\'s performanceMet and performanceNotMet)) * 100</samp>, or,</li>' +
      '<li><b>sumNumerators:</b> <samp>sum strata\'s performanceMet</samp>.</li></ul>'
  }
];

class Measurements extends React.PureComponent {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <h1 className='ds-h1'>Measurements</h1>
        <ul>
          <li><a href='#boolean-measurements'>Boolean</a></li>
          <li><a href='#proportion-measurements'>Proportion</a></li>
          <li><a href='#non-proportion-measurements'>Non-Proportion</a></li>
          <li><a href='#single-performance-rate-measurements'>Single-Performance Rate</a></li>
          <li><a href='#multi-performance-rate-measurements'>Multi-Performance Rate</a></li>
        </ul>
        <p className='ds-text--lead'>The Measurements resource represents performance data for a specific measure within a MeasurementSet. There are five types of Measurements: Boolean, Proportion, Non-Proportion, Single-Performance Rate, and Multi-Performance Rate. Each MeasurementSet can have multiple Measurements. No two Measurements in a given MeasurementSet can have the same measureId.</p>
        <p className='ds-text--lead'><a href='https://qpp-submissions-sandbox.navapbc.com/#/Measurements'>Try it out!</a></p>
        <h2 className='ds-h2'>Resource Representation</h2>
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
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": [`}
                <a href='#boolean-measurements'>Boolean</a> | <a href='#proportion-measurements'>Proportion</a> | <a href='#non-proportion'>Non-Proportion</a> | {`
    `} <a href='#single-performance-rate-measurements'>Single-Performance Rate</a> | <a href='#multi-performance-rate-measurements'>Multi-Performance Rate</a>
                {`]
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <id>string</id>
  <measurementSetId>string</measurementSetId>
  <measureId>string</measureId>
  <value>[`}
                <a href='#boolean-measurements'>Boolean</a> | <a href='#proportion-measurements'>Proportion</a> | <a href='#non-proportion'>Non-Proportion</a> | {`
  `} <a href='#single-performance-rate-measurements'>Single-Performance Rate</a> | <a href='#multi-performance-rate-measurements'>Multi-Performance Rate</a>
                {`]</value>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={FIELDS} />

        <h1 className='ds-h1' id='boolean-measurements'>Boolean Measurements</h1>
        <p className='ds-text--lead'>Boolean Measurements are applicable to Improvement Activity (IA) and Advancing Care Information (ACI) measures.</p>
        <h2 className='ds-h2'>Resource Representation</h2>
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
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": boolean
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <id>string</id>
  <measurementSetId>string</measurementSetId>
  <measureId>string</measureId>
  <value>boolean</value>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={BOOLEAN_FIELDS} />

        <h1 className='ds-h1' id='proportion-measurements'>Proportion Measurements</h1>
        <p className='ds-text--lead'>Proportion Measurements are applicable to Advancing Care Information (ACI) measures.</p>
        <h2 className='ds-h2'>Resource Representation</h2>
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
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "numerator": integer,
    "denominator": integer
  }
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <id>string</id>
  <measurementSetId>string</measurementSetId>
  <measureId>string</measureId>
  <value>
    <numerator>integer</numerator>
    <denominator>integer</denominator>
  </value>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={PROPORTION_FIELDS} />

        <h1 className='ds-h1' id='non-proportion-measurements'>Non-Proportion Measurements</h1>
        <p className='ds-text--lead'>Non-Proportion Measurements are applicable to quality measures. They are exclusively authored by QCDRs and are used to attest to measures that are otherwise categorized as 'ratio', 'continuous variable', or a combination of 'proportion' and the former. Note this means that having a false value in the proportion field of QCDR documentation is sufficient to determine that a measure as non-proportional, but having a true value for proportion is insufficient to determine that measure as proportional. Non-proportion measurements are unconstrained, so while the fields are 'numerator' and 'denominator' there is no validation that the numerator must be less than or equal to the denominator or that the denominator is greater than 0, as is the case for proportion measurements.</p>
        <h2 className='ds-h2'>Resource Representation</h2>
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
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "numerator": float,
    "denominator": float,
    "isEndToEndReported": boolean,
    "denominatorException": float,
    "numeratorExclusion": float
  }
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <id>string</id>
  <measurementSetId>string</measurementSetId>
  <measureId>string</measureId>
  <value>
    <numerator>float</numerator>
    <denominator>float</denominator>
    <isEndToEndReported>boolean</isEndToEndReported>
    <denominatorException>float</denominatorException>
    <numeratorExclusion>float</numeratorExclusion>
  </value>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={NON_PROPORTION_FIELDS} />

        <h1 className='ds-h1' id='single-performance-rate-measurements'>Single-Performance Rate Measurements</h1>
        <p className='ds-text--lead'>Single-Performance Rate Measurements are applicable to Quality measures.</p>
        <h2 className='ds-h2'>Resource Representation</h2>
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
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "isEndToEndReported": boolean,
    "performanceMet": integer,
    "performanceNotMet": integer,
    "eligiblePopulationExclusion": integer,
    "eligiblePopulationException": integer,
    "eligiblePopulation": integer
  }
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <id>string</id>
  <measurementSetId>string</measurementSetId>
  <measureId>string</measureId>
  <value>
    <isEndToEndReported>boolean</isEndToEndReported>
    <performanceMet>integer</performanceMet>
    <performanceNotMet>integer</performanceNotMet>
    <eligiblePopulationExclusion>integer</eligiblePopulationExclusion>
    <eligiblePopulationException>integer</eligiblePopulationException>
    <eligiblePopulation>integer</eligiblePopulation>
  </value>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={SINGLE_PERFORMANCE_RATE_FIELDS} />

        <h1 className='ds-h1' id='multi-performance-rate-measurements'>Multi-Performance Rate Measurements</h1>
        <p className='ds-text--lead'>Multi-Performance Rate Measurements are applicable to Quality measures. Multi-Performance Rate Measurements contain multiple strata and the stratum field is required for each.</p>
        <h2 className='ds-h2'>Resource Representation</h2>
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
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "isEndToEndReported": boolean,
    "strata": array(`}
                <a href='#stratum'>Performance Rate Stratum</a>
                {`)
  }
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <id>string</id>
  <measurementSetId>string</measurementSetId>
  <measureId>string</measureId>
  <value>
    <isEndToEndReported>boolean</isEndToEndReported>
    <strata>array(`}
                <a href='#stratum'>Performance Rate Stratum</a>
                {`)</strata>
  </value>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={MULTI_PERFORMANCE_RATE_FIELDS} />

        <h1 className='ds-h1' id='stratum'>Multi-Performance Rate Stratum</h1>
        <p className='ds-text--lead'>A Multi-Performance Rate Stratum represents the performance data for a specified subset of the population, as described by the stratum field.</p>
        <h2 className='ds-h2'>Resource Representation</h2>
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
  "measurementId": string,
  "performanceMet": integer,
  "performanceNotMet": integer,
  "eligiblePopulationExclusion": integer,
  "eligiblePopulationException": integer,
  "eligiblePopulation": integer,
  "stratum": string
}`}
              </pre>
            </TabPanel>
            <TabPanel>
              <pre>
                {`<data>
  <measurementId>string</measurementId>
  <performanceMet>integer</performanceMet>
  <performanceNotMet>integer</performanceNotMet>
  <eligiblePopulationExclusion>integer</eligiblePopulationExclusion>
  <eligiblePopulationException>integer</eligiblePopulationException>
  <eligiblePopulation>integer</eligiblePopulation>
  <stratum>string</stratum>
</data>
`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={STRATA_FIELDS} />
      </div>
    );
  }
}

export default Measurements;
