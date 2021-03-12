import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00b3b3'
    },
    cardview: {
        flex: 1,
        width: width - 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginTop: 50,
        marginLeft: 18,
    },
    profileview: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 5
    }
})
