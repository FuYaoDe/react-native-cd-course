import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class ImageSample extends Component {
  render() {
    return (
      <Image
        style={{ height: 80, width: 80, borderRadius: 40, borderWidth: 2, borderColor: '#bbb' }}
        source={{ uri: this.props.image }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
})