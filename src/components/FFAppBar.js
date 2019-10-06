import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/ff-logo.png";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
}));

export function FFAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={"/"}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <img src={logo} alt="Future Forward" style={{ height: 36 }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
