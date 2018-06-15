import React, { Component } from 'react';
import '../css/AddressShow.css';
import PropTypes from 'prop-types';

class AddressShow extends Component {
    render() {
        const address =
            this.props.address != null ? (
                <div>
                    <h2>Address Details</h2>
                    {this.singleLine(
                        'First Name',
                        this.props.address.firstName
                    )}
                    {this.singleLine('Last Name', this.props.address.lastName)}
                    {this.singleLine('Street', this.props.address.street)}
                    {this.singleLine('City', this.props.address.city)}
                    {this.singleLine('State', this.props.address.state)}
                    {this.singleLine('Zip', this.props.address.zip)}
                    {this.singleLine('Phone', this.props.address.phone)}
                    {this.singleLine('Website', this.props.address.website)}
                    {this.singleLine('Email', this.props.address.email)}
                    {this.singleLine('Contact', this.props.address.contact)}
                </div>
            ) : (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        return (
            <div className="App">
                <div className="Card" align="center">
                    <br />
                    {address}
                    <br />
                </div>
                <br />
            </div>
        );
    }

    singleLine(display, value) {
        return (
            <p className="App-intro">
                <strong>{display}:</strong> {value}
            </p>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.object
};

export default AddressShow;
