import authReducer from './auth';
import authUsers from '../fixtures/authUser';

test('should return authReducer with default value', () => {
  const action = {
    type: '@@INIT'
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({ });
});

test('should add user to state', () => {
  const action = {
    type: 'LOGIN',
    user: authUsers[0]
  };
  const state = authReducer({ }, action);
  expect(state).toEqual({
    uid: authUsers[0].id,
    firstName: authUsers[0].firstName,
    lastName: authUsers[0].lastName,
  });
});

test('should remove user form state', () => {
  const action = {
    type: 'LOGOUT'
  };
  let state = {
    uid: '123abc',
    firstName: 'Ahmed',
    lastName: 'Abdelhamid'
  }
  state = authReducer(state, action);
  expect(state).toEqual({ });
});