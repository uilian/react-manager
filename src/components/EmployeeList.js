import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { employeesFetch, employeeNew } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};    
    return {
      title: params.title,
      headerRight: params.headerRight,
    };
  }; 
  
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
    this.setNavigationParams();
  }  

  componentDidMount() {
    this.props.navigation.setParams({
      employeeCreate: this.props.employeeCreate.bind(this)
    });
  }
  
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  
  setNavigationParams() {
    const title = 'Employee List';
    const headerRight = (
      <TouchableOpacity
        style={{ marginLeft: 5, marginRight: 5 }}
        onPress={() => this.props.employeeNew()} 
      >
        <Icon name="plus" size={30} color="#3b5998" />
      </TouchableOpacity> 
    );
    this.props.navigation.setParams({ 
      title,
      headerRight, 
    });
  }


  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {    
    return (
      <ListItem employee={employee} />);
  }

  render() { 
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch, employeeNew })(EmployeeList);
