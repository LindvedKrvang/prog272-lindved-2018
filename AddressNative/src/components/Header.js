import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, View, Text } from "react-native";


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
            <View style={styles.nav}>
                <Link to="/"
                      underlayColor="#f0f4f7"
                      style={styles.navItem}>
                    <Text style={{fontWeight: "bold"}}>Address</Text>
                </Link>
                <Link to="/GetFile"
                      underlayColor="#f0f4f7"
                      style={styles.navItem}>
                    <Text style={{fontWeight: "bold"}}>GetFile</Text>
                </Link>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav: {
        paddingTop: 25,
        flexDirection:"row",
        justifyContent: "space-around",
        backgroundColor: "#0061ff",
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    }
});

export default Header;
