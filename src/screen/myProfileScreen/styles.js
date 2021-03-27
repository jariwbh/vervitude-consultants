import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA'
    },
    cardview: {
        width: wp('95%'),
        height: hp('85%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginTop: hp('3%'),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        marginTop: hp('40%'),
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
        marginTop: hp('40%'),
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
    },
    profileImage: {
        borderRadius: hp('12%'),
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: hp('13%'),
        height: hp('13%'),
        marginTop: hp('-1%')
    },
    savebtn: {
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
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        borderWidth: wp('0.1%'),
        borderColor: '#000000',
        width: wp('70%'),
        height: hp('6%'),
        borderRadius: hp('0.5%'),
        marginBottom: hp('3%')
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginLeft: hp('1%')
    },
    textAreainputView: {
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        borderWidth: wp('0.1%'),
        borderColor: '#000000',
        width: wp('70%'),
        height: hp('15%'),
        borderRadius: hp('0.5%')
    },
    TextareaInput: {
        fontSize: hp('2%'),
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginLeft: hp('1%'),
    }
})
