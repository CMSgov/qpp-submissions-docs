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
  console.assert(div.innerHTML.match('<a href="/introduction">Introduction</a>'))
  console.assert(div.innerHTML.match('<a href="/developer-preview">Getting a Key</a>'))
  console.assert(div.innerHTML.match('<a href="/tutorial">Quickstart</a>'))
  console.assert(div.innerHTML.match('<a href="/advanced-tutorial">Advanced Tutorial</a>'))
  console.assert(div.innerHTML.match('<a href="/submission">Submission</a>'))
  console.assert(div.innerHTML.match('<a href="/measurement-sets">Measurement Sets</a>'))
})
