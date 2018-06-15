import React, { Component } from 'react';
import Address from './Address';
import GetFile from './GetFile';
import Home from './Home';
import InitDB from './InitializeDatabase';
import { RouteNames } from '../routes/RouteNames';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Server from '../dal/LindvedServer';
import dataManager from '../dal/PouchDbManager';

class App extends Component {
    constructor(props) {
        super(props);
        this.server = new Server();
    }

    componentDidMount() {
        this.db = dataManager.init();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path={RouteNames.Home} component={Home} />
                    <Route
                        path={RouteNames.AddressRoute}
                        render={props => (
                            <Address
                                {...props}
                                server={this.server}
                                dataManager={dataManager}
                            />
                        )}
                    />
                    <Route path={RouteNames.GetFileRoute} component={GetFile} />
                    <Route
                        path={RouteNames.InitDatabase}
                        render={props => (
                            <InitDB {...props} dataManager={dataManager} />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
