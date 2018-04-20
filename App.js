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
import { Actions, Router, Stack, Scene, Tabs, Drawer, Modal, Lightbox } from "react-native-router-flux";
//import CustomNavBar from './CustomNavBar';
 import CustomNavBar from './AnsCustomNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabIcon from './TabIcon';
import DrawerContent from './DrawerContent';
// import Chatroom from './Chatroom';
import Chatroom from './Chatroom.sample';
import Animated from './Animated';
import AnimateList from './AnimateList';
import AnimateDetail from './AnimateDetail';
import LayoutAnimation from './LayoutAnimation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import ErrorBox from './ErrorBox';
import codePush from "react-native-code-push";
import FCM, {NotificationActionType} from "react-native-fcm";



console.disableYellowBox = true;


class App extends Component<{}> {
  
  
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
    FCM.getInitialNotification().then(notif => {
      console.log("TOKEN (getFCMToken)", notif);
      if (notif.userId) {
        Actions.detail({
          id: notif.userId
        })
      }
    });
    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      this.setState({token: token || ""})
    });
  }
  
  componentWillUpdate() {
    console.log("componentWillUpdate");
    
  }
  
  render() {
    console.log("render");
    return (
      <Router uriPrefix={'test'} >
        {/* <Lightbox hideNavBar>
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
        */}
        <Lightbox key="root">
          <Stack>
          
            <Drawer
              key="drawer"
              contentComponent={DrawerContent}
              drawerWidth={300}
              hideNavBar
              drawerIcon={() => {
                return <Icon name={'bars'} size={20} color={'#ccc'} />
                // return <View style={{ padding: 5 }}><Text>1234</Text></View>
              }}
            >
              <Scene key="button" component={ButtonSample} title="按鈕"/>
              
              <Scene key="chatroom" component={Chatroom} title="聊天室" />
              <Scene key="animated" component={Animated} title="動畫" />
              <Scene key="layoutAnimation" component={LayoutAnimation} title="動畫" />
              <Scene key="animateList" initial={false}  component={AnimateList} hideNavBar />
              <Stack key="userList">
                <Scene key="list" path={"/list/:search"} component={List} title="List" />
                <Scene key="detail" path={"/user/:id"} component={Detail} rightTitle="編輯"/>
                <Scene key="update" component={Update} />
              </Stack>
              
            </Drawer>
            
          </Stack>
          
          <Scene key="animateDetail" component={AnimateDetail} />
          
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

App = codePush({ installMode: codePush.InstallMode.IMMEDIATE })(App)
// App = codePush(App);
export default App;