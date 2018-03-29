import React, { Component } from 'react';
import {
  Animated,
} from 'react-native';

export default class FadeInView extends Component {
  
  
  static defaultProps = {
    visible: true,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.show();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.show();
    } else {
      this.hide();
    }
  }
  
  show = () => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
      }
    ).start();
  }
  
  hide = () => {

  }
  
  render() {
    return (
      <Animated.View 
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}