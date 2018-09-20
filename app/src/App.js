import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar brand='logo' right>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
