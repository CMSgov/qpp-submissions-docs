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

export interface IPath {
  path: string;
  linkText: string;
  element: ReactElement;
}

export interface IAllPath {
  groupTitle: string;
  paths: IPath[];
}

const topicsPaths: IPath[] = [
  {
    path: '/',
    linkText: 'Introduction',
    element: <Introduction />,
  },
  {
    path: '/announcements',
    linkText: 'Announcements',
    element: <Announcements />,
  },
  {
    path: '/change-log',
    linkText: 'Change Log',
    element: <ChangeLog />,
  },
  {
    path: '/developer-preview',
    linkText: 'Developer Preview',
    element: <DeveloperPreview />,
  },
];

const guidesPaths: IPath[] = [
  {
    path: '/submitting-to-submissions-api',
    linkText: 'Submitting to QPP using the Submission API',
    element: <SubmittingToQppSubmissionApi />,
  },
  {
    path: '/tutorial',
    linkText: 'Tutorial: Create and score data via API',
    element: <BasicTutorial />,
  },
  {
    path: '/advanced-tutorial',
    linkText: 'Tutorial: Add and update data via API',
    element: <AdvancedTutorial />,
  },
  {
    path: '/authorization-and-authentication',
    linkText: 'Submissions API Authentication and Authorization',
    element: <AuthorizationAndAuthentication />,
  },
  {
    path: '/qualified-registries-and-qcdrs',
    linkText: 'Qualified Registries and QCDRs',
    element: <QualifiedRegistriesAndQcdrs />,
  },
  {
    path: '/getting-started-with-oauth',
    linkText: 'Getting Started Using QPP OAuth',
    element: <GettingStartedUsingQppOauth />,
  },
];

const referencePaths: IPath[] = [
  {
    path: '/measurements',
    linkText: 'Measurements',
    element: <Measurements />,
  },
  {
    path: '/measurement-sets',
    linkText: 'Measurement Sets',
    element: <MeasurementSets />,
  },
  {
    path: '/submissions',
    linkText: 'Submissions',
    element: <Submissions />,
  },
  {
    path: '/benchmarks',
    linkText: 'Benchmarks',
    element: <Benchmarks />,
  },
  {
    path: '/scoring',
    linkText: 'Scoring',
    element: <Scoring />,
  },
  {
    path: '/references',
    linkText: 'References',
    element: <References />,
  },
  {
    path: '/error-codes',
    linkText: 'Error Codes',
    element: <ErrorCodes />,
  },
];

const resourcesAndSupport: IPath[] = [
  {
    path: '/frequently-asked-questions',
    linkText: 'Frequently Asked Questions',
    element: <FrequentlyAskedQuestions />,
  },
  {
    path: '/help',
    linkText: 'Help',
    element: <Help />,
  },
  {
    path: '/terms-of-service',
    linkText: 'Terms of Service',
    element: <TermsOfService />,
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

export const routesWithoutLinkText = combinedRoutes.map(({path, element}) => {
  return { path, element };
});

export default allPaths;
