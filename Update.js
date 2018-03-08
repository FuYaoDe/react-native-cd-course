import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Actions } from "react-native-router-flux";

export default class ListItem extends Component {

  static defaultProps = {
    title: '123123',
    desc: '內容',
    image: 'https://robohash.org/eaetin.png?size=150x150&set=set1',
  }
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.setState({
      title: this.props.title || '',
      desc: this.props.desc,
    })
  }
  

  render() {
    return (
      <View style={{ flex: 1, padding: 10, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
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
        <TextInput
           onChangeText={(text) => { this.setState({ title: text }) }}
           style={{  height: 40 }}
           underlineColorAndroid={'transparent'}
           value={this.state.title}
         />
        <TextInput
           onChangeText={(text) => { this.setState({ desc: text }) }}
           style={{  height: 40 }}
           underlineColorAndroid={'transparent'}
           value={this.state.desc}
         />
         <TouchableOpacity style={styles.button}  onPress={() => {
          Actions.pop({
            refresh: {
              title: this.state.title,
              desc: this.state.desc,
            }
          });
        }}>
          <Text style={styles.buttonText}>儲存</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  button: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
})