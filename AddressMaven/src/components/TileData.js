import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddressIcon from '@material-ui/icons/PermContactCalendar';
import FolderIcon from '@material-ui/icons/FolderOpen';

import { Link } from 'react-router-dom';

export const menuItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <AddressIcon />
            </ListItemIcon>
            <ListItemText primary="Addresses" />
        </ListItem>
        <ListItem button component={Link} to="/get-file">
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Files" />
        </ListItem>
    </div>
);
