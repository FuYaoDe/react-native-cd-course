import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
         style={[
           styles.button,
        ]}
         onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
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