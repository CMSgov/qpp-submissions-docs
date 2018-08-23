import AdvancedTutorial from './tutorials/advanced-tutorial';
import BasicTutorial from './tutorials/basic-tutorial';
import Benchmarks from './api-reference/schemas/benchmarks';
import DeveloperPreview from './developer-preview';
import ExampleDocs from './api-reference/example-docs';
import ExistingIntegrators from './existing-integrators';
import Introduction from './introduction';
import MeasurementSets from './api-reference/schemas/measurement-sets';
import Measurements from './api-reference/schemas/measurements';
import Provider from './api-reference/provider';
import RateLimiting from './rate-limiting';
import Scoring from './api-reference/scoring';
import Submissions from './api-reference/schemas/submissions';
import TermsOfService from './terms-of-service';

const topicsPaths = [
  {
    path: '/',
    exact: true,
    linkText: 'Introduction',
    component: Introduction
  },
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
  },
  {
    path: '/developer-preview',
    exact: true,
    linkText: 'Developer Preview',
    component: DeveloperPreview
  }
];

const guidesPaths = [
  {
    path: '/tutorial',
    exact: false,
    linkText: 'Create and score data via API',
    component: BasicTutorial
  },
  {
    path: '/advanced-tutorial',
    exact: false,
    linkText: 'Add and update data via API',
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
    path: '/existing-integrators',
    exact: false,
    linkText: 'Existing API Integrators',
    component: ExistingIntegrators
  },
  {
    path: '/rate-limiting',
    exact: false,
    linkText: 'Rate Limiting',
    component: RateLimiting
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
