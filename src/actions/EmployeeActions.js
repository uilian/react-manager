import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { 
  EMPLOYEE_UPDATE, 
  EMPLOYEE_EDIT, 
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS } from './types';
import { resetNavigation } from './Util';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeNew = () => {
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_CREATE });   
    dispatch(NavigationActions.navigate({ routeName: 'EmployeeCreate' }));
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

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => { 
        //dispatch({ type: EMPLOYEE_LIST });
        //dispatch(NavigationActions.navigate(resetNavigation('EmployeeList')));
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };  
};

export const employeeEdit = (employee) => {
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_EDIT, payload: employee });
    dispatch(NavigationActions.navigate({ routeName: 'EmployeeEdit' }));
  };
};
