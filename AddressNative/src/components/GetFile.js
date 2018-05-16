import React from 'react';
// import '../css/AddressShow.css';
import style from "../styles/style";
import files from '../model/FileList';
import { Text, View, Button } from "react-native";

class GetFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            file: files[0]
        };
    }

    getFile = () => {
        let index = this.state.index;
        if (index >= files.length - 1) index = 0;
        else index++;

        this.setState({
            index: index,
            file: files[index]
        });
    };

    render() {
        return (
            <View style={style.buttonView}>
                <Text>File: {this.state.file}</Text>
                <Button onPress={this.getFile}
                        title="Get File"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"/>
            </View>

        )
    }
}

export default GetFile;
