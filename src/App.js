import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';
import bg1 from './bg1.jpg';
import bitmap from './bitmap.png';
import MediaQuery from 'react-responsive';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <div className="App">
      <div className="samp">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="HOME"><img className="logo" src={bitmap} alt="bitmap"/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="About">About</NavItem>
          <NavItem eventKey={2} href="Contact">Contact</NavItem>
          <NavItem eventKey={3} href="Blog">Blog</NavItem>
        </Nav>
      </Navbar>
      <div classname="img">
        <img src={cover} alt="cover" />
      </div>

      <a href="#"><h3>Back to Top</h3></a>
      </div>
      </div>
    );
  }
}

export default App;
