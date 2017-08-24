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

Object.entries(contentTestStrings).forEach(function([pathname, stringContent]) {
  it('displays the right content for ' + pathname, () => {
    const div = document.createElement('div');
    render((
      <MemoryRouter initialEntries={[ pathname ]}>
        <App />
      </MemoryRouter>
    ), div);
    console.assert(div.innerHTML.match(stringContent));
  });
});

it('has all the required links', () => {
  const div = document.createElement('div');
  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ), div);
  console.log(div.innerHTML);
  // Topics
  console.assert(div.innerHTML.match('<a class="" href="/">Introduction</a>'));
  console.assert(div.innerHTML.match('<a href="/developer-preview">Getting a Key</a>'));
  // Guides
  console.assert(div.innerHTML.match('<a href="/tutorial">Creating and editing a submission</a>'));
  console.assert(div.innerHTML.match('<a href="/advanced-tutorial">Updating and scoring a submission</a>'));
  // References
  console.assert(div.innerHTML.match('<a href="/submission">Submission</a>'));
  console.assert(div.innerHTML.match('<a href="/measurement-sets">Measurement Sets</a>'));
  // Examples
  console.assert(div.innerHTML.match('<a href="/examples">Example Submission JSON &amp; XML</a>'));
});
