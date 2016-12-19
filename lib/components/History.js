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
    }else if(propName === '0'){
      this.props.navigator.push({
        name: '0',
        passProps: {
          name: name,
        },
      });
    }else if(propName === '1'){
      this.props.navigator.push({
        name: '1',
        passProps: {
          name: name,
        },
      });
    }
  }
  render(){
    return(
      <ScrollView style={style.container}>
        <View style={style.addSymbolWrap}>
          <TouchableOpacity onPress={() => this._navigate('toGenSchedule')}>
            <Text style={style.addSymbol}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={style.historyTripWrap}>
          <TouchableOpacity onPress={() => this._navigate('0')}>
            <Text style={style.historyTrip}>The Best trip in Yerevan</Text>
          </TouchableOpacity>
        </View>
        <View style={style.historyTripWrap}>
          <TouchableOpacity onPress={() => this._navigate('1')}>
            <Text style={style.historyTrip}>Honeymoon</Text>
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
  addSymbolWrap: {
    alignItems: 'center',
  },
  addSymbol: {
    fontSize: 60,
  },
  historyTrip: {
    fontSize: 25,
  },
  historyTripWrap: {
    alignItems: 'center',
  },
});
