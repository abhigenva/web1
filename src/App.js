import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';
import bg1 from './bg1.jpg';
import bitmap from './bitmap.png';
import MediaQuery from 'react-responsive';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toDateString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div className="App">
      <div className="samp">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="HOME"><Image className="logo" src={bitmap} alt="bitmap" responsive /></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="About">About</NavItem>
          <NavItem eventKey={2} href="Contact">Contact</NavItem>
          <NavItem eventKey={3} href="Blog">Blog</NavItem>
        </Nav>
      </Navbar>
      <div classname="img">
        <Image src={cover} alt="cover" responsive />
      </div>
      <p className="App-clock">
          {this.state.date}
          <p>{this.state.time}</p>
      </p>
      <a href="#"><h3>Back to Top</h3></a>
      </div>
      </div>
    );
  }
}

export default App;
