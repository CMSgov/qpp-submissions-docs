// import DeveloperPreview from './developer-preview';
import Introduction from './introduction-v2';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Submissions from './api-reference/schemas/submissions';
import MeasurementSets from './api-reference/schemas/measurement-sets';
import Measurements from './api-reference/schemas/measurements';
import Benchmarks from './api-reference/schemas/benchmarks';
import Scoring from './api-reference/scoring';
import Provider from './api-reference/provider';
import ExampleDocs from './api-reference/example-docs';
import TermsOfService from './terms-of-service';

const topicsPaths = [
  // {
  //   path: '/',
  //   exact: true,
  //   linkText: 'Introduction',
  //   component: Introduction
  // },
  {
    path: '/introduction-v2',
    exact: true,
    linkText: 'Introduction',
    component: Introduction
  },
  // {
  //   path: '/developer-preview',
  //   exact: false,
  //   linkText: 'Developer Preview',
  //   component: DeveloperPreview
  // },
  {
    path: 'https://qpp-submissions-sandbox.navapbc.com',
    exact: false,
    linkText: 'Interactive Docs',
    external: true
  },
  {
    path: 'https://github.com/CMSgov/qpp-measures-data',
    exact: false,
    linkText: 'QPP Measures Data Repository',
    external: true
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
    path: '/measurements',
    exact: false,
    linkText: 'Measurements',
    component: Measurements
  },
  {
    path: '/measurement-sets',
    exact: false,
    linkText: 'Measurement Sets',
    component: MeasurementSets
  },
  {
    path: '/submissions',
    exact: false,
    linkText: 'Submissions',
    component: Submissions
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

const supportPaths = [
  {
    path: 'https://groups.google.com/forum/#!forum/qpp-apis',
    exact: false,
    linkText: 'Google Group',
    external: true
  },
  {
    path: '/terms-of-service',
    exact: false,
    linkText: 'Terms of Service',
    component: TermsOfService
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
  },
  {
    groupTitle: 'SUPPORT',
    paths: supportPaths
  }
];

allPaths.mergedRoutes = allPaths.reduce((result, routesGroup) => {
  return result.concat(routesGroup.paths);
}, []);

export default allPaths;
