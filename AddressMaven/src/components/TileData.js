import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddressIcon from '@material-ui/icons/PermContactCalendar';
import FolderIcon from '@material-ui/icons/FolderOpen';
import HomeIcon from '@material-ui/icons/Home';
import StorageIcon from '@material-ui/icons/Save';
import { RouteNames } from '../routes/RouteNames';

import { Link } from 'react-router-dom';

export const menuItems = (
    <div>
        <ListItem button component={Link} to={RouteNames.Home}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to={RouteNames.AddressRoute}>
            <ListItemIcon>
                <AddressIcon />
            </ListItemIcon>
            <ListItemText primary="Addresses" />
        </ListItem>
        <ListItem button component={Link} to={RouteNames.GetFileRoute}>
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Files" />
        </ListItem>
        <ListItem button component={Link} to={RouteNames.InitDatabase}>
            <ListItemIcon>
                <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="Init Database" />
        </ListItem>
    </div>
);
