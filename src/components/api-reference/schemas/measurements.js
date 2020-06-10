import React from 'react';
import {Tab, Tabs, TabPanel, TabList} from 'react-tabs';

import '../../../styles/common/example-code-tabs.css';

import DataModelTable from '../common/data-model-table';

const FIELDS = [
  {name: 'id', value: 'string', description: 'The id of the measurement.'},
  {name: 'measurementSetId', value: 'string', description: 'The id of the measurement set in which the measurement belongs.'},
  {name: 'measureId', value: 'string', description: 'The id of the measure to which the measurement is attesting. All measures and their IDs are available in <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a>. For quality measures, the measureId is the same as the quality number. For a promoting interoperability (PI) measure, the measureId is the measure identifier for the PI measure, and for an improvement activity (IA) measure, the measureId is the measure identifier for the IA measure.', notes: 'writable, required'},
  {name: 'value', value: 'object', description: 'Different measurements will have different values. Acceptable measurement types are <b>boolean</b>, <b>proportion</b>, <b>non-proportion</b>, and <b>performance rate</b>.', notes: 'writable, required'}
];

const BOOLEAN_FIELDS = [
  {name: 'value', value: 'boolean', description: 'True if attesting to the associated measure.', notes: 'writable, required'}
];

const PROPORTION_FIELDS = [
  {name: 'numerator', value: 'integer', description: 'The number of patients or episodes of care for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>denominator</b>.', notes: 'writable, required'},
  {name: 'denominator', value: 'integer', description: 'The total number of patients or episodes of care as described by the measure. Must be greater than or equal to zero. Can only be 0 if the numerator is 0 as well.', notes: 'writable, required'}
];

const NON_PROPORTION_FIELDS = [
  {name: 'numerator', value: 'float', description: 'The numerator as described in the QCDR measure specification.', notes: 'writable, required'},
  {name: 'denominator', value: 'float', description: 'The denominator as described in the QCDR measure specification.', notes: 'writable, required'},
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported via certified EHR technology without any manual interference.', notes: 'writable, required'},
  {name: 'numeratorExclusion', value: 'float', description: 'The exclusions from the numerator field as described in the QCDR measure specification.', notes: 'writable, optional'},
  {name: 'denominatorException', value: 'float', description: 'The exceptions from the denominator field as described in the QCDR measure specification.', notes: 'writable, optional'},
  {name: 'reportingRate', value: 'float', description: 'The data completeness of the measure.', notes: 'calculated by API and returned in response'},
  {name: 'observationInstances', value: 'integer', description: 'The number of denominator eligible instances that are used as input in the calculation to derive the numerator (i.e. average, ratio).', notes: 'writable, required'}
];

const SINGLE_PERFORMANCE_RATE_FIELDS = [
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported via certified EHR technology without any manual interference.', notes: 'writable'},
  {name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>eligiblePopulation</b>', notes: 'writable'},
  {name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional'},
  {name: 'eligiblePopulationExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure. eligiblePopulationExclusion should be 0 for all CQM measures as excluded populations should already have been subtracted out of the eligible population in the denominator. eligiblePopulationExclusion can have a value for eCQM measures where no human intervention is allowed. In the measures specifications for claims measures and eCQMs, this field is also referred to as "Denominator Exclusion". In measures specifications for registry and QCDR measures, this field is referred to as "Numerator Exclusion".', notes: 'writable, optional'},
  {name: 'eligiblePopulationException', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied but who are excluded from the measure. In the measures specifications, this field is also referred to as "Denominator Exception".', notes: 'writable, optional'},
  {name: 'eligiblePopulation', value: 'integer', description: 'The total number of eligible patients as described by the measure. Must be greater than or equal to zero. In the measures specifications, this field is also referred to as "Eligible Population Denominator".', notes: 'writable'},
  {name: 'reportingRate', value: 'float', description: 'The reporting rate, ranging from zero to one-hundred and representing a percentage, is equal to ((performanceMet + eligiblePopulationExclusion + eligiblePopulationException + performanceNotMet) / eligiblePopulation) * 100. This is also referred to as data completeness.', notes: 'calculated by API and returned in response'},
  {name: 'performanceRate', value: 'float', description: 'The performance rate for a single performance rate measurement, ranging from zero to one-hundred and representing a percentage, is equal to (performanceMet / (performanceMet + performanceNotMet)) * 100.', notes: 'writable, calculated by API and returned in response, for single-performance rate only'}
];

const MULTI_PERFORMANCE_RATE_FIELDS = [
  {name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported  via certified EHR technology without any manual interference.', notes: 'writable, required'},
  {name: 'reportingRate', value: 'float', description: 'The reporting rate, ranging from zero to one-hundred and representing a percentage, is equal to ((performanceMet + eligiblePopulationExclusion + eligiblePopulationException + performanceNotMet) / eligiblePopulation) * 100. This is also referred to as data completeness.', notes: 'calculated by API and returned in response'},
  {
    name: 'performanceRate',
    value: 'float',
    description: 'Performance rates are stored and represented as percentages with values from 0.00 to 100.00. ' +
      'The performance rate for a multiple performance rate measurement is calculated using the overallAlgorithm of the corresponding measure. ' +
      'Note, performance rate calculations exclude any "overall" strata, except where the overallAlgorithm is overallStratumOnly. ' +
      'Also note, for the <b>simpleAverage</b> and <b>overallStratumOnly</b> algorithms, each stratum\'s performance rate is calculated as <samp>performanceMet / (performanceMet + performanceNotMet - exclusions)</samp>. ' +
      'Currently, a measure\'s overallAlgorithm may be one of the following:<ul>' +
      '<li><b>simpleAverage:</b> <samp>(sum strata\'s performance rates) / (number of strata) * 100</samp>,</li>' +
      '<li><b>weightedAverage:</b> <samp>((sum strata\'s performanceMet) / (sum strata\'s performanceMet and performanceNotMet)) * 100</samp>, or,</li>' +
      '<li><b>sumNumerators:</b> <samp>sum strata\'s performanceMet</samp>, or,</li>' +
      '<li><b>overallStratumOnly:</b> performance rate of the "overall" stratum.</li></ul>',
    notes: 'writable, calculated by API and returned in response, for multi-performance rate only'},
  {name: 'strata', value: 'array(performanceRateStratum)', description: 'The strata name associated with the performance rate measurement. Needs to match with the measure strata names in <a href="https://github.com/CMSgov/qpp-measures-data">qpp-measures-data</a>.', notes: 'writable, required'}
];

const STRATA_FIELDS = [
  {name: 'measurementId', value: 'string', description: 'The id of the measurement in which the stratum belongs.'},
  {name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>eligiblePopulation</b>', notes: 'writable, required'},
  {name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional'},
  {name: 'eligiblePopulationExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure. In the measures specifications, this field is also referred to as "Numerator Exclusion".', notes: 'writable, optional'},
  {name: 'eligiblePopulationException', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied but who are excluded from the measure. In the measures specifications, this field is also referred to as "Denominator Exception".', notes: 'writable, optional'},
  {name: 'eligiblePopulation', value: 'integer', description: 'The total number of eligible patients as described by the measure. Must be greater than or equal to zero. In the measures specifications, this field is also referred to as "Eligible Population Numerator/Denominator".', notes: 'writable, required'},
  {name: 'stratum', value: 'string', description: 'The strata associated with the performance rate measurement.', notes: 'writable, required'}
];

const ALL_CAUSE_READMISSION_FIELDS = [
  {name: 'score', value: 'float', description: 'The score of the measurement'},
  {
    name: 'numberOfIndexAdmissions',
    value: 'integer',
    description: 'Eligible (index) admissions include acute care hospitalizations for Medicare Fee-for-Service\n' +
        '(FFS) beneficiaries age 65 or older at non-federal, short-stay, acute-care or critical access\n' +
        'hospitals that occurred during the performance period and are not excluded.'
  },
  {
    name: 'numberOfReadmissions',
    value: 'integer',
    description: 'Readmissions during a 30-day period that followed an initial hospitalization.'
  },
  {
    name: 'plannedReadmissions',
    value: 'integer',
    description: 'Planned readmissions, which do not counted in the outcome.'
  },
  {
    name: 'indexReadmissionDiagnosisPairCounts',
    value: 'Array({indexAdmissionCode: string, ',
    description: 'Code for the initial admission, code for the readmission, and the number of occurrences.'
  },
  {
    name: 'indexAdmissionCountByDiagnosis',
    value: 'object',
    description: 'Code for an initial admission and the number of occurrences.'
  },
  {
    name: 'readmissionCountByDiagnosis',
    value: 'object',
    description: 'Code for a readmission and the number of occurrences.'
  }
];

const CAHPS_FIELDS = [
  {name: 'score', value: 'float', description: 'For CAHPS measurements 1 - 12: score for survey question. For CAHPS measurement 321: average of scores for CAHPS measurements 1 - 12 '},
  {name: 'reliability', value: 'string', description: 'Reliability of the measurement score.'},
  {name: 'isBelowMinimum', value: 'boolean', description: 'Whether number of answers to survey question is below minimum threshold.'}
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
          <li><a href='#all-cause-readmission-measurements'>All Cause Readmission</a></li>
          <li><a href='#cahps'>CAHPS</a></li>
        </ul>
        <p className='ds-text--lead'>The Measurements resource represents performance data for a specific measure within a MeasurementSet. There are five types of Measurements: Boolean, Proportion, Non-Proportion, Single-Performance Rate, and Multi-Performance Rate. Each MeasurementSet can have multiple Measurements. No two Measurements in a given MeasurementSet can have the same measureId.</p>
        <p className='ds-text--lead'><a href='https://preview.qpp.cms.gov/api/submissions/public/docs/#/Measurements'>Try it out!</a></p>
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
  "measurementSetId": string,
  "measureId": string,
  "value": [`}
                <a href='#boolean-measurements'>Boolean</a> | <a href='#proportion-measurements'>Proportion</a> | <a href='#non-proportion'>Non-Proportion</a> | {`
    `} <a href='#single-performance-rate-measurements'>Single-Performance Rate</a> | <a href='#multi-performance-rate-measurements'>Multi-Performance Rate</a> | {`
    `} <a href='#all-cause-readmission-measurements'>All Cause Readmission</a> | <a href='#cahps'>CAHPS </a>
                {`]
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={FIELDS} />

        <h1 className='ds-h1' id='boolean-measurements'>Boolean Measurements</h1>
        <p className='ds-text--lead'>Boolean Measurements are applicable to Improvement Activity (IA) and Promoting Interoperability (PI) measures. For PI Measures, if a Measure has an Exclusion Measure ID listed, this means that the Exclusion Measure ID cannot be submitted in the same Measurement Set as the original Measure because they have opposite meanings and cannot both be true.</p>
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
  "measurementSetId": string,
  "measureId": string,
  "value": boolean
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={BOOLEAN_FIELDS} />

        <h1 className='ds-h1' id='proportion-measurements'>Proportion Measurements</h1>
        <p className='ds-text--lead'>Proportion Measurements are applicable to Promoting Interoperability (PI) measures. For PI Measures, if a Measure has an Exclusion Measure ID listed, this means that the Exclusion Measure ID cannot be submitted in the same Measurement Set as the original Measure because they have opposite meanings and cannot both be true.</p>
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
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "numerator": integer,
    "denominator": integer
  }
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={PROPORTION_FIELDS} />

        <h1 className='ds-h1' id='non-proportion-measurements'>Non-Proportion Measurements</h1>
        <p className='ds-text--lead'>Non-Proportion Measurements are applicable to quality measures. Most are authored by QCDRs and are used to attest to measures that are otherwise categorized as 'ratio', 'continuous variable', or a combination of 'proportion' and the former. Note this means that having a false value in the proportion field of QCDR documentation is sufficient to determine that a measure as non-proportional, but having a true value for proportion is insufficient to determine that measure as proportional. Non-proportion measurements are unconstrained, so while the fields are 'numerator' and 'denominator' there is no validation that the numerator must be less than or equal to the denominator or that the denominator is greater than 0, as is the case for proportion measurements.</p>
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
                  "measurementSetId": string,
                  "measureId": string,
                  "value": {
                    "numerator": float,
                    "denominator": float,
                    "isEndToEndReported": boolean,
                    "denominatorException": float,
                    "numeratorExclusion": float,
                    "reportingRate": float,
                    "observationInstances": integer
                  }
                }`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={NON_PROPORTION_FIELDS} />

        <h1 className='ds-h1' id='single-performance-rate-measurements'>Single-Performance Rate Measurements</h1>
        <p className='ds-text--lead'>Single-Performance Rate Measurements are applicable to Quality measures. There are two types of Single-Performance Rate Measurements: registry and normal. The difference between the two is that for Registry Single-Performance Rate Measurements, the performanceRate field is both writable and required.</p>
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
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "isEndToEndReported": boolean,
    "performanceMet": integer,
    "performanceNotMet": integer,
    "eligiblePopulationExclusion": integer,
    "eligiblePopulationException": integer,
    "eligiblePopulation": integer,
    "performanceRate": float,
    "reportingRate": float
  }
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={SINGLE_PERFORMANCE_RATE_FIELDS} />

        <h1 className='ds-h1' id='multi-performance-rate-measurements'>Multi-Performance Rate Measurements</h1>
        <p className='ds-text--lead'>Multi-Performance Rate Measurements are applicable to Quality measures. There are two types of Multi-Performance Rate Measurements: registry and normal. The difference between the two is that for Registry Multi-Performance Rate Measurements, the performanceRate field is both writable and required. Multi-Performance Rate Measurements contain multiple strata and the stratum field is required for each.</p>
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
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "isEndToEndReported": boolean,
    "performanceRate": float,
    "reportingRate": float,
    "strata": array(`}
                <a href='#stratum'>Performance Rate Stratum</a>
                {`)
  }
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={MULTI_PERFORMANCE_RATE_FIELDS} />

        <h1 className='ds-h1' id='stratum'>Multi-Performance Rate Stratum</h1>
        <p className='ds-text--lead'>A Multi-Performance Rate Stratum represents the performance data for a specified subset of the population, as described by the stratum field.</p>
        <h2 className='ds-h2'>Resource Representation</h2>
        <div>
          <Tabs className='example-code-tabs'>
            <TabList>
              <Tab>Sample JSON</Tab>
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
          </Tabs>
        </div>
        <DataModelTable fields={STRATA_FIELDS} />

        <h1 className='ds-h1' id='all-cause-readmission-measurements'>All Cause Readmission Measurements</h1>
        <p className='ds-text--lead'>An All Cause Readmission Measurement represents beneficiaries aged 65 and older that were hospitalized at a short-stay acute-care hospital
            and were readmitted to an acute-care hostpital for any reason within 90 days of being discharged from the original hospital.
            Third party integrators cannot submit All Cause Readmission measurements.
        </p>
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
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "score": float,
    "details": {
      "numberOfIndexAdmissions": integer,
      "numberOfReadmissions": integer,
      "plannedReadmissions": integer,
      "indexReadmissionDiagnosisPairCounts": [
          {
          "indexAdmissionCode": string,
          "readmissionCode": string,
          "count": integer
          }
       ],
       "indexAdmissionCountByDiagnosis": [
          {
          "code": string,
          "count": integer
          }
        ],
       "readmissionCountByDiagnosis": [
          {
          "code": string,
          "count": integer
          }
       ]
    }
  }
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>

        <DataModelTable fields={ALL_CAUSE_READMISSION_FIELDS} />

        <h1 className='ds-h1' id='cahps'>CAHPS Measurements</h1>
        <p className='ds-text--lead'>CAHPS (Consumer Assessment of Healthcare Providers and Systems) is a series of patient surveys rating
            health care experiences is an optional Quality measure that groups participating in MIPS can elect to administer.
            Third party integrators cannot submit CAHPS measurements.
        </p>
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
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "score": float,
    "reliability": string,
    "mask": boolean,
    "isBelowMinimum": boolean
  }
}`}
              </pre>
            </TabPanel>
          </Tabs>
        </div>
        <DataModelTable fields={CAHPS_FIELDS} />

      </div>
    );
  }
}

export default Measurements;
