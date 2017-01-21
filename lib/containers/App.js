import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';
import TripperApp from './TripperApp';

const reducer = combineReducers(reducers);
export const reduxStore = createStore(reducer);

reduxStore.subscribe(()=>console.log(reduxStore.getState()));

export default class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <TripperApp />
      </Provider>
    );
  }
}
