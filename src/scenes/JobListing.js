import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import JobCard from "../components/JobCard";
import Grid from "@material-ui/core/Grid";
import Papa from "papaparse";
import { parseJobResponses } from "../utils";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1)
  }
}));

export default () => {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch("/opportunities.csv");
      const csvData = await response.text();

      const result = Papa.parse(csvData, {header: true});
      if (result.errors.length !== 0) {
        // TODO: Deal with the error
        return;
      }

      const parsedData = parseJobResponses(result.data);
      setJobs(parsedData);
      console.log(result.data);
      console.log(parsedData);
    }

    fetchJobs();
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
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
