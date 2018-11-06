import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage } from './LoginPage';

test('should render dashboard page', () => {
  const wrapper = shallow(<LoginPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});