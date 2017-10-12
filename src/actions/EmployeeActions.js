import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';
import { resetNavigation } from './Util';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => { 
        dispatch({ type: EMPLOYEE_CREATE });
        dispatch(NavigationActions.navigate(resetNavigation('EmployeeList')));
      });
  };
};
