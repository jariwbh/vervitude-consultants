import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    box1: {
        flexDirection: 'column',
        width: WIDTH / 2 - 20,
        height: 110,
        backgroundColor: '#04DE71',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    box2: {
        flexDirection: 'column',
        width: WIDTH / 2 - 20,
        height: 110,
        backgroundColor: '#0F74C8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    box3: {
        flexDirection: 'column',
        width: WIDTH / 2 - 20,
        height: 110,
        backgroundColor: '#00D9CE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    box4: {
        flexDirection: 'column',
        width: WIDTH / 2 - 20,
        height: 110,
        backgroundColor: '#FFE620',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    boxtext: {
        fontSize: 26,
        textAlign: 'center',
        marginLeft: 2,
        color: '#FFFFFF'
    },
    boxtextsecond: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    boxuppertext: {
        fontSize: 12,
        color: '#FFFFFF',
        marginLeft: 60
    },
    filterBtn: {
        marginTop: 15,
        flexDirection: 'row',
        width: WIDTH / 2 - 40,
        height: 40,
        backgroundColor: '#5AC8FA',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: 10
    },
    filterBtnText: {
        color: '#FFFFFF',
        fontSize: 16
    },
    cardViewlastHistory: {
        flexDirection: 'column',
        borderRadius: 30,
        marginTop: 15,
        width: WIDTH - 20,
        height: 600,
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardViewChart: {
        borderRadius: 30,
        marginTop: 15,
        flexDirection: 'column',
        width: WIDTH - 20,
        height: 280,
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
        height: HEIGHT / 3 + 20,
        width: WIDTH - 90,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalViewOnline: {
        height: HEIGHT / 3,
        width: WIDTH - 50,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: '#000000',
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
        marginLeft: 10,
        width: WIDTH / 3,
        height: 35,
        backgroundColor: '#5AC8FA',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
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
        marginRight: 10,
        width: WIDTH / 3,
        height: 35,
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
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
        width: WIDTH / 4,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    onlineswitchBtnText: {
        color: '#5AC8FA',
        fontSize: 14,
        marginLeft: 15
    },
    oflineswitchBtn: {
        flexDirection: 'row',
        width: WIDTH / 4,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    oflineswitchBtnText: {
        color: '#000000',
        fontSize: 14,
        marginLeft: 15
    }
})