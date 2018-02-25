import * as types from "../actions/actionTypes";

export default function eventReducer(state = [], action) {
  switch (action.type) {
    case types.LOADED_ALL_EVENTS:
      return Object.assign({}, state, { events: action.events});
    default:
      return state;
  }
}
