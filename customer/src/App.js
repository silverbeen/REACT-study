import React from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHaad from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "강은빈",
    birthday: "020209",
    job: "학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "silverbeen",
    birthday: "020209",
    job: "학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "goldbeen",
    birthday: "020209",
    job: "학생",
  },
];

class App extends React.Component {
  

  render() {
    const {classes} = this.props;

    return (
      <>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHaad>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHaad>
            <TableBody>
              {customers.map((c) => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    image={c.image}
                    birthday={c.birthday}
                    job={c.job}
                  />
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(App);
