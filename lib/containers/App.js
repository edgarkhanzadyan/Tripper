import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';
import TripperApp from './TripperApp';

const reducer = combineReducers(reducers);
export const store = createStore(reducer);

store.subscribe(()=>console.log(store.getState()));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TripperApp />
      </Provider>
    );
  }
}
