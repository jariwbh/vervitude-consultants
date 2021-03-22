import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function MenuButton(props) {
    return (
        <TouchableOpacity style={styles.categoryIcon} onPress={props.onPress} >
            <Image source={require('../../assets/images/2.png')}
                style={{ alignItems: 'center', height: 50, width: 50, marginTop: 2, borderRadius: 50 }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryIcon: {
        width: wp("7%"),
        height: wp("7%"),
        borderRadius: hp('6%'),
        marginLeft: wp('5%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
});


