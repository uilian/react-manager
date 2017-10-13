import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { employeeEdit } from '../actions';

class ListItem extends Component {  

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.employeeEdit()}>
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

export default connect(null, { employeeEdit })(ListItem);
