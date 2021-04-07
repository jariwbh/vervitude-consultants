import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA'
    },
    imageView: {
        marginLeft: 70,
        marginTop: 200,
        height: 200,
        width: 200,
    },
    backgroundImage: {
        marginTop: -70,
        height: HEIGHT / 2 + 40,
        width: WIDTH
    },
    circle: {
        height: 350,
        width: 350,
        borderRadius: 200,
        backgroundColor: "#FFFFFF",
        marginTop: -250,
        marginLeft: -50
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: '#5AC8FA',
        width: WIDTH - 80,
        height: 45,
        margin: 5,
        borderWidth: 1
    },
    inputViewError: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: '#ff0000',
        width: WIDTH - 80,
        height: 45,
        margin: 5,
        borderWidth: 1
    },
    TextInput: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    centeView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        fontSize: 36,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 80
    },
    boxView: {
        height: 250,
        width: WIDTH - 20,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 4,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop: 20
    },
    submitBtn: {
        flexDirection: 'row',
        width: WIDTH / 2,
        backgroundColor: "#5AC8FA",
        borderRadius: 50,
        height: 40,
        alignItems: "center",
        justifyContent: 'center'
    },
    submitbtnText: {
        color: '#FFFFFF',
        fontSize: 14
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 15,
        fontWeight: '900'
    },
    supportText: {
        color: '#222222',
        fontSize: 14,
        textDecorationLine: 'underline'
    },
})

