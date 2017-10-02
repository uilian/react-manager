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
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyBtGzj7dpz5FLaSr4J2RqEALraPIkm3Iqk',
      authDomain: 'manager-25a3a.firebaseapp.com',
      databaseURL: 'https://manager-25a3a.firebaseio.com',
      projectId: 'manager-25a3a',
      storageBucket: 'manager-25a3a.appspot.com',
      messagingSenderId: '434708860170'
    };
    firebase.initializeApp(config);
  }

  render(){
    const { navigationState, dispatch } = this.props;    
    return (
      <RootNav
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    );
  }
};

// Preparing to glue together App + State + Redux
const middlewares = [ ReduxThunk, logger ];

const mapStateToProps = (state) => {
  return {
    navigationState: state.navigationState,
  }
};

const AppWithState = connect(mapStateToProps)(App);

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppWithState />
      </Provider>
    );
  }
}; 

export default Root;
