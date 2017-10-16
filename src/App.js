import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import RootNav from './navigation/RootNav';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAMJSMJn4xn1TLGwckxM59W_C7Lkbwq3BY',
      authDomain: 'manager-7cdf4.firebaseapp.com',
      databaseURL: 'https://manager-7cdf4.firebaseio.com',
      projectId: 'manager-7cdf4',
      storageBucket: 'manager-7cdf4.appspot.com',
      messagingSenderId: '509229020043'
    };
    firebase.initializeApp(config);
  }

  render() {
    const { navigationState, dispatch } = this.props;    
    return (
      <RootNav
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState
          })
        }
      />
    );
  }
}

// Preparing to glue together App + State + Redux
const middlewares = [ReduxThunk, logger];

const mapStateToProps = (state) => {
  return {
    navigationState: state.navigationState,
  };
};

const AppWithState = connect(mapStateToProps)(App);

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

const Root = () => {
  return (
    <Provider store={store}>
      <AppWithState />
    </Provider>
  );
}; 

export default Root;
