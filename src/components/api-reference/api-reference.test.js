import React from 'react';
import {shallow, mount} from 'enzyme';
import ApiReference from './api-reference';
import Submission from './schemas/submission';
import Benchmarks from './schemas/benchmarks';

it('renders without crashing', () => {
  shallow(<ApiReference />);
});

it('renders submission schema by default', () => {
  const component = mount(<ApiReference />);
  expect(component.containsMatchingElement(<Submission />)).toEqual(true);
});

it('routes to benchmarks when the hash is #historical-benchmarks', () => {
  const component = mount(<ApiReference hash='#historical-benchmarks' />);
  expect(component.containsMatchingElement(<Benchmarks />)).toEqual(true);
});

it('routes to benchmarks when the hash is #benchmark-calculations', () => {
  const component = mount(<ApiReference hash='#benchmark-calculations' />);
  expect(component.containsMatchingElement(<Benchmarks />)).toEqual(true);
});
