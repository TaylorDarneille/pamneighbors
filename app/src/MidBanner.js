import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FeaturedCard from './FeaturedCard.js';
import QuoteForm from './QuoteForm.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 10,
  },
  paper: {
    height: 300,
    background: '#e0e0e0'
  }
});

function MidBanner(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>Thing</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <QuoteForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

MidBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MidBanner);