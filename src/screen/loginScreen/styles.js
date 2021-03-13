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
        fontSize: 35,
        color: '#FFF',
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: width,
        height: height * 1.1
    },
    boxView: {
        width: width / 2 + 170,
        height: height - 480,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop: 20
    },
    loginBtn: {
        flexDirection: 'row',
        width: width - 70,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: height - 640,
        alignItems: "center",
        justifyContent: 'center',
        //borderColor: '#7AD2DB',
        borderColor: '#96D3FF',
        borderWidth: 2
    },
    loginbtnText: {
        color: '#323643',
        fontSize: 16
    },
    loginBtn2: {
        flexDirection: 'row',
        width: width - 70,
        //backgroundColor: "#46A1A9",
        backgroundColor: "#96D3FF",
        borderRadius: 50,
        height: height - 640,
        alignItems: "center",
        justifyContent: 'center',
    },
    loginbtnText2: {
        color: '#FFFFFF',
        fontSize: 16
    },
    forgottext: {
        fontSize: 15,
        color: '#000000',
        textDecorationLine: 'underline'
    },
    createText: {
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: height - 640,
        fontWeight: 'bold'
    },
    imageView: {
        height: 240,
        width: 240,
        marginLeft: 10,
        marginTop: height - 760,
    }
})
