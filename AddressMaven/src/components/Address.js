import React, { Component } from 'react';
import '../css/AddressShow.css';
import AddressShow from './AddressShow';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Server from '../dal/LindvedServer';

const server = new Server();

const style = {
    marginLeft: 100,
    marginRight: 100
};

class App extends Component {
    constructor(props) {
        super(props);

        this.addresses = null;

        server.getAddresses(this.refresh);

        this.state = {
            index: 0,
            address: null
        };
    }

    render() {
        return (
            <div className="App">
                <AddressShow address={this.state.address} />
                <div>
                    <RaisedButton
                        id="btnLeft"
                        primary={true}
                        style={style}
                        className="Btn"
                        icon={
                            <FontIcon className="material-icons">
                                arrow_back
                            </FontIcon>
                        }
                        onClick={this.previousAddress}
                    />
                    <RaisedButton
                        id="btnSetAddressRight"
                        primary={true}
                        style={style}
                        className="Btn"
                        icon={
                            <FontIcon className="material-icons">
                                arrow_forward
                            </FontIcon>
                        }
                        onClick={this.nextAddress}
                    />
                </div>
            </div>
        );
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
}

export default App;
