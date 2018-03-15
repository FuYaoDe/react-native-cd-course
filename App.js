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
  BackAndroid,
} from 'react-native';


import Button from './Button';
import ButtonSample from './ButtonSample';
import Image from './Image';
import ListItem from './ListItem';
import Detail from './Detail';
import Update from './Update';
import List from './List';
import { Router, Stack, Scene, Tabs, Drawer, Modal, Lightbox } from "react-native-router-flux";
//import CustomNavBar from './CustomNavBar';
 import CustomNavBar from './AnsCustomNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabIcon from './TabIcon';
import DrawerContent from './DrawerContent';
import Chatroom from './Chatroom';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import ErrorBox from './ErrorBox';
console.disableYellowBox = true;
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
      <Router uriPrefix={'test'} >
        <Lightbox hideNavBar>
          <Stack
            key="root"
            transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}
          >
            <Scene key="button" component={ButtonSample} title="按鈕"/>
            <Scene key="list" path={"/list/:search"} component={List} title="List"/>
            <Scene key="detail" path={"/user/:id"} component={Detail} rightTitle="編輯"/>
            <Scene key="update" component={Update} />
          </Stack>
          <Scene key="modal" component={ErrorBox} />
        </Lightbox>
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
  tabBarStyle: {
    backgroundColor: "#eee"
  }
});
