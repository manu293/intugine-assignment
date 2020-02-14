// imports
import React from "react";

// local imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  firstRoot: {
    width: 170,
    margin: "3rem 0",
    backgroundColor: "#2929ff",
    marginRight: "2rem"
  },
  root: {
    width: 170,
    margin: "3rem 0",
    backgroundColor: "#b2b2ff",
    marginRight: "2rem",
    "&:last-child": {
      marginRight: 0
    }
  },
  firstTitle: {
    fontSize: 19,
    color: "#fff"
  },
  title: {
    fontSize: 19,
    color: "#2929ff"
  },
  firstMainText: {
    color: "#fff",
    fontSize: 36,
    transform: " scale(2, 2)",
    textAlign: "center"
  },
  mainText: {
    color: "#2929ff",
    fontSize: 36,
    transform: " scale(2, 2)",
    textAlign: "center"
  }
});

function DummyCards() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={classes.firstRoot}>
        <CardContent>
          <Typography className={classes.firstTitle} gutterBottom>
            DEL
          </Typography>
          <Typography className={classes.firstMainText}>916</Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            INT
          </Typography>
          <Typography className={classes.mainText}>232</Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            OOD
          </Typography>
          <Typography className={classes.mainText}>342</Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            DEX
          </Typography>
          <Typography className={classes.mainText}>916</Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            NFI
          </Typography>
          <Typography className={classes.mainText}>916</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export { DummyCards };
