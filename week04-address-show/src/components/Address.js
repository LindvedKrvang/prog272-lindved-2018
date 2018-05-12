import React, { Component } from 'react';
import '../css/AddressShow.css';
import addresses from '../model/AddressList';
import AddressShow from './AddressShow';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            address: addresses[0]
        };
    }

    render() {
        return (
            <div className="App">
                <AddressShow address={this.state.address} />
                <button
                    id="btnSetAddress"
                    className="Btn"
                    onClick={this.setAddress}
                >
                    Set Address
                </button>
            </div>
        );
    }

    setAddress = () => {
        let index = this.state.index;
        if (index >= addresses.length - 1) index = 0;
        else index++;

        this.setState({
            index: index,
            address: addresses[index]
        });
    };
}

export default App;
