import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Button from './Button';
import FadeInView from './FadeInView';
// import FadeInView from './FadeInView.sample';
import MoveRightView from './MoveRightView';
import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AnimatedSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }
  
  hideAndShow = () => {
    this.setState({
      visible: !this.state.visible
    });
  }
  
  render() {
    return (
      <View style={{ flex: 1, padding: 30 }}>
      
      
        <FadeInView
          style={{ padding: 20, backgroundColor: 'powderblue', margin: 10}}
          visible={this.state.visible}
        >
          <Text style={{fontSize: 28, textAlign: 'center'}}>Fading in</Text>
        </FadeInView>
        
        <FadeInView visible={this.state.visible} >
          <ListItem title={'Dan'} desc={'!!!'}/>
        </FadeInView>
        
        
        
        <FadeInView visible={true}>
          <Button text='隱藏/顯示' onPress={this.hideAndShow}/>
        </FadeInView>
        
        {/*<MoveRightView style={{ height: 100, width: 100, marginTop: 10, backgroundColor: 'blue' }}/>*/}
        
        <MoveRightView style={{ height: 20, width: 20, marginTop: 10 }}>
          <Icon name={'spinner'} size={20} />
        </MoveRightView>
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})