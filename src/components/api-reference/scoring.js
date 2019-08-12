import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../styles/common/example-code-tabs.css';

import DataModelTable from './common/data-model-table';
import ScoringNavigationTable from './common/data-scoring-navigation-table';

import submissionJsonExampleIa from './common/submission-example-ia.json';
import submissionJsonExampleAci from './common/submission-example-aci.json';
import submissionJsonExampleQuality from './common/submission-example-quality.json';
import scoringJsonExampleIa from './common/scoring-example-output-ia.json';
import scoringJsonExampleAci from './common/scoring-example-output-aci.json';
import scoringJsonExampleQuality from './common/scoring-example-output-quality.json';

const submissionJsonExampleStringIa = JSON.stringify(submissionJsonExampleIa, null, 2);
const submissionJsonExampleStringAci = JSON.stringify(submissionJsonExampleAci, null, 2);
const submissionJsonExampleStringQuality = JSON.stringify(submissionJsonExampleQuality, null, 2);
const scoringJsonExampleStringIa = JSON.stringify(scoringJsonExampleIa, null, 2);
const scoringJsonExampleStringAci = JSON.stringify(scoringJsonExampleAci, null, 2);
const scoringJsonExampleStringQuality = JSON.stringify(scoringJsonExampleQuality, null, 2);

const SCORE_RESOURCE = {
  id: 'score-resource',
  title: 'Score Resource',
  description: 'The Score Resource represents the top level scoring data for a submission object. Each Score will have multiple Score Parts and may have multiple Score Warnings or Score Errors. The Score Detail field lists the current version of the Scoring Engine used to score the corresponding submission.',
  example: {
    json: `{
      "name": string,
      "title": string,
      "detail": string,
      "value": number
      "parts": array(<a href='#score-part-resource'>Score Part</a>),
      "metadata": object(<a href='#score-resource-meta'>Score Metadata</a>),
      "warnings": array(string),
      "errors": array(string)
    }`
  },
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Name of score object',
      notes: 'static'
    },
    {
      name: 'title',
      value: 'string',
      description: 'Title of score object',
      notes: 'static'
    },
    {
      name: 'detail',
      value: 'string',
      description: 'Semantic version of scoring engine',
      notes: 'Semantic version of the Scoring Engine used to compute the score Object'
    },
    {
      name: 'value',
      value: 'number',
      description: 'Total score of submission',
      notes: 'Final, total score for the submission'
    },
    {
      name: 'parts',
      value: 'array',
      description: 'Array of Score Parts',
      notes: 'Performance category score parts, that contribute to total score'
    },
    {
      name: 'metadata',
      value: 'object',
      description: 'Top level scoring metadata',
      notes: ''
    },
    {
      name: 'warnings',
      value: 'array',
      description: 'Array of Warnings',
      notes: 'Scoring issues that do not halt the scoring process'
    },
    {
      name: 'errors',
      value: 'array',
      description: 'Array of Errors',
      notes: 'Scoring issues that halt the scoring process'
    }
  ],
  metadataMessages: {
    base: {
      metadata: [
        {
          name: 'messages',
          value: 'object',
          description: 'Key identifiers with value strings as messages',
          notes: ''
        },
        {
          name: 'maxFinalScore',
          value: 'number',
          description: 'Maximum possible final score',
          notes: ''
        },
        {
          name: 'maxMediumContributionIA',
          value: 'number',
          description: 'Medium score contribution of IA measurements',
          notes: 'Dependent on provider profile'
        },
        {
          name: 'maxHighContributionIA',
          value: 'number',
          description: 'High score contribution for IA measurements',
          notes: 'Dependent on provider profile'
        },
        {
          name: 'maxContributionIA',
          value: 'number',
          description: 'Maximum score the IA category can contribute to the final score',
          notes: 'Dependent on provider profile'
        },
        {
          name: 'maxContributionACI',
          value: 'number',
          description: 'Maximum score the ACI category can contribute to the final score',
          notes: 'Dependent on provider profile'
        },
        {
          name: 'maxContributionQuality',
          value: 'number',
          description: 'Maximum score the Quality category can contribute to the final score',
          notes: 'Dependent on provider profile'
        }
      ],
      messages: [
        {
          name: 'containsEmaGhost',
          value: 'string',
          description: 'EMA Ghost Submission messaging',
          notes: ''
        }
      ]
    },
    ia: {},
    aci: {},
    quality: {}
  }
};

const SCORE_PART_RESOURCE = {
  id: 'score-part-resource',
  title: 'Score Part Resource',
  description: 'The Score Part resource represents the categorical scoring data for a submission object. Categorical scoring refers to one of the three QPP Performance Categories, which are IA, ACI or Quality.',
  example: {
    json: `[
      "name": string,
      "title": string,
      "detail": string,
      "value": number,
      "original": object(<a href='#category-score-resource'>Category Score</a>),
      "metadata": object(<a href='#score-part-resource-meta'>Score Part Metadata</a>)
    ]`
  },
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Performance category identifier',
      notes: ''
    },
    {
      name: 'title',
      value: 'string',
      description: 'Title of score part object',
      notes: 'e.g., "ACI component of final score"'
    },
    {
      name: 'detail',
      value: 'string',
      description: 'Performance category score weight',
      notes: 'e.g., "Scoring based on weight of 15%"'
    },
    {
      name: 'value',
      value: 'number',
      description: 'Weighted category score',
      notes: ''
    },
    {
      name: 'original',
      value: 'object',
      description: 'Original category score part from individual category scoring engine',
      notes: 'Unweighted category score'
    },
    {
      name: 'metadata',
      value: 'object',
      description: 'Score Part metadata',
      notes: 'e.g. "{ maxContribution: 15 }"'
    }
  ],
  metadataMessages: {
    base: {
      metadata: [
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum score the Score Part can contribute to the final score',
          notes: ''
        }
      ],
      messages: null
    },
    ia: {},
    aci: {},
    quality: {}
  }
};

const CATEGORY_SCORE_RESOURCE = {
  id: 'category-score-resource',
  title: 'Category Score Resource',
  description: 'Each of the three individual category scoring engines has a Category Score resource. It represents the scoring output contained in a submission.',
  example: {
    json: `{
      "name": string,
      "value": number,
      "detail": string,
      "parts": array(<a href='#measurement-set-score-part-resource'>Measurement Set Score Part</a>)
    }`
  },
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Performance category identifier',
      notes: ''
    },
    {
      name: 'value',
      value: 'number',
      description: 'Performance category score',
      notes: ''
    },
    {
      name: 'detail',
      value: 'string',
      description: 'Highest scoring measurementSet by submission method',
      notes: 'Should be moved to a metadata field with an identifier by measurement set ID'
    },
    {
      name: 'parts',
      value: 'array',
      description: 'Scored measurementSets matching the category identifier',
      notes: 'Sorted descending by score'
    },
    {
      name: 'warnings',
      value: 'array',
      description: 'Warnings array inserted by the ACI scoring engine. This field is obsolete',
      notes: 'Should be removed'
    }
  ],
  metadataMessages: {
    base: {},
    ia: {},
    aci: {},
    quality: {}
  }
};

const MEASUREMENT_SET_SCORE_PART_RESOURCE = {
  id: 'measurement-set-score-part-resource',
  title: 'Measurement Set Score Part Resource',
  description: 'The Scored Measurement Set represents the scoring output for each category measurement set in a submission.',
  example: {
    json: `[
      "name": string,
      "value": number,
      "title": string,
      "detail": string,
      "parts": array(<a href='#measurement-score-part-resource'>Measurement Score Part</a> | <a href='#measurement-score-resource'>Measurement Score</a>),
      "metadata": object(<a href='#measurement-set-score-part-resource-meta'>Measurement Set Score Part Metadata</a>)
    ]`
  },
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Performance category identifier',
      notes: ''
    },
    {
      name: 'value',
      value: 'number',
      description: 'Category score if highest scoring measurementSet',
      notes: ''
    },
    {
      name: 'title',
      value: 'string',
      description: 'Measurement set title',
      notes: ''
    },
    {
      name: 'detail',
      value: 'string',
      description: 'Submission method',
      notes: ''
    },
    {
      name: 'parts',
      value: 'array',
      description: 'Scored measurements for IA or Quality measurement sets, or measurement score parts for ACI measurement sets',
      notes: ''
    },
    {
      name: 'metadata',
      value: 'object',
      description: '',
      notes: ''
    },
    {
      name: 'warnings',
      value: 'array',
      description: 'Warnings array inserted by the ACI scoring engine. This field is obsolete.',
      notes: 'Should be removed'
    }
  ],
  metadataMessages: {
    base: {},
    ia: {
      metadata: [
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum contribution the measurement set could contribute to the category score',
          notes: ''
        },
        {
          name: 'measurementSetPicked',
          value: 'boolean',
          description: 'Flag if the measurement set contributed to the final score',
          notes: ''
        },
        {
          name: 'measurementSetId',
          value: 'string',
          description: 'Data store ID for the measurement’s measurement set',
          notes: 'A V4 UUID'
        }
      ],
      messages: null
    },
    aci: {
      metadata: [
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum contribution the measurement set could contribute to the category score',
          notes: ''
        },
        {
          name: 'measurementSetPicked',
          value: 'boolean',
          description: 'Flag if the measurement set contributed to the final score',
          notes: ''
        },
        {
          name: 'measurementSetId',
          value: 'string',
          description: 'Data store ID for the measurement’s measurement set',
          notes: 'A V4 UUID'
        },
        {
          name: 'messages',
          value: 'object',
          description: '',
          notes: ''
        }
      ],
      messages: [
        {
          name: 'attestationStatementCheck',
          value: 'string',
          description: 'Completeness of pre-attestation checks',
          notes: ''
        },
        {
          name: 'baseMeasureCheck',
          value: 'string',
          description: 'Completeness of base measure checks',
          notes: ''
        }
      ]
    },
    quality: {
      metadata: [
        {
          name: 'measuresPicked',
          value: 'array',
          description: 'Array of measure IDs, picked to count towards the quality base score',
          notes: 'These measures contribute to the base score, before bonuses are applied'
        },
        {
          name: 'totalDecileScore',
          value: 'number',
          description: 'Sum of individual measurement base scores for picked measurements',
          notes: 'These points contribute to the totalMeasurementPoints metadata value'
        },
        {
          name: 'totalBonusPoints',
          value: 'number',
          description: 'Sum of individual measurement bonus scores whether the measurement was picked or skipped',
          notes: 'These points contribute to the totalMeasurementPoints metadata value'
        },
        {
          name: 'totalMeasurementPoints',
          value: 'number',
          description: 'Sum of individual measurement scores contributing to measurement set score',
          notes: 'Sum of totalDecileScore and totalBonusPoints not to exceed the measurement set score denominator value'
        },
        {
          name: 'denominator',
          value: 'number',
          description: 'Denominator value used when calculating the measurement set score',
          notes: ''
        },
        {
          name: 'e2eBonusScore',
          value: 'number',
          description: 'Total end-to-end bonus score for the measurement set',
          notes: ''
        },
        {
          name: 'reweightedScore',
          value: 'number',
          description: 'Score as if this measurement set was chosen as its overall category score and sent to final scoring and reweighted',
          notes: ''
        },
        {
          name: 'hasHighPriorityMeasurements',
          value: 'boolean',
          description: 'Flag if measurement set contains high priority measurements',
          notes: ''
        },
        {
          name: 'isEmaEligible',
          value: 'boolean',
          description: 'Flag if measurement set satisfies an EMA scoring scenario',
          notes: ''
        },
        {
          name: 'measurementSetPicked',
          value: 'boolean',
          description: 'Flag if the measurement set contributed to the final score',
          notes: ''
        },
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum contribution the measurement set could contribute to the category score',
          notes: ''
        },
        {
          name: 'cahpsScore',
          value: 'number',
          description: 'The score of a CAHPS measurement set',
          notes: ''
        },
        {
          name: 'processingStatus',
          value: 'string',
          description: 'Represents whether a measurement set can qualify as a category score',
          notes: ''
        },
        {
          name: 'messages',
          value: '',
          description: '',
          notes: ''
        }
      ],
      messages: [
        {
          name: 'denominator',
          value: 'string',
          description: 'Details how denominator was determined',
          notes: ''
        },
        {
          name: 'totalMeasurementPoints',
          value: 'string',
          description: 'Description of this metadata field',
          notes: ''
        },
        {
          name: 'totalBonusPoints',
          value: 'string',
          description: 'Description of this metadata field',
          notes: ''
        },
        {
          name: 'hasHighPriorityMeasurements',
          value: 'string',
          description: 'Describes Scoring Engine detection of high priority measurements',
          notes: ''
        }
      ]
    }
  }
};

const MEASUREMENT_SCORE_PART_RESOURCE = {
  id: 'measurement-score-part-resource',
  title: 'Measurement Score Part Resource',
  description: 'The Measurement Score Part resource represents the structured organization of Measurement Scores organized into score parts. ACI is unique in that scored measurements are grouped into individual score parts.',
  example: {
    json: `[
      "name": string,
      "value": number,
      "detail": string,
      "parts": array(<a href='#measurement-score-resource'>Measurement Score</a>),
      "metadata": object(<a href='#measurement-score-part-resource-meta'>Measurement Score Part Metadata</a>),
      "warnings": array(string)
    ]`
  },
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Score part identifier',
      notes: ''
    },
    {
      name: 'value',
      value: 'number',
      description: 'Total score the score part contributes',
      notes: ''
    },
    {
      name: 'detail',
      value: 'string',
      description: 'Empty string',
      notes: 'Should be removed'
    },
    {
      name: 'parts',
      value: 'array',
      description: 'Array of Measurement Scores',
      notes: ''
    },
    {
      name: 'metadata',
      value: 'object',
      description: '',
      notes: ''
    },
    {
      name: 'warnings',
      value: 'array',
      description: 'Warnings array inserted by the ACI scoring engine. This field is obsolete.',
      notes: 'Should be removed'
    }
  ],
  metadataMessages: {
    base: {},
    ia: {},
    aci: {
      metadata: [
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum contribution the score part could contribute to the measurement set score',
          notes: ''
        }
      ],
      messages: null
    },
    quality: {}
  }
};

const MEASUREMENT_SCORE_RESOURCE = {
  id: 'measurement-score-resource',
  title: 'Measurement Score Resource',
  description: 'The Measurement Score resource represents the scoring result for each measurement within a submission’s measurement sets.',
  example: {
    json: `[
      "name": string,
      "title": string,
      "value": number,
      "detail": string,
      "metadata": object(<a href='#measurement-score-resource-meta'>Measurement Score Metadata</a>)
    ]`
  },
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Measurement identifier',
      notes: 'The required measure ID from the measure\'s <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a> definition'
    },
    {
      name: 'title',
      value: 'string',
      description: 'Measurement title',
      notes: 'Utilized for IA measurements only'
    },
    {
      name: 'value',
      value: 'number',
      description: 'Measurement score value',
      notes: 'Required'
    },
    {
      name: 'detail',
      value: 'string',
      description: 'Measurement scoring detail',
      notes: 'Utilized for Quality measurements only'
    },
    {
      name: 'metadata',
      value: 'object',
      description: '',
      notes: ''
    }
  ],
  metadataMessages: {
    base: {},
    ia: {
      metadata: [
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum point contribution possible for the measurement',
          notes: ''
        },
        {
          name: 'measurementId',
          value: 'string',
          description: 'Data store ID for measurement',
          notes: 'A v4 UUID'
        }
      ],
      messages: null
    },
    aci: {
      metadata: [
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum point contribution possible for the measurement',
          notes: ''
        },
        {
          name: 'measurementId',
          value: 'string',
          description: 'Data store ID for measurement',
          notes: 'A v4 UUID'
        }
      ],
      messages: null
    },
    quality: {
      metadata: [
        {
          name: 'performanceRate',
          value: 'number',
          description: 'Performance rate for the measurement',
          notes: 'Expressed as a percentage, not a decimal'
        },
        {
          name: 'reportingRate',
          value: 'string',
          description: 'Reporting rate for the measurement',
          notes: 'Expressed as a percentage, not a decimal'
        },
        {
          name: 'measurementId',
          value: 'string',
          description: 'Data store ID for the measurement',
          notes: 'A V4 UUID'
        },
        {
          name: 'measurementSetId',
          value: 'string',
          description: 'Data store ID for the measurement’s measurement set',
          notes: 'A V4 UUID'
        },
        {
          name: 'measureClass',
          value: 'string enum',
          description: 'Measure classification, whether Class I or Class II',
          notes: 'Should be converted into integer enum and renamed to “measurementClass”'
        },
        {
          name: 'measureTitle',
          value: 'string',
          description: 'Title of the measurement',
          notes: 'Should be moved to the measurement title'
        },
        {
          name: 'endToEndBonus',
          value: 'number',
          description: 'How many end-to-end bonus points this measurement can contribute',
          notes: ''
        },
        {
          name: 'outcomeOrPatientExperienceBonus',
          value: 'number',
          description: 'How many outcome or patient experience bonus points this measurement can contribute',
          notes: ''
        },
        {
          name: 'highPriorityBonus',
          value: 'number',
          description: 'How many high priority bonus points this measurement can contribute',
          notes: ''
        },
        {
          name: 'highPriorityBonusIgnored',
          value: 'boolean',
          description: 'First high priority bonus measure ignored',
          notes: ''
        },
        {
          name: 'decileScore',
          value: 'number',
          description: 'The decile according to the benchmark if the measurement is a Class I measurement or the base score if the measurement is a Class II',
          notes: 'These points may or may not be included in the measurement set score'
        },
        {
          name: 'performanceDenominator',
          value: 'number',
          description: 'The performance denominator used in calculating the performance and reporting rates',
          notes: ''
        },
        {
          name: 'performanceNumerator',
          value: 'number',
          description: 'The performance numerator used in calculating the performance and reporting rates',
          notes: ''
        },
        {
          name: 'eligiblePopulation',
          value: 'number',
          description: 'Eligible population passed in from the submission',
          notes: ''
        },
        {
          name: 'partialDecileScore',
          value: 'number',
          description: 'For Class I measurements, the decimal part of the decile score.',
          notes: ''
        },
        {
          name: 'partialPoints',
          value: 'number',
          description: 'For Class I measurements, the difference between the performance rate and the lower bound of the decile range.',
          notes: 'Thought of as “how far into” the decile the measurement fits'
        },
        {
          name: 'decile',
          value: 'number',
          description: 'The decile a Class I measurement fits in to according to its benchmark data',
          notes: ''
        },
        {
          name: 'deciles',
          value: 'array',
          description: 'Array of deciles taken from benchmark data',
          notes: 'Obtained from the measurement’s benchmark data'
        },
        {
          name: 'processingStatus',
          value: 'string enum',
          description: 'Whether or not the measurement was picked to calculate the base score',
          notes: 'Skipped measurements may still contribute to the score by bonuses'
        },
        {
          name: 'totalBonusPoints',
          value: 'number',
          description: 'Total bonus points the measurement can contribute',
          notes: 'These points may or may not be included in the measurement set score'
        },
        {
          name: 'totalMeasurementPoints',
          value: 'number',
          description: 'Total points the measurement can contribute, included base and bonus',
          notes: 'These points may or may not be included in the measurement set score'
        },
        {
          name: 'noBenchmarks',
          value: 'boolean',
          description: 'If the measurement lacks benchmark data',
          notes: ''
        },
        {
          name: 'benchmarkType',
          value: 'string',
          description: 'Submission method with which the measurement benchmark data corresponds',
          notes: ''
        },
        {
          name: 'eMeasureId',
          value: 'string',
          description: 'The measurements eMeasureId',
          notes: 'The eMeasureId from the measure\'s <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a> definition'
        },
        {
          name: 'cpcPlusGroup',
          value: 'string char',
          description: 'CPC+ group identifier for the measurement if it belongs to a CPC+ eligible measurement set',
          notes: ''
        },
        {
          name: 'isGhost',
          value: 'boolean',
          description: 'Measurement is a ghost',
          notes: ''
        },
        {
          name: 'messages',
          value: 'string',
          description: '',
          notes: ''
        }
      ],
      cpc_plus_metadata: [
        {
          name: 'measurementSetId',
          value: 'string',
          description: 'Data store ID for the measurement’s measurement set',
          notes: 'A V4 UUID'
        },
        {
          name: 'measurementId',
          value: 'string',
          description: 'Data store ID for the measurement',
          notes: 'A V4 UUID'
        },
        {
          name: 'measureTitle',
          value: 'string',
          description: 'Title of the measurement',
          notes: 'Should be moved to the measurement title'
        },
        {
          name: 'totalMeasurementPoints',
          value: 'number',
          description: 'Total points the measurement can contribute including base and bonus',
          notes: ''
        },
        {
          name: 'totalBonusPoints',
          value: 'number',
          description: 'Total bonus points the measurement can contribute',
          notes: ''
        },
        {
          name: 'benchmarkType',
          value: 'string',
          description: 'Submission method with which the measurement benchmark data corresponds',
          notes: ''
        },
        {
          name: 'eMeasureId',
          value: 'string',
          description: 'The measurements eMeasureId',
          notes: 'The eMeasureId from the measure\'s <a href="https://github.com/CMSgov/qpp-measures-data/blob/master/measures/measures-data.json">qpp-measures-data</a> definition'
        },
        {
          name: 'cpcPlusGroup',
          value: 'string char',
          description: 'CPC+ group identifier for the measurement if it belongs to a CPC+ eligible measurement set',
          notes: ''
        },
        {
          name: 'messages',
          value: 'string',
          description: '',
          notes: ''
        }
      ],
      messages: [
        {
          name: 'measurementClass',
          value: 'string',
          description: 'Details of how the measurement class was determined',
          notes: ''
        },
        {
          name: 'decileScore',
          value: 'string',
          description: 'Details how the decile score was applied according to the classification of the measurement',
          notes: ''
        },
        {
          name: 'measurementPicker',
          value: 'string',
          description: 'The place in which the measurement was picked for scoring',
          notes: ''
        },
        {
          name: 'totalMeasurementPoints',
          value: 'string',
          description: 'How points are included in the total score for the measurement based on its processing status',
          notes: ''
        }
      ]
    }
  }
};

const SCORE_NAVIGATION_EXAMPLES = [
  {
    find: 'Total Score',
    xpath: '/data/score/value',
    jsonpath: '$.data.score.value',
    value: '100'
  },
  {
    find: 'Quality Contribution to Final Score',
    xpath: '/data/score/parts[3]/value',
    jsonpath: '$.data.score.parts[2].value',
    value: '60'
  },
  {
    find: 'Quality Category Score',
    xpath: '/data/score/parts[3]/original/value',
    jsonpath: '$.data.score.parts[2].original.value',
    value: '100'
  },
  {
    find: 'Quality Measure Total Bonus Points',
    xpath: '/data/score/parts[3]/original/parts/parts/metadata/totalBonusPoints',
    jsonpath: '$.data.score.parts[2].original.parts[*].parts[*].metadata.totalBonusPoints',
    value: 'an integer'
  },
  {
    find: 'ACI Contribution to Final Score',
    xpath: '/data/score/parts[2]/value',
    jsonpath: '$.data.score.parts[1].value',
    value: '25'
  },
  {
    find: 'ACI Category Score',
    xpath: '/data/score/parts[2]/original/value',
    jsonpath: '$.data.score.parts[1].original.value',
    value: '100'
  },
  {
    find: 'ACI Performance Score',
    xpath: '/data/score/parts[2]/original/parts/parts/metadata/totalBonusPoints',
    jsonpath: '$.data.score.parts[1].original.parts[0].parts[0].aci_performance.value',
    value: '20'
  },
  {
    find: 'IA Contribution to Final Score',
    xpath: '/data/score/parts[1]/value',
    jsonpath: '$.data.score.parts[0].value',
    value: '15'
  },
  {
    find: 'IA Category Score',
    xpath: '/data/score/parts[1]/original/value',
    jsonpath: '$.data.score.parts[0].original.value',
    value: '40'
  }
];

/**
 * Reformats a multi-line string to display correctly in <pre></pre> tags, so a developer does not need to manage
 * indentation within JSON blobs
 * @param code
 */
const reformattedCode = (code) => {
  return code
    .split('\n')
    .map(l => l.trim())
    .map((line, idx, arr) => {
      if (idx > 0 && idx < arr.length - 1) {
        return `  ${line}`;
      }

      return line;
    })
    .join('\n');
};

const CodeBlock = ({json}) => {
  const reformattedJSON = reformattedCode(json);

  return (
    <Tabs className='example-code-tabs'>
      <TabList>
        <Tab>JSON</Tab>
      </TabList>
      <TabPanel>
        <pre dangerouslySetInnerHTML={{__html: `${reformattedJSON}`}} />
      </TabPanel>
    </Tabs>
  );
};

CodeBlock.propTypes = {
  json: PropTypes.string.isRequired
};

const DataTableWithHeader = ({fields, header}) => {
  if (!fields) return null;
  return (
    <div className='ds-u-margin-top--2'>
      <h3 className='ds-h3'>{header}</h3>
      <DataModelTable fields={fields} />
    </div>
  );
};

DataTableWithHeader.propTypes = {
  fields: PropTypes.array,
  header: PropTypes.string.isRequired
};

const MetadataMessagesTitle = ({id}) => <h2 id={`${id}-meta`} className='ds-h2'>Metadata and Message Resource</h2>;

MetadataMessagesTitle.propTypes = {
  id: PropTypes.string.isRequired
};

const MetadataMessagePropType = PropTypes.shape({
  metadata: PropTypes.arrayOf(PropTypes.object),
  messages: PropTypes.arrayOf(PropTypes.object)
});

const MetadataMessages = ({id, base, ia, aci, quality}) => {
  if (Object.values(base).length > 0) {
    return (
      <div className='ds-u-margin-top--4'>
        <MetadataMessagesTitle id={id} />
        <DataTableWithHeader fields={base.metadata} header='Metadata' />
        <DataTableWithHeader fields={base.messages} header='Messages' />
      </div>
    );
  } else if (Object.values(ia).concat(Object.values(aci).concat(Object.values(quality))).length > 0) {
    return (
      <div className='ds-u-margin-top--4'>
        <MetadataMessagesTitle id={id} />
        <DataTableWithHeader fields={ia.metadata} header='Improvement Activities Metadata' />
        <DataTableWithHeader fields={ia.messages} header='Improvement Activities Messages' />
        <DataTableWithHeader fields={aci.metadata} header='Advancing Care Information Metadata' />
        <DataTableWithHeader fields={aci.messages} header='Advancing Care Information Messages' />
        <DataTableWithHeader fields={quality.metadata} header='Quality Metadata' />
        <DataTableWithHeader fields={quality.messages} header='Quality Messages' />
        <DataTableWithHeader fields={quality.cpc_plus_metadata} header='Quality CPC+ Metadata' />
        <DataTableWithHeader fields={quality.messages} header='Quality CPC+ Messages' />
      </div>
    );
  } else {
    return null;
  }
};

MetadataMessages.propTypes = {
  id: PropTypes.string.isRequired,
  base: MetadataMessagePropType,
  ia: MetadataMessagePropType,
  aci: MetadataMessagePropType,
  quality: MetadataMessagePropType
};

const Resource = ({id, title, description, example, fields, metadataMessages}) => {
  return (
    <div className='ds-u-margin-bottom--4'>
      <h1 className='ds-h1' id={id}>{title}</h1>
      <p className='ds-text--lead'>{description}</p>
      <h2 className='ds-h2'>Resource Representation</h2>
      <CodeBlock {...example} />
      <DataModelTable fields={fields} />
      <MetadataMessages {...metadataMessages} id={id} />
    </div>
  );
};

const ResourceFieldsPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.string
}).isRequired;

const ResourceMetadataMessagesPropType = PropTypes.shape({
  base: MetadataMessagePropType,
  ia: MetadataMessagePropType,
  aci: MetadataMessagePropType,
  quality: MetadataMessagePropType
});

Resource.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  example: PropTypes.objectOf(PropTypes.string).isRequired,
  fields: PropTypes.arrayOf(ResourceFieldsPropType).isRequired,
  metadataMessages: ResourceMetadataMessagesPropType.isRequired
};

export default class ScoringEngine extends PureComponent {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);

    return (
      <div id='scoring-engine'>
        <h1 className='ds-h1'>Scoring</h1>
        <ul>
          <li><a href='#IA'>Improvement Activities</a></li>
          <ul>
            <li><a href='#IA-Sub'>Improvment Activity Submissions</a></li>
            <li><a href='IA-Response'>Improvement Activity Scoring Response</a></li>
          </ul>
          <li><a href='#PI'>Promoting Interoperability</a></li>
          <ul>
            <li><a href='#PI-Sub'>Promoting Interoperability Submissions</a></li>
            <li><a href='#PI-Response'>Promoting Interoperability Scoring Response</a></li>
          </ul>
          <li><a href='#Quality'>Quality</a></li>
          <ul>
            <li><a href='#Quality-Sub'>Quality Submissions</a></li>
            <li><a href='#Quality-Response'>Quality Scoring Response</a></li>
          </ul>
          <li><a href='#More'>Further Resources</a></li>
          <ul>
            <li><a href={`#${SCORE_RESOURCE.id}`}>{SCORE_RESOURCE.title}</a></li>
            <li><a href={`#${SCORE_RESOURCE.id}`}>{SCORE_RESOURCE.title}</a></li>
            <li><a href={`#${SCORE_PART_RESOURCE.id}`}>{SCORE_PART_RESOURCE.title}</a></li>
            <li><a href={`#${CATEGORY_SCORE_RESOURCE.id}`}>{CATEGORY_SCORE_RESOURCE.title}</a></li>
            <li><a href={`#${MEASUREMENT_SET_SCORE_PART_RESOURCE.id}`}>{MEASUREMENT_SET_SCORE_PART_RESOURCE.title}</a></li>
            <li><a href={`#${MEASUREMENT_SCORE_PART_RESOURCE.id}`}>{MEASUREMENT_SCORE_PART_RESOURCE.title}</a></li>
            <li><a href={`#${MEASUREMENT_SCORE_RESOURCE.id}`}>{MEASUREMENT_SCORE_RESOURCE.title}</a></li>
          </ul>
        </ul>
        <div>
          <h1 className='ds-h1'>Overview</h1>
          <p className='ds-text--lead'>
            The scoring engine is responsible for interpreting submissions and outputting a score. Each category score is utilized to create the Overall Score for QPP. Related to Registry and QCDR submissions, only an Overall Score will be given. To view a Final Score, permission from the practice must be given.
          </p>
          <p className='ds-text--lead'>
            A performance score is generated in two different ways. First, submission by GET request with the identifier of a stored submission to the Submissions API’s submissions endpoint located at <code>/submissions/:id/score</code> will produce a score. Second, submission by POST request with a full submission in QPP JSON format to the Submissions API’s score preview endpoint located at <code>/submissions/score-preview</code> will also produce a score.
          </p>
          <p className='ds-text--lead'>
            In the sections below, each category within QPP that can be submitted will be explained and examples provided. Measures and Activities available for submission can be found here: <a href='https://github.com/CMSgov/qpp-measures-data/blob/master/measures/2018/measures-data.json'>qpp-measures-data</a>.
          </p>
          <p className='ds-text--lead'>
            Last, the Score Object is passed back to the QPP Submissions API, which builds the application response by inserting the Score Object into the response body and returns this response to the requester. This response body contains JSON describing in detail the record of the current aggregate estimate of the submission score.
          </p>
        </div>
        <div>
          <h1 className='ds-h1'>Group Vs. Individual Submission</h1>
          <p className='ds-text--lead'>
            There are two available options for submission, either Group, or Individual. These create two different records and are not combined to create a single score. If you are reporting as a Group, it is important to report every category you are reporting as a Group. If you are reporting as an individual, the same premise applies. The <code>"entityType"</code> field is the indicator within the submission to determine what is being reported. If reporting as a group, only the <code>"taxpayerIdentificationNumber"</code> is applicable. If you are reporting as an individual, you must report both the <code>"taxpayerIdentificationNumber"</code> and the corresponding <code>"nationalProviderIdentifier"</code>.
          </p>
          <br />
        </div>
        <div>
          <h1 className='ds-h1' id='IA'>Improvement Activities (IA)</h1>
          <p className='ds-text--lead'>
          The only available option for reporting Improvement Activities is boolean, and only Activities completed need to be reported.
          </p>
          <ul>
            <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#boolean'>Boolean</a></li>
          </ul>
          <div>
            <h2 className='ds-h2' id='IA-Sub'>Example IA Submission</h2>
            <p className='ds-text--lead'>
          The example submission below contains 4 activities. The reported activities contain both High and Medium weighted activities.
            </p>
            <br />
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${submissionJsonExampleStringIa}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <br />
        <div>
          <h2 className='ds-h2' id='IA-Response'>Example IA Submission Output Object</h2>
          <p className='ds-text--lead'>
          The output below shows the score at multiple levels. Although the IA category score has exceed the maximum points, you can never receive a score higher than the max. Activities that are High weighted are receiving a <code>"value": 20</code> at the actvity level in the response. Medium weighted activities are receiving <code>"value": 10</code>. The category has a <code>"maxContribution"</code> of 40 and the a <code>"maxContribution"</code> of 15 toward Overall Score.
          </p>
          <Tabs className='example-code-tabs'>
            <TabList>
              <Tab>Sample JSON</Tab>
            </TabList>
            <TabPanel>
              <pre>{`${scoringJsonExampleStringIa}`}</pre>
            </TabPanel>
          </Tabs>
        </div>
        <br />
        <div>
          <h1 className='ds-h1' id='PI'>Promoting Interoperability (PI)</h1>
          <p className='ds-text--lead'>
          The Promoting Interoperability Category is broken into 4 different sub-categories. Attestation Statements and Base Measures are required to receive a score in this category. If these are not submitted, this will result in a score of 0. The categories are outlined below:
          </p>
          <ul>
            <li>Attest Statements</li>
            <li>Base Measures</li>
            <li>Option Performance Measures</li>
            <li>Bonus Measures</li>
          </ul>
          <div>
            <h2 className='ds-h2' id='PI-Sub'>Example PI Submission</h2>
            <p className='ds-text--lead'>
            The measure types available for submission are outlined below. Each measure in the repo will dictate which type is to be utilized.
              <ul>
                <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#proportion-measurements'>Proportion Measures</a></li>
                <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#boolean'>Boolean</a></li>
              </ul>
            </p>
            <br />
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${submissionJsonExampleStringAci}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
          <br />
          <div>
            <h2 className='ds-h2' id='PI-Response'>Example PI Submission Output Object</h2>
            <p className='ds-text--lead'>
            The output below shows the score at multiple levels. Although the PI category score has exceed the maximum points, you can never receive a score higher than the max. If no score is return, check the <code>"attestationStatementCheck"</code> and <code>"baseMeasureCheck</code> wihin the <code>"metadata</code>. If either of these are listed as incomplete, the submission must be fixed to receive a score. The category has a <code>"maxContribution"</code> of 100 and the a <code>"maxContribution"</code> of 25 toward Overall Score.
            </p>
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${scoringJsonExampleStringAci}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <br />
        <div>
          <h1 className='ds=h1' id='Quality'>Quality</h1>
          <p className='ds-text--lead'>
          The Quality category requires 6 measures to receive full credit, one of which must be either an Outcome measure or High Priority. If no Outcome or High Priority measure is submitted, you will only be scored on the top 5 measures and receive a score of 0 for the sixth measure.
          </p>
          <br />
          <div>
            <h2 className='ds-h2' id='Quality-Sub'>Example Quality Submission</h2>
            <p className='ds-text--lead'>
              Submission structure in the Quality category are contingent on the measure being submitted. If there are questions around the data to be submitted in the fields, please refer to the measure specification. The available types related to the measures are outlined below:
            </p>
            <ul>
              <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#non-proportion-measurements'>Non-Proportion Measures</a></li>
              <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#single-performance-rate-measurements'>Single Performance Rates</a></li>
              <li><a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#multi-performance-rate-measurements'>Multi-Performance Rates</a></li>
            </ul>
            <p className='ds-text--lead'>
              In the sample below, measure 046 is a multi-strata, 110 is a single performance measure, ACEP32 is a non-proportion measure.
            </p>
            <Tabs className='example-code-tabs'>
              <TabList>
                <Tab>Sample JSON</Tab>
              </TabList>
              <TabPanel>
                <pre>{`${submissionJsonExampleStringQuality}`}</pre>
              </TabPanel>
            </Tabs>
          </div>
          <br />
          <div>
            <h2 className='ds-h2' id='Quality-Response'>Example Quality Submission Output Object</h2>
            <p className='ds-text--lead'>
          Based on the submission details, a data completness and performance rate is created. The measures are broken into three categories to determine score output.
            </p>
            <ul>
              <li>Class 1 - The measure has met both the data completeness threshold and minimum eligible population criteria</li>
              <ol type='a'>
                <li>If the measure has a benchmark, the measure will be compared to a benchmark and a score will be awarded based on performance compared to the benchmark</li>
                <li>If the measure does not have a benchmark, a score of 3 will be awarded</li>
              </ol>
              <li>Class 2 - The measure does not meet the 60% data completeness threshold or has below 20 eligible patients in the <code>eligiblePopulation</code> field, the measure will not be compared to a benchmark.</li>
              <ol type='a'>
                <li>If the clinician is a small practice, they will be awarded 3 points, irregardless of whether they have not either data completess or minimum eligible population criteria</li>
                <li>If the clinician is not a small practice and has met the data completenss rate but did not meet the minimum eligible population criteria score of 3 will be awarded</li>
              </ol>
              <li>Class 3 - If the clinician is not a small practice and has met the necessary eligible population criteria but has met the data completenss rate a score of 1 will be awarded</li>
            </ul>
            <br />
          </div>
          <Tabs className='example-code-tabs'>
            <TabList>
              <Tab>Sample JSON</Tab>
            </TabList>
            <TabPanel>
              <pre>{`${scoringJsonExampleStringQuality}`}</pre>
            </TabPanel>
          </Tabs>
        </div>
        <br />
        <h1 className='ds-h1' id='#More'>Further Resources</h1>
        <p className='ds-text--lead'>
          Detailed information related to all scoring responses can be found below. Each level of the scoring response details the different information and is specific to the information that is listed above.
        </p>
        <br />
        <ScoringNavigationTable fields={SCORE_NAVIGATION_EXAMPLES} />
        <br />
        <Resource {...SCORE_RESOURCE} />
        <Resource {...SCORE_PART_RESOURCE} />
        <Resource {...CATEGORY_SCORE_RESOURCE} />
        <Resource {...MEASUREMENT_SET_SCORE_PART_RESOURCE} />
        <Resource {...MEASUREMENT_SCORE_PART_RESOURCE} />
        <Resource {...MEASUREMENT_SCORE_RESOURCE} />
        <div>
          <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
        </div>
      </div>
    );
  }
}
