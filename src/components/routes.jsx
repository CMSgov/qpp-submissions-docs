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
import ExampleDocs from './api-reference/example-docs';

const topicsPaths = [
  {
    path: '/introduction',
    exact: false,
    linkText: 'Introduction',
    component: Introduction
  },
  {
    path: '/developer-preview',
    exact: false,
    linkText: 'Getting a Key',
    component: DeveloperPreview
  }
];

const guidesPaths = [
  {
    path: '/tutorial',
    exact: false,
    linkText: 'Creating and editing a submission',
    component: BasicTutorial
  },
  {
    path: '/advanced-tutorial',
    exact: false,
    linkText: 'Updating and scoring a submission',
    component: AdvancedTutorial
  }
];

const referencePaths = [
  {
    path: '/submission',
    exact: false,
    linkText: 'Submission',
    component: Submission
  },
  {
    path: '/measurement-sets',
    exact: false,
    linkText: 'Measurement Sets',
    component: MeasurementSets
  },
  {
    path: '/measurements',
    exact: false,
    linkText: 'Measurements',
    component: Measurements
  },
  {
    path: '/benchmarks',
    exact: false,
    linkText: 'Benchmarks',
    component: Benchmarks
  },
  {
    path: '/scoring',
    exact: false,
    linkText: 'Scoring',
    component: Scoring
  },
  {
    path: '/provider-profile',
    exact: false,
    linkText: 'Provider Profile Stub',
    component: Provider
  }
];

const samplePaths = [
  {
    path: '/examples',
    exact: false,
    linkText: 'Example Submission JSON & XML',
    component: ExampleDocs
  }
];

const allPaths = [
  {
    groupTitle: 'TOPICS',
    paths: topicsPaths
  },
  {
    groupTitle: 'GUIDES',
    paths: guidesPaths
  },
  {
    groupTitle: 'REFERENCES',
    paths: referencePaths
  },
  {
    groupTitle: 'SAMPLES',
    paths: samplePaths
  }
];

allPaths.mergedRoutes = allPaths.reduce((result, routesGroup) => {
  return result.concat(routesGroup.paths);
}, []);

export default allPaths;
