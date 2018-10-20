import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 10,
  },
  paper: {
    overflow: 'hidden',
    position: 'relative'
  }
});

function ServiceSummary(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <img className={classes.img} src="http://www.placekitten.com/500/500" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <Typography component="h2" variant="display1" gutterBottom>
              Name of Service
            </Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euism. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Scelerisque mu pellentesque pulvinar pellentesque habitant. Iaculis at erat pellentesque adipiscing commodo elit at. Platea dictumst quisque sagittis purus sit.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euism. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Scelerisque mu pellentesque pulvinar pellentesque habitant. Iaculis at erat pellentesque adipiscing commodo elit at. Platea dictumst quisque sagittis purus sit.</p>
        </Grid>
      </Grid>
    </div>
  );
}

ServiceSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceSummary);