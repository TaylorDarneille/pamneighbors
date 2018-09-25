import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './AppBar.js';

// see docs: https://material-ui.com/style/css-baseline/
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      
      <SimpleAppBar />

    </React.Fragment>
  );
}

export default App;
