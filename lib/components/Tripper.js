import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import CreateAccount from './CreateAccount';
import History from './History';
import GenSchedule from './GenSchedule';
import NewSchedule from './NewSchedule';
import NewScheduleShare from './NewScheduleShare';
import Finish from './Finish';
import HistoryTrip from './HistoryTrip';
import MarkerSlide from './MarkerSlide';

export default class Tripper extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'CreateAccount':
        return <CreateAccount navigator={navigator} {...route.passProps} />;
        break;
      case 'History':
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
