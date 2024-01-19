import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import App from './app';

// Topics
import Introduction from '../components/topics/introduction';
import Announcements from '../components/topics/announcements';
import ChangeLog from '../components/topics/change-log';
import DeveloperPreview from '../components/topics/developer-preview';

// Guides
import AdvancedTutorial from '../components/guides/advanced-tutorial';
import BasicTutorial from '../components/guides/basic-tutorial';
import GettingStartedUsingQppOauth from '../components/guides/getting-started-with-oauth';
import QualifiedRegistriesAndQcdrs from '../components/guides/qualified-registries-and-qcdrs';
import AuthorizationAndAuthentication from '../components/guides/authorization-and-authentication';
import SubmittingToQppSubmissionApi from '../components/guides/submitting-to-submissions-api';

// References
import Benchmarks from '../components/references/benchmarks';
import MeasurementSets from '../components/references/measurement-sets';
import Measurements from '../components/references/measurements';
import Scoring from '../components/references/scoring';
import Submissions from '../components/references/submissions';
import References from '../components/references/references';

// Resources and Support
import FrequentlyAskedQuestions from '../components/resources-and-support/frequently-asked-questions';
import Help from '../components/resources-and-support/help';
import TermsOfService from '../components/resources-and-support/terms-of-service';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const expectedRoutes = {
  '/': <Introduction />,
  '/announcements': <Announcements />,
  '/change-log': <ChangeLog />,
  '/developer-preview': <DeveloperPreview />,
  '/advanced-tutorial': <AdvancedTutorial />,
  '/tutorial': <BasicTutorial />,
  '/getting-started-with-oauth': <GettingStartedUsingQppOauth />,
  '/qualified-registries-and-qcdrs': <QualifiedRegistriesAndQcdrs />,
  '/authorization-and-authentication': <AuthorizationAndAuthentication />,
  '/submitting-to-submissions-api': <SubmittingToQppSubmissionApi />,
  '/benchmarks': <Benchmarks />,
  '/measurement-sets': <MeasurementSets />,
  '/measurements': <Measurements />,
  '/scoring': <Scoring />,
  '/submissions': <Submissions />,
  '/references': <References />,
  '/frequently-asked-questions': <FrequentlyAskedQuestions />,
  '/help': <Help />,
  '/terms-of-service': <TermsOfService />,
};

describe('App tests', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  Object.keys(expectedRoutes).forEach((path) => {
    it(`should have a link for ${path}`, () => {
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      expect(wrapper.find(`[href="${path}"]`).length).toBeGreaterThanOrEqual(1);
    });
  });

  Object.entries(expectedRoutes).forEach(([path, component]) => {
    it(`should display component for ${path}`, () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      expect(wrapper.containsMatchingElement(component)).toEqual(true);
    });
  });
});
