import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './Navigation/AppBar.js';
import FeaturedRow from './FeaturedRow.js';
import Video from './Video.js';
import ServicesStepper from './ServicesStepper.js';
import MidBanner from './MidBanner.js';
import Footer from './Navigation/Footer.js';
import HeroImage from './HeroImage.js';


// see docs: https://material-ui.com/style/css-baseline/
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SimpleAppBar />
{/*      <Video />*/}
      <HeroImage />
      <FeaturedRow />
      <ServicesStepper />
      <MidBanner />
      <FeaturedRow backgroundColor='#e0e0e0' header='Meet Our Certified Technicians'/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
