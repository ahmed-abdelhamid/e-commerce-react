import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { FormikLoginPage } from './LoginPage';

test('should render LoginPage page', () => {
  const wrapper = shallow(<FormikLoginPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});