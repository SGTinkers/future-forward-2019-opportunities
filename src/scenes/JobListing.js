import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import JobCard from "../components/JobCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1)
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={4}>
        <List>
          <ListItem>
            <JobCard
              company="Essence"
              role="Media Activation Executive"
              type="Full Time"
              hiringPeriod="Q4 2018"
              minQualification="Degree"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
