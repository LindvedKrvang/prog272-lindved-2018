import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddressIcon from '@material-ui/icons/PermContactCalendar';
import FolderIcon from '@material-ui/icons/FolderOpen';
import HomeIcon from '@material-ui/icons/Home';
import * as Routes from '../routes/RouteNames';

import { Link } from 'react-router-dom';

export const menuItems = (
    <div>
        <ListItem button component={Link} to={Routes.Home}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to={Routes.AddressRoute}>
            <ListItemIcon>
                <AddressIcon />
            </ListItemIcon>
            <ListItemText primary="Addresses" />
        </ListItem>
        <ListItem button component={Link} to={Routes.GetFileRoute}>
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Files" />
        </ListItem>
    </div>
);
