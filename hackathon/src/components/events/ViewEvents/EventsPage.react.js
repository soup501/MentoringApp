import React from "react";
import {Grid, GridRow, Header} from "semantic-ui-react";
import EventsTable from './EventsTable.react';
import * as eventActions from '../../../actions/eventActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.actions.loadAllEvents();
  }

  render() {
    return (
      <Grid>
        <GridRow>
          <Header as='h1'>Upcoming Events</Header>
          <EventsTable events={this.props.events}/>
        </GridRow>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.eventReducer.events
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, eventActions), dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
