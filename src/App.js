import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';
import bg1 from './bg1.jpg';
import bitmap from './bitmap.png';
import MediaQuery from 'react-responsive';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import Sticky from 'react-stickynode';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toDateString(),
      progress : 0,
      name: ''
    };
  }
  onChange(e){
    this.setState({
      name: e.target.value
    });
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
      time: new Date().toLocaleTimeString(),
    });
    this.setState({
      progress: this.state.progress + 1
    });
  }
  render() {
    return (
      <div className="App">
      <div className="samp">
      <nav class="navbar sticky-top navbar-light bg-light">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><a href="HOME"><img className="logo" src={bitmap} alt="bitmap"/></a></a>
        <nav class="menu">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="xunk-social" href="https://www.facebook.com/Norahism" target="_blank">FB</a>
            </li>
            <li class="nav-item">
              <a class="xunk-social" href="https://www.instagram.com/norahism" target="_blank">Insta</a>
            </li>
            <li class="nav-item">
              <a class="xunk-social" href="https://www.twitter.com/norah_official" target="_blank">Twitter</a>
            </li>
          </ul>
        </nav>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#123">Blog</a>
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
      <div>
        <label for='name-input'>Name: </label>
        <input
        id='name-input'
        onChange={this.onChange}
        value={this.state.name}
        size="32" />
      </div>
      <p>This text is no longer correct - <s>Hey this is incorrect.</s></p>
      <div classname="img">
        <Image src={cover} alt="cover" responsive />
      </div>
      <br/>
      <progress value={this.state.progress} max="100"></progress>
      <br/>
      <p className="App-clock">
          {this.state.date}
          <p>{this.state.time}</p>
      </p>
      <div id="123">
        <p>Lorem ipsum dolor</p>
        <p>We open at <time>10:00</time> every morning.</p>
        <p>I have a date on <time datetime="2019-02-14 20:00">Valentines day</time>.</p>
      </div>
      <a href="#"><h3>Back to Top</h3></a>
      </div>
      </div>
    );
  }
}

export default App;
