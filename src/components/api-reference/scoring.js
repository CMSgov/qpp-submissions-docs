import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../styles/common/example-code-tabs.css';

import DataModelTable from './common/data-model-table';

const SCORE_RESOURCE = {
  id: 'score-resource',
  title: 'Score Resource',
  description: 'The Score resource represents the top level scoring data for a submission object. Each Score will have multiple Score Parts and may have multiple Score Warnings or Score Errors. The Score Detail field lists the current version of the Scoring Engine used to score the corresponding submission.',
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
    }`,
    xml: `<data>
      <name>string</name>
      <title>string</title>
      <detail>string</detail>
      <value>number</value>
      <parts>array(<a href='#score-part-resource'>Score Part</a>)</parts>
      <metadata>object(<a href='#score-resource-meta'>Score Metadata</a>)</metadata>
      <warnings>array(string)</warnings>
      <errors>array(string)</errors>
    </data>`
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
      description: 'Array ofScoreParts',
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
  metadata_messages: {
    base: {
      metadata: [
        {
          name: 'messages',
          value: 'object',
          description: 'Key identifiers with value strings as messages',
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
  description: 'The Score Part resource represents the Categorical scoring data for a submission object. Categorical scoring refers to one of the three QPP Performance Categories, which are IA, ACI or Quality.',
  example: {
    json: `[
      "name": string,
      "title": string,
      "detail": string,
      "value": number,
      "original": object(<a href='#category-score-resource'>Category Score</a>),
      "metadata": object(<a href='#score-part-resource-meta'>Score Part Metadata</a>)
    ]`,
    xml: `<data>
      <name>string</name>
      <title>string</title>
      <detail>string</detail>
      <value>number</value>
      <original>object(<a href='#category-score-resource'>Category Score</a>)</original>
      <metadata>object(<a href='#score-part-resource-meta'>Score Part Metadata</a>)</metadata>
    </data>`
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
  metadata_messages: {
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
  description: 'The Category Score resource represents for each of the three individual category scoring engines, the scoring output for a category’s measurement sets contained in a submission.',
  example: {
    json: `{
      "name": string,
      "value": number,
      "detail": string,
      "parts": array(<a href='#measurement-set-score-part-resource'>Measurement Set Score Part</a>)
    }`,
    xml: `<data>
      <name>string</name>
      <value>number</value>
      <detail>string</detail>
      <parts>array(<a href='#measurement-set-score-part-resource'>Measurement Set Score Part</a>)</parts>
    </data>`
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
      description: 'Warnings array inserted by the ACI scoring engine. This field is obsolete.',
      notes: 'Should be removed.'
    }
  ],
  metadata_messages: {
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
    ]`,
    xml: `<data>
      <name>string</name>
      <value>number</value>
      <title>string</title>
      <detail>string</detail>
      <parts>array(<a href='#measurement-score-part-resource'>Measurement Score Part</a> | <a href='#measurement-score-resource'>Measurement Score</a>)</parts>
      <metadata>object(<a href='#measurement-set-score-part-resource-meta'>Measurement Set Score Part Metadata</a>)</metadata>
    </data>`
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
  metadata_messages: {
    base: {},
    ia: {
      metadata: [
        {
          name: 'maxContribution',
          value: 'number',
          description: 'Maximum contribution the measurement set could contribute to the category score',
          notes: ''
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
          name: 'messages',
          value: 'object',
          description: '',
          notes: ''
        }
      ],
      messages: [
        {
          name: 'preAttestationCheck',
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
          name: 'totalMeasurementPoints',
          value: 'number',
          description: 'Sum of individual measurement base scores whether picked or skipped',
          notes: ''
        },
        {
          name: 'totalBonusPoints',
          value: 'number',
          description: 'Sum of individual measurement bonus scores whether the measurement was picked or skipped',
          notes: ''
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
  description: 'The Measurement Score Part resource represents the structured organization of Measurement Scores organized into score parts. ACI scoring has individual score parts, which scored measurements are grouped into unlike IA and Quality scores.',
  example: {
    json: `[
      "name": string,
      "value": number,
      "detail": string,
      "parts": array(<a href='#measurement-score-resource'>Measurement Score</a>),
      "metadata": object(<a href='#measurement-score-part-resource-meta'>Measurement Score Part Metadata</a>),
      "warnings": array(string)
    ]`,
    xml: `<data>
      <name>string</name>
      <value>number</value>
      <detail>string</detail>
      <parts>array(<a href='#measurement-score-resource'>Measurement Score</a>)</parts>
      <metadata>object(<a href='#measurement-score-part-resource-meta'>Measurement Score Part Metadata</a>)</metadata>
      <warnings>array(string)</warnings>
    </data>`
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
  metadata_messages: {
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
    ]`,
    xml: `<data>
      <name>string</name>
      <title>string</title>
      <value>number</value>
      <detail>string</detail>
      <metadata>object(<a href='#measurement-score-resource-meta'>Measurement Score Metadata</a>)</metadata>
    </data>`
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
  metadata_messages: {
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
          notes: ''
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
          name: 'messages',
          value: '',
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

const reformattedCode = (code) => code
  .split('\n')
  .map(l => l.trim())
  .map((line, idx, arr) => {
    if (idx > 0 && idx < arr.length - 1) {
      return `  ${line}`;
    }

    return line;
  })
  .join('\n');

const CodeBlock = ({json, xml}) => {
  const reformattedJSON = reformattedCode(json);
  // Need some extra processing to get hyperlinks to work without processing XML as JSX
  const reformattedXML = reformattedCode(xml.replace(/<(?!a|\/a)/g, '&lt;').replace(/(!<\/a)>/g, '&gt;'));

  return (
    <Tabs className='example-code-tabs'>
      <TabList>
        <Tab>JSON</Tab>
        <Tab>XML</Tab>
      </TabList>
      <TabPanel>
        <pre dangerouslySetInnerHTML={{__html: `${reformattedJSON}`}} />
      </TabPanel>
      <TabPanel>
        <pre dangerouslySetInnerHTML={{__html: `${reformattedXML}`}} />
      </TabPanel>
    </Tabs>
  );
};

CodeBlock.propTypes = {
  json: PropTypes.string.isRequired,
  xml: PropTypes.string.isRequired
};

const DataTableWithHeader = ({fields, header}) => {
  if (fields) {
    return (
      <div className='ds-u-margin-top--2'>
        <h3 className='ds-h3'>{header}</h3>
        <DataModelTable fields={fields} />
      </div>
    );
  } else {
    return null;
  }
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

const Resource = ({id, title, description, example, fields, metadata_messages: metadataMessages}) => {
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
  metadata_messages: ResourceMetadataMessagesPropType.isRequired
};

export default class ScoringEngine extends PureComponent {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);

    return (
      <div id='scoring-engine'>
        <h1 className='ds-h1'>Scoring</h1>
        <ul>
          <li><a href={`#${SCORE_RESOURCE.id}`}>{SCORE_RESOURCE.title}</a></li>
          <li><a href={`#${SCORE_PART_RESOURCE.id}`}>{SCORE_PART_RESOURCE.title}</a></li>
          <li><a href={`#${CATEGORY_SCORE_RESOURCE.id}`}>{CATEGORY_SCORE_RESOURCE.title}</a></li>
          <li><a href={`#${MEASUREMENT_SET_SCORE_PART_RESOURCE.id}`}>{MEASUREMENT_SET_SCORE_PART_RESOURCE.title}</a></li>
          <li><a href={`#${MEASUREMENT_SCORE_PART_RESOURCE.id}`}>{MEASUREMENT_SCORE_PART_RESOURCE.title}</a></li>
          <li><a href={`#${MEASUREMENT_SCORE_RESOURCE.id}`}>{MEASUREMENT_SCORE_RESOURCE.title}</a></li>
        </ul>
        <h1 className='ds-h1'>Overview</h1>
        <p className='ds-text--lead'>
          The Scoring Engine resides within the QPP Submissions API application and calculates a performance score when it receives QPP submission data. By sending a submission through the Submissions API, the scoring engine evaluates the contained: provider profile information, measurement set performance data, and available benchmarking data, for each performance category.
        </p>
        <p className='ds-text--lead'>
          A performance score is generated in two different ways. Firstly, submission by GET request with the identifier of a stored submission to the Submissions API’s submissions endpoint located at <code>/submissions/:id/score</code> will produce a score. Secondly, submission by POST request with a full submission in QPP JSON format to the Submissions API’s score preview endpoint located at <code>/submissions/score-preview</code> will also produce a score.
        </p>
        <p className='ds-text--lead'>
          Next, each performance category is individually processed and scored by evaluating the corresponding measurement sets. Processing “metadata" and "messages" attached to the scored measurement sets and measurements are also compiled to generate a Score Object.
        </p>
        <p className='ds-text--lead'>
          Lastly, the Score Object is passed back to the QPP Submissions API, which builds the application response by inserting the Score Object into the response body and returns this response to the requester. This response body contains JSON describing in detail the record of the current aggregate estimate of the submission score.
        </p>
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
