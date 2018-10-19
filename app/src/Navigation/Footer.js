import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/Logo.png';
import Facebook from '../assets/facebook-logo.png';
import Insta from '../assets/instagram-logo.png';
import Youtube from '../assets/youtube-logo.png';
import Twitter from '../assets/twitter-logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: "0.75rem"
  },
  socialsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: "2rem!important"
  },
  socials: {
    filter: 'invert(1)',
    height: "2rem",
    width: "auto"
  },
  footerItem: {
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    margin: "0",
  },
  weekday: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    margin: "0"
  },
  footerTitle: {
    marginBottom: "0"
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: "100%",
    height: "auto",
    marginLeft: "1rem"
  },
  footerLinksContainer: {
    marginTop: "1rem",
  },
  footerLinks: {
    '&:hover': {
      fontStyle: "italic"
    },
    textDecoration: "none",
    color: "black"
  },
  businessHoursContainer: {
    paddingLeft: "2rem!important"
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={24}>
            <Grid item xs={5} s={6} className={classes.logoWrapper}>
              <img className={classes.logo} src={Logo}/>
            </Grid>
            <Grid item xs={3} s={3}>
              <p className={classes.footerTitle}><strong>OUR LOCATION</strong></p>
              <p className={classes.footerItem}>3418 Broadway</p>
              <p className={classes.footerItem}>Everett, WA 98201</p>
              <a href="#" className={classes.footerLinks}><strong>Click here for map</strong></a>
            </Grid>
            <Grid item xs={4} s={3}>
              <p className={classes.footerTitle}><strong>PHONE</strong></p>
              <p className={classes.footerItem}>Office <span>(425) 258-6245</span></p>
              <p className={classes.footerItem}>Mobile <span>(425) 238-1222</span></p>
              <p className={classes.footerTitle}><strong>EMAIL</strong></p>
              <p className={classes.footerItem}>inkbypam@gmail.com</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={24}>
            <Grid item xs={5} className={classes.businessHoursContainer}>
              <p className={classes.footerTitle}><strong>BUSINESS HOURS</strong></p>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <p className={classes.weekday}>Tuesday</p>
                  <p className={classes.weekday}>Wednesday</p>
                  <p className={classes.weekday}>Thursday</p>
                  <p className={classes.weekday}>Friday</p>
                </Grid>
                <Grid item xs={8}>
                  <p className={classes.footerItem}>9:30AM-5:30PM</p>
                  <p className={classes.footerItem}>9:30AM-5:30PM</p>
                  <p className={classes.footerItem}>9:30AM-5:30PM</p>
                  <p className={classes.footerItem}>9:30AM-5:30PM</p>
                </Grid>
              </Grid>
            </Grid> 
            <Grid item xs={2} className={classes.footerLinksContainer}>
              <p className={classes.footerItem}><a className={classes.footerLinks} href="#">Contact Us</a></p>
              <p className={classes.footerItem}><a className={classes.footerLinks} href="#">Our Team</a></p>
              <p className={classes.footerItem}><a className={classes.footerLinks} href="#">Pricing</a></p>
              <p className={classes.footerItem}><a className={classes.footerLinks} href="#">FAQs</a></p>
              <p className={classes.footerItem}><a className={classes.footerLinks} href="#">Other Link</a></p>
            </Grid>
            <Grid item xs={5} className={classes.socialsContainer}>
              <a href="#"><img className={classes.socials} src={Facebook} /></a>
              <a href="#"><img className={classes.socials} src={Insta} /></a>
              <a href="#"><img className={classes.socials} src={Twitter} /></a>
              <a href="#"><img className={classes.socials} src={Youtube} /></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);