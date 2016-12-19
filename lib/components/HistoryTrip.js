import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  Button,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';

export default
class HistoryTrip extends Component {
  constructor(){
    super();
    this.state = {region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421, }
    }
  }
  render(){
    return(
      <View style={style.container}>
        <View style={style.mapContainer}>
          <MapView style={ style.map }
            initialRegion={this.state.region}/>
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
