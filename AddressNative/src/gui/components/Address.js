import React, { Component } from 'react';
import style from '../styles/style';
import { View, Button } from 'react-native';
import AddressShow from './AddressShow';

class App extends Component {
    constructor(props) {
        super(props);

        this.addresses = null;

        this.state = {
            index: 0,
            address: null
        };

        this.props.server.getAddresses(this.refresh);
    }

    nextAddress = () => {
        let index = this.state.index;

        index = index >= this.addresses.length - 1 ? 0 : index + 1;

        this.setState({
            index: index,
            address: this.addresses[index]
        });
    };

    previousAddress = () => {
        let index = this.state.index;

        index = index <= 0 ? this.addresses.length - 1 : index - 1;

        this.setState({
            index: index,
            address: this.addresses[index]
        });
    };

    refresh = addresses => {
        this.addresses = addresses;
        this.setState({
            address: this.addresses[this.state.index]
        });
    };

    render() {
        return (
            <View style={style.card}>
                <AddressShow address={this.state.address} />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flex: 1, paddingRight: 5 }}>
                        <Button
                            id="btnPrev"
                            onPress={this.previousAddress}
                            title="Previous"
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 5 }}>
                        <Button id="btnNext" onPress={this.nextAddress} title="Next" />
                    </View>
                </View>
            </View>
        );
    }
}

export default App;
