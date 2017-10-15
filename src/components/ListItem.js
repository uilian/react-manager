import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { employeeEdit } from '../actions';

class ListItem extends Component {  

  onRowPress() {
    this.props.employeeEdit(this.props.employee);
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}> 
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift, uid } = state.selectedEmployee;
  return { name, phone, shift, uid };
};

export default connect(mapStateToProps, { employeeEdit })(ListItem);
