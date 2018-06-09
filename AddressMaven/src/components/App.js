import React, { Component } from 'react';
import Address from './Address';
import GetFile from './GetFile';
import Home from './Home';
import * as routes from '../routes/RouteNames';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Server from '../dal/LindvedServer';

class App extends Component {
    constructor(props) {
        super(props);
        this.server = new Server();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route
                        exact
                        path={routes.Home}
                        component={Home}
                    />
                    <Route
                        path={routes.AddressRoute}
                        render={props => (
                            <Address {...props} server={this.server} />
                        )}
                    />
                    <Route path={routes.GetFileRoute} component={GetFile} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
