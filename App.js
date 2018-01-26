/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  RefreshControl,
  TextInput,
  AsyncStorage,
} from 'react-native';


import Button from './Button';
import ButtonSample from './ButtonSample';
import Image from './Image';
import ListItem from './ListItem';
import List from './List';

export default class App extends Component<{}> {
  
  
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      name: '',
    };
  }
  
  componentWillMount() {
    console.log("componentWillMount");
  }
  
  async componentDidMount() {
    console.log("componentDidMount");
    await this.getName();
    await this.getData();
  }
  
  componentWillUpdate() {
    console.log("componentWillUpdate");
    
  }
  
  getData = async() => {
    let response = await fetch(`https://ffccec3f.ngrok.io/users/1`);
    console.log(response);
    const data = await response.json();
    console.log("json", data);
    this.setState({
      name: data.name,
    });
    await this.setItem(data.name);
  }
  
  setItem = async(str) => {
    try {
      console.log(str);
      await AsyncStorage.setItem('name', str);
    }catch(e) {
      console.log(e);
    }
  }
  
  getName = async() => {
    try {
      const name = await AsyncStorage.getItem('name');
      console.log(name);
      if (name !== null) {
        this.setState({ name }); 
      }
    }catch(e) {
      console.log(e);
    }
  }
  
  render() {
    console.log("render");
    return (
      <View style={{ flex: 1 }}>
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
