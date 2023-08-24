import { FunctionComponent } from 'react';

// Topics
import Introduction from './components/topics/introduction';
import Announcements from './components/topics/announcements';
import ChangeLog from './components/topics/change-log';
import DeveloperPreview from './components/topics/developer-preview';

// Guides
import AdvancedTutorial from './components/guides/advanced-tutorial';
import BasicTutorial from './components/guides/basic-tutorial';
import MvpTutorial from './components/guides/mvp-submissions';
import GettingStartedUsingQppOauth from './components/guides/getting-started-with-oauth';
import QualifiedRegistriesAndQcdrs from './components/guides/qualified-registries-and-qcdrs';
import AuthorizationAndAuthentication from './components/guides/authorization-and-authentication';
import SubmittingToQppSubmissionApi from './components/guides/submitting-to-submissions-api';

// References
import Benchmarks from './components/references/benchmarks';
import MeasurementSets from './components/references/measurement-sets';
import Measurements from './components/references/measurements';
import Scoring from './components/references/scoring';
import Submissions from './components/references/submissions';
import References from './components/references/references';
import ErrorCodes from './components/references/error-codes';

// Resources and Support
import FrequentlyAskedQuestions from './components/resources-and-support/frequently-asked-questions';
import Help from './components/resources-and-support/help';
import TermsOfService from './components/resources-and-support/terms-of-service';

export interface IPath {
  path: string;
  exact: boolean;
  linkText: string;
  component: FunctionComponent;
}

export interface IAllPath {
  groupTitle: string;
  paths: IPath[];
}

const topicsPaths: IPath[] = [
  {
    path: '/',
    exact: true,
    linkText: 'Introduction',
    component: Introduction,
  },
  {
    path: '/announcements',
    exact: false,
    linkText: 'Announcements',
    component: Announcements,
  },
  {
    path: '/change-log',
    exact: false,
    linkText: 'Change Log',
    component: ChangeLog,
  },
  {
    path: '/developer-preview',
    exact: false,
    linkText: 'Developer Preview',
    component: DeveloperPreview,
  },
];

const guidesPaths: IPath[] = [
  {
    path: '/submitting-to-submissions-api',
    exact: false,
    linkText: 'Submitting to QPP using the Submission API',
    component: SubmittingToQppSubmissionApi,
  },
  {
    path: '/tutorial',
    exact: false,
    linkText: 'Tutorial: Create and score data via API',
    component: BasicTutorial,
  },
  {
    path: '/advanced-tutorial',
    exact: false,
    linkText: 'Tutorial: Add and update data via API',
    component: AdvancedTutorial,
  },
  {
    path: '/mvp-tutorial',
    exact: false,
    linkText: 'Tutorial: MVP Submissions',
    component: MvpTutorial,
  },
  {
    path: '/authorization-and-authentication',
    exact: false,
    linkText: 'Submissions API Authentication and Authorization',
    component: AuthorizationAndAuthentication,
  },
  {
    path: '/qualified-registries-and-qcdrs',
    exact: false,
    linkText: 'Qualified Registries and QCDRs',
    component: QualifiedRegistriesAndQcdrs,
  },
  {
    path: '/getting-started-with-oauth',
    exact: false,
    linkText: 'Getting Started Using QPP OAuth',
    component: GettingStartedUsingQppOauth,
  },
];

const referencePaths: IPath[] = [
  {
    path: '/measurements',
    exact: false,
    linkText: 'Measurements',
    component: Measurements,
  },
  {
    path: '/measurement-sets',
    exact: false,
    linkText: 'Measurement Sets',
    component: MeasurementSets,
  },
  {
    path: '/submissions',
    exact: false,
    linkText: 'Submissions',
    component: Submissions,
  },
  {
    path: '/benchmarks',
    exact: false,
    linkText: 'Benchmarks',
    component: Benchmarks,
  },
  {
    path: '/scoring',
    exact: false,
    linkText: 'Scoring',
    component: Scoring,
  },
  {
    path: '/references',
    exact: false,
    linkText: 'References',
    component: References,
  },
  {
    path: '/error-codes',
    exact: false,
    linkText: 'Error Codes',
    component: ErrorCodes,
  },
];

const resourcesAndSupport: IPath[] = [
  {
    path: '/frequently-asked-questions',
    exact: false,
    linkText: 'Frequently Asked Questions',
    component: FrequentlyAskedQuestions,
  },
  {
    path: '/help',
    exact: false,
    linkText: 'Help',
    component: Help,
  },
  {
    path: '/terms-of-service',
    exact: false,
    linkText: 'Terms of Service',
    component: TermsOfService,
  },
];

const allPaths: IAllPath[] = [
  {
    groupTitle: 'TOPICS',
    paths: topicsPaths,
  },
  {
    groupTitle: 'GUIDES',
    paths: guidesPaths,
  },
  {
    groupTitle: 'REFERENCES',
    paths: referencePaths,
  },
  {
    groupTitle: 'RESOURCES AND SUPPORT',
    paths: resourcesAndSupport,
  },
];

export const combinedRoutes = allPaths.reduce((acc: IPath[], cur) => {
  cur.paths.forEach((p) => acc.push(p));

  return acc;
}, []);

export default allPaths;
