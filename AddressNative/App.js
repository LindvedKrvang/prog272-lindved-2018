import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetFile from "./src/components/GetFile";
import Address from "./src/components/Address";
import Header from "./src/components/Header";
import { NativeRouter, Route } from "react-router-native";

export default class App extends React.Component {
  render() {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <Header/>
                <Route exact path="/" component={Address}/>
                <Route path="/GetFile" component={GetFile}/>
            </View>
        </NativeRouter>
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
