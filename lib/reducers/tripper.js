import * as types from '../actions/actionTypes';

const trip = (state, action) => {
  switch (action.type) {
    case types.ADD_TRIP:
      return {
        id: action.id,
        trip: action.trip
      }
      break;
    default:
      return state;
      break;
  }
}
const tripper = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TRIP:
      return [
        ...state,
        trip(undefined, action)
      ];
    default:
      return state;
  }
}
export default tripper;
