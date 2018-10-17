import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './AppBar.js';
import FeaturedRow from './FeaturedRow.js';
import Video from './Video.js';
import ServicesStepper from './ServicesStepper.js';
import MidBanner from './MidBanner.js';


// see docs: https://material-ui.com/style/css-baseline/
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SimpleAppBar />
      <Video />
      <FeaturedRow />
      <ServicesStepper />
      <MidBanner />
      <FeaturedRow backgroundColor='#e0e0e0' header='Meet Our Certified Technicians'/>
    </React.Fragment>
  );
}

export default App;
