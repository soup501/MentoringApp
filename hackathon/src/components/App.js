import React, {PropTypes} from "react";
import {Container, Icon, Menu, Segment, Sidebar} from "semantic-ui-react";
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as eventActions from '../actions/eventActions';
import MainMenu from './common/Menu.react';
import { browserHistory } from 'react-router';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    browserHistory.push(`/`);
  }

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment} attached="bottom">
          <Sidebar width='thin' as={Menu} animation="uncover" visible={true} icon="labeled" vertical
                   inline inverted>
            <Menu.Item onClick={this.handleItemClick}><Icon name="home"/>Home</Menu.Item>
            <Menu.Item as={Link} to="viewEvents"><Icon name="block layout"/>Event Schedule</Menu.Item>
            <Menu.Item onClick={this.handleItemClick}><Icon name="smile"/>Friends</Menu.Item>
            <Menu.Item onClick={this.handleItemClick}><Icon name="calendar"/>History</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={false} className="pusherHeight">
            <MainMenu/>
            <Container>
              {this.props.events}
              {this.props.children}
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
parentFunc = () => {
  const promise = promise.newPromise();
  let waitingForResponse = false;
  let iterator = 0;
  const data = [];
  while (true) {
    if (!waitingForResponse) {
      waitingForResponse = true;
      makeServiceCall(iterator).then((results) => {
        data.append(results);
        if (results.notDone) {
          iterator++;
          waitingForResponse = false;
        } else {
          promise.resolve(data);
        }
      });
    }
  }
  return promise.promise;
};
parentFunc().then((data) => {
  // all service calls have been made
});


