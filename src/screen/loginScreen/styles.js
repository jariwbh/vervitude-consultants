import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00b3b3'
    },
    cardview: {

    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 50,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#fff',
        width: width - 100,
        height: height - 700,
        margin: 10,
        alignItems: "center",
    },
    TextInput: {
        fontSize: 15,
        flex: 1,
        marginLeft: 5,
        borderColor: '#FFFFFF'
    },
    loginBtn: {
        flexDirection: 'row',
        width: width - 100,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: height / 12,
        alignItems: "center",
        justifyContent: 'center'
    },
    loginText: {
        color: '#323643',
        fontSize: 20,
        fontWeight: 'bold'
    },
    baseText: {
        fontWeight: 'normal',
        color: '#FFFFFF',
        fontSize: 15,
    },
    innerText: {
        color: '#FFFFFF',
        fontSize: 15,
    },
})
