// Topics
import Introduction from './introduction';
import Announcements from './topics/announcements';
import ChangeLog from './change-log';
import DeveloperPreview from './developer-preview';

// Guides
import AdvancedTutorial from './tutorials/advanced-tutorial';
import BasicTutorial from './tutorials/basic-tutorial';
import GettingStartedUsingQppOauth2 from './tutorials/getting-started-with-oauth2';
import QualifiedRegistriesAndQcdrs from './tutorials/qualified-registries-and-qcdrs';
import SubmissionsApiAuthenticationAndAuthorization from './tutorials/authorization-and-authentication.js';
import SubmittingToQppSubmissionApi from './tutorials/submitting-to-submissions-api';

// References
import Benchmarks from './references/schemas/benchmarks';
import MeasurementSets from './references/schemas/measurement-sets';
import Measurements from './references/schemas/measurements';
import Scoring from './references/scoring';
import Submissions from './references/schemas/submissions';
import References from './references/references';

// Resources and Support
import Help from './resources/help';
import FrequentlyAskedQuestions from './resources/frequently-asked-questions';
import TermsOfService from './terms-of-service';

const topicsPaths = [
  {
    path: '/',
    exact: true,
    linkText: 'Introduction',
    component: Introduction
  },
  {
    path: '/announcements',
    exact: false,
    linkText: 'Announcements',
    component: Announcements
  },
  {
    path: '/change-log',
    exact: true,
    linkText: 'Change Log',
    component: ChangeLog
  },
  {
    path: '/developer-preview',
    exact: false,
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
  },
  {
    path: '/getting-started-with-oauth2',
    exact: false,
    linkText: 'Getting Started Using QPP OAuth2',
    component: GettingStartedUsingQppOauth2
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
  }, {
    path: '/references',
    exact: false,
    linkText: 'References',
    component: References
  }
];

const supportPaths = [
  {
    path: '/frequently-asked-questions',
    exact: false,
    linkText: 'Frequently Asked Questions',
    component: FrequentlyAskedQuestions
  },
  {
    path: '/help',
    exact: false,
    linkText: 'Help',
    component: Help
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
