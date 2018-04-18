import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

class DrawerContent extends React.Component {

  render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={Actions.button}>
              <Text>按鈕</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.list}>
              <Text>清單</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.chatroom}>
              <Text>聊天室</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.animated}>
              <Text>動畫</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.animateList}>
              <Text>動畫轉場</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.layoutAnimation}>
              <Text>LayoutAnimation</Text>
            </TouchableOpacity>
        </View >
      );
  }
}

export default DrawerContent;