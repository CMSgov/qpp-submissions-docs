import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import App from './app';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  shallow(<App url={document.URL}/>);
});

it('renders the landing page by default', () => {
  const node = document.createElement('div')
  ReactDOM.render((
    <MemoryRouter>
      <App url={document.URL}/>
    </MemoryRouter>
  ), node)
  expect.stringContaining('Easily submit and score QPP data in real-time via API');
});

it('routes to tutorial when the path ends with /tutorial', () => {
  const node = document.createElement('div')
  ReactDOM.render((
    <MemoryRouter>
      <App url={document.URL + 'tutorial'}/>
    </MemoryRouter>
  ), node)
  expect.stringContaining('API Tutorial');
});

it('routes to tutorial when the path ends with /tutorial', () => {
  const node = document.createElement('div')
  ReactDOM.render((
    <MemoryRouter>
      <App url={document.URL + 'privatebeta'}/>
    </MemoryRouter>
  ), node)
  expect.stringContaining('Developer Preview');
});
