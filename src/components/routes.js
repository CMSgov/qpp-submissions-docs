// Topics
import Introduction from './introduction';
import DeveloperPreview from './developer-preview';

// Guides
import AdvancedTutorial from './tutorials/advanced-tutorial';
import BasicTutorial from './tutorials/basic-tutorial';
import QualifiedRegistriesAndQcdrs from './tutorials/qualified-registries-and-qcdrs';
import SubmissionsApiAuthenticationAndAuthorization from './tutorials/authorization-and-authentication.js';
import SubmittingToQppSubmissionApi from './tutorials/submitting-to-submissions-api';

// References
import Benchmarks from './api-reference/schemas/benchmarks';
import MeasurementSets from './api-reference/schemas/measurement-sets';
import Measurements from './api-reference/schemas/measurements';
import Scoring from './api-reference/scoring';
import Submissions from './api-reference/schemas/submissions';

// Resources and Support
import TermsOfService from './terms-of-service';

const topicsPaths = [
  {
    path: '/',
    exact: true,
    linkText: 'Introduction',
    component: Introduction
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
    path: '/submitting-to-submissions-api',
    exact: false,
    linkText: 'Submitting to QPP using the Submission API',
    component: SubmittingToQppSubmissionApi
  },
  {
    path: '/tutorial',
    exact: false,
    linkText: 'Tutorial: Create and score data via API',
    component: BasicTutorial
  },
  {
    path: '/advanced-tutorial',
    exact: false,
    linkText: 'Tutorial: Add and update data via API',
    component: AdvancedTutorial
  },
  {
    path: '/authorization-and-authentication',
    exact: false,
    linkText: 'Submissions API Authentication and Authorization',
    component: SubmissionsApiAuthenticationAndAuthorization
  },
  {
    path: '/qualified-registries-and-qcdrs',
    exact: false,
    linkText: 'Qualified Registries and QCDRs',
    component: QualifiedRegistriesAndQcdrs
  }
  // {
  //   path: '/getting-started-with-oauth2',
  //   exact: false,
  //   linkText: 'Getting Started Using QPP OAuth2',
  //   component: GettingStartedUsingQppOauth2
  // }
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
  // {
  //   path: '/scoring-engine',
  //   exact: false,
  //   linkText: 'Scoring Engine',
  //   component: ScoringEngine
  // }
];

const supportPaths = [
  {
    path: 'https://github.com/CMSgov/qpp-measures-data',
    exact: false,
    linkText: 'QPP Measures Data Repository',
    external: true
  },
  {
    path: 'https://preview.qpp.cms.gov/api/submissions/public/docs/',
    exact: false,
    linkText: 'Interactive QPP Submissions API Documentation',
    external: true
  },
  {
    path: 'https://qpp.cms.gov/api/auth/docs/#/',
    exact: false,
    linkText: 'Interactive QPP Auth Service API Documentation',
    external: true
  },
  // {
  //   path: 'example.com',
  //   exact: false,
  //   linkText: 'Interactive Test Data Service Documentation',
  //   external: true
  // },
  {
    path: 'https://groups.google.com/forum/#!forum/qpp-apis',
    exact: false,
    linkText: 'Developer Group for QPP APIs',
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
    groupTitle: 'RESOURCES AND SUPPORT',
    paths: supportPaths
  }
];

allPaths.mergedRoutes = allPaths.reduce((result, routesGroup) => {
  return result.concat(routesGroup.paths);
}, []);

export default allPaths;
