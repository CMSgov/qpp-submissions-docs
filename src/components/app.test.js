import { shallow } from 'enzyme';
import { render } from 'react-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

it('renders without crashing', () => {
  shallow(<App />);
});

const contentTestStrings = {
  '/': 'Easily submit and score QPP data in real-time via API',
  '/developer-preview': 'Developer Preview',
  '/tutorial': 'API Tutorial',
  '/submission': 'The Submissions resource represents one year of performance data'
};

Object.keys(contentTestStrings).forEach(function(pathname) {
  it('displays the right content for ' + pathname, () => {
    const div = document.createElement('div');
    render((
      <MemoryRouter initialEntries={[ pathname ]}>
        <App />
      </MemoryRouter>
    ), div);
    console.assert(div.innerHTML.match(contentTestStrings[pathname]));
  });
});

// TODO(aimee): Not really happy with the structure of these tests at the
// moment, the requirement of `const classes` seems like it's exposing how
// brittle this test is.
it('has all the required links', () => {
  const div = document.createElement('div');
  const classes = 'class="ds-u-padding-right--3 ds-u-padding-left--3 ds-u-padding-top--1 ds-u-padding-bottom--1"';
  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ), div);
  // Topics
  console.assert(div.innerHTML.match('<a ' + classes + ' href="/introduction">Introduction</a>'));
  console.assert(div.innerHTML.match('<a ' + classes + ' href="/developer-preview">Getting a Key</a>'));
  // Guides
  console.assert(div.innerHTML.match('<a ' + classes + ' href="/tutorial">Creating and editing a submission</a>'));
  console.assert(div.innerHTML.match('<a ' + classes + ' href="/advanced-tutorial">Updating and scoring a submission</a>'));
  // References
  console.assert(div.innerHTML.match('<a ' + classes + ' href="/submission">Submission</a>'));
  console.assert(div.innerHTML.match('<a ' + classes + ' href="/measurement-sets">Measurement Sets</a>'));
  // Examples
  console.assert(div.innerHTML.match('<a ' + classes + ' href="/examples">Example Submission JSON &amp; XML</a>'));
});
