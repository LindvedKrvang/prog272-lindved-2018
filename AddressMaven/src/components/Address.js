import React, { Component } from 'react';
import '../css/AddressShow.css';
import AddressShow from './AddressShow';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import LeftArrowIcon from '@material-ui/icons/ArrowBack';
import RightArrowIcon from '@material-ui/icons/ArrowForward';
import DatabaseManager from '../dal/DatabaseManager';
import NoData from './NoData';
import EditAddress from './EditAddress';


const styles = theme => ({
    TopRightSpace: {
        margin: theme.spacing.unit,
        width: 200
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.cancelled = false;
        this.databaseManager = new DatabaseManager(this.props.dataManager, this.refreshFromDatabase, this.failedDataLoad);

        this.state = {
            index: 0,
            address: null,
            addresses: null,
            dataFailedLoading: false
        };
    }

    componentDidMount() {
        this.databaseManager.InitializeDatabase();
        this.props.server.getAddresses(this.loadData);
    }

    componentWillUnmount() {
        this.cancelled = true;
    }

    nextAddress = () => {
        let index = this.state.index;

        index = index >= this.state.addresses.length - 1 ? 0 : index + 1;

        this.setState({
            index: index,
            address: this.state.addresses[index]
        });
    };

    previousAddress = () => {
        let index = this.state.index;

        index = index <= 0 ? this.state.addresses.length - 1 : index - 1;

        this.setState({
            index: index,
            address: this.state.addresses[index]
        });
    };

    loadData = () => {
        if (this.cancelled) return;
        this.databaseManager.loadAllAddresses();
    };

    refreshFromDatabase = (addresses) => {
        if (this.cancelled) return;
        this.setState({
            addresses: addresses
        });
        this.setState({
            address: this.state.addresses[this.state.index]
        });
    };

    failedDataLoad = () => {
        this.setState({
            dataFailedLoading: true
        });
    };

    render() {
        const { classes } = this.props;
        const display = this.state.dataFailedLoading ? (
            <NoData/>
        ) : (
            <div className="App">
                <EditAddress address={this.state.address}/>
                <AddressShow address={this.state.address} />
                <div>
                    <Button
                        id="btnPrev"
                        className={classes.TopRightSpace}
                        variant="raised"
                        color="primary"
                        onClick={this.previousAddress}
                    >
                        <LeftArrowIcon />
                    </Button>
                    <Button
                        id="btnNext"
                        className={classes.TopRightSpace}
                        variant="raised"
                        color="primary"
                        onClick={this.nextAddress}
                    >
                        <RightArrowIcon />
                    </Button>
                </div>
            </div>
        );
        return (
            <div>
                {display}
            </div>
        );
    }
}

App.propTypes = {
    server: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(App);
