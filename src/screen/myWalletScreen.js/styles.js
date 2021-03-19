import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    cardview: {
        flex: 1,
        width: width - 30,
        backgroundColor: '#FFFFFF',
        borderRadius: hp('5%'),
        marginTop: hp('5%'),
        marginLeft: wp('3.5%'),
    },
})
