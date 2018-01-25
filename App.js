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
  TextInput
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
  
  
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      text: '',
    };
  }
  
  render() {
    const data=[{
      title: 'A標題1',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: 'BBBBB',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: 'CCCCCC',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: 'B標題1',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: 'B標題2',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: 'B標題3',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }]
    
    const renderItem = ({ item, index }) => {
      return (
        <ListItem
          title={item.title}
          desc={item.desc}
          image={item.image}
        />
      );
      // return <ListItem {...item} /> 
    }
    
    const filter = (list) => {
     if (this.state.text.length > 0) {
       return list.filter((data) => data.title.indexOf(this.state.text) > -1);
     } else {
       return list
     }
    }
    
    return (
      <FlatList
         data={filter(data)}
         renderItem={renderItem}
         renderSectionHeader={
          ({ section }) => {
            return (
              <View style={{ height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                 <Text style={{ color: '#fff' }}>{section.title}</Text>
              </View>
            );
          }
         }
         onEndReachedThreshold={0.5}
         //onEndReached={() => { Alert.alert('阿', '到底摟') }}
         ListHeaderComponent={
           <View style={{ height: 50, paddingRight: 20, paddingLeft: 20 }}>
             <TextInput
               onChangeText={(text) => { this.setState({ text: text.toUpperCase() }) }}
               style={{  height: 40 }}
               underlineColorAndroid={'transparent'}
               value={this.state.text}
              keyboardType={'numeric'}
              returnKeyType={'search'}
              secureTextEntry
              defaultValue={1231212}
             />
           </View>
         }
         ListFooterComponent={
           <View style={{ height: 50, paddingRight: 20, paddingLeft: 20 }}>
             <TextInput
               onChangeText={(text) => { this.setState({ text: text.toUpperCase() }) }}
               style={{  height: 40 }}
               underlineColorAndroid={'transparent'}
               value={this.state.text}
             />
           </View>
         }
         ItemSeparatorComponent={
           ({highlighted}) => <View style={{ height: 3, backgroundColor: 'pink'  }} />
         }
         refreshControl={
           <RefreshControl
             refreshing={this.state.isRefreshing}
             onRefresh={() => {
               this.setState({ isRefreshing: true });
               setTimeout(
                 () => {
                   this.setState({ isRefreshing: false });
                 }, 
                 1000
               );
             }}
           />
         }
      />
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
