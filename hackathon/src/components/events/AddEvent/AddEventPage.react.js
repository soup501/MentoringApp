import React from "react";
import {browserHistory} from "react-router";
import {Button, Form, Grid, GridColumn, GridRow} from "semantic-ui-react";
import * as eventActions from "../../../actions/eventActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class AddEventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateEventDateTime = this.updateEventDateTime.bind(this);
    this.registerEvent = this.registerEvent.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }


  updateName(event) {
    this.setState({name: event.target.value});
  }

  updateDescription(event) {
    this.setState({description: event.target.value});
  }

  updateEventDateTime(event) {
    this.setState({eventDateTime: event.target.value + '.00.000'});
  }

  updateLocation(event) {
    this.setState({location: event.target.value});
  }


  registerEvent() {
    // register the event on the server, get back the id and route to the confirmation
    // register event here
    this.props.actions.registerEvent({
      name: encodeURIComponent(this.state.name),
      description: encodeURIComponent(this.state.description),
      location: encodeURIComponent(this.state.location),
      eventDateTime: encodeURIComponent(this.state.eventDateTime)
    });
    const eventId = 1;
    browserHistory.push(`/eventConfirmation?eid=${eventId}`);
  }


  render() {
    return (
      <Grid>
        <GridRow>
          <GridColumn width="10">
            <Form>
              <Form.Field required>
                <label>Event Name</label>
                <input placeholder='Event Name' formField="eventName" onChange={this.updateName}/>
              </Form.Field>
              <Form.Field required>
                <label>Description</label>
                <input placeholder='Description' formField="evenDescription" onChange={this.updateDescription}/>
              </Form.Field>
              <Form.Field required>
                <label>Date</label>
                <input placeholder='Date & Time(YYYY-MM-DD HH.mm' formField="eventDateTime"
                       onChange={this.updateEventDateTime}/>
              </Form.Field>
              <Form.Field required>
                <label>Location</label>
                <input placeholder='Location' formField="eventLocation" onChange={this.updateLocation}/>
              </Form.Field>
              <Button type='button' onClick={this.registerEvent}>Register Event</Button>
            </Form>
          </GridColumn>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage);
