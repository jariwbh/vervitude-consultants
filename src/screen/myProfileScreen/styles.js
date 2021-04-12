import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

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
        marginTop: HEIGHT / 2 - 100,
        height: 200,
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
    msgModalView: {
        marginTop: HEIGHT / 2 - 100,
        height: 200,
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
    profileImage: {
        borderRadius: 100,
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
        borderRadius: 100,
        borderColor: '#000000'
    },
    savebtn: {
        flexDirection: 'row',
        marginRight: 50,
        width: 100,
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
        width: 100,
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
    inputView: {
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        borderWidth: 0.5,
        borderColor: '#000000',
        width: WIDTH - 120,
        height: 40,
        borderRadius: 5,
        marginBottom: 20
    },
    inputViewError: {
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#FF0000',
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
        backgroundColor: '#F4F4F4',
        borderWidth: 0.5,
        borderColor: '#000000',
        width: WIDTH - 120,
        height: 100,
        borderRadius: 5
    },
    textAreainputViewError: {
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#FF0000',
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

export const Editstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA',
    },
    profileview: {
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        marginTop: 30,
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: '#EFEFEF',
        borderColor: '#FFFFFF',
        width: WIDTH - 40,
        height: 35,
        marginTop: 2,
        alignItems: 'center',
        borderRadius: 3,
        marginLeft: 10
    },
    textAreainputView: {
        flexDirection: 'row',
        backgroundColor: '#EFEFEF',
        borderColor: '#FFFFFF',
        width: WIDTH - 40,
        height: 80,
        marginTop: 1,
        alignItems: 'center',
        borderRadius: 3,
        marginLeft: 10
    },
    TextInput: {
        fontSize: 14,
        flex: 1,
        padding: 5
    },
    TextInputbold: {
        fontSize: 18,
        flex: 1,
        padding: 5,
        fontWeight: 'bold'
    },
    TextareaInput: {
        fontSize: 14,
        flex: 1,
        padding: 5,
        height: 150,
        justifyContent: 'flex-start'
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
        elevation: 5
    },
    generalinfitext: {
        width: WIDTH - 40,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5AC8FA',
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 0,
    },
    // brandstyle: {
    //     color: '#888888',
    //     width: 80,
    //     height: 80,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 100,
    //     shadowColor: '#000000',
    //     shadowOpacity: 0.5,
    //     shadowRadius: 3,
    //     shadowOffset: {
    //         height: 0,
    //         width: 0,
    //     },
    //     elevation: 2
    // }
})

export const Documentstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA'
    },
    profileview: {
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        marginTop: 30,
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: '#EFEFEF',
        borderColor: '#FFFFFF',
        width: WIDTH - 60,
        height: 35,
        marginTop: 5,
        alignItems: 'center',
        borderRadius: 3,
        marginLeft: 20
    },
    TextInput: {
        fontSize: 14,
        flex: 1,
        padding: 5
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
        elevation: 5
    },
    generalinfitext: {
        width: WIDTH - 40,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5EA2FC',
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 0,
    },
    bankinfitext: {
        width: WIDTH - 40,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5AC8FA',
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 0,
    },
    FontBoxStyle: {
        width: WIDTH - 60,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#999999',
        borderWidth: 1
    }
})

export const Bankstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA',
    },
    profileview: {
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        marginTop: 30,
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: '#EFEFEF',
        borderColor: '#FFFFFF',
        width: WIDTH - 50,
        height: 35,
        marginTop: 5,
        alignItems: 'center',
        borderRadius: 3,
        marginLeft: 15
    },
    TextInput: {
        fontSize: 14,
        flex: 1,
        padding: 5
    },
    generalinfitext: {
        width: WIDTH - 40,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5EA2FC',
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 0,
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
        elevation: 5
    },
    ChequeBoxStyle: {
        width: WIDTH - 60,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#999999',
        borderWidth: 1
    }
})
