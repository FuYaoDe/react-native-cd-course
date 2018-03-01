import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default class CustomNavBar extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  _renderLeft() {
      if (this.props.scene.index > 0) {
          return (
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.navBarItem, { paddingLeft: 10, backgroundColor: 'red'}]}>
            </TouchableOpacity>
          )
      } else {
          return (
            <View style={[ styles.navBarItem, { backgroundColor: 'red'}]}/>
          )
      }
  }

  _renderMiddle() {
    return (
      <View style={[styles.navBarItem, { backgroundColor: 'blue' }]}>
      </View>
    )
  }

  _renderRight() {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={[styles.navBarItem, { paddingLeft: 10, backgroundColor: 'yellow' }]}>
      </TouchableOpacity>
    )
  }

  render() {
    console.log(this.props);
    return (
      <View style={[styles.container]}>
        { this._renderLeft() }
        { this._renderMiddle() }
        { this._renderRight() }
      </View>
    )
  }
}