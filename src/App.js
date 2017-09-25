import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducer from './reducers';
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
    return (
      <Provider store={createStore(reducer)}>
        <LoginForm/>
      </Provider>
    );
  }
};

export default App;
