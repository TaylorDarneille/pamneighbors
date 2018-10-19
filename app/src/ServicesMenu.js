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
    zIndex: '50'
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class ServicesMenu extends React.Component {


  handleOpen = () => {
    if(this.props.aboutIsOpen) {
      this.props.closeAbout();
    }
    if(!this.props.isOpen) {
      this.props.toggleServices();
    }
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.props.toggleServices();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={this.props.isOpen ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onMouseOver={this.handleOpen}
          >
            Services
          </Button>
          <Popper open={this.props.isOpen} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Hair Loss Treatment</MenuItem>
                      <MenuItem onClick={this.handleClose}>Alopecia</MenuItem>
                      <MenuItem onClick={this.handleClose}>Transplant Scars</MenuItem>
                      <MenuItem onClick={this.handleClose}>Eyebrows</MenuItem>
                      <MenuItem onClick={this.handleClose}>3D Hair Stroke Eyebrows</MenuItem>
                      <MenuItem onClick={this.handleClose}>Eyeliner</MenuItem>
                      <MenuItem onClick={this.handleClose}>Lips</MenuItem>
                      <MenuItem onClick={this.handleClose}>Areola</MenuItem>
                      <MenuItem onClick={this.handleClose}>Microneedling</MenuItem>
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

ServicesMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesMenu);