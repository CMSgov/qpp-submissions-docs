import { ReactElement } from 'react';

// Topics
import Introduction from './components/topics/introduction';
import Announcements from './components/topics/announcements';
import ChangeLog from './components/topics/change-log';
import DeveloperPreview from './components/topics/developer-preview';

// Guides
import AdvancedTutorial from './components/guides/advanced-tutorial';
import BasicTutorial from './components/guides/basic-tutorial';
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
import { DocPageProps } from '../shared/types';

export interface IPath {
  path: string;
  linkText: string;
  component: React.FC<DocPageProps>;
}

export interface IAllPath {
  groupTitle: string;
  paths: IPath[];
}

const topicsPaths: IPath[] = [
  {
    path: '/',
    linkText: 'Introduction',
    component: Introduction
  },
  {
    path: '/announcements',
    linkText: 'Announcements',
    component: Announcements
  },
  {
    path: '/change-log',
    linkText: 'Change Log',
    component: ChangeLog
  },
  {
    path: '/developer-preview',
    linkText: 'Developer Preview',
    component: DeveloperPreview
  },
];

const guidesPaths: IPath[] = [
  {
    path: '/submitting-to-submissions-api',
    linkText: 'Submitting to QPP using the Submission API',
    component: SubmittingToQppSubmissionApi
  },
  {
    path: '/tutorial',
    linkText: 'Tutorial: Create and score data via API',
    component: BasicTutorial
  },
  {
    path: '/advanced-tutorial',
    linkText: 'Tutorial: Add and update data via API',
    component: AdvancedTutorial
  },
  {
    path: '/authorization-and-authentication',
    linkText: 'Submissions API Authentication and Authorization',
    component: AuthorizationAndAuthentication
  },
  {
    path: '/qualified-registries-and-qcdrs',
    linkText: 'Qualified Registries and QCDRs',
    component: QualifiedRegistriesAndQcdrs
  },
  {
    path: '/getting-started-with-oauth',
    linkText: 'Getting Started Using QPP OAuth',
    component: GettingStartedUsingQppOauth
  },
];

const referencePaths: IPath[] = [
  {
    path: '/measurements',
    linkText: 'Measurements',
    component: Measurements
  },
  {
    path: '/measurement-sets',
    linkText: 'Measurement Sets',
    component: MeasurementSets
  },
  {
    path: '/submissions',
    linkText: 'Submissions',
    component: Submissions
  },
  {
    path: '/benchmarks',
    linkText: 'Benchmarks',
    component: Benchmarks
  },
  {
    path: '/scoring',
    linkText: 'Scoring',
    component: Scoring
  },
  {
    path: '/references',
    linkText: 'References',
    component: References
  },
  {
    path: '/error-codes',
    linkText: 'Error Codes',
    component: ErrorCodes
  },
];

const resourcesAndSupport: IPath[] = [
  {
    path: '/frequently-asked-questions',
    linkText: 'Frequently Asked Questions',
    component: FrequentlyAskedQuestions
  },
  {
    path: '/help',
    linkText: 'Help',
    component: Help
  },
  {
    path: '/terms-of-service',
    linkText: 'Terms of Service',
    component: TermsOfService
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
