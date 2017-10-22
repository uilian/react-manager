import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeEdit, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  static navigationOptions = {
    title: 'Edit Employee'    
  }

  // componentWillMount() {
  //   console.log('will mount edit', this.props.employee);
  //   _.each(this.props.employee, (value, prop) => {
  //       this.props.employeeUpdate({ prop, value });
  //   });
  // }

  onButtonPress() {
    const { name, phone, shift, uid } = this.props;    
    this.props.employeeSave({ name, phone, shift, uid });
    //this.props.employeeEdit({ name, phone, shift: shift || 'Monday' });
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

export default connect(mapStateToProps, { employeeEdit, employeeSave })(EmployeeEdit);
