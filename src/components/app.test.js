import { shallow } from 'enzyme';
import { render } from 'react-dom'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import App from './app'

it('renders without crashing', () => {
  shallow(<App />);
});

it('displays default content', () => {
  const div = document.createElement('div')
  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ), div)
  console.assert(div.innerHTML.match(/Easily submit and score QPP data in real-time via API/))
})

it('displays the developer-preview', () => {
  const div = document.createElement('div')
  render((
    <MemoryRouter initialEntries={[ '/developer-preview' ]}>
      <App />
    </MemoryRouter>
  ), div)
  console.assert(div.innerHTML.match(/Developer Preview/))
})

it('displays the tutorial', () => {
  const div = document.createElement('div')
  render((
    <MemoryRouter initialEntries={[ '/tutorial' ]}>
      <App />
    </MemoryRouter>
  ), div)
  console.assert(div.innerHTML.match(/API Tutorial/))
})
