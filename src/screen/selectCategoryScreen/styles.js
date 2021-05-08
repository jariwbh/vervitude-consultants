import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    graficview: {
        flexDirection: 'row',
        width: WIDTH - 40,
        height: 70,
        backgroundColor: '#04DE71',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    uxview: {
        flexDirection: 'row',
        width: WIDTH - 40,
        height: 70,
        backgroundColor: '#FFE620',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    interiorview: {
        flexDirection: 'row',
        width: WIDTH - 40,
        height: 70,
        backgroundColor: '#96D3FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    applyview: {
        flexDirection: 'row',
        width: WIDTH - 40,
        height: 60,
        backgroundColor: '#5AC8FA',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitbtn: {
        flexDirection: 'row',
        marginRight: 15,
        width: 90,
        height: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2
    },
})