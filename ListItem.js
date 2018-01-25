import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export default class ListItem extends Component {

  static defaultProps = {
    title: '123123',
    desc: '內容',
    image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#eee' }}>
       
       
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: '#bbb'
          }}
          source={{ uri: this.props.image }}
        />
       </View>
       
       <View style={{
          flex: 3,
          justifyContent: 'center',
          marginLeft: 20,
          backgroundColor:'#eee'
       }}
       >
          <Text style={{ fontSize: 20, fontWeight: '500'  }}>
            {this.props.title}
          </Text>
          <Text>
            {this.props.desc}
          </Text>
       </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
})