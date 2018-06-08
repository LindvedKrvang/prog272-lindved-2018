import React, { Component } from 'react';
import '../App.css';
import dataManager from '../tools/PouchDbManager';
import Address from './Address';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import InitializeDatabase from './InitializeDatabase';

class App extends Component {
    componentDidMount() {
        this.db = dataManager.init();
    }

    render() {
        // const { classes } = this.props;
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Route id="home" exact path="/" component={Home} />
                    <Route
                        id="addresses"
                        path="/addresses"
                        render={props => (
                            <Address {...props} dataManager={dataManager} />
                        )}
                    />
                    <Route
                        id="initDb"
                        path="/init-db"
                        render={props => (
                            <InitializeDatabase
                                {...props}
                                dataManager={dataManager}
                            />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
