import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AboutMenu from './AboutMenu';
import ServicesMenu from './ServicesMenu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './assets/Logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: '65px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: { 
      display: 'flex', 
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: { display: 'none', },
    justifyContent: 'flex-end',
    width: '100%',
  },
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img className={classes.img} src={Logo}/>
          <div className={classes.sectionDesktop}>
            <ServicesMenu />
            <AboutMenu />
            <Button color="inherit" href="#">Transformations</Button>
            <Button color="inherit" href="#">Apprenticeship Program</Button>
            <Button variant="contained" href="#" className={classes.button}>
              Contact
            </Button>
          </div>

          <div className={classes.sectionMobile}>
{/*            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
*/}         <IconButton aria-haspopup="true" color="inherit">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar> 
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);