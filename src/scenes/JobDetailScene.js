import React, { useEffect, useState } from "react";
import { fetchJob } from "../utils/utils";
import JobDetail from "../components/JobDetail/JobDetail";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 2)
    }
  },
  title: {
    flexGrow: 1
  }
}));

export default ({ match }) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState(undefined);

  useEffect(() => {
    const fn = async () => {
      const job = await fetchJob(match.params.id);
      if (job) {
        setJob(job);
      }
      setIsLoading(false);
    };
    fn();
  }, [match.params.id]);

  let jobView = undefined;
  if (job) {
    jobView = (
      <JobDetail
        role={job.role}
        company={job.company}
        type={job.type}
        hiringPeriod={job.hiringPeriod}
        minQualification={job.minQualification}
        description={job.jobDescription}
      />
    );
  } else if (isLoading) {
    jobView = <div>Loading...</div>;
  } else {
    jobView = <div>Not found.</div>;
  }

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={4}>
        {jobView}
      </Grid>
    </Grid>
  );
};
