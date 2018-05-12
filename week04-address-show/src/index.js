import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import GetFile from './components/GetFile';
import * as routes from './routes/RouteNames';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path={routes.AddressRoute} component={Address} />
            <Route path={routes.GetFileRoute} component={GetFile} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
