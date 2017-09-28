import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
  static navigationOptions = {
    title: 'Please Log In',
    headerLeft: 
      <TouchableOpacity style={{ marginLeft: 5, marginRight: 5 }}>
        <Icon name="rocket" size={30} color="#3b5998" />
      </TouchableOpacity>,
    headerRight: 
      <TouchableOpacity style={{ marginLeft: 5, marginRight: 5 }}>
        <Icon name="cogs" size={30} color="#3b5998" />
      </TouchableOpacity>,
    //header: null,
  }

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
      this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser( { email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
           />  
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
           />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonStyle: {
    marginLeft: 5,
    marginRight: 5
  },  
};


const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser })(LoginForm);
