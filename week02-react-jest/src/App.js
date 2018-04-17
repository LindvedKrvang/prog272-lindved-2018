import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            file: 'unknown',
            foo: 'waiting'
        };
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">File: {this.state.file}</p>
          <button id='btnGetFile' onClick={this.getFile}>Get File</button>
      </div>
    );
  }

  getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
  }
}

export default App;
