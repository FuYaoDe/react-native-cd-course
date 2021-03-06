import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
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
    Actions.refresh({
      onRight: () => {
        Actions.update({
          title: this.props.title,
          desc: this.props.desc,
          image: this.props.image,
        })
      }
    })
  }

  async componentDidMount() {
    if (this.props.id) {
      await this.getData();
    }
  }
  
  getData = async() => {
    let response = await fetch(`http://rn.fuyaode.me/users/${this.props.id}`);
    console.log(response);
    const data = await response.json();
    console.log("json", data);
    Actions.refresh({
      title: data.name,
      desc: data.job_title,
      image: data.avatar,
    });
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
        <Text style={{ fontSize: 20, fontWeight: '500'  }}>
          {this.props.title}
        </Text>
        <Text>
          {this.props.desc}
        </Text>
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