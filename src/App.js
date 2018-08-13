import React, { Component } from 'react';
import bg from './bg.jpg';
import './App.css';
import logoprime from './logoprime.png';
import download from './download.png';
import sample from './sample.png';
import sample2 from './sample2.png';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="samp">
        <img src={sample2} alt="sample2"/>
        <img src={sample} alt="sample"/>
      </div>
        <h1 className="Text">Welcome to Norah</h1>
        <div className="logobrand">
          <img src={logoprime} alt="logoprime"/>
        </div>
        <div className="BGImage">
          <img src={bg} alt="bg"/>
          <div className="store">
            <img src={download} alt="download"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
