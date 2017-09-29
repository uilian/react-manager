import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EmployeeNav from './EmployeeNav';

const routes = {
  LoginForm: { screen: LoginForm },
  EmployeeList: { screen: EmployeeNav }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'LoginForm'  
};

const RootStack = StackNavigator(routes, stackNavigatorConfiguration);

class RootNav extends Component {
  render(){
    const { navigationState, dispatch } = this.props;    
    return (
      <RootStack
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    navigationState: state.navigationState,
  }
};

export const NavReducer = (state, action) => {
  return RootStack.router.getStateForAction(action,state);
};

export default connect(mapStateToProps)(RootNav);

