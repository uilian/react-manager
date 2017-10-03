import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  navigationState: NavReducer,
  employeeForm: EmployeeFormReducer
});
