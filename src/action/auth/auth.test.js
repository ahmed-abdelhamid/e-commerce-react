import { login, logout } from './auth';
import authUsers from '../../fixtures/authUser';

test('should dispatch login action', () => {
  const user = authUsers[0];
  const action = login(user);
  expect(action).toEqual({
    type: 'LOGIN',
    user
  });
});

test('should dispatch logout action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});