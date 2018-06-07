import React, { Component } from 'react';
import '../App.css';
import PuchDB from 'pouchdb';
import AddressShow from "./AddressShow";

class App extends Component {

    constructor(props) {
        super(props);
        this.DBIp = "http://10.12.32.126:5984";
        this.canceled = false;
        this.state = {
            editOpen: false,
            namesIndex: 0,
            names: [{
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }]
        };
    }

    componentDidMount() {
        this.db = new PuchDB('addresses');
        this.remoteCouch = this.DBIp + '/addresses';
        // this.remoteCouch = false;
        this.syncDom = document.getElementById('sync-wrapper');

        this.db.changes({
            since: 'now',
            live: true
        }).on('change', this.showAddress);
    }

    addAddressReal = () => {
        const indexValue = this.state.addressIndex + 1;
        this.setState({addressIndex: indexValue});
        const address = {
            _id: new Date().toISOString(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            completed: false
        };
        this.db.put(address, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a r!');
            }
        });
        this.state.ids.push(address._id);
        this.setState({
            ids: this.state.ids
        });
    };

    showAddress = () => {
        const that = this;
        return that.props.dataManager.db
            .find({
                selector: { lastName: { $gt: null } },
                sort: ['lastName']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const names = response.docs.map(address => {
                    return {
                        _id: address._id,
                        _rev: address._rev,
                        firstName: address.firstName,
                        lastName: address.lastName
                    };
                });
                if (!this.canceled) {
                    that.setState({ names: names });
                }
            });
    };

    setAddress = (offset) => {
        const value = this.state.namesIndex + offset;
        if (value >= 0 && value <= this.state.names.length - 1) {
            this.setState({ namesIndex: value, open: this.state.editOpen });
        }
    };

    save = (name) => {
        console.log(name);
        this.props.dataManager
            .save(name)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = (name) => {
        this.props.dataManager
            .delete(name._id)
            .then(function(result) {
                console.log('BAR', result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render() {return (
        <AddressShow
            name={this.state.names[this.state.namesIndex]}
            showAddress={this.showAddress}
            setAddress={this.setAddress}
            save={this.save}
            delete={this.delete}
        />
        );
    }
}


export default App;
