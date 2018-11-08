const defaultAuthState = { };

export default (state=defaultAuthState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.user.id,
        firstName: action.user.firstName,
        lastName: action.user.lastName
      };
    case 'LOGOUT':
      return { };
    default:
      return state;
  }
};