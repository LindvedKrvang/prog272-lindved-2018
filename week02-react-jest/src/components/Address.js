import React, {Component} from 'react';
import '../App.css';

class App extends Component {



    constructor(props) {
        super(props);

        console.log("Address Props", typeof this.props)
        const address = this.props.addressList[0];

        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollFree: address.tollFree
        };
    }

    render() {
        return (
            <div className="App">
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
                    <p className="App-intro"><strong>Phone:</strong> {this.state.phone}</p>
                    <p className="App-intro"><strong>Fax:</strong> {this.state.fax}</p>
                    <p className="App-intro"><strong>Tollfree:</strong> {this.state.tollFree}</p>
                    <br/>
                </div>
                <br/>
                <button id='btnSetAddress' className='Btn' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }

    setAddress = () => {
        const address = this.props.addressList[1];
        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollFree: address.tollFree
        })
    };
}

export default App;
