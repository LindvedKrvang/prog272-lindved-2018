import PouchDB from 'pouchdb';
import * as DbInfo from "./DatabaseInfo";

export default class DatabaseManager {

    constructor(DB, refresh, onError){
        this.database = DB;
        this.refresh = refresh;
        this.onError = onError;
    }

    InitializeDatabase = () => {
        this.db = new PouchDB(DbInfo.DATABASE_NAME);
        this.remoteCouch = DbInfo.DATABASE_IP + DbInfo.DATABASE_NAME;
        this.db
            .changes({
                since: 'now',
                live: true
            })
            .on('change', this.loadAllAddresses);
    };

    loadAllAddresses = () => {
        const that = this;
        return that.database.db
            .find({
                selector: { lastName: { $gt: null } },
                sort: ['lastName']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const addresses = response.docs.map(address => {
                    return {
                        _id: address._id,
                        _rev: address._rev,
                        firstName: address.firstName,
                        lastName: address.lastName,
                        street: address.street,
                        city: address.city,
                        state: address.state,
                        zip: address.zip,
                        phone: address.phone,
                        website: address.website,
                        email: address.email,
                        contact: address.contact
                    };
                });
                that.refresh(addresses);
            }).catch(() => {
                this.onError();
            });
    };

    saveAddresses = (address) => {
        return this.database.save(address);
    };

    isSynced = () => {
        return this.database.getSyncStatus();
    };
}