'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Tripper from '../components/Tripper';
import * as tripperActions from '../actions/tripperActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class TripperApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions } = this.props;
    return (
      <Tripper
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(tripperActions, dispatch)
  })
)(TripperApp);
