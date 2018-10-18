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
    padding: theme.spacing.unit * 8,
  },
  text: {
    marginBottom: '4rem'
  },
  p: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  img: {
    width: "100%",
    height: "auto",
    position: "absolute",
    top: "0",
    left: "0",
    padding: "1.5rem"
  },
  imgFrame: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    height: "12rem",
  }
});

function Testimonial(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{background: props.backgroundColor}}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <p><em>"I was sad to see the hair loss at my hairline in my fifties. Pam has created a natural and beautiful hairline for me through her scalp pigmentation process."</em></p>
          <p className={classes.p}><em>- Suzanne E.</em></p>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.imgFrame}>
          <img className={classes.img} src="http://www.placekitten.com/250/250" />
          <Typography variant="caption" align="center" gutterBottom>
            Before
          </Typography> 
        </Grid>
        <Grid item xs={12} sm={6} className={classes.imgFrame}>
          <img className={classes.img} src="http://www.placekitten.com/250/250" /> 
          <Typography variant="caption" align="center" gutterBottom>
            After
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Testimonial.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Testimonial);