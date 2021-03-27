import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA'
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
        borderColor: '#5AC8FA',
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
        backgroundColor: "#5AC8FA",
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
        color: '#4E4E4E',
        fontSize: hp('2%'),
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    modalView: {
        marginTop: hp('50%'),
        height: hp('35%'),
        width: wp('80%'),
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    msgModalView: {
        marginTop: hp('50%'),
        height: hp('25%'),
        width: wp('80%'),
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }, savebtn: {
        flexDirection: 'row',
        marginRight: hp('10%'),
        width: wp('30%'),
        height: hp('5%'),
        backgroundColor: '#5AC8FA',
        borderRadius: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cancelbtn: {
        flexDirection: 'row',
        width: wp('30%'),
        height: hp('5%'),
        backgroundColor: '#EEEEEE',
        borderRadius: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modelInputView: {
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        borderWidth: wp('0.1%'),
        borderColor: '#000000',
        width: wp('70%'),
        height: hp('6%'),
        borderRadius: hp('0.5%'),
        marginBottom: hp('3%')
    },
    modelTextInput: {
        fontSize: hp('2%'),
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginLeft: hp('1%')
    },
    modelTextAreainputView: {
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        borderWidth: wp('0.1%'),
        borderColor: '#000000',
        width: wp('70%'),
        height: hp('15%'),
        borderRadius: hp('0.5%')
    },
    modelTextareaInput: {
        fontSize: hp('2%'),
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginLeft: hp('1%'),
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
