import React, { Component } from 'react';
import {
  Animated,
  Easing,
} from 'react-native';

export default class MoveRightView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xPosition: new Animated.Value(0),
      rotate: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.move();
  }
  
  move = () => {
    
    
    // Animated.timing(
    //   this.state.xPosition,
    //   {
    //     toValue: 200,
    //     easing: Easing.in(Easing.circle)
    //   }
    // ).start();
    
    // Animated.decay(this.state.xPosition,{
    //   velocity: 1,
    //   deceleration: 0.995
    // }).start();
    
    
    // Animated.sequence([
    //   Animated.timing(this.state.xPosition, { toValue: 200 }),
    //   Animated.timing(this.state.xPosition, { toValue: 0 }),
    // ]).start();
    
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(this.state.xPosition, { toValue: 200 }),
    //     Animated.timing(this.state.xPosition, { toValue: 0 }),
    //   ])
    // ).start();
    
    // setTimeout(() => {
    //   Animated.timing(
    //     this.state.xPosition
    //   ).stop();
    // }, 1300)
    
    // Animated.timing(
    //   this.state.xPosition,
    //   {
    //     toValue: 1,
    //   }
    // ).start();
    
    
    // Animated.timing(
    //   this.state.rotate,
    //   {
    //     toValue: 1,
    //     easing: Easing.inOut(Easing.circle),
    //   }
    // ).start();
    
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.rotate, { toValue: 1, duration: 2000, easing: Easing.inOut(Easing.circle), }),
        Animated.timing(this.state.rotate, { toValue: 0, duration: 2000, easing: Easing.inOut(Easing.circle), }),
      ])
    ).start();
    
  }
  
  
  render() {
    const rotate = this.state.rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    
    // const left = this.state.xPosition.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0%', '100%']
    // })
    
    return (
      <Animated.View 
        style={{
          ...this.props.style,
          
          // left: left,
          
          transform: [
            {
              // translateX: this.state.xPosition,
              rotate: rotate,
            },
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}