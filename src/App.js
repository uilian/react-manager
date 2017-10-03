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
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
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
