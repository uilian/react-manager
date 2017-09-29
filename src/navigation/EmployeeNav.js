import { StackNavigator } from 'react-navigation';
import EmployeeList from '../components/EmployeeList';
import EmployeeDetail from '../components/EmployeeDetail';

const routes = {
  EmployeeList: { screen: EmployeeList },
  EmployeeDetail: { screen: EmployeeDetail }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'EmployeeList'
};

const EmployeeNav = StackNavigator(routes, stackNavigatorConfiguration);

export default EmployeeNav;
