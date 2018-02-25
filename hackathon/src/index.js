/**
 * Created by Jorge on 5/18/17.
 */

import "babel-polyfill";
import "semantic-ui-css/semantic.min";
import 'jquery-ui';
import React from "react";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {browserHistory, Router} from "react-router";
import routes from "./routes";
import configureStore from "./store/configureStore";

import "./styles/index.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/></Provider>,
  document.getElementById('app')
);
