import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00D9CE'
    },
    cardview: {
        width: wp('95%'),
        height: hp('80%'),
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
    profileImage: {
        borderRadius: hp('12%'),
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: hp('13%'),
        height: hp('13%'),
        marginTop: hp('-1%')
    }
})
