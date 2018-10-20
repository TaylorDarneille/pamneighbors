import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#e0e0e0',
    textAlign: 'center'
  },
  text: {
    padding: theme.spacing.unit * 3
  }
});

function Process(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.text} component="h2" variant="display1" gutterBottom>
        The [Service] Process
      </Typography>
      <Grid container spacing={40}>
        <Grid item xs={12} sm={12} md={3}>
          <Icon style={{ fontSize: 30 }}>content_cut</Icon>
          <p>Step 1:</p>
          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit pnu.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Icon style={{ fontSize: 30 }}>content_cut</Icon>
          <p>Step 2:</p>
          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit pnu.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Icon style={{ fontSize: 30 }}>content_cut</Icon>
          <p>Step 3:</p>
          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit pnu.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Icon style={{ fontSize: 30 }}>content_cut</Icon>
          <p>Step 4:</p>
          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit pnu.</p>
        </Grid>
      </Grid>
    </div>
  );
}

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Process);