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
  '/introduction': <Introduction />,
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

// TODO(aimee): Not really happy with the structure of these tests at the
// moment, the requirement of `const classes` seems like it's exposing how
// brittle this test is.
// it('has all the required links', () => {
//   const div = document.createElement('div');
//   const classes = 'ds-u-padding-right--3 ds-u-padding-left--3 ds-u-padding-top--1 ds-u-padding-bottom--1';
//   render((
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   ), div);
//   // Topics
//   console.assert(div.innerHTML.match('<a class="ds-c-vertical-nav__label--current ' + classes + '" href="/introduction">Introduction</a>'));
//   console.assert(div.innerHTML.match('<a class="' + classes + '" href="/developer-preview">Getting a Key</a>'));
//   // Guides
//   console.assert(div.innerHTML.match('<a class="' + classes + '" href="/tutorial">Creating and editing a submission</a>'));
//   console.assert(div.innerHTML.match('<a class="' + classes + '" href="/advanced-tutorial">Updating and scoring a submission</a>'));
//   // References
//   console.assert(div.innerHTML.match('<a class="' + classes + '" href="/submission">Submission</a>'));
//   console.assert(div.innerHTML.match('<a class="' + classes + '" href="/measurement-sets">Measurement Sets</a>'));
//   // Examples
//   console.assert(div.innerHTML.match('<a class="' + classes + '" href="/examples">Example Submission JSON &amp; XML</a>'));
// });
