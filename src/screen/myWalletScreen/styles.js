import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const Transferstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    abalanceview: {
        height: 180,
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2
    },
    gamountview: {
        height: 280,
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: 0,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        marginBottom: 10
    },
    bankview: {
        height: 70,
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: 20,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        justifyContent: 'center'
    },
    wallatwbtn: {
        flexDirection: 'row',
        marginRight: 15,
        height: 40,
        width: 140,
        backgroundColor: '#04DE71',
        flexDirection: 'row',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})

export const Wallatestyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    balanceview: {
        height: 180,
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginBottom: 10
    },
    bankview: {
        height: 70,
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: 0,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        justifyContent: 'center',
        marginBottom: 10
    },
    wallatwbtn: {
        flexDirection: 'row',
        marginRight: 15,
        height: 40,
        backgroundColor: '#04DE71',
        flexDirection: 'row',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})