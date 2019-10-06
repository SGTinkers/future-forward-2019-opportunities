import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {}
});

const JobDetail = props => {
  const {
    role,
    company,
    type,
    hiringPeriod,
    minQualification,
    description
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="textPrimary">
        {role}
      </Typography>
      <Typography paragraph={true} variant="h6" color="textSecondary">
        {company}
      </Typography>
      <Typography color="textSecondary">
        {type}, Hiring {hiringPeriod}
      </Typography>
      <Typography paragraph={true} variant="body2" component="p">
        Minimum Qualifications: {minQualification}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Description
      </Typography>
      {description.split("\n").map((item, index) => (
        <Typography key={index} variant="body1" paragraph={true} component="p">
          {item}
        </Typography>
      ))}
    </div>
  );
};

export default JobDetail;

JobDetail.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hiringPeriod: PropTypes.string.isRequired,
  minQualification: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
