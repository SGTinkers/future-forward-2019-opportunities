import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import JobCard from "../components/JobCard/JobCard";
import Grid from "@material-ui/core/Grid";
import { fetchJobs } from "../utils/utils";
import { Typography } from "@material-ui/core";
import { SearchStringContext } from "../components/App/App";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 1)
  },
  title: {
    flexGrow: 1
  }
}));

export default () => {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const jobs = await fetchJobs();
      setJobs(jobs);
    };
    fn();
  }, []);

  const [searchString] = useContext(SearchStringContext);

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Typography className={classes.title} variant="h5" paragraph noWrap>
              Job Opportunities {searchString}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={4}>
        <List>
          {jobs.map(job => (
            <ListItem key={job.id}>
              <JobCard
                company={job.company}
                role={job.role}
                type={job.type}
                hiringPeriod={job.hiringPeriod}
                minQualification={job.minQualification}
                link={`/${job.id}`}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
