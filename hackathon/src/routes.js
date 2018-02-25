import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import EventsPage from "./components/events/ViewEvents/EventsPage.react";
import AddEventPage from './components/events/AddEvent/AddEventPage.react';
import EventConfirmationPage from './components/events/AddEvent/EventConfirmationPage.react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="viewEvents" component={EventsPage}/>
    <Route path="addEvent" component={AddEventPage}/>
    <Route path="eventConfirmation" component={EventConfirmationPage}/>
  </Route>
);
