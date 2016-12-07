import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

export default
class History extends Component {
  _navigate(propName, name) {
    if(propName === 'toGenSchedule'){
      this.props.navigator.push({
        name: 'GenSchedule',
        passProps: {
          name: name,
        },
      });
    }
  }
  render(){
    return(
      <ScrollView style={style.container}>
        <View>
          <TouchableOpacity onPress={() => this._navigate('toGenSchedule')}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>The Best trip in Yerevan</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Honeymoon</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
});
