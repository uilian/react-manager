import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { employeeEdit, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  static navigationOptions = {
    title: 'Edit Employee'    
  }

  state = { showModal: false }

  onSavePress() {
    const { name, phone, shift, uid } = this.props;    
    this.props.employeeSave({ name, phone, shift, uid });
  }

  onDeletePress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onTextMessagePress() {
    const { name, phone, shift } = this.props;
    text(phone, `Hi ${name}, your upcoming shift is on ${shift}`);
  }

  onDecline() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    const { uid } = this.props;
    this.props.employeeDelete({ uid });
  }

  render() { 
    return (
      <Card >
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSavePress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextMessagePress.bind(this)}>
            Send Message
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDeletePress.bind(this)}>
            Delete
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure?
        </Confirm>
      </Card>
    ); 
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, uid } = state.employeeForm;
  return { name, phone, shift, uid };
};

export default connect(
  mapStateToProps, { employeeEdit, employeeSave, employeeDelete })(EmployeeEdit);
