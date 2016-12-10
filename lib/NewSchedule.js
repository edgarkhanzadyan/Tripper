import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from './mapStyle';
export default
class NewSchedule extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: 'Sorry, but an app can\'t get your position',
      initialCoords: 'unknown', //<- Our coords
      gotGpsData: false,
    }
  }
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
  renderLoadingView(){
    console.log('loading');
   return (
     <View>
       <ActivityIndicator />
       <Text>
         Receiving GPS information...
       </Text>
     </View>
   );
  }
  getGpsData(){
    console.log('getGps');
     navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log('geolocation');
         this.setState({initialCoords: position.coords});
         this.setState({gotGpsData: true});
       },
       (error) => alert(this.state.errorMessage),
       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
     );
     console.log('mid');
     navigator.geolocation.watchPosition(
       (position) => {
         console.log('watch');
         var lastPosition = JSON.stringify(position);
         this.setState({initialCoords: position.coords});
         this.setState({gotGpsData: true});
         this.render();
       },
       (error) => console.log('ERRRRROR')
     );
     console.log('fin');
   }
  render(){
    if (!this.state.gotGpsData) {
      this.getGpsData();
      return this.renderLoadingView();
    }
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
            region={{
              longitude: this.state.initialCoords.longitude,
              latitude: this.state.initialCoords.latitude,
              latitudeDelta: 0.5,
              longitudeDelta: 0.5,
            }}
            customMapStyle={mapStyle} />
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
