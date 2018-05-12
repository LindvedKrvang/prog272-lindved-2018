import React, { Component } from 'react';
import '../css/AddressShow.css';
import addresses from '../model/AddressList';
import AddressShow from './AddressShow';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

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
        if (index >= addresses.length - 1) index = 0;
        else index++;

        this.setState({
            index: index,
            address: addresses[index]
        });
    };
}

export default App;
