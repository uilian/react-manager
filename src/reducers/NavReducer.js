import RootStack from '../navigation/RootNav';

// Initial state will be the login screen
const initialState = RootStack.router.getStateForAction(
  RootStack.router.getActionForPathAndParams('LoginForm')
);

export default (state = initialState, action) => {
  const nextState = RootStack.router.getStateForAction(action, state);
  return nextState || state;
};
