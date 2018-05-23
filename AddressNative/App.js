import React from 'react';
import { StyleSheet, View } from 'react-native';
import GetFile from './src/gui/components/GetFile';
import Address from './src/gui/components/Address';
import Header from './src/gui/components/Header';
import { NativeRouter, Route } from 'react-router-native';
import * as RouteNames from './src/routes/RouteNames';
import Server from './src/dal/LindvedServer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.server = new Server();
    }

    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Header />
                    <View style={styles.content}>
                        <Route
                            exact
                            path={RouteNames.AddressRoute}
                            render={props => (
                                <Address {...props} server={this.server} />
                            )}
                        />
                        <Route
                            path={RouteNames.GetFileRoute}
                            component={GetFile}
                        />
                    </View>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#abc123'
    },
    content: {
        flex: 1,
        backgroundColor: '#EEE',
        alignItems: 'center'
    }
});
