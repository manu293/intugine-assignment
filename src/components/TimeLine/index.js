// imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import moment from "moment";
import _ from "lodash";

// local imports
import { ReactComponent as DestinationIcon } from "../../img/destination.svg";
import { ReactComponent as WareHouseIcon } from "../../img/warehouse.svg";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    margin: "0 3rem"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: "360px",
    backgroundColor: "#4D4E4F"
  },
  menuButton: {
    background: "#4D4E4F",
    marginLeft: "20px",
    marginTop: "20px",
    padding: "10px 10px",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    "&:last-child": {
      marginTop: 0,
      marginBottom: "20px"
    }
  },
  h2_text: {
    paddingTop: "180px",
    textAlign: "center",
    color: "#fff"
  },
  verticalLine: {
    borderLeft: "4px dashed #2929ff ",
    height: "50px",
    marginLeft: "38px"
  },
  dot: {
    height: "25px",
    width: "25px",
    backgroundColor: "#b2b2ff",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "27px",
    position: "relative"
  },
  timelineMain: {
    overflow: "auto"
  },
  hrLine: {
    borderTop: "3px solid #b2b2ff",
    width: "30px",
    marginTop: "13px",
    marginLeft: "30px"
  },
  textDisp: {
    display: "inline-block",
    width: "69%",
    marginLeft: "39px",
    border: "1px solid #d3d3d3",
    textAlign: "center",
    fontSize: "12px",
    padding: "10px 0"
  }
}));

const renderTimeLine = (tableData, classes) => {
  const { scan } = tableData[0];
  const searchRes = _.find(scan, { status_detail: "DELIVERED" });
  console.log("The search res i s: ", scan[0].status_detail);
  if (searchRes !== undefined && scan[0].status_detail !== "DELIVERED") {
    let firstEle = scan[0];
    scan.splice(0, 1, searchRes);
    scan.splice(1, 1, firstEle);
  }
  return (
    <div className={classes.timelineMain}>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <DestinationIcon />
      </IconButton>
      <div className={classes.verticalLine}></div>
      {scan.map(ele => {
        return (
          <div key={ele.time}>
            <span className={classes.dot}>
              <hr className={classes.hrLine} />
            </span>
            <div
              className={classes.textDisp}
              style={
                ele.status_detail === "DELIVERED"
                  ? { backgroundColor: "#d3d3d3", color: "green" }
                  : null
              }
            >
              <Grid container>
                <Grid item xs={4}>
                  <span>{ele.status_detail}</span>
                </Grid>
                <Grid item xs={4}>
                  <span>{moment(ele.time).format("DD/MM/YYYY")}</span>
                </Grid>
                <Grid item xs={4}>
                  <span>
                    <span>{moment(ele.time).format("hh:mm")}</span>
                  </span>
                </Grid>
              </Grid>
            </div>
            <div className={classes.verticalLine} />
          </div>
        );
      })}
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <WareHouseIcon />
      </IconButton>
    </div>
  );
};

const TimeLine = props => {
  const { tableview_data } = props.timeLineData;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {tableview_data === null ? (
        <>
          <CardActionArea>
            <div className={classes.media}>
              <h2 className={classes.h2_text}> Please select an AWB Number</h2>
            </div>
          </CardActionArea>
        </>
      ) : (
        renderTimeLine(tableview_data, classes)
      )}
    </Card>
  );
};

const mapStateToProps = state => ({
  timeLineData: state.shipment
});

const cTimeLine = connect(mapStateToProps)(TimeLine);

export { cTimeLine as TimeLine };
