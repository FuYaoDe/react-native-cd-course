/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native';


import Button from './Button';
import ButtonSample from './ButtonSample';
import Image from './Image';
import ListItem from './ListItem';

export default class App extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }
  
  renderList = ({ item, index }) => {
    return (
      <ListItem {...item} />
    );
  }
    
  render() {
    const data=[{
      title: '標題AA',
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
    }, {
      title: '標題D',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題E',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }, {
      title: '標題F',
      desc: '內容A',
      image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
    }]
    
    return (
      <FlatList
        style={{ flex: 1}}
        data={data}
        renderItem={this.renderList}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          alert('123123')
        }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={() => { 
              this.setState({ isRefreshing: true  })
              setTimeout(() => {
                this.setState({ isRefreshing: false  })
              }, 1000);
            }}
          />
        }
        ListHeaderComponent={
          <View style={{ height: 100, backgroundColor: 'red'  }}>
          
          </View>
        }
        ItemSeparatorComponent={
          ({highlighted}) => <View style={{ height: 3, backgroundColor: 'pink'  }} />
        }
        ListFooterComponent={
          <View style={{ height: 100, backgroundColor: 'blue' }}>
          </View>
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
