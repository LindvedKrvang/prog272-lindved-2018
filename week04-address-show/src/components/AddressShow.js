import React, {Component} from 'react';
import '../css/AddressShow.css';

class AddressShow extends Component {

    render() {
        return (
            <div className="App">
                <br/>
                <br/>
                <div className='Card' align="center">
                    <br/>
                    <h2>Address Details</h2>
                    <p className="App-intro"><strong>First Name:</strong> {this.props.address.firstName}</p>
                    <p className="App-intro"><strong>Last Name:</strong> {this.props.address.lastName}</p>
                    <p className="App-intro"><strong>Street:</strong> {this.props.address.street}</p>
                    <p className="App-intro"><strong>City:</strong> {this.props.address.city}</p>
                    <p className="App-intro"><strong>State:</strong> {this.props.address.state}</p>
                    <p className="App-intro"><strong>Zip:</strong> {this.props.address.zip}</p>
                    <p className="App-intro"><strong>Phone:</strong> {this.props.address.phone}</p>
                    <p className="App-intro"><strong>Fax:</strong> {this.props.address.fax}</p>
                    <p className="App-intro"><strong>Toll Free:</strong> {this.props.address.tollFree}</p>
                    <br/>
                </div>
                <br/>

            </div>
        );
    }
}

export default AddressShow;
