import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(
        reducers,
        {},
        applyMiddleware(ReduxThunk)
      )
    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
  }
};

export default App;
