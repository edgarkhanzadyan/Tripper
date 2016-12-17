/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import CreateAccount from './lib/CreateAccount';
import History from './lib/History';
import GenSchedule from './lib/GenSchedule';
import NewSchedule from './lib/NewSchedule';
import NewScheduleShare from './lib/NewScheduleShare';
import Finish from './lib/Finish';
import HistoryTrip from './lib/HistoryTrip';
import MarkerSlide from './lib/MarkerSlide';

export default class Tripper extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'CreateAccount':
        return <CreateAccount navigator={navigator} {...route.passProps} />;
        break;
      case 'History':
        console.log(MarkerSlide);
        return <History navigator={navigator} {...route.passProps} />;
        break;
      case 'GenSchedule':
        return <GenSchedule navigator={navigator} {...route.passProps} />;
        break;
      case 'NewSchedule':
        return <NewSchedule navigator={navigator} {...route.passProps} />;
        break;
      case 'NewScheduleShare':
        return <NewScheduleShare navigator={navigator} {...route.passProps} />;
        break;
      case 'Finish':
        return <Finish navigator={navigator} {...route.passProps} />;
        break;
      case 'MarkerSlide':
        return <MarkerSlide navigator={navigator} image={route.image} history={route.history} preference={route.preference} time={route.time} money={route.money} {...route.passProps} />;
        break;
      case '0':
        return <HistoryTrip navigator={navigator} {...route.passProps} />;
        break;
      case '1':
        return <HistoryTrip navigator={navigator} {...route.passProps} />;
        break;
    }
  }
  configureScene(route, routeStack){
    switch (route.name) {
      case 'NewScheduleShare':
        return Navigator.SceneConfigs.FloatFromBottom;
        break;
      case '0':
        return Navigator.SceneConfigs.FloatFromBottom;
        break;
      case '1':
        return Navigator.SceneConfigs.FloatFromBottom;
        break;
      case 'MarkerSlide':
        return Navigator.SceneConfigs.FloatFromBottom;
        break;
      default:
        return Navigator.SceneConfigs.PushFromRight;
        break;
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'CreateAccount' }}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Tripper', () => Tripper);
