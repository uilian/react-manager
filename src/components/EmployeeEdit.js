import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeEdit } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  static navigationOptions = {
    title: 'Edit Employee'    
  }

  onButtonPress() {
    const { name, phone, shift, uid } = this.props;    
    console.log('from edit button', name, phone, shift, uid);
  }

  render() { 
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
          <Button onPress={this.onButtonPress.bind(this)}>
            Excluir
          </Button>
        </CardSection>        
      </Card>
    ); 
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, uid } = state.selectedEmployee;
  return { name, phone, shift, uid };
};

export default connect(mapStateToProps, { employeeEdit })(EmployeeEdit);
