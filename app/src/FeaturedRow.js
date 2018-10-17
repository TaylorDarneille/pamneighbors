import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FeaturedCard from './FeaturedCard.js';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 10,
  },
  text: {
    marginBottom: '4rem'
  }
});

function FeaturedRow(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{background: props.backgroundColor}}>
      <Typography className={classes.text} component="h2" variant="display2" align="center" gutterBottom>
        {props.header}
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard photo="here is a photo" />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard />
        </Grid>
      </Grid>
    </div>
  );
}

FeaturedRow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeaturedRow);