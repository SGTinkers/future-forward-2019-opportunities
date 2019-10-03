import PropTypes from "prop-types";
import { Card } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    width: '100vw'
  }
});

const JobCard = props => {
  const { role, company, type, hiringPeriod, minQualification } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {role}
        </Typography>
        <Typography paragraph={true} variant="h6" color="textSecondary">
          {company}
        </Typography>
        <Typography color="textSecondary">{type}, Hiring {hiringPeriod}</Typography>
        <Typography variant="body2" component="p">
          Minimum Qualifications: {minQualification}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;

JobCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hiringPeriod: PropTypes.string.isRequired,
  minQualification: PropTypes.string.isRequired
};
