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
  ScrollView
} from 'react-native';


import Button from './Button';
import ButtonSample from './ButtonSample';
import Image from './Image';
import ListItem from './ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  
  render() {
    const data=[{
      title: '標題A',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題B',
      desc: '內容B',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題B',
      desc: '內容B',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題C',
      desc: '內容C',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    },{
      title: '標題A',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題B',
      desc: '內容B',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題B',
      desc: '內容B',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題C',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }]
    
    const renderList = () => {
      return data.map((data, i) => {
        return <ListItem {...data} key={i}/>
      })
    }
    return (
      <ScrollView style={styles.container}>
         {
           renderList()
         }
      </ScrollView>
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
