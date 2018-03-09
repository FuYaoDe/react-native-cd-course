import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
import { Actions } from "react-native-router-flux";


export default class ButtonSample extends Component {
  
  onPress = () => {
    //Alert.alert("啊!", "你按到我了！");
    Actions.button({ title: '自訂 Title'  });
  }

  render() {
    const buttonProps = {
      // onPress: this.onPress,
      onPress: () => {},
      style: styles.button,
      // activeOpacity: 0
      hitSlop: {
        top: 0,
        left: 100,
        bottom: 0,
        right: 100
      }
    };
    return (
      <View style={styles.container}>
      
        <TouchableOpacity {...buttonProps} onPress={() => {
          Actions.button({ title: '自訂 Title' });
        }}>
          <Text style={styles.buttonText}>切換到新的 Button 頁面</Text>
        </TouchableOpacity>
        
        <TouchableOpacity {...buttonProps} onPress={() => {
          Actions.refresh({ title: '標題' });
        }}>
          <Text style={styles.buttonText}>刷新當前 props</Text>
        </TouchableOpacity>
        
        <TouchableOpacity {...buttonProps} onPress={() => {
          Actions.list();
        }}>
          <Text style={styles.buttonText}>List</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity {...buttonProps} onPress={() => {
          Actions.pop();
        }}>
          <Text style={styles.buttonText}>返回</Text>
        </TouchableOpacity>
        
        <TouchableOpacity {...buttonProps} onPress={() => {
          Actions.pop({
            refresh: {
              title: '新的 Title!'
            }
          });
        }}>
          <Text style={styles.buttonText}>返回更新 title</Text>
        </TouchableOpacity>
        
        <TouchableOpacity {...buttonProps} onPress={() => {
          Actions.list({
            search: 'c'
          });
        }}>
          <Text style={styles.buttonText}>帶入預設搜尋 List</Text>
        </TouchableOpacity>
        <TouchableOpacity {...buttonProps} onPress={() => {
          Actions.modal();
        }}>
          <Text style={styles.buttonText}>Modal</Text>
        </TouchableOpacity>
      </View>
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