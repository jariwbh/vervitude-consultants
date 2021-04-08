import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA'
    },
    cardview: {
        width: WIDTH - 20,
        height: 580,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: 30,
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
    modalView: {
        marginTop: HEIGHT / 2,
        height: 200,
        width: WIDTH - 90,
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
    msgModalView: {
        marginTop: HEIGHT / 2,
        height: 200,
        width: WIDTH - 90,
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
    profileImage: {
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: 80,
        height: 80
    },
    profileImageView: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: 90,
        height: 90,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        borderRadius: 50,
        borderColor: '#000000'
    },
    savebtn: {
        flexDirection: 'row',
        marginRight: 50,
        width: 140,
        height: 40,
        backgroundColor: '#5AC8FA',
        borderRadius: 20,
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
        width: 140,
        height: 40,
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
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
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        borderWidth: 0.5,
        borderColor: '#000000',
        width: WIDTH - 120,
        height: 40,
        borderRadius: 5,
        marginBottom: 20
    },
    TextInput: {
        fontSize: 14,
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginLeft: 5
    },
    textAreainputView: {
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        borderWidth: 0.5,
        borderColor: '#000000',
        width: WIDTH - 120,
        height: 100,
        borderRadius: 5
    },
    TextareaInput: {
        fontSize: 14,
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginLeft: 5,
    }
})
