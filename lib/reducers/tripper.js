import * as types from '../actions/actionTypes';


const tripper = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TRIP:
      return [
        ...state,
        {
          id: action.id,
          trip: action.trip
        }
      ];
    default:
      return state;
  }
}
export default tripper;
