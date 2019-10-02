import React from "react";
import JobCard from "./JobCard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

export default {
  title: "Job Card"
};

export const jobCard = () => <JobCard />;

export const jobCardsInList = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={12}>
      <List>
        <ListItem>
          <JobCard />
        </ListItem>
        <ListItem>
          <JobCard />
        </ListItem>
      </List>
    </Grid>
  </Grid>
);
