import React from 'react';

import DeveloperPreview from './developer-preview';
import Introduction from './introduction';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';

import Submission from './api-reference/schemas/submission';
import MeasurementSets from './api-reference/schemas/measurement-sets';
import Measurements from './api-reference/schemas/measurements';
import Benchmarks from './api-reference/schemas/benchmarks';
import Scoring from './api-reference/scoring';
import Provider from './api-reference/provider';

const topicsPathsMap = {
  'introduction': {
    linkText: 'Introduction',
    component: <Introduction />
  },
  'developer-preview': {
    linkText: 'Getting a Key',
    component: <DeveloperPreview />
  }
}

const guidesPathsMap = {
  'tutorial': {
    linkText: 'Quickstart',
    component: <BasicTutorial />
  },
  'advanced-tutorial':{
    linkText: 'Advanced Tutorial',
    component: <AdvancedTutorial />
  }
}

const referencePathsMap = {
  'submission': {
    linkText: 'Submission',
    component: <Submission />
  },
  'measurement-sets': {
    linkText: 'Measurement Sets',
    component: <MeasurementSets />,
  },
  'measurements': {
    linkText: 'Measurements',
    component: <Measurements />
  },
  'benchmarks': {
    linkText: 'Benchmarks',
    component: <Benchmarks />
  },
  'scoring': {
    linkText: 'Scoring',
    component: <Scoring />
  },
  'provider-profile': {
    linkText: 'Provider Profile Stub',
    component: <Provider />
  }
}

const allPaths = {
  topics: topicsPathsMap,
  guides: guidesPathsMap,
  references: referencePathsMap
}

export default allPaths;
