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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><a href="HOME"><img className="logo" src={bitmap} alt="bitmap"/></a></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
          </ul>
        </div>
      </nav>
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
