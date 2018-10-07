import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';
import bg1 from './bg1.jpg';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <div className="App">
      <div className="samp">
      <h1>Norah</h1>
      <div classname="img">
        <img src={bg1} alt="bg1"/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
