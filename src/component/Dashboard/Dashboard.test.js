import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Dashboard from './Dashboard';

test('should render dashboard page', () => {
  const wrapper = shallow(<Dashboard />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});