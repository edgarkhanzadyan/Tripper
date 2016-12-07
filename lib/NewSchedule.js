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
import MapView from 'react-native-maps';
export default
class NewSchedule extends Component {
  _navigate(propName, name) {
    if(propName === 'toNewScheduleShare'){
      this.props.navigator.push({
        name: 'NewScheduleShare',
        passProps: {
          name: name,
        },
      });
    }else if(propName === 'toFinish'){
      this.props.navigator.push({
        name: 'Finish',
        passProps: {
          name: name,
        },
      });
    }
  }
  render(){
    return(
      <View style={style.container}>
        <View style={style.header}>
          <Text>Your generated map</Text>
          <TouchableOpacity>
            <Text>regenerate</Text>
          </TouchableOpacity>
        </View>
        <View style={style.containerNew}>
          <MapView style={ style.mapNew }
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, }} />
        </View>
        <View style={style.bottom}>
          <TouchableOpacity onPress={() => this._navigate('toNewScheduleShare')}>
            <Text>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Taxi</Text>
          </TouchableOpacity>
        </View>
        <Button
          title={'Finish!'}
          onPress={() => this._navigate('toFinish')}
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
  containerNew: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapNew: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapContainer: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: 400,
    width: 400,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});
