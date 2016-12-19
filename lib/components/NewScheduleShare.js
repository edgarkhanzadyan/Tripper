import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';
export default
class NewScheduleShare extends Component {
  render(){
    return(
      <View style={style.container}>
        <TouchableOpacity onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Button
          title={'login with Facebook'}
          onPress={() => console.log('Facebook')}
        />
        <Button
          title={'login with Twitter'}
          onPress={() => console.log('Twitter')}
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
