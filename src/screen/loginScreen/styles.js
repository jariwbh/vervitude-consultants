import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96D3FF'
    },
    imageView: {
        marginLeft: ('18%'),
        marginTop: ('55%'),
        height: hp('30%'),
        width: wp('50%')
    },
    backgroundImage: {
        marginTop: hp('-10'),
        height: hp('55%'),
        width: wp('100%')
    },
    circle: {
        height: hp('50%'),
        width: hp('50%'),
        borderRadius: hp('50%'),
        backgroundColor: "#FFFFFF",
        marginTop: hp('-35'),
        marginLeft: wp('-10')
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('10%'),
        borderColor: '#00D9CD',
        width: wp('80%'),
        height: hp('6%'),
        margin: hp('1%'),
        borderWidth: hp('0.2%')
    },
    TextInput: {
        flex: 1,
        fontSize: hp('2%'),
        textAlign: 'center',
        fontWeight: 'bold'
    },
    centeView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        fontSize: hp('5%'),
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: wp('15%')
    },
    boxView: {
        height: hp('31%'),
        width: wp('95%'),
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
        marginTop: hp('5%')
    },
    submitBtn: {
        flexDirection: 'row',
        width: wp('50%'),
        backgroundColor: "#00D9CD",
        borderRadius: 50,
        height: hp('6%'),
        alignItems: "center",
        justifyContent: 'center'
    },
    submitbtnText: {
        color: '#FFFFFF',
        fontSize: hp('2%')
    },
    createText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        marginTop: hp('2%'),
        fontWeight: '900'
    },
    supportText: {
        color: '#222222',
        fontSize: hp('2%'),
        textDecorationLine: 'underline'
    },
})
