import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { DropdownMenu } from './DropdownMenu';

test('should render DropdownMenu correctly', () => {
  const fullname = 'Ahmed Abdelhamid';
  const wrapper = shallow(<DropdownMenu fullname={fullname} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});