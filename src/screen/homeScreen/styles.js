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
        backgroundColor: '#04DE71',
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
        backgroundColor: '#00D9CE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('2%')
    },
    box4: {
        flexDirection: 'column',
        width: wp('46%'),
        height: hp('15%'),
        backgroundColor: '#FFE620',
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
        backgroundColor: "#5AC8FA",
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
    },
    modalView: {
        marginTop: hp('50%'),
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
    onlineswitchBtn: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: hp('5%'),
        alignItems: "center",
        justifyContent: 'center'
    },
    onlineswitchBtnText: {
        color: '#5AC8FA',
        fontSize: hp('2%'),
        marginRight: wp('2%')
    },
    oflineswitchBtn: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: hp('5%'),
        alignItems: "center",
        justifyContent: 'center'
    },
    oflineswitchBtnText: {
        color: '#000000',
        fontSize: hp('2%'),
        marginLeft: wp('2%')
    }
})