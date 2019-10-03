import React from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import Home from "./scenes/Home";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <img src={logo} alt="Future Forward" style={{ height: 36 }} />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Future Forward Opportunities
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
      <Grid item>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Grid>
    </Grid>
  );
}

export default App;
