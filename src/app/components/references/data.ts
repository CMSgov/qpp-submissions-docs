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
    { name: 'measureId', value: 'string', description: 'The id of the measure to which the measurement is attesting. All measures and their IDs are available in <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json" rel="noopener noreferrer" target="_blank">qpp-measures-data</a>. For quality measures, the measureId is the same as the quality number. For a promoting interoperability (PI) measure, the measureId is the measure identifier for the PI measure, and for an improvement activity (IA) measure, the measureId is the measure identifier for the IA measure.', notes: 'writable, required' },
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
    { name: 'reportingRate', value: 'float', description: 'The data completeness of the measure.', notes: 'calculated by API and returned in response' },
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
    { name: 'performanceRate', value: 'float', description: 'The performance rate for a single performance rate measurement, ranging from zero to one-hundred and representing a percentage, is equal to (performanceMet / (performanceMet + performanceNotMet)) * 100.', notes: `If <code>metricType = registrySingle-PerformanceRate</code> then writable and <i>required</i>.<br> If <code>metricType = singlePerformance-Rate</code>, then writeable and <i>optional</i>.` },
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
      notes: 'writable, calculated by API and returned in response, for multi-performance rate only',
    },
    { name: 'strata', value: 'Array(performanceRateStratum)', description: 'The strata name associated with the performance rate measurement. Needs to match with the measure strata names in <a href="https://github.com/CMSgov/qpp-measures-data" rel="noopener noreferrer" target="_blank">qpp-measures-data</a>.', notes: 'writable, required' },
  ],
  stratum: [
    { name: 'measurementId', value: 'string', description: 'The id of the measurement in which the stratum belongs.', notes: ' ' },
    { name: 'performanceMet', value: 'integer', description: 'The number of patients for which the measure criteria are satisfied. Must be greater than or equal to zero and less than or equal to the <b>eligiblePopulation</b>', notes: 'writable, required' },
    { name: 'performanceNotMet', value: 'integer', description: 'The number of patients for which the measure criteria are not satisfied.', notes: 'writable, optional' },
    { name: 'eligiblePopulationExclusion', value: 'integer', description: 'The number of patients who are excluded from the measure. In the measures specifications, this field is also referred to as "Numerator Exclusion".', notes: 'writable, optional' },
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
  "value": [
    ${Object.entries(measurementsTitleAndId).map(([title, id]) => `<a href='#${id}'>${title}</a>`).join(' | ')}
  ]
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
    { name: 'category', value: 'string', description: 'The category of the measurement set. Acceptable values are <b>"ia"</b>, <b>"pi"</b> and <b>"quality"</b>.  Note you cannot submit "pi" measurement sets for "apm" entity types.', notes: 'writable, required' },
    { name: 'chertId', value: 'string', description: 'The CMS EHR Certification Identification Number is generated by the CHPL. This is only applicable to Promoting Interoperability measurement sets.', notes: 'writable, required' },
    { name: 'submissionMethod', value: 'string', description: 'The method by which the measurement set data was submitted. Acceptable values are <b>"cmsWebInterface"</b>, <b>"electronicHealthRecord"</b>, <b>"claims"</b>, <b>"registry"</b>, <b>"certifiedSurveyVendor"</b> and <b>"administrativeClaims"</b>.', notes: 'writable, required' },
    { name: 'programName', value: 'string', description: 'The quality payment program under which the measurement set belongs, MIPS or CPC+. Acceptable values are <b>"mips"</b> and <b>"cpcPlus"</b>. If not provided, programName will be recorded as "mips".', notes: 'writable, optional' },
    { name: 'practiceId', value: 'string', description: 'The ID of the practice associated with the measurement set. Required if programName is set to "cpcPlus". Must be omitted if programName is not set to "cpcPlus".', notes: 'writable, optional' },
    { name: 'performanceStart', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The first date when the measurement data is applicable.', notes: 'writable, required' },
    { name: 'performanceEnd', value: 'string', description: 'A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). The last date when the measurement data is applicable.', notes: 'writable, required' },
    { name: 'measureSet', value: 'string', description: 'The speciality set which the measurement set is attesting. Will need a different measurementSet for each specialty set.  Only 0 to 1 measureSets are accepted per measurementSet.  Acceptable values are <b>"allergyImmunology"</b>, <b>"anesthesiology"</b>, <b>"cardiology"</b>, <b>"dermatology"</b>, <b>"diagnosticRadiology"</b>, <b>"electrophysiologyCardiacSpecialist"</b>, <b>"emergencyMedicine"</b>, <b>"gastroenterology"</b>, <b>"generalOncology"</b>, <b>"generalPracticeFamilyMedicine"</b>, <b>"generalSurgery"</b>, <b>"hospitalists"</b>, <b>"internalMedicine"</b>, <b>"interventionalRadiology"</b>, <b>"mentalBehavioralHealth"</b>, <b>"neurology"</b>, <b>"obstetricsGynecology"</b>, <b>"ophthalmology"</b>, <b>"orthopedicSurgery"</b>, <b>"otolaryngology"</b>, <b>"pathology"</b>, <b>"pediatrics"</b>, <b>"physicalMedicine"</b>, <b>"plasticSurgery"</b>, <b>"preventiveMedicine"</b>, <b>"radiationOncology"</b>, <b>"rheumatology"</b>, <b>"thoracicSurgery"</b>, <b>"urology"</b>, or <b>"vascularSurgery"</b>.', notes: 'writable, optional' },
    { name: 'measurements', value: 'Array(measurements)', description: 'Measurements associated with the measurement set.', notes: 'writable, optional' },
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
  "practiceId": string,
  "performanceStart": date,
  "performanceEnd": date,
  "measureSet": string,
  "measurements": array(<a href='measurements'>Measurements Resource</a>)
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
    { name: 'entityId', value: 'string', description: 'The unique identifier for the virtual group or APM associated with the submission.  If a CPC+ APM, the entityID is the CPC+ PracticeID', notes: 'writable, required if entityType is "apm" or "virtualGroup" ' },
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
    { name: 'benchmarkYear', value: 'integer', description: 'A four digit integer', notes: 'Read-only<br/><br/>The benchmarkYear corresponds to the year of performance data that was used to generate this benchmark. In other words, submissions for performanceYear x will be compared against the benchmarkYear y\'s results.' },
    { name: 'performanceYear', value: 'integer', description: 'A four digit integer', notes: 'Read-only<br/><br/>The performanceYear corresponds to the time period in which the performance data that was submitted for scoring originated.' },
    { name: 'submissionMethod', value: 'string', description: 'The method by which data is submitted for this benchmark', notes: 'Read-only<br/><br/>Acceptable values are <b>cmsWebInterface</b>, <b>electronicHealthRecord</b>, <b>claims</b>, <b>registry</b>, <b>certifiedSurveyVendor</b>, and <b>administrativeClaims</b>.' },
    { name: 'measureId', value: 'string', description: 'The id of the measure for which the benchmark has decile values.', notes: 'Read-only<br/><br/>All measures and their IDs are available in <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a>.' },
    { name: 'isToppedOut', value: 'boolean', description: 'A boolean value that represents whether the latter deciles of a benchmark top out and repeat a value of 100 or, in the case of inverse measures, a value of 0', notes: 'Read-only' },
    { name: 'deciles', value: 'array(float)', description: 'A list of 9 floats', notes: 'Read-only<br/>Optional<br/><br/>This list represents the deciles for a given measure, submitted via a particular submission method in a particular performance year. The nine numbers represent the inclusive lower bounds of deciles 2 through 10. The upper and lower bounds of the measurement value range are implied to be 100 and 0 respectively for direct measures and 0 and 100 respectively for inverse measures. The range of any given decile begins at its lower bound and continues up to but does not include the subsequent decile\'s lower bound. If the subsequent decile\'s lower bound is equal to the current decile\'s lower bound, then that decile is undefined or, in other words, empty.' },
    { name: 'status', value: 'string', description: '\'current\', \'currentInsufficientData\', \'historical\', or \'historicalNoData\'', notes: 'Read-only<br/>Required<br/><br/><b>\'current\'</b>: current benchmark subject to ongoing updates.<b>\'currentInsufficientData\'</b>: unable to calculate current benchmark. <b>\'historical\'</b>: historical data present. <b>\'historicalNoData\'</b>: historical data expected but not present.' },
  ],
};

export const benchmarksTabs: ITabs = {
  fields: [
    {
      tab: 'Sample JSON',
      code: `{
  "benchmarkYear": integer,
  "performanceYear": integer,
  "submissionMethod": string,
  "measureId": string,
  "isToppedOut": boolean,
  "deciles": array(float),
  "status": string
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


