import React from 'react';
import {shallow, mount} from 'enzyme';
import ApiReference from './api-reference';
import Submission from './schemas/submission';
import Benchmarks from './schemas/benchmarks';
import Scoring from './scoring';

it('renders without crashing', () => {
  shallow(<ApiReference />);
});

it('renders submission schema by default', () => {
  const component = mount(<ApiReference />);
  expect(component.containsMatchingElement(<Submission />)).toEqual(true);
});

it('routes to benchmarks when the activeComponent is benchmarks', () => {
  const component = mount(<ApiReference />);
  component.setState({activeComponent: 'benchmarks'});
  expect(component.containsMatchingElement(<Benchmarks />)).toEqual(true);
});

it('routes to benchmarks when the activeComponent is scoring', () => {
  const component = mount(<ApiReference />);
  component.setState({activeComponent: 'scoring'});
  expect(component.containsMatchingElement(<Scoring />)).toEqual(true);
});
