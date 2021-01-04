import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
  /*   constructor(props) {
    super(props)
  } */

  render() {
    return (
      <>
        <TableRow>
          <TableCell>{this.props.id}</TableCell>
          <TableCell>{this.props.image}</TableCell>
          <TableCell>{this.props.name}</TableCell>
          <TableCell>{this.props.birthday}</TableCell>
          <TableCell>{this.props.job}</TableCell>
        </TableRow>
      </>
    );
  }
}

export default Customer;
