import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { addTrip } from "../actions/tripperActions";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  Button,
  StyleSheet
} from 'react-native';
import { store } from '../containers/App';
export default
class GenSchedule extends Component {
  constructor(){
    super();
    this.state = {
      countryChoose: false,
      cityChoose: false,
      foodChoose: false,
      bufCity: '',
      bufCountry: '',
      bufPref: '',
      bufFoodChoice: '',
      bufTimeSpend: '',
      bufMoneyTrip: '',
      bufMoneyFood: '',
      bufCuisine: '',
      pickerCountry: ['Armenia', 'the USA'],
      trip: {}
    };
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
  generatorHandler() {
      const trip = {
        country: this.state.bufCountry,
        city: this.state.bufCity,
        pref: this.state.bufPref,
        timeSpend: this.state.bufTimeSpend,
        moneyTrip: this.state.bufMoneyTrip,
        moneyFood: this.state.bufMoneyFood,
        cuisine: this.state.bufCuisine
      };
      store.dispatch(addTrip(trip));
      this.setState({
        countryChoose: false,
        cityChoose: false,
        foodChoose: false,
        bufCity: '',
        bufCountry: '',
        bufPref: '',
        bufFoodChoice: '',
        bufTimeSpend: '',
        bufMoneyTrip: '',
        bufMoneyFood: '',
      })
  }

  render(){
    const renderPickerCountry = this.state.pickerCountry.map((pick, idx) => {
      return(
        <Picker.Item label={pick} value={pick} key={idx}/>
      );
    })
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
          onValueChange={(data) => this.setState({ bufCountry: data, countryChoose: true })}>
          <Picker.Item label='input your country' value='' />
          <Picker.Item label='Armenia' value='Armenia' />
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
          selectedValue={this.state.bufPref}
          enabled={this.state.cityChoose}
          onValueChange={(data) => this.setState({ bufPref: data })}>
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
          onChangeText={(data) => this.setState({ bufTimeSpend: data })}
          autoCorrect={false}
        />
        <TextInput
          enabled={this.state.cityChoose}
          placeholder={'input money that you want to pay for the trip'}
          onChangeText={(data) => this.setState({ bufMoneyTrip: data })}
          autoCorrect={false}
        />
        <Picker
          mode='dropdown'
          selectedValue={this.state.bufFoodChoice}
          enabled={this.state.cityChoose}
          onValueChange={(data) => this.setState({ bufFoodChoice: data, foodChoose: (data === "yes" ? true : false) })}>
          <Picker.Item label='Do you want food to be included?' value="" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
          <View>
            <Picker
              mode='dropdown'
              selectedValue={this.state.bufCuisine}
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
              onChangeText={(data) => this.setState({ bufMoneyFood: data })}
              autoCorrect={false}
            />
          </View>
        <Button
          title={'Generate'}
          onPress={() => this.generatorHandler()}
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
