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

export default class Tripper extends Component {

  renderScene(route, navigator) {
    if(route.name === 'CreateAccount') {
      return <CreateAccount navigator={navigator} {...route.passProps} />;
    }else if(route.name === 'History') {
      return <History navigator={navigator} {...route.passProps} />;
    }else if(route.name === 'GenSchedule') {
      return <GenSchedule navigator={navigator} {...route.passProps} />;
    }else if(route.name === 'NewSchedule'){
      return <NewSchedule navigator={navigator} {...route.passProps} />;
    }else if(route.name === 'NewScheduleShare'){
      return <NewScheduleShare navigator={navigator} {...route.passProps} />;
    }else if(route.name === 'Finish'){
      return <Finish navigator={navigator} {...route.passProps} />;
    }else if(route.name === '0'){
      return <HistoryTrip navigator={navigator} {...route.passProps} />;
    }else if(route.name === '1'){
      return <HistoryTrip navigator={navigator} {...route.passProps} />;
    }
  }
  configureScene(route, routeStack){
    if(route.name === 'NewScheduleShare') {
      return Navigator.SceneConfigs.FloatFromBottom
    }else if(route.name === '0') {
      return Navigator.SceneConfigs.FloatFromBottom
    }else if(route.name === '1') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
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
