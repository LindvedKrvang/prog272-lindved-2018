import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

class AddressShow extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                >
                    Address Details
                </Text>
                {this.singleLine('First Name', this.props.address.firstName)}
                {this.singleLine('Last Name', this.props.address.lastName)}
                {this.singleLine('Street', this.props.address.street)}
                {this.singleLine('City', this.props.address.city)}
                {this.singleLine('State', this.props.address.state)}
                {this.singleLine('Zip', this.props.address.zip)}
                {this.singleLine('Phone', this.props.address.phone)}
                {this.singleLine('Fax', this.props.address.fax)}
                {this.singleLine('Toll Free', this.props.address.tollFree)}
            </View>
        );
    }

    singleLine(display, value) {
        return (
            <Text>
                <Text style={{ fontWeight: 'bold' }}>{display}: </Text>
                {value}
            </Text>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AddressShow;
