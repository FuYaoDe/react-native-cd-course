import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Modal from './BaseLightbox.js';

const ErrorModal = () => (
  <Modal hideClose verticalPercent={0.8} horizontalPercent={0.8}>
    <View flex={1} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
      <Text>Error</Text>
      <Text>Slides up from the bottom, and covers the entire screen with no transparency</Text>
    </View>
  </Modal>
);

const styles = StyleSheet.create({

});


export default ErrorModal;