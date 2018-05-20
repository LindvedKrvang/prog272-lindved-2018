import React from 'react';
import { StyleSheet, View } from 'react-native';
import GetFile from './src/gui/components/GetFile';
import Address from './src/gui/components/Address';
import Header from './src/gui/components/Header';
import { NativeRouter, Route } from 'react-router-native';
import * as RouteNames from './src/routes/RouteNames';

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Header />
                    <View style={styles.content}>
                        <Route
                            exact
                            path={RouteNames.AddressRoute}
                            component={Address}
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
