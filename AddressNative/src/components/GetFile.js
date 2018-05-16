import React from 'react';
// import '../css/AddressShow.css';
import style from '../styles/style';
import files from '../model/FileList';
import { Text, View, Button } from 'react-native';

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
            <View style={style.card}>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            textAlign: 'center'
                        }}
                    >
                        File Details
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>File: </Text>
                        {this.state.file}
                    </Text>
                </View>
                <Button onPress={this.getFile} title="Get File" />
            </View>
        );
    }
}

export default GetFile;
