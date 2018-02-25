import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Actions from '../actions/actionTypes';
import api from '../api/API';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getAllEvents() {
  try {
    const events = yield call(api.getAllEvents);
    yield put({type: Actions.LOADED_ALL_EVENTS, events: events});
  } catch (e) {
    yield put({type: "LOADED_EVENTS_FAILED", message: e.message});
  }
}

function* registerEvent(action) {
  try {
    const event = yield call(api.registerEvent, action.eventToRegister);
    yield put({type: Actions.EVENT_REGISTERED, events: event});
  } catch (e) {
    yield put({type: "EVENT REGISTRATION FAILED", message: e.message});
  }
}
/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
function* mySaga() {
  yield takeLatest(Actions.LOAD_ALL_EVENTS, getAllEvents);
  yield takeLatest(Actions.REGISTER_EVENT, registerEvent);
}

export default mySaga;
