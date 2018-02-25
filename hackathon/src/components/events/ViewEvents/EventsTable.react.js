import React from "react";
import {Icon, Menu, Table} from "semantic-ui-react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeaders: ['Event Name', 'Description', 'Event Date', 'Location']
    };
  }

  render() {
    let component;
    if (this.props.events) {
      component = <Table celled>
        <Table.Header>
          <Table.Row>
            {this.state.tableHeaders.map(function (name) {
              return <Table.HeaderCell>{name}</Table.HeaderCell>;
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.events.map((event) => {
            return <Table.Row>
              <Table.Cell>{event.name}</Table.Cell>
              <Table.Cell>{event.description}</Table.Cell>
              <Table.Cell>{event.eventDateTime}</Table.Cell>
              <Table.Cell>{event.location}</Table.Cell>
            </Table.Row>
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='left chevron'/>
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='right chevron'/>
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>;
    } else {
      component = <div>Loading all events..</div>
    }
    return component;
  }
}

export default App;
