import React, { Component } from 'react';
import '../css/AddressShow.css';
import AddressShow from './AddressShow';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';

const style = {
    marginLeft: 100,
    marginRight: 100
};

class App extends Component {
    constructor(props) {
        super(props);
        this.cancelled = false;
        this.addresses = null;

        this.state = {
            index: 0,
            address: null
        };
    }

    componentDidMount() {
        this.props.server.getAddresses(this.refresh);
    }

    componentWillUnmount() {
        this.cancelled = true;
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
        if (this.cancelled) return;
        this.addresses = addresses;
        this.setState({
            address: this.addresses[this.state.index]
        });
    };

    render() {
        return (
            <div className="App">
                <AddressShow address={this.state.address} />
                <div>
                    <RaisedButton
                        id="btnPrev"
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
                        id="btnNext"
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
}

App.propTypes = {
    server: PropTypes.object
};

export default App;
