import React, { Component } from 'react';
import '../css/AddressShow.css';
import '../css/Menu.css';
import { Link } from 'react-router-dom';
import * as routes from '../routes/RouteNames';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Button from "@material-ui/core/es/Button/Button";
import MenuIcon from '@material-ui/icons/Menu';
// import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

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
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton  color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Address Maven
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

        );
    }
}

export default Header;

{/*<div>*/}
{/*<AppBar*/}
{/*title="Address Maven"*/}
{/*iconClassNameRight="muidocs-icon.navigation-expand-more"*/}
{/*onLeftIconButtonClick={this.toggleSidebar}*/}
{/*/>*/}
{/*<Drawer*/}
{/*docked={false}*/}
{/*width={200}*/}
{/*open={this.state.showSidebar}*/}
{/*onRequestChange={this.toggleSidebar}*/}
{/*>*/}
{/*<AppBar title="Address Show" />*/}
{/*<MenuItem*/}
{/*primaryText="Addresses"*/}
{/*containerElement={<Link to={routes.AddressRoute} />}*/}
{/*onClick={this.toggleSidebar}*/}
{/*/>*/}
{/*<MenuItem*/}
{/*primaryText="Files"*/}
{/*containerElement={<Link to={routes.GetFileRoute} />}*/}
{/*onClick={this.toggleSidebar}*/}
{/*/>*/}
{/*</Drawer>*/}
{/*</div>*/}