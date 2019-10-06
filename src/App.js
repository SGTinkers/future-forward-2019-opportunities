import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import JobListing from "./scenes/JobListing";
import JobDetailScene from "./scenes/JobDetailScene";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { FFAppBar } from "./components/FFAppBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#deafad',
      contrastText: '#fdfbf1',
    },
    secondary: {
      main: '#374d5d',
    },
  }
});

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={classes.root}>
            <FFAppBar />
          </div>
        </Grid>
        <Grid item xs={12}>
          <BrowserRouter>
            <Route path="/:id" component={JobDetailScene} />
            <Route exact path="/" component={JobListing} />
          </BrowserRouter>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
