import React, { Component } from 'react';
import { Text, View, Animated, ScrollView, Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import Modal from './BaseLightbox.js';

export default class Hello extends Component {
  static defaultProps = {
    image: 'https://picsum.photos/1920/1080/?image=900',
  }
  
  constructor(props) {
    super(props);
    this.state = {};
    this.scrollY = new Animated.Value(0);
  }

  render() {
    const headerHeight = this.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [300, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    
    const opacity = this.scrollY.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    
    const scale = this.scrollY.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 1.5],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    return (
      <Modal hideClose verticalPercent={1} horizontalPercent={1} onClose={this.props.onClose}>
      {/*<Animated.View
        style={{ opacity, width: '100%', height: 100, backgroundColor: 'blue' }}
      />*/}
      
      <ScrollView
        style={{ flex: 1 ,backgroundColor:'#ebebeb', width: ScreenWidth, height: ScreenHeight}}
        scrollEventThrottle={100}
        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                y: this.scrollY 
              }
            }
          }]
        )}
      >
        {/* 視差效果 1. */}
        {/* <Animated.View
          style={{
            height: headerHeight,
            alignItem: 'center',
            paddingTop: 10,
          }}
        >
          <Animated.Image
            style={{
              height: 300,
              width: '100%',
            }}
            source={{ uri: this.props.image }}
            resizeMode={'cover'}
          />
          
        </Animated.View>*/}
        
        {/* 視差效果 2 */}
        
        <Animated.Image
          style={{
            height: headerHeight,
            width: '100%',
          }}
          source={{ uri: this.props.image }}
          resizeMode={'cover'}
        />
        
        {/*<Animated.Image
          style={{
            height: 300,
            width: '100%',
            transform: [{
              scale: scale,
            }]
          }}
          source={{ uri: this.props.image }}
          resizeMode={'cover'}
        />*/}

        <View style={{ height: 1000, backgroundColor: '#ccc' }}></View>
      </ScrollView>
      </Modal>
    );
  }
}