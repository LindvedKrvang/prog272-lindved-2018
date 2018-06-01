import React, { Component } from 'react';
import '../css/AddressShow.css';
import AddressShow from './AddressShow';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import LeftArrowIcon from '@material-ui/icons/ArrowBack';
import RightArrowIcon from '@material-ui/icons/ArrowForward';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: 200
    }
});

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
        const { classes } = this.props;
        return (
            <div className="App">
                <AddressShow address={this.state.address} />
                <div>
                    <Button
                        id="btnPrev"
                        className={classes.button}
                        variant="raised"
                        color="primary"
                        onClick={this.previousAddress}
                    >
                        <LeftArrowIcon />
                    </Button>
                    <Button
                        id="btnNext"
                        className={classes.button}
                        variant="raised"
                        color="primary"
                        onClick={this.nextAddress}
                    >
                        <RightArrowIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    server: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(App);
