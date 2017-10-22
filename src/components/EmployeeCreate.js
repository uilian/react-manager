import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  static navigationOptions = {
    title: 'Create Employee'    
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;    
    this.props.employeeSave({ name, phone, shift: shift || 'Monday' });
  }

  render() { 
    return (
      <Card>
        <EmployeeForm {... this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>        
      </Card>
    ); 
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeSave })(EmployeeCreate);
