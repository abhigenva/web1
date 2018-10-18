import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';
import bg1 from './bg1.jpg';
import bitmap from './bitmap.png';
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
            <a href="HOME"><img src={bitmap} alt="bitmap"/></a>
            <div className="header">
            <ul>
              <li>
              <a href="NAME"><h4>Contact</h4></a>
              </li>
              <li>
              <h4>Blog</h4>
              </li>
            </ul>
            </div>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <hr/>
      <div classname="img">
        <img src={cover} alt="cover" border="5"/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
