// imports
import React from "react";

// local imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as MenuIcon } from "../../img/logo.svg";
import { ReactComponent as ProfileIcon } from "../../img/profile.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#ffffff"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#000000"
  },
  navbarButtons: {
    color: "#000000",
    padding: "0 2rem",
    fontWeight: "bold"
  },
  profileButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#A9A9A9"
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Intugine
          </Typography>
          <Button className={classes.navbarButtons}>Home</Button>
          <Button className={classes.navbarButtons}>Brands</Button>
          <Button className={classes.navbarButtons}>Transporters</Button>
          <IconButton
            edge="start"
            className={classes.profileButton}
            aria-label="menu"
          >
            <ProfileIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Header };
