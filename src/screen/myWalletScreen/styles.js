import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    abalanceview: {
        height: height / 4,
        width: width - 30,
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginTop: hp('5%'),
        marginLeft: wp('3.5%'),
        justifyContent: 'center',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        alignItems: 'center',
    },
    gamountview: {
        height: height / 2.5,
        width: width - 30,
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginTop: hp('5%'),
        marginLeft: wp('3.5%'),
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    bankview: {
        height: height / 9,
        width: width - 30,
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginTop: hp('5%'),
        marginLeft: wp('3.5%'),
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        justifyContent: 'center',

    },

})