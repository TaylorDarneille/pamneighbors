import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    // flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class AboutMenu extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState(state => ({ open: true }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onMouseOver={this.handleOpen}
          >
            About
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>About Trillium Ink</MenuItem>
                      <MenuItem onClick={this.handleClose}>Our Team</MenuItem>
                      <MenuItem onClick={this.handleClose}>Scalp Micropigmentation</MenuItem>
                      <MenuItem onClick={this.handleClose}>Permanent Makeup</MenuItem>
                      <MenuItem onClick={this.handleClose}>Pricing</MenuItem>
                      <MenuItem onClick={this.handleClose}>FAQs</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

AboutMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutMenu);