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

export default
class NewSchedule extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: 'Sorry, but an app can\'t get your position',
      initialCoords: 'unknown',
      gotGpsData: false,
      numberOfMarker: 0,
      dataForMarkers: [
        {
          longitude: 40,
          latitude: 40,
          image: 'image',
          history: 'bla',
          preference: 'music',
          time: 2,
          money: 50,
        },
        {
          longitude: 40,
          latitude: 41,
          image: 'image',
          history: 'bla bla',
          preference: 'music',
          time: 2,
          money: 50,
        },
        {
          longitude: 40,
          latitude: 42,
          image: 'image',
          history: 'bla bla bla',
          preference: 'music',
          time: 2,
          money: 50,
        },
        {
          longitude: 40,
          latitude: 43,
          image: 'image',
          history: 'bla bla bla bla',
          preference: 'music',
          time: 2,
          money: 50,
        },
        {
          longitude: 40,
          latitude: 44,
          image: 'image',
          history: 'bla bla bla bla bla',
          preference: 'music',
          time: 2,
          money: 50,
        },
      ]
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
    }else if(propName === 'toMarkerSlide'){
      this.props.navigator.push({
        name: 'MarkerSlide',
        passProps: {
          name: name,
          image: this.state.dataForMarkers[this.state.numberOfMarker].image,
          history: this.state.dataForMarkers[this.state.numberOfMarker].history,
          preference: this.state.dataForMarkers[this.state.numberOfMarker].preference,
          time: this.state.dataForMarkers[this.state.numberOfMarker].time,
          money: this.state.dataForMarkers[this.state.numberOfMarker].money,
        },
      });
    }
  }
  renderLoadingView(){
   return (
     <View style={style.waitRenderContainer}>
       <View style={style.waitRender}>
         <ActivityIndicator />
         <Text>
           Receiving GPS information...
         </Text>
       </View>
     </View>
   );
  }
  getGpsData(){
     navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({initialCoords: position.coords});
         this.setState({gotGpsData: true});
       },
       (error) => {},
       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
     );
     navigator.geolocation.watchPosition(
       (position) => {
         var lastPosition = JSON.stringify(position);
         this.setState({initialCoords: position.coords});
         this.setState({gotGpsData: true});
         this.render();
       },
       (error) => console.log('ERRRRROR')
     );
   }
  render(){
    const renderMarkers = this.state.dataForMarkers.map((mark, idx) => {
      return(
        <MapView.Marker
          key={idx}
          coordinate={{
            longitude: mark.longitude,
            latitude: mark.latitude
          }}
          onPress={() => {this.setState({numberOfMarker: idx}); this._navigate('toMarkerSlide')}}
        />
      )
    })
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
              latitudeDelta: 10,
              longitudeDelta: 10,
            }} >
            {renderMarkers}
          </MapView>
        </View>
        <View style={style.bottom}>
          <TouchableOpacity onPress={() => this._navigate('toNewScheduleShare')}>
            <Text>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text>Taxi</Text>
          </TouchableOpacity>
        </View>
        <View style={style.finishBottom}>
          <Button
            title={'Finish!'}
            onPress={() => this._navigate('toFinish')}
          />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  waitRenderContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  waitRender: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 35,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  finishBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  }
});
