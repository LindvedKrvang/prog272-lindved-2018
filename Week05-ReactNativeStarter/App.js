import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hello: "Hello There"
        }
    }

    fetchAddress = () => {
        console.log(this.state.hello);
        this.setState({
            hello: 'General Kenobi'
        });
    };

    fetchMicro = (event) => {
        // this.setState({hello: 'fetcher king'});
        const that = this;
        const ip = '10.12.254.142'; // 168.156.47.60
        fetch('http://' + ip + ':30025/search')
            .then((response) => response.json())
            .then(function (result) {
                this.collection = result.allData;
                console.log(result);
                that.setState({
                    hello: JSON.stringify(result),
                    // SET UP STATE FOR FIRST AND LAST NAMES
                    // FROM THE DATABASE
                });
            }).catch(function (ex) {
                console.log(ex);
            that.setState({hello: 'qux error'});
        });
        if (event) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
                <Text>{this.state.hello}</Text>
                <Button onPress={this.fetchAddress} title="Hello"/>
                <Button onPress={this.fetchMicro} title="Get Micro"/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
