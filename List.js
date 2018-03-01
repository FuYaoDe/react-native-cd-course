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

import Icon from 'react-native-vector-icons/FontAwesome';
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

export default class List extends Component<{}> {
  
  
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      text: props.search,
      data: [],
      page: 1,
    };
  }
  
  async componentDidMount() {
    console.log(this.props)
    await this.getData();
  }
  
  getData = async() => {
    let response = await fetch(`http://rn.fuyaode.me/users?_page=${this.state.page}&_limit=10`);
    console.log(response);
    const data = await response.json();
    console.log("json", data);
    // this.state.page += 1,
    this.setState({
      data: [...this.state.data, ...data],
      page: this.state.page + 1,
      isRefreshing: false,
    });
  }
  
  render() {
    
    const renderItem = ({ item, index }) => {
      return (
        <ListItem
          title={item.name}
          desc={item.job_title}
          image={item.avatar}
        />
      );
      // return <ListItem {...item} /> 
    }
    
    const filter = (list) => {
     if (this.state.text.length > 0) {
       return list.filter((data) => data.name.indexOf(this.state.text) > -1);
     } else {
       return list
     }
    }
    
    return (
      <FlatList
         data={filter(this.state.data)}
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
         onEndReached={async() => {
           await this.getData();
         }}
         ListHeaderComponent={
           <View style={{ height: 50, paddingRight: 20, paddingLeft: 20, flexDirection: 'row' }}>
             <Icon name={'search'} size={20} color={'black'} />
             <TextInput
               onChangeText={(text) => { this.setState({ text: text }) }}
               style={{  height: 40 }}
               underlineColorAndroid={'transparent'}
               value={this.state.text}
              //keyboardType={'numeric'}
              returnKeyType={'search'}
              // secureTextEntry
              defaultValue={1231212}
             />
           </View>
         }
        // ListFooterComponent={
        //   <View style={{ height: 50, paddingRight: 20, paddingLeft: 20 }}>
        //     <TextInput
        //       onChangeText={(text) => { this.setState({ text: text.toUpperCase() }) }}
        //       style={{  height: 40 }}
        //       underlineColorAndroid={'transparent'}
        //       value={this.state.text}
        //     />
        //   </View>
        // }
         ItemSeparatorComponent={
           ({highlighted}) => <View style={{ height: 3, backgroundColor: 'pink'  }} />
         }
         refreshControl={
           <RefreshControl
             refreshing={this.state.isRefreshing}
             onRefresh={async () => {
               this.setState({
                isRefreshing: true,
                data: [],
                page: 1,
               }, async() => {
                 await this.getData();
               });
               //await this.getData();
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
