import React from "react";
import JobCard from "./JobCard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

export default {
  title: "Job Card"
};

export const jobCard = () => (
  <JobCard
    company="Essence"
    role="Media Activation Executive"
    type="Full Time"
    hiringPeriod="Q4 2018"
    minQualification="Degree"
    link="/"
  />
);

export const jobCardsInList = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={12}>
      <List>
        <ListItem>
          {jobCard()}
        </ListItem>
        <ListItem>
          {jobCard()}
        </ListItem>
      </List>
    </Grid>
  </Grid>
);
