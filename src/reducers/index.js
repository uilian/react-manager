import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { NavReducer } from '../navigation/RootNav';

export default combineReducers({
  auth: AuthReducer,
  navigationState: NavReducer
});
