import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployeeEditReducer from './EmployeeEditReducer';

export default combineReducers({
  auth: AuthReducer,
  navigationState: NavReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
  selectedEmployee: EmployeeEditReducer
});
