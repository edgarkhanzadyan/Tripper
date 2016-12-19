import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  ToastAndroid
} from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

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
          longitude: 44.515693,
          latitude: 40.191114,
          image: 'image',
          history: 'Cascade',
          preference: 'monument',
          time: 0.5,
          money: 0,
        },
        {
          longitude: 44.515161,
          latitude: 40.185782,
          image: 'image',
          history: 'Opera',
          preference: 'Theater',
          time: 0.5,
          money: 0,
        },
        {
          longitude: 44.519035,
          latitude: 40.184280,
          image: 'image',
          history: 'Holy Mother of God Kathoghike Church',
          preference: 'monument',
          time: 0.5,
          money: 0,
        },
        {
          longitude: 44.517252,
          latitude: 40.181790,
          image: 'image',
          history: 'Moscow Cinema',
          preference: 'entertainment',
          time: 1.5,
          money: 5,
        },
        {
          longitude: 44.514360,
          latitude: 40.180785,
          image: 'image',
          history: 'cafe',
          preference: 'music',
          time: 1,
          money: 5,
        },
        {
          longitude: 44.513741,
          latitude: 40.178406,
          image: 'image',
          history: 'Singing fontains',
          preference: 'music',
          time: 1,
          money: 0,
        },
      ],
      dataForPolyline: [
        {
          longitude: 44.515693,
          latitude: 40.191114,
        },
        {
          longitude: 44.515161,
          latitude: 40.185782,
        },
        {
          longitude: 44.519035,
          latitude: 40.184280,
        },
        {
          longitude: 44.517252,
          latitude: 40.181790,
        },
        {
          longitude: 44.514360,
          latitude: 40.180785,
        },
        {
          longitude: 44.513741,
          latitude: 40.178406,
        },
      ]
    }
  }
  _navigate(propName, id) {
    if(propName === 'toNewScheduleShare'){
      this.props.navigator.push({
        name: 'NewScheduleShare',
        passProps: {
        },
      });
    }else if(propName === 'toFinish'){
      this.props.navigator.push({
        name: 'Finish',
        passProps: {
        },
      });
    }else if(propName === 'toMarkerSlide'){
      this.props.navigator.push({
        name: 'MarkerSlide',
        passProps: {
          image: this.state.dataForMarkers[id].image,
          history: this.state.dataForMarkers[id].history,
          preference: this.state.dataForMarkers[id].preference,
          time: this.state.dataForMarkers[id].time,
          money: this.state.dataForMarkers[id].money,
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
      switch (mark.history) {
        case 'cafe':
          return(
            <MapView.Marker
              key={idx}
              pinColor="#A4AAE4"
              coordinate={{
                longitude: mark.longitude,
                latitude: mark.latitude
              }}
              onPress={() => this._navigate('toMarkerSlide', idx)}
            />
          );
          break;
        default:
          return(
            <MapView.Marker
              key={idx}
              coordinate={{
                longitude: mark.longitude,
                latitude: mark.latitude
              }}
              onPress={() => this._navigate('toMarkerSlide', idx)}
            />
          )
          break;
      }
    })
    if (!this.state.gotGpsData) {
      this.getGpsData();
      return this.renderLoadingView();
    }
    ToastAndroid.showWithGravity(
      'This is your generated trip!',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    )
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
              latitudeDelta: 0.025,
              longitudeDelta: 0.025 * ASPECT_RATIO,
            }} >
            {renderMarkers}
            <MapView.Polyline
              coordinates={this.state.dataForPolyline}
              strokeColor="#A4AAE4"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1.5}
            />
          </MapView>
        </View>
        <View style={style.bottom}>
          <TouchableOpacity onPress={() => this._navigate('toNewScheduleShare')}>
            <Text>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {console.log(width)}}>
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
