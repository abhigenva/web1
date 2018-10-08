import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';
import bg1 from './bg1.jpg';
import bitmap from './bitmap.png';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <div className="App">
      <div className="samp">
      <img src={bitmap} alt="bitmap"/>
      <div classname="img">
        <img src={cover} alt="cover"/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
