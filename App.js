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
import { Router, Stack, Scene } from "react-native-router-flux";

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
  }
  
  componentWillUpdate() {
    console.log("componentWillUpdate");
    
  }
  
  render() {
    console.log("render");
    return (
      <Router>
        <Stack key="root">
          <Scene key="button" component={ButtonSample} title="按鈕"/>
          <Scene key="list" component={List} title="List"/>
        </Stack>
      </Router>
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
