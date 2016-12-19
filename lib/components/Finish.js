import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Picker,
  TextInput
} from 'react-native';
export default
class Finish extends Component {
  constructor(){
    super();
    this.state = {rating: 5, comment: ''}
  }
  render(){
    return(
      <View style={style.container}>
        <Picker
          mode='dropdown'
          selectedValue={this.state.rating}
          enabled={this.state.countryChoose}
          onValueChange={(data) => this.setState({ rating: data })}>
          <Picker.Item label='input your rating!' value='' />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
        <TextInput
          onChangeText={(data) => this.setState({ comment: data })}
          value={this.state.comment}
          placeholder={'input your comment about our schedule!'}
        />
        <Button
          title={'Go to history'}
          onPress={() => this.props.navigator.popN(3)}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
});
