import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
        backgroundColor: "#abc123"
    },
    addressContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection:"row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItems: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    },
    card: {
        flex: 1,
        width: "75%",
        backgroundColor: "#abc123",
        marginTop: 30,
        marginBottom: 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
    },
    buttonView: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#68a0cf",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        width: "75%"
    },
});