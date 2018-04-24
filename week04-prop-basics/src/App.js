import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <p>Test Prop: {this.props.testProp}</p>
          <p>My Props: {this.props.myProps.myProp}</p>
      </div>
    );
  }
}

App.protoTypes = {
    appInit: PropTypes.shape({
        testProp: PropTypes.number
    })
};
export default App;
