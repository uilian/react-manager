import { StackNavigator } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EmployeeNav from './EmployeeNav';

const routes = {
  LoginForm: { screen: LoginForm },
  Employees: { screen: EmployeeNav }
};

// No header in the main StackNavigator
const stackNavigatorConfiguration = {
  initialRouteName: 'LoginForm', 
  headerMode: 'none'
};

const RootNav = StackNavigator(routes, stackNavigatorConfiguration);

export default RootNav;
