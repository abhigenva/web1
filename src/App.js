import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';


class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <div className="App">
      <div className="samp">
        <h1>Norah</h1>
        <img src={cover} alt="cover"/>
      </div>
      </div>
    );
  }
}

export default App;
