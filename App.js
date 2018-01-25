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
} from 'react-native';


import Button from './Button';
import ButtonSample from './ButtonSample';
import Image from './Image';
import ListItem from './ListItem';
import List from './List';
import ListDetail from './ListDetail'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Scene,
  Router,
  Actions,
  Stack,
  Drawer,
} from 'react-native-router-flux';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  
  
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      text: '',
      data: [],
      page: 1,
    };
  }
  
  render() {
    
    return (
      <Router>
        <Stack key="root">
          <Scene key="list" component={List} title="List"/>
          <Scene key="listDetail" component={ListDetail} title="內容"/>
          <Drawer
            drawer
            key="drawer"
            drawerBackgroundColor={'rgba(239,239,244,0.5)'}
            drawerWidth={300}
            drawerOpenRoute="DrawerOpen"
            drawerCloseRoute="DrawerClose"
            drawerToggleRoute="DrawerToggle"
          >
            <Scene key="list" component={List} title="List"/>
          </Drawer>
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
