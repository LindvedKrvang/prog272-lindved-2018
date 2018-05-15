import React, { Component } from 'react';
import '../css/AddressShow.css';
import '../css/Menu.css';
import { Link } from 'react-router-dom';
import * as routes from '../routes/RouteNames';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidebar: false
        };
    }

    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        });
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Address Show"
                    iconClassNameRight="muidocs-icon.navigation-expand-more"
                    onLeftIconButtonClick={this.toggleSidebar}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.showSidebar}
                    onRequestChange={this.toggleSidebar}
                >
                    <AppBar title="Address Show" />
                    <MenuItem
                        primaryText="Addresses"
                        containerElement={<Link to={routes.AddressRoute} />}
                        onClick={this.toggleSidebar}
                    />
                    <MenuItem
                        primaryText="Files"
                        containerElement={<Link to={routes.GetFileRoute} />}
                        onClick={this.toggleSidebar}
                    />
                </Drawer>
            </div>
        );
    }
}

export default Header;
