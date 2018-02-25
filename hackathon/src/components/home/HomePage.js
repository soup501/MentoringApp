import React from "react";
import {Link} from "react-router";
import {Grid, GridColumn, GridRow} from "semantic-ui-react";

class HomePage extends React.Component {
  render() {
    return (
      <Grid>
        <GridRow>
          <GridColumn width="16">
            <div className="jumbotron">
              <h1>Events</h1>
              <p>There are 30 events upcoming.</p>
              <div>
                <Link to="viewEvents" className="btn btn-primary btn-lg" style={{marginRight: '5px'}}>View All Events</Link>
                <Link to="addEvent" className="btn btn-primary btn-lg">Add An Event</Link>
              </div>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}
export default HomePage;
