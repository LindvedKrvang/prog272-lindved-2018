import React, {Component} from 'react';
import '../css/App.css';

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
                <p className="App-intro">File: {this.state.file}</p>
                <button id='btnGetFile' className='Btn' onClick={this.getFile}>Get File</button>
                <br/>
                <br/>
                <hr/>
            </div>
        );
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'});
    };
}

export default App;
