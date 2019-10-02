import { Card } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    maxWidth: 414
  }
});

export default () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          Media Activation Executive
        </Typography>
        <Typography paragraph={true} variant="h6" color="textSecondary">
          Essence
        </Typography>
        <Typography color="textSecondary">Full Time, Hiring Q4 2018</Typography>
        <Typography variant="body2" component="p">
          Minimum Qualifications: Degree
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
