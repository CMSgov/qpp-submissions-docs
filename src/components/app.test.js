import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

import Introduction from './introduction';
import ChangeLog from './change-log';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Submissions from './api-reference/schemas/submissions';
import MeasurementSets from './api-reference/schemas/measurement-sets';
import Measurements from './api-reference/schemas/measurements';
import Benchmarks from './api-reference/schemas/benchmarks';
import Scoring from './api-reference/scoring';

it('renders without crashing', () => {
  shallow(<App />);
});

const expectedRoutes = {
  '/': <Introduction />,
  '/change-log': <ChangeLog />,
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
