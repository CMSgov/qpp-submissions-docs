import { render } from 'react-dom'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import App from './app'

const contentTestStrings = {
  '/': 'Easily submit and score QPP data in real-time via API',
  '/developer-preview': 'Developer Preview',
  '/tutorial': 'API Tutorial',
  '/submission': 'The Submissions resource represents one year of performance data'
}

Object.keys(contentTestStrings).forEach(function(pathname) {
  test('it displays the right content for ' + pathname, () => {
    const div = document.createElement('div')
    render((
      <MemoryRouter initialEntries={[ pathname ]}>
        <App />
      </MemoryRouter>
    ), div)
    console.assert(div.innerHTML.match(contentTestStrings[pathname]))
  })
});

test('has all the required links', () => {
  const div = document.createElement('div')
  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ), div)
  // Topics
  console.assert(div.innerHTML.match('<a href="/introduction">Introduction</a>'))
  console.assert(div.innerHTML.match('<a href="/developer-preview">Getting a Key</a>'))
  // Guides
  console.assert(div.innerHTML.match('<a href="/tutorial">Creating and editing a submission</a>'))
  console.assert(div.innerHTML.match('<a href="/advanced-tutorial">Updating and scoring a submission</a>'))
  // References
  console.assert(div.innerHTML.match('<a href="/submission">Submission</a>'))
  console.assert(div.innerHTML.match('<a href="/measurement-sets">Measurement Sets</a>'))
  // Examples
  console.assert(div.innerHTML.match('<a href="/examples">Example Submission JSON &amp; XML</a>'))
})
