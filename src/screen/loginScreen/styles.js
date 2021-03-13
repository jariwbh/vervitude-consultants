import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

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
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: wp('100%'),
        height: HEIGHT * 1.1
    },
    boxView: {
        width: (WIDTH / 2) + 170,
        height: HEIGHT - 480,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop: 30
    },
    loginBtn: {
        flexDirection: 'row',
        width: WIDTH - 70,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: HEIGHT - 635,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: '#96D3FF',
        borderWidth: 2
    },
    loginbtnText: {
        color: '#323643',
        fontSize: 16
    },
    loginBtn2: {
        flexDirection: 'row',
        width: WIDTH - 70,
        backgroundColor: "#96D3FF",
        borderRadius: 50,
        height: HEIGHT - 635,
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
        marginTop: 20,
        fontWeight: 'bold'
    },
    imageView: {
        height: 240,
        width: 240,
        marginTop: -60
    }
})
