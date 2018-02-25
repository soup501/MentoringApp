import React from 'react';
import {Icon, Label, Menu, Table} from "semantic-ui-react";
class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table.HeaderCell>{this.props.header}</Table.HeaderCell>
    );
  }
}
export default TableHeader;
