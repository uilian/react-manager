import { StackNavigator } from 'react-navigation';
import EmployeeList from '../components/EmployeeList';
import EmployeeDetail from '../components/EmployeeDetail';

const routes = {
  EmployeeDetail: { screen: EmployeeDetail },
  EmployeeList: { screen: EmployeeList }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'EmployeeList'
};

const EmployeeNav = StackNavigator(routes, stackNavigatorConfiguration);

export default EmployeeNav;
