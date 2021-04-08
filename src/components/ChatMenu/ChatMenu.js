import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ChatMenu(props) {
    return (
        <TouchableOpacity style={styles.categoryIcon} onPress={props.onPress} >
            <Image source={require('../../assets/images/chaticon.png')}
                style={{ alignItems: 'center', height: 25, width: 28, }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryIcon: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


