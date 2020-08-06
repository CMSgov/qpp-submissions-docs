import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

import Introduction from './introduction';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Submissions from './reference/schemas/submissions';
import MeasurementSets from './reference/schemas/measurement-sets';
import Measurements from './reference/schemas/measurements';
import Benchmarks from './reference/schemas/benchmarks';
import Scoring from './reference/scoring';

it('renders without crashing', () => {
  shallow(<App />);
});

const expectedRoutes = {
  '/': <Introduction />,
  '/tutorial': <BasicTutorial />,
  '/advanced-tutorial': <AdvancedTutorial />,
  '/submissions': <Submissions />,
  '/measurement-sets': <MeasurementSets />,
  '/measurements': <Measurements />,
  '/benchmarks': <Benchmarks />,
  '/scoring': <Scoring />
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
