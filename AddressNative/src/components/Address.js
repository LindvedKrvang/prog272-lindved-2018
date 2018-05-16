import React, { Component } from 'react';
import addresses from '../model/AddressList';
import style from "../styles/style";
import { View, Text } from "react-native";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            address: addresses[0]
        };
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.welcome}>
                    Hello There
                </Text>
            </View>
        );
    }

    setAddress = () => {
        let index = this.state.index;
        if (index >= addresses.length - 1) index = 0;
        else index++;

        this.setState({
            index: index,
            address: addresses[index]
        });
    };
}

export default App;
