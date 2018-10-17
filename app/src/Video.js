import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    background: 'black',
    height: '40vh',
    overflow: 'hidden'
  },
  vid: {
    width: '75%',
    // height: 'inherit',
    margin: '0 auto',
  }
});

function Video(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ReactPlayer className={classes.vid} url='https://www.youtube.com/watch?v=jMFuWTRtEKo' playing />
    </div>
  );
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Video);