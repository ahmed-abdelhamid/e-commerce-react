import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Navbar from './Navbar';

test('shoould render navbar', () => {
  const wrapper = shallow(<Navbar />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});