import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../styles/common/example-code-tabs.css';

import DataModelTable from './common/data-model-table';

const SCORE_RESOURCE = {
  title: 'Score Resource',
  description: 'The Score resource represents the top level scoring data for a submission object. Each Score will have multiple Score Parts and may have multiple Score Warnings or Score Errors. The Score Detail field lists the current version of the Scoring Engine used to score the corresponding submission.',
  example: `"score": {
    "name": string,
    "title": string,
    "detail": string,
    "value": number
    "parts": array(ScorePart),
    "metadata": object(ScoreMetadata),
    "warnings": array(string),
    "errors": array(string)
  }`,
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'name of score object',
      notes: 'static'
    },
    {
      name: 'title',
      value: 'string',
      description: 'title of score object',
      notes: 'static'
    },
    {
      name: 'detail',
      value: 'string',
      description: 'semantic version of scoring engine',
      notes: 'Semantic version of the Scoring Engine used to compute the score Object'
    },
    {
      name: 'value',
      value: 'number',
      description: 'total score of submission',
      notes: 'Final, total score for the submission'
    },
    {
      name: 'parts',
      value: 'array',
      description: 'array ofScoreParts',
      notes: 'Reweighted category score parts, which build the final, total score'
    },
    {
      name: 'metadata',
      value: 'object',
      description: 'top level scoring metadata',
      notes: ''
    },
    {
      name: 'warnings',
      value: 'array',
      description: 'array of Warnings',
      notes: 'Scoring issues that do not halt the scoring process'
    },
    {
      name: 'errors',
      value: 'array',
      description: 'array of Errors',
      notes: 'Scoring issues that halt the scoring process'
    }
  ],
  metadata_messages: {
    default: {
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
    ia: null,
    aci: null,
    quality: null
  }
};

const SCORE_PART_RESOURCE = {
  title: 'Score Part Resource',
  description: 'The Score Part resource represents the Categorical scoring data for a submission object. Categorical scoring refers to one of the three QPP Performance Categories, which are IA, ACI or Quality.',
  example: `[
    "name": string,
    "title": string,
    "detail": string,
    "value": number,
    "original": object(CategoryScore),
    "metadata": object(ScorePartMetadata)
  ]`,
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'category identifier',
      notes: ''
    },
    {
      name: 'title',
      value: 'string',
      description: 'title of score part object',
      notes: 'e.g., "ACI component of final score"'
    },
    {
      name: 'detail',
      value: 'string',
      description: 'details category score weight',
      notes: 'e.g., "Scoring based on weight of 15%"'
    },
    {
      name: 'value',
      value: 'number',
      description: 'weighted category score',
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
    default: {
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
    ia: null,
    aci: null,
    quality: null
  }
};

const CATEGORY_SCORE_RESOURCE = {
  title: 'Category Score Resource',
  description: 'The Category Score resource represents for each of the three individual category scoring engines, the scoring output for a category’s measurement sets contained in a submission.',
  example: `"original": {
    "name": string,
    "value": number,
    "detail": string,
    "parts": array(MeasurementSetScorePart)
  }`,
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Category identifier',
      notes: ''
    },
    {
      name: 'value',
      value: 'number',
      description: 'Category score',
      notes: ''
    },
    {
      name: 'detail',
      value: 'string',
      description: 'Details the highest scoring measurement set by submission method',
      notes: 'Should be moved to a metadata field with an identifier by measurement set ID'
    },
    {
      name: 'parts',
      value: 'array',
      description: 'Scored measurement sets matching the category identifier',
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
    default: null,
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
          description: 'Messaging detailing completeness of pre-attestation checks',
          notes: ''
        },
        {
          name: 'baseMeasureCheck',
          value: 'string',
          description: 'Messaging detailing completeness of base measure checks',
          notes: ''
        }
      ]
    },
    quality: {
      metadata: [
        {
          name: 'measuresPicked',
          value: 'array',
          description: 'Array of measure IDs, which were picked to count towards the quality base score',
          notes: 'These measures contribute to the base score, before bonuses are applied'
        },
        {
          name: 'totalMeasurementPoints',
          value: 'number',
          description: 'The sum of individual measurement base scores whether picked or skipped',
          notes: ''
        },
        {
          name: 'totalBonusPoints',
          value: 'number',
          description: 'The sum of individual measurement bonus scores whether the measurement was picked or skipped',
          notes: ''
        },
        {
          name: 'denominator',
          value: 'number',
          description: 'The denominator value used when calculating the measurement set score',
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
          description: 'A score as if this measurement set was chosen as its overall category score and sent to final scoring and reweighted',
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

const MEASUREMENT_SET_SCORE_PART_RESOURCE = {
  title: 'Measurement Set Score Part Resource',
  description: 'The Scored Measurement Set represents the scoring output for each category measurement set in a submission.',
  example: `[
    "name": string,
    "value": number,
    "title": string,
    "detail": string,
    "parts": array(MeasurementScorePart | MeasurementScore),
    "metadata": object(MeasurementSetScorePartMetadata)
  ]`,
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Category identifier',
      notes: ''
    },
    {
      name: 'value',
      value: 'number',
      description: 'Category score if highest scoring measurement set',
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
  ]
};

const MEASUREMENT_SCORE_PART_RESOURCE = {
  title: 'Measurement Score Part Resource',
  description: 'The Measurement Score Part resource represents the structured organization of Measurement Scores organized into score parts. ACI scoring has individual score parts, which scored measurements are grouped into unlike IA and Quality scores.',
  example: `[
    "name": string,
    "value": number,
    "detail": string,
    "parts": array(MeasurementScore),
    "metadata": object(MeasurementScorePartMetadata),
    "warnings": array
  ]`,
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
  ]
};

const MEASUREMENT_SCORE_RESOURCE = {
  title: 'Measurement Score Resource',
  description: 'The Measurement Score resource represents the scoring result for each measurement within a submission’s measurement sets.',
  example: `[
    "name": string,
    "title": string,
    "value": number,
    "detail": string,
    "metadata": object
  ]`,
  fields: [
    {
      name: 'name',
      value: 'string',
      description: 'Measurement identifier',
      notes: 'The required measure ID from the measure\'s qpp-measures-data definition'
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
  ]
};

const CodeBlock = ({code}) => {
  const reformattedCode = code
    .split('\n')
    .map(l => l.trim())
    .map((line, idx, arr) => {
      if (idx > 0 && idx < arr.length - 1) {
        return `  ${line}`;
      }

      return line;
    })
    .join('\n');

  return (
    <Tabs className='example-code-tabs'>
      <TabList>
        <Tab disabled>JSON</Tab>
      </TabList>
      <TabPanel>
        <pre>
          {`${reformattedCode}`}
        </pre>
      </TabPanel>
    </Tabs>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired
};

const Resource = ({title, description, example, fields}) => {
  return (
    <div className='ds-u-margin-bottom--4'>
      <h1 className='ds-h1'>{title}</h1>
      <p className='ds-text--lead'>{description}</p>
      <h2 className='ds-h2'>Resource Representation</h2>
      <CodeBlock code={example} />
      <DataModelTable fields={fields} />
    </div>
  );
};

const ResourceFieldPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.string
}).isRequired;

Resource.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(ResourceFieldPropType).isRequired
};

export default class ScoringEngine extends PureComponent {
  render() {
    // This is necessary to disable the default styles
    Tabs.setUseDefaultStyles(false);

    return (
      <div id='scoring-engine'>
        <h1 className='ds-h1'>Scoring</h1>
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
        <h1 className='ds-h1'>Score Object Navigation</h1>
        <p className='ds-text--lead'>
          Too be built...
        </p>
        <Resource {...SCORE_RESOURCE} />
        <Resource {...SCORE_PART_RESOURCE} />
        <Resource {...CATEGORY_SCORE_RESOURCE} />
        <Resource {...MEASUREMENT_SET_SCORE_PART_RESOURCE} />
        <Resource {...MEASUREMENT_SCORE_PART_RESOURCE} />
        <Resource {...MEASUREMENT_SCORE_RESOURCE} />
        <p className='ds-text--lead'>Improvement activities (IA), advancing care information (ACI), and Quality measures are scored differently. The scoring engine package used provides one scoring engine that scores and combines these three categories.</p>
        <div>
          <p className='ds-text--lead'>Scores are calculated by a scoring engine package. This functionality is not yet publicly exposed.</p>
          <p><em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</p>
        </div>
      </div>
    );
  }
}
