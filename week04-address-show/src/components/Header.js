import React, {Component} from 'react';
import logo from '../logo.svg';
import '../css/AddressShow.css';
import '../css/Menu.css';
import { Link } from 'react-router-dom';
import * as routes from '../routes/RouteNames';

class Header extends Component {

    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to={routes.AddressRoute}>Addresses</Link></li>
                    <li><Link to={routes.GetFileRoute}>Get File</Link></li>
                </ul>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>


            </div>
        );
    }
}

export default Header;