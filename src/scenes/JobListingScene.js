import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import JobCard from "../components/JobCard";
import Grid from "@material-ui/core/Grid";
import { fetchJobs } from "../utils";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1)
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

  return (
    <Grid container justify="center" className={classes.root}>
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
