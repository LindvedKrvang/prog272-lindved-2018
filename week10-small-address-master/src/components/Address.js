import React, { Component } from 'react';
import '../App.css';
import PuchDB from 'pouchdb';
import AddressShow from "./AddressShow";

class App extends Component {

    constructor(props) {
        super(props);
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
        let ids = [];
        const getIds = this.state.ids.length === 0;
        this.db.allDocs({include_docs: true, descending: true}, function(err, doc) {
            console.log(doc.rows);
            if (getIds) {
                ids = doc.rows.map((row) => {
                    return row.id;
                });
                that.setState({ids: ids});
            }
        });
    };

    setAddress = () => {};

    save = () => {};

    delete = () => {};

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
