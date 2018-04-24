import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            file: 'unknown',
            firstName: 'unknown',
            lastName: 'unknown',
            street: 'unknown',
            city: 'unknown',
            state: 'unknown',
            zip: 'unknown'
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">File: {this.state.file}</p>
                <button id='btnGetFile' className='Btn' onClick={this.getFile}>Get File</button>
                <br/>
                <br/>
                <div className='Card' align="center">
                    <br/>
                    <h2>Address Details</h2>
                    <p className="App-intro"><strong>First Name:</strong> {this.state.firstName}</p>
                    <p className="App-intro"><strong>Last Name:</strong> {this.state.lastName}</p>
                    <p className="App-intro"><strong>Street:</strong> {this.state.street}</p>
                    <p className="App-intro"><strong>City:</strong> {this.state.city}</p>
                    <p className="App-intro"><strong>State:</strong> {this.state.state}</p>
                    <p className="App-intro"><strong>Zip:</strong> {this.state.zip}</p>
                    <br/>
                </div>
                <br/>
                <button id='btnSetAddress' className='Btn' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'});
    };

    setAddress = () => {
        this.setState({
            firstName: 'Rasmus',
            lastName: 'Lindved',
            street: 'Lake Hills Blvd.',
            city: 'Bellevue',
            state: 'Washington',
            zip: '98008'
        })
    };
}

export default App;
