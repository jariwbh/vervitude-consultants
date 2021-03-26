import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
    },
    statInput: {
        fontSize: 15,
        flex: 1,
        marginLeft: 2,
        alignItems: "center",
    },
    box1: {
        flexDirection: 'column',
        width: wp('46%'),
        height: hp('15%'),
        backgroundColor: '#34A853',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('2%')
    },
    box2: {
        flexDirection: 'column',
        width: wp('46%'),
        height: hp('15%'),
        backgroundColor: '#0F74C8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('2%')
    },
    box3: {
        flexDirection: 'column',
        width: wp('46%'),
        height: hp('15%'),
        backgroundColor: '#96D3FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('2%')
    },
    box4: {
        flexDirection: 'column',
        width: wp('46%'),
        height: hp('15%'),
        backgroundColor: '#FFD46B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('2%')
    },
    boxtext: {
        fontSize: hp('4%'),
        textAlign: 'center',
        marginLeft: 2,
        color: '#FFFFFF'
    },
    boxtextsecond: {
        fontSize: hp('2.5%'),
        textAlign: 'center',
        color: '#FFFFFF'
    },
    boxuppertext: {
        fontSize: hp('1.8%'),
        color: '#FFFFFF',
        marginLeft: wp('15%')
    },
    filterBtn: {
        flexDirection: 'row',
        width: wp('40%'),
        height: hp('7%'),
        backgroundColor: "#00D9CD",
        borderRadius: wp('4%'),
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: wp('2%')
    },
    filterBtnText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%')
    },
    cardViewlastHistory: {
        flexDirection: 'column',
        borderRadius: wp('5%'),
        marginTop: hp('2%'),
        width: wp('95%'),
        height: hp('60%'),
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: hp('5%')
    },
    cardViewChart: {
        borderRadius: wp('5%'),
        marginTop: hp('2%'),
        flexDirection: 'column',
        width: wp('95%'),
        height: hp('40%'),
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    centeView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})