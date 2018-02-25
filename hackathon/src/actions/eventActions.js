import * as types from "./actionTypes";

export function loadAllEvents() {
  return {
    type: types.LOAD_ALL_EVENTS
  };
};

export function registerEvent(eventToRegister) {
  return {
    type: types.REGISTER_EVENT,
    eventToRegister: eventToRegister
  };
}

export function loadedEvents(state, props) {
  return Object.assign({}, state, {
    events: props.events
  });
};

