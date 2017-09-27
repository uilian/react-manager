import { StackNavigator } from 'react-navigation';
import EmployeeList from '../components/EmployeeList';
import LoginForm from '../components/LoginForm';

const routes = {
  LoginForm: { screen: LoginForm },
  EmployeeList: { screen: EmployeeList }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'LoginForm'
};

const MainNav = StackNavigator(routes, stackNavigatorConfiguration);

export default MainNav;
