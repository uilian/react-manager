import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';


class EmployeeList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Employee List',
    headerRight: 
      <TouchableOpacity style={{ marginLeft: 5, marginRight: 5 }}
        onPress={ () => {navigation.navigate('EmployeeCreate');}} >
        <Icon name="plus" size={30} color="#3b5998" />
      </TouchableOpacity>,
    //header: null,    
  });
  
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
