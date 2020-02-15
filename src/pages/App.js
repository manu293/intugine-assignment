// imports
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

// local imports
import { Header, DummyCards, TimeLine, TableView } from "../components";
import "./App.css";
import { getShipmentData } from "../actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const App = props => {
  useEffect(() => {
    props.getShipmentData();
  }, [props]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <DummyCards />
      <Grid container>
        <Grid item xs={6} sm={4}>
          <TimeLine />
        </Grid>
        <Grid item xs={6} sm={8}>
          <TableView />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(null, { getShipmentData })(App);
