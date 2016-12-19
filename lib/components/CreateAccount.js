import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default
class CreateAccount extends Component {
  _navigate(propName, name) {
    if(propName === 'toHistory'){
      this.props.navigator.push({
        name: 'History',
        passProps: {
          name: name,
        },
      });
    }
  }
  render(){
    return(
      <View style={style.container}>
        <View>
          <View style={style.registrationLogView}>
            <Text style={style.registrationLogText}>Registration</Text>
          </View>
          <View style={style.dataInputView}>
            <Text style={style.dataInputText}>e-mail</Text>
          </View>
          <TextInput
            placeholder={'input name of the class'}
            autoCorrect={false}
          />
          <View style={style.dataInputView}>
            <Text style={style.dataInputText}>Password</Text>
          </View>
          <TextInput
            type={'password'}
            placeholder={'input name of the class'}
            autoCorrect={false}
          />
        </View>
        <View style={style.buttons}>
          <View style={style.createAccountLogView}>
            <TouchableOpacity onPress={() => this._navigate('toHistory')}>
              <Text style={style.createAccountLogText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
          <Button
            title={'login with Facebook'}
            onPress={() => console.log('Facebook')}
          />
          <Button
            title={'login with Twitter'}
            onPress={() => console.log('Twitter')}
          />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  dataInputView: {
    alignItems: 'center',
  },
  dataInputText: {
    fontSize: 18,
  },
  createAccountLogText: {
    color: 'white',
    padding: 20,
    fontSize: 20,
  },
  createAccountLogView: {
    alignItems: 'center',
    backgroundColor: 'green'
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'orange'
  },
  registrationLogView: {
    alignItems: 'center',
  },
  registrationLogText: {
    fontSize: 20,
  },
  buttons: {
    justifyContent: 'flex-end'
  }
});
