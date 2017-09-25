import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeHolder="email@gmail.com" />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeHolder="password" />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
