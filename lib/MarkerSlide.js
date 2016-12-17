import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
export default
class MarkerSlide extends Component {
  render(){
    return(
      <View style={style.container}>
        <View><Text>Image {this.props.image}</Text></View>
        <View><Text>Preference {this.props.preference}</Text></View>
        <View><Text>Money {this.props.money}</Text></View>
        <View><Text>Time {this.props.time}</Text></View>
        <View><Text>History {this.props.history}</Text></View>
        <View><TouchableOpacity onPress={() => this.props.navigator.pop()}><Text>Back</Text></TouchableOpacity></View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
});
