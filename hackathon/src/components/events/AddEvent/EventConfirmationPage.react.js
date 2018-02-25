import React from "react";
import {Grid, GridColumn, GridRow} from "semantic-ui-react";
import {Link} from 'react-router';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: 'Fake Event Name',
      eventDate: '8/29/17',
      eventTime: '12:30 PM'
    };
  }

  render() {
    return (
      <div>
        <Grid>
          <GridRow>
            <GridColumn width="16">
              <div className="jumbotron">
                <h1>Your event has been created!</h1>
                <p>Your event has been created! {this.state.eventName}, {this.state.eventDate}, {this.state.eventTime}</p>
                <div>
                  <Link to="viewEvents" className="btn btn-primary btn-lg" style={{marginRight: '5px'}}>View All Events</Link>
                  <Link to="addEvent" className="btn btn-primary btn-lg">Add An Another Event</Link>
                </div>
              </div>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    );
  }
}

export default App;
