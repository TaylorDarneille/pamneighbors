import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 10,
    // marginLeft: theme.spacing.unit * 1,
    // marginRight: theme.spacing.unit * 1,
    // marginTop: theme.spacing.unit * 10
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '380px',
  },
});

function FeaturedRow(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>xs=12 sm=4</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>xs=12 sm=4</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>xs=12 sm=4</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FeaturedRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturedRow);