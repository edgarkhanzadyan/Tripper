import * as types from './actionTypes';
let nextTripId = 0;

export const addTrip = (trip) => ({
  type: types.ADD_TRIP,
  id: nextTripId++,
  trip
})
