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
              <a href="Blog"><h4>Blog</h4></a>
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
      <p>Pellentesque euismod, tortor in dictum fermentum, magna turpis laoreet massa, ac venenatis elit est ac metus. Ut gravida consequat metus ut maximus. Morbi egestas ac dui eu facilisis. Nulla iaculis, neque quis vestibulum volutpat, orci mi vulputate ex, in varius sem urna sed augue. Nullam lobortis commodo mauris, a ornare metus consectetur vitae. Pellentesque in nulla vel nunc mollis rhoncus. Donec dictum accumsan orci, a fermentum elit vulputate sed. Praesent convallis quis odio a auctor. In a felis leo. Praesent iaculis velit sit amet sem luctus lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
      <a href="#"><h3>Back to Top</h3></a>
      </div>
      </div>
    );
  }
}

export default App;
