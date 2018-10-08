import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
  },
});

function Video(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  );
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Video);