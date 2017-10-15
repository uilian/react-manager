import { StackNavigator } from 'react-navigation';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';

const routes = {
  EmployeeList: { screen: EmployeeList },
  EmployeeCreate: { screen: EmployeeCreate },
  EmployeeEdit: { screen: EmployeeEdit }

};

const stackNavigatorConfiguration = {
  initialRouteName: 'EmployeeList',
  headerMode: 'screen'
};

const EmployeeNav = StackNavigator(routes, stackNavigatorConfiguration);

export default EmployeeNav;
