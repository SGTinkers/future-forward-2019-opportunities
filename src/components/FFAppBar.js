import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/ff-logo.png";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";
import { CurrentSearchString } from "./App/App";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginTop: theme.spacing(-1)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

export function FFAppBar() {
  const classes = useStyles();

  let [dispatch] = useContext(CurrentSearchString);

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

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={event =>
              dispatch({ type: "UPDATE", payload: event.target.value })
            }
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
