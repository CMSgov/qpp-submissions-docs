import { IDataModelTable, ICodeTab } from '../../../shared';

import submissionJsonExampleIa from './json/submission-example-ia.json';
import submissionJsonExampleAci from './json/submission-example-aci.json';
import submissionJsonExampleQuality from './json/submission-example-quality.json';
import scoringJsonExampleIa from './json/scoring-example-output-ia.json';
import scoringJsonExampleAci from './json/scoring-example-output-aci.json';
import scoringJsonExampleQuality from './json/scoring-example-output-quality.json';

export interface IFields {
  [k: string]: IDataModelTable[];
}

export interface ITabs {
  [k: string]: ICodeTab[];
}

interface IScoringData {
  [k: string]: ICodeTab[];
}

export const measurementSetPracticeDetails = {
  'Practice Details': 'practice-details',
};

export const measurementsTitleAndId = {
  'Boolean': 'boolean-measurements',
  'Proportion': 'proportion-measurements',
  'Non-Proportion': 'non-proportion-measurements',
  'Single-Performance Rate': 'single-performance-rate-measurements',
  'Multi-Performance Rate': 'multi-performance-rate-measurements',
  'Multi-Performance Rate Stratum': 'stratum',
};

export const measurementsFields: IFields = {
  fields: [
    { name: 'id', value: 'string', description: 'The id of the measurement.', notes: ' '},
    { name: 'measurementSetId', value: 'string', description: 'The id of the measurement set in which the measurement belongs.', notes: ' ' },
    { name: 'measureId', value: 'string', description: 'The id of the measure to which the measurement is attesting. All measures and their IDs are available in <a href="https://github.com/CMSgov/qpp-measures-data" rel="noopener noreferrer" target="_blank">qpp-measures-data</a>. For quality measures, the measureId is the same as the quality number. For a promoting interoperability (PI) measure, the measureId is the measure identifier for the PI measure, and for an improvement activity (IA) measure, the measureId is the measure identifier for the IA measure.', notes: 'writable, required' },
    { name: 'value', value: 'object', description: 'Different measurements will have different values. Acceptable measurement types are <b>boolean</b>, <b>proportion</b>, <b>non-proportion</b>, and <b>performance rate</b>.', notes: 'writable, required' },
  ],
  boolean: [
    { name: 'value', value: 'boolean', description: 'True if attesting to the associated measure.', notes: 'writable, required' },
  ],
  proportion: [
    { name: 'numerator', value: 'integer', description: 'The number of patients or episodes of care for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>denominator</b>.', notes: 'writable, required' },
    { name: 'denominator', value: 'integer', description: 'The total number of patients or episodes of care as described by the measure. Must be greater than or equal to zero. Can only be 0 if the numerator is 0 as well.', notes: 'writable, required' },
  ],
  nonProportion: [
    { name: 'numerator', value: 'float', description: 'The numerator as described in the QCDR measure specification.', notes: 'writable, required' },
    { name: 'denominator', value: 'float', description: 'The denominator as described in the QCDR measure specification.', notes: 'writable, required' },
    { name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported via certified EHR technology without any manual interference.', notes: 'writable, required' },
    { name: 'numeratorExclusion', value: 'float', description: 'The exclusions from the numerator field as described in the QCDR measure specification.', notes: 'writable, optional' },
    { name: 'denominatorException', value: 'float', description: 'The exceptions from the denominator field as described in the QCDR measure specification.', notes: 'writable, optional' },
    { name: 'reportingRate', value: 'float', description: 'The reporting rate, ranging from zero to one-hundred and representing a percentage, is equal to ((observationInstances + denominatorException + numeratorExclusion) / denominator) * 100. This is also referred to as data completeness.', notes: 'calculated by API and returned in response' },
    { name: 'observationInstances', value: 'integer', description: 'The number of denominator eligible instances that are used as input in the calculation to derive the numerator (i.e. average, ratio).', notes: 'writable, required' },
  ],
  singlePerformanceRate: [
    { name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported via certified EHR technology without any manual interference.', notes: 'writable, required' },
    { name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>eligiblePopulation</b>', notes: 'writable, required' },
    { name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional' },
    { name: 'eligiblePopulationExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure. eligiblePopulationExclusion should be 0 for all CQM measures as excluded populations should already have been subtracted out of the eligible population in the denominator. eligiblePopulationExclusion can have a value for eCQM measures where no human intervention is allowed. In the measures specifications for claims measures and eCQMs, this field is also referred to as "Denominator Exclusion". In measures specifications for registry and QCDR measures, this field is referred to as "Numerator Exclusion".', notes: 'writable, optional' },
    { name: 'eligiblePopulationException', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied but who are excluded from the measure. In the measures specifications, this field is also referred to as "Denominator Exception".', notes: 'writable, optional' },
    { name: 'eligiblePopulation', value: 'integer', description: 'The total number of eligible patients as described by the measure. Must be greater than or equal to zero. In the measures specifications, this field is also referred to as "Eligible Population Denominator".', notes: 'writable, required' },
    { name: 'reportingRate', value: 'float', description: 'The reporting rate, ranging from zero to one-hundred and representing a percentage, is equal to ((performanceMet + eligiblePopulationExclusion + eligiblePopulationException + performanceNotMet) / eligiblePopulation) * 100. This is also referred to as data completeness.', notes: 'calculated by API and returned in response' },
    { name: 'performanceRate', value: 'float', description: 'The performance rate for a single performance rate measurement, ranging from zero to one-hundred and representing a percentage, is equal to (performanceMet / (performanceMet + performanceNotMet)) * 100.', notes: `If <code>metricType = registrySinglePerformanceRate</code> then writable and <i>required</i>.<br> If <code>metricType = singlePerformanceRate</code>, then calculated by API and returned in response.` },
  ],
  multiPerformanceRate: [
    { name: 'isEndToEndReported', value: 'boolean', description: 'True if the measure was reported  via certified EHR technology without any manual interference.', notes: 'writable, required' },
    { name: 'reportingRate', value: 'float', description: 'The reporting rate, ranging from zero to one-hundred and representing a percentage, is equal to ((performanceMet + eligiblePopulationExclusion + eligiblePopulationException + performanceNotMet) / eligiblePopulation) * 100. This is also referred to as data completeness.', notes: 'calculated by API and returned in response' },
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
      notes: `If <code>metricType = registryMultiPerformanceRate</code> then writable and <i>required</i>.<br> If <code>metricType = multiPerformanceRate</code>, then calculated by API and returned in response.`,
    },
    { name: 'strata', value: 'Array(performanceRateStratum)', description: 'The strata name associated with the performance rate measurement. Needs to match with the measure strata names in <a href="https://github.com/CMSgov/qpp-measures-data" rel="noopener noreferrer" target="_blank">qpp-measures-data</a>.', notes: 'writable, required' },
  ],
  stratum: [
    { name: 'measurementId', value: 'string', description: 'The id of the measurement in which the stratum belongs.', notes: ' ' },
    { name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>eligiblePopulation</b>', notes: 'writable, required' },
    { name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional' },
    { name: 'eligiblePopulationExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure. eligiblePopulationExclusion should be 0 for all CQM measures as excluded populations should already have been subtracted out of the eligible population in the denominator. eligiblePopulationExclusion can have a value for eCQM measures where no human intervention is allowed. In the measures specifications for claims measures and eCQMs, this field is also referred to as "Denominator Exclusion". In measures specifications for registry and QCDR measures, this field is referred to as "Numerator Exclusion".', notes: 'writable, optional' },
    { name: 'eligiblePopulationException', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied but who are excluded from the measure. In the measures specifications, this field is also referred to as "Denominator Exception".', notes: 'writable, optional' },
    { name: 'eligiblePopulation', value: 'integer', description: 'The total number of eligible patients as described by the measure. Must be greater than or equal to zero. In the measures specifications, this field is also referred to as "Eligible Population Numerator/Denominator".', notes: 'writable, required' },
    { name: 'stratum', value: 'string', description: 'The strata associated with the performance rate measurement.', notes: 'writable, required' },
  ],
};

export const measurementsTabs: ITabs = {
  fields: [
    {
      tab: 'Sample JSON',
      code: `{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": ${Object.entries(measurementsTitleAndId).map(([title, id]) => `<a href='#${id}'>${title}</a>` ).join(' | ')}
}`,
    },
  ],
  boolean: [
    {
      tab: 'Sample JSON',
      code: `{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": boolean
}`,
    },
  ],
  proportion: [
    {
      tab: 'Sample JSON',
      code: `{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "numerator": integer,
    "denominator": integer
  }
}`,
    },
  ],
  nonProportion: [
    {
      tab: 'Sample JSON',
      code: `{
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
}`,
    },
  ],
  singlePerformanceRate: [
    {
      tab: 'Sample JSON',
      code: `{
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
}`,
    },
  ],
  multiPerformanceRate: [
    {
      tab: 'Sample JSON',
      code: `{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "isEndToEndReported": boolean,
    "performanceRate": float,
    "reportingRate": float,
    "strata": array(<a href='#${measurementsTitleAndId['Multi-Performance Rate Stratum']}'>Performance Rate Stratum</a>)
  }
}`,
    },
  ],
  stratum: [
    {
      tab: 'Sample JSON',
      code: `{
  "measurementId": string,
  "performanceMet": integer,
  "performanceNotMet": integer,
  "eligiblePopulationExclusion": integer,
  "eligiblePopulationException": integer,
  "eligiblePopulation": integer,
  "stratum": string
}`,
    },
  ],
  allCauseReadmission: [
    {
      tab: 'Sample JSON',
      code: `{
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
}`,
    },
  ],
  cahps: [
    {
      tab: 'Sample JSON',
      code: `{
  "id": string,
  "measurementSetId": string,
  "measureId": string,
  "value": {
    "score": float,
    "reliability": string,
    "mask": boolean,
    "isBelowMinimum": boolean
  }
}`,
    },
  ],
};

export const measurementSetsFields: IFields = {
  fields: [
    { name: 'id', value: 'string', description: 'The id of the measurement set.', notes: ' ' },
    { name: 'createdAt', value: 'datetime', description: 'The creation time of the measurement set in <a href="https://www.ietf.org/rfc/rfc3339.txt" rel="noopener noreferrer" target="_blank">RFC 3339</a> format.', notes: ' ' },
    { name: 'updatedAt', value: 'datetime', description: 'The modification time of the measurement set in <a href="https://www.ietf.org/rfc/rfc3339.txt" rel="noopener noreferrer" target="_blank">RFC 3339</a> format.', notes: ' ' },
    { name: 'submissionId', value: 'string', description: 'The id of the submission in which the measurement set belongs.', notes: ' ' },
    { name: 'category', value: 'string', description: 'The category of the measurement set. Acceptable values are: <li><b>"quality"</b></li> <li><b>"pi"</b></li> <li><b>"ia"</b></li>', notes: 'writable, required' },
    { name: 'cehrtId', value: 'string', description: 'The CMS EHR Certification Identification Number is generated by the CHPL. This is only applicable to Promoting Interoperability measurement sets.', notes: 'writable, required' },
    { name: 'submissionMethod', value: 'string', description: 'The method by which the measurement set data was submitted. Acceptable values are: <ul><li>Quality Category:<ul><li><b>"registry"</b> for MIPS CQMs reporting</li><li><b>"electronicHealthRecord"</b> for eCQM Reporting</li></ul></li><li>Promoting Interoperability and Improvement Activities:<ul><li><b>"registry"</b> for non QRDA format</li><li><b>"electronicHealthRecord"</b> for QRDA</li></ul></li></ul>', notes: 'writable, required' },
    { name: 'programName', value: 'string', description: 'The quality payment program under which the measurementSet should be scored.  Acceptable values are: <li><b>"mips"</b> for Traditional MIPS Reporting<li><b>"app1"</b> for the APM Performance Pathway</li><li><b>"MVP ID"</b> more information on the IDs can be found at the <a href="https://qpp.cms.gov/mips/mips-value-pathways" rel="noopener noreferrer" target="_blank">QPP Resource Library</a></li><li><b>"pcf"</b> for PCF Program submissions</li> If not provided, the programName will be recorded as "mips".', notes: 'writable, optional' },
    { name: 'practiceDetails', value: 'object', description: `This object contains the taxpayerIdentificationNumber and/or nationalProviderIdentifiers of the practice associated with the measurement set. Optional if programName is set to <b>"pcf"</b>. Must be omitted if programName is not set to <b>"pcf"</b>. More details <a href='measurement-sets#practice-details'>below</a>.`, notes: 'writeable, optional'},
    { name: 'performanceStart', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The first date when the measurement data is applicable.', notes: 'writable, required' },
    { name: 'performanceEnd', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The last date when the measurement data is applicable.', notes: 'writable, required' },
    { name: 'measurements', value: 'Array(measurements)', description: 'Measurements associated with the measurement set.', notes: 'writable, optional' },
  ],
  practiceDetails: [
    { name: 'taxpayerIdentificationNumber', value: 'string', description: 'The 9-digit identifier of the practice associated with the measurementSet. ', notes: 'writeable, optional'},
    { name: 'nationalProviderIdentifiers', value: 'string[]', description: 'An array of strings containing the 10-digit identifiers of the practice associated with the measurementSet, separated by commas.', notes: 'writeable, optional'},
  ],
};

export const measurementSetsTabs: ITabs = {
  fields: [
    {
      tab: 'Sample JSON',
      code: `{
  "id": string,
  "createdAt": datetime,
  "updatedAt": datetime,
  "submissionId": string,
  "category": string,
  "cehrtId": string,
  "submissionMethod": string,
  "programName": string,
  "practiceDetails": object(<a href='measurement-sets#practice-details'>Practice Details</a>),
  "performanceStart": date,
  "performanceEnd": date,
  "measurements": array(<a href='measurements'>Measurements Resource</a>)
}`,
    },
  ],
  practiceDetails: [
    {
      tab: 'Sample JSON',
      code: `{
  "taxpayerIdentificationNumber": string,
  "nationalProviderIdentifiers": string[]
}`,
    },
  ],
};

export const submissionsFields: IFields = {
  fields: [
    { name: 'id', value: 'string', description: 'The id of the submission.', notes: ' ' },
    { name: 'createdAt', value: 'datetime', description: 'The creation time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.', notes: ' ' },
    { name: 'updatedAt', value: 'datetime', description: 'The modification time of the submission in <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format.', notes: ' ' },
    { name: 'entityType', value: 'string', description: 'Acceptable values are <b>"apm"</b>, <b>"group"</b>, <b>"individual"</b>, <b>"virtualGroup"</b>', notes: 'writable, required' },
    { name: 'entityId', value: 'string', description: 'The unique identifier for the virtual group or APM associated with the submission.', notes: 'writable, required if entityType is "apm" or "virtualGroup" ' },
    { name: 'taxpayerIdentificationNumber', value: 'string', description: 'The 9-digit identifier of the provider associated with the submission.', notes: 'writable if entityType is "individual" or "group"' },
    { name: 'nationalProviderIdentifier', value: 'string', description: 'The 10-digit identifier of the provider associated with the submission.', notes: 'writable only if entityType is "individual"' },
    { name: 'performanceYear', value: 'integer', description: 'The year in which performance data for the submission was collected.', notes: 'writable, required' },
    { name: 'measurementSets', value: 'Array(measurementSet)', description: 'Measurement sets associated with the submission.', notes: 'writable, optional' },
  ],
};

export const submissionsTabs: ITabs = {
  fields: [
    {
      tab: 'Sample JSON',
      code: `{
      "id": string,
      "createdAt": datetime,
      "updatedAt": datetime,
      "entityType": string,
      "entityId": string,
      "taxpayerIdentificationNumber": string,
      "nationalProviderIdentifier": string,
      "performanceYear": integer,
      "measurementSets": array(<a href='measurement-sets'>MeasurementSets Resource</a>)
}`,
    },
  ],
};

export const benchmarksFields: IFields = {
  fields: [
    { name: 'benchmarkYear', value: 'integer', description: 'The performance year\'s data from which the benchmark deciles are calculated.	', notes: ' ' },
    { name: 'performanceYear', value: 'integer', description: 'The year in which the benchmark applies.	', notes: ' ' },
    { name: 'percentiles', value: 'numeric array', description: 'List of values with the lower bound limit of ranges for the 1st through 99th percentile.', notes: ' ' },
    { name: 'status', value: 'string', description: 'Indicates if the benchmark is based on historical data, current performance period data, or if there was insufficient data to calculate a benchmark.', notes: ' ' },
    { name: 'isToppedOut', value: 'boolean', description: 'Indicates if the benchmark is topped out for the current Performance Year	', notes: ' ' },
    { name: 'isToppedOutByProgram', value: 'boolean', description: 'Indicates if the benchmark is topped out for 2 consecutive years. This results in a 7 point cap applied to the measure for scoring.	', notes: ' ' },
    { name: 'isHighPriority', value: 'boolean', description: 'Indicates the measure is a high priority measure within the program. 	', notes: ' ' },
    { name: 'submissionMethod', value: 'string', description: 'The submissionMethod for which the benchmark is applicable.	', notes: ' ' },
    { name: 'measureId', value: 'string', description: 'The id of the measurement.	', notes: ' ' }
  ],
};

export const benchmarksTabs: ITabs = {
  fields: [
    {
      tab: 'Sample JSON',
      code: `{
  "benchmarkYear": 2021,
  "performanceYear": 2023,
  "percentiles": [...],
  "status": "historical",
  "isToppedOut": false,
  "isToppedOutByProgram": false,
  "isHighPriority": true,
  "submissionMethod": "registry",
  "measureId": "001"
}`,
    },
  ],
};

export const scoringData: IScoringData = {
  submissionJsonExampleStringIa: [{
    tab: 'Sample JSON',
    code: JSON.stringify(submissionJsonExampleIa, null, 2),
  }],
  submissionJsonExampleStringAci: [{
    tab: 'Sample JSON',
    code: JSON.stringify(submissionJsonExampleAci, null, 2),
  }],
  submissionJsonExampleStringQuality: [{
    tab: 'Sample JSON',
    code: JSON.stringify(submissionJsonExampleQuality, null, 2),
  }],
  scoringJsonExampleStringIa: [{
    tab: 'Sample JSON',
    code: JSON.stringify(scoringJsonExampleIa, null, 2),
  }],
  scoringJsonExampleStringAci: [{
    tab: 'Sample JSON',
    code: JSON.stringify(scoringJsonExampleAci, null, 2),
  }],
  scoringJsonExampleStringQuality: [{
    tab: 'Sample JSON',
    code: JSON.stringify(scoringJsonExampleQuality, null, 2),
  }],
};


