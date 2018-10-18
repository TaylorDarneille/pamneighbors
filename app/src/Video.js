import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    height: '350px',
    overflow: 'hidden',
    position: "relative",
  },
  vid: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateY(-50%) translateX(-50%)"
  },

});



function Video(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <iframe className={classes.vid} type="text/html" width="200%" height="200%"
      src="https://www.youtube.com/embed/jMFuWTRtEKo?autoplay=1&modestbranding=1&mute=1&controls=0"
      frameborder="0"/> 
    </div>
  );
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Video);