import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./scenes/Home";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FFAppBar } from "./components/FFAppBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <div className={classes.root}>
          <FFAppBar />
        </div>
      </Grid>
      <Grid item xs={12}>
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
      </Grid>
    </Grid>
  );
}

export default App;
