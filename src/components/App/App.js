import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import JobListingScene from "../../scenes/JobListingScene";
import JobDetailScene from "../../scenes/JobDetailScene";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { FFAppBar } from "../FFAppBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#deafad",
      contrastText: "#fdfbf1"
    },
    secondary: {
      main: "#374d5d"
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <div style={{ background: "#fdfbf1", minHeight: '100vh' }}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Grid container justify="center" className={classes.root}>
            <Grid item xs={12}>
              <FFAppBar />
            </Grid>
            <Grid item xs={12}>
              <Route path="/:id" component={JobDetailScene} />
              <Route exact path="/" component={JobListingScene} />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
