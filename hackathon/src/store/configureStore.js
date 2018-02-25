import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/index";
import reduxImmutable from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import sagas from '../sagas/sagas';
const sagaMiddleWare = createSagaMiddleware();

export default function configureStore(initialState) {
  const storeConfiguration = createStore(rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutable(), sagaMiddleWare));
  sagaMiddleWare.run(sagas);
  return storeConfiguration;
};

