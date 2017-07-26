import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './app';
import BasicTutorial from './tutorials/basic-tutorial';

it('renders without crashing', () => {
  shallow(<App url={document.URL}/>);
});

it('renders landing page by default', () => {
  const app = mount(<App url={document.URL}/>);
  expect(app.text().includes('Easily submit and score performance data.')).toEqual(true);
});

it('routes to tutorial when the path ends with /tutorial', () => {
  const app = mount(<App url={document.URL + 'tutorial'}/>);
  expect(app.containsMatchingElement(<BasicTutorial />)).toEqual(true);
});
