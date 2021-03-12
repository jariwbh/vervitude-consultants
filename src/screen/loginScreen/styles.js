import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centeView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: width,
        height: height + 10,
    },
    boxView: {
        width: width / 2 + 170,
        height: height - 500,
        borderRadius: 20,
        backgroundColor: '#000001',
        alignItems: 'center',
        marginTop: height - 700
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
    loginBtn: {
        flexDirection: 'row',
        width: width - 80,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: height / 15,
        alignItems: "center",
        justifyContent: 'center'
    },
    loginbtnText: {
        color: '#323643',
        fontSize: 20,
        fontWeight: 'bold'
    },
    forgottext: {
        fontSize: 15,
        color: '#FFFFFF',
        textDecorationLine: 'underline'
    },
    createText: {
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: height - 650,
        fontWeight: 'bold'
    },
})
