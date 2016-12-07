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

export default
class GenSchedule extends Component {
  constructor(){
    super();
    this.state = {countryChoose: false, cityChoose: false, foodChoose: false, bufCity: '', bufCountry: '', bufPref: '',};
  }
  _navigate(propName, name) {
    if(propName === 'toNewSchedule'){
      this.props.navigator.push({
        name: 'NewSchedule',
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
          <TouchableOpacity
            onPress={() => this.props.navigator.pop()}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <Picker
          mode='dropdown'
          selectedValue={this.state.bufCountry}
          onValueChange={(data) => this.setState({ bufCountry: data, countryChoose: true})}>
          <Picker.Item label='input your country' value='' />
          <Picker.Item label="Armenia" value="Armenia" />
          <Picker.Item label="USA" value="USA" />
        </Picker>
        <Picker
          mode='dropdown'
          selectedValue={this.state.bufCity}
          enabled={this.state.countryChoose}
          onValueChange={(data) => this.setState({ bufCity: data, cityChoose: true})}>
          <Picker.Item label='input your city' value='' />
          <Picker.Item label="Yerevan" value="Yerevan" />
          <Picker.Item label="Gyumri" value="Gyumri" />
        </Picker>
        <Picker
          mode='dropdown'
          selectedValue={this.state.bufCity}
          enabled={this.state.cityChoose}
          onValueChange={(data) => this.setState({ bufPref: data})}>
          <Picker.Item label='input your preferences' value='' />
          <Picker.Item label="Extreem" value="Extreem" />
          <Picker.Item label="Music" value="Music" />
          <Picker.Item label="Theatre" value="Theatre" />
          <Picker.Item label="Entertainment" value="Entertainment" />
          <Picker.Item label="Cultural" value="Cultural" />
          <Picker.Item label="Gastotour" value="Gastotour" />
        </Picker>
        <TextInput
          enabled={this.state.cityChoose}
          placeholder={'input time that you want to spend with us'}
          autoCorrect={false}
        />
        <TextInput
          enabled={this.state.cityChoose}
          placeholder={'input money that you want to pay for the trip'}
          autoCorrect={false}
        />
        <TextInput
          enabled={this.state.cityChoose}
          placeholder={'input money that you want to pay for the trip'}
          autoCorrect={false}
        />
        <Picker
          mode='dropdown'
          selectedValue={this.state.bufCity}
          enabled={this.state.cityChoose}
          onValueChange={(data) => this.setState({ bufCity: data, foodChoose: true})}>
          <Picker.Item label='Do you want food to be included?' value="" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="" />
        </Picker>
          <View>
            <Picker
              mode='dropdown'
              selectedValue={this.state.bufCity}
              enabled={this.state.foodChoose}
              onValueChange={(data) => this.setState({ bufCity: data})}>
              <Picker.Item label='What is your favourite cuisine?' value='' />
              <Picker.Item label="Italian" value="Italian" />
              <Picker.Item label="Franch" value="Franch" />
              <Picker.Item label="Spanish" value="Spanish" />
              <Picker.Item label="Mexican" value="Mexican" />
              <Picker.Item label="Armenian" value="Armenian" />
              <Picker.Item label="Georgian" value="Georgian" />
              <Picker.Item label="American" value="American" />
              <Picker.Item label="fast-food" value="fast-food" />
            </Picker>
            <TextInput
              enabled={this.state.cityChoose}
              placeholder={'input money that you want to spend on food'}
              autoCorrect={false}
            />
          </View>
        <Button
          title={'Generate'}
          onPress={() => this._navigate('toNewSchedule')}
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
});
