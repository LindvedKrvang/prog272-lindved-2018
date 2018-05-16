import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { View, Text } from "react-native";
import style from "../styles/style";


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
            <View style={style.nav}>
                <Link to="/"
                      underlayColor="#f0f4f7"
                      style={style.navItem}>
                    <Text>Address</Text>
                </Link>
                <Link to="/GetFile"
                      underlayColor="#f0f4f7"
                      style={style.navItem}>
                    <Text>GetFile</Text>
                </Link>
            </View>
        );
    }
}

export default Header;
