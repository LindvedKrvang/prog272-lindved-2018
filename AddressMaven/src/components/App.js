import React, { Component } from 'react';
import Address from './Address';
import GetFile from './GetFile';
import * as routes from '../routes/RouteNames';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';




class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route
                        exact
                        path={routes.AddressRoute}
                        component={Address}
                    />
                    <Route path={routes.GetFileRoute} component={GetFile} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
