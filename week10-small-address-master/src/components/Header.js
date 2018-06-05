import React, { Component } from 'react';
// import '../css/AddressShow.css';
// import '../css/Menu.css';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { menuItems } from './TileData';

const styles = {
    list: {
        width: 250
    }
};

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
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Address Maven
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.showSidebar}
                    onClose={this.toggleSidebar}
                >
                    <div
                        role="button"
                        onClick={this.toggleSidebar}
                        onKeyDown={this.toggleSidebar}
                    >
                        <div className={classes.list}>{menuItems}</div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Header);
