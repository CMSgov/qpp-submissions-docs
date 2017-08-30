import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

import Introduction from './introduction';
import DeveloperPreview from './developer-preview';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Submission from './api-reference/schemas/submission';
import MeasurementSets from './api-reference/schemas/measurement-sets';
import Measurements from './api-reference/schemas/measurements';
import Benchmarks from './api-reference/schemas/benchmarks';
import Scoring from './api-reference/scoring';
import Provider from './api-reference/provider';
import ExampleDocs from './api-reference/example-docs';

it('renders without crashing', () => {
  shallow(<App />);
});

const expectedRoutes = {
  '/': <Introduction />,
  '/developer-preview': <DeveloperPreview />,
  '/tutorial': <BasicTutorial />,
  '/advanced-tutorial': <AdvancedTutorial />,
  '/submission': <Submission />,
  '/measurement-sets': <MeasurementSets />,
  '/measurements': <Measurements />,
  '/benchmarks': <Benchmarks />,
  '/scoring': <Scoring />,
  '/provider-profile': <Provider />,
  '/examples': <ExampleDocs />
};

Object.keys(expectedRoutes).forEach(function(path) {
  it('has a link for ' + path, () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('[href="' + path + '"]').length).toBeGreaterThanOrEqual(1);
  });
});

Object.entries(expectedRoutes).forEach(function([path, component]) {
  it('displays the right component for ' + path, () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ path ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.containsMatchingElement(component)).toEqual(true);
  });
});
