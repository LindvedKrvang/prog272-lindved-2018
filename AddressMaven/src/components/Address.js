import React, { Component } from 'react';
import '../css/AddressShow.css';
import AddressShow from './AddressShow';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Server from '../dal/LindvedServer';

const server = new Server();

class App extends Component {
    constructor(props) {
        super(props);

        server.getAddresses(this.refresh);
        this.state = {
            index: 0,
            addresses: null,
            address: null
        };

    }

    render() {
        return (
            <div className="App">
                <AddressShow address={this.state.address} />
                <RaisedButton
                    id="btnSetAddress"
                    primary={true}
                    className="Btn"
                    icon={<FontIcon className="material-icons">home</FontIcon>}
                    onClick={this.setAddress}
                >
                    Set Address
                </RaisedButton>
            </div>
        );
    }

    setAddress = () => {
        let index = this.state.index;
        if (index >= this.state.addresses.length - 1) index = 0;
        else index++;

        this.setState({
            index: index,
            address: this.state.addresses[index]
        });
    };

    refresh = (addresses) => {
        this.setState({
            addresses: addresses
        });
        this.setState({
            address: this.state.addresses[this.state.index]
        });
    }
}

export default App;
