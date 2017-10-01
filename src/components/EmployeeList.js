import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


class EmployeeList extends Component {
  static navigationOptions = {
    title: 'Employee List',
    headerRight: 
      <TouchableOpacity style={{ marginLeft: 5, marginRight: 5 }}
        onPress={() => NavigationActions.navigate({routeName: 'EmployeeCreate'})} >
        <Icon name="plus" size={30} color="#3b5998" />
      </TouchableOpacity>,
    //header: null,
  };

  render() { 
    return (
      <View>
        <Text>
          Employee
        </Text>
        <Text>
          Employee
        </Text>
        <Text>
          Employee
        </Text>
        <Text>
          Employee
        </Text>
      </View>
    );
  }
}


export default EmployeeList;
