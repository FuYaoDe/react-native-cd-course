import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
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
              onPress={Actions.pop}
              style={[styles.navBarItem, { paddingLeft: 10}]}>
              <Image
                style={{width: 30, height: 50}}
                resizeMode="contain"
                source={{uri: 'https://image.flaticon.com/icons/png/512/0/340.png'}}></Image>
            </TouchableOpacity>
          )
      } else {
          return (
            <View style={styles.navBarItem}/>
          )
      }
  }

  _renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text style={{ textAlign: 'center' }} >{ this.props.title }</Text>
      </View>
    )
  }

  _renderRight() {
    return (
      <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
        <TouchableOpacity
          onPress={() => console.log('Share')}
          style={{ paddingRight: 10}}>
          <Image
            style={{width: 30, height: 50}}
            resizeMode="contain"
            source={{uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-512.png'}}></Image>
        </TouchableOpacity>
      </View>
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