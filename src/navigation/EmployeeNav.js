import { StackNavigator } from 'react-navigation';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';

const routes = {
  EmployeeList: { screen: EmployeeList },
  EmployeeCreate: { screen: EmployeeCreate }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'EmployeeList',
  headerMode: 'screen'
};

const EmployeeNav = StackNavigator(routes, stackNavigatorConfiguration);

export default EmployeeNav;
