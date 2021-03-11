import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    statusbar: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: '#737373',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        marginTop: 20,
        width: width - 40,
        height: height / 12,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 20
    },
    statInput: {
        fontSize: 15,
        flex: 1,
        marginLeft: 2,
        alignItems: "center",
    },
    categorie: {
        flexDirection: 'row',
        width: width / 5,
        height: height / 15,
        backgroundColor: 'pink',
        alignItems: 'center',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    }
})