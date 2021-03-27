import React from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, ToastAndroid, StatusBar } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './styles';
import * as SCREEN from '../../context/screen/screenName';
import AntDesign from 'react-native-vector-icons/AntDesign';

const inviteScreen = (props) => {
    function onPressSubmit() {
        ToastAndroid.show('User invited!', ToastAndroid.SHORT);
        props.navigation.replace(SCREEN.MYPROFILESCREEN);
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View style={{ justifyContent: 'flex-start', marginLeft: wp('5%'), marginTop: hp('5%') }}>
                <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.MYPROFILESCREEN) }}>
                    <AntDesign name="arrowleft" color="#5AC8FA" size={24} />
                </TouchableOpacity>
            </View>
            <View style={STYLES.styles.centeView}>
                <View style={STYLES.styles.boxView}>
                    <Text style={STYLES.styles.invitetitle}>Invite</Text>
                    <View >
                        <Text style={STYLES.styles.fieldtitle}>Email Address</Text>
                        <View style={STYLES.styles.inputView}>
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="Email Address"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#404040"
                            />
                        </View>

                        <Text style={STYLES.styles.fieldtitle}>Phone Number</Text>
                        <View style={STYLES.styles.inputView}>
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="Phone Number"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#404040"
                            />
                        </View>

                        <Text style={STYLES.styles.fieldtitle}>Full Name</Text>
                        <View style={STYLES.styles.inputView}>
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="Full Name"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#404040"
                            />
                        </View>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                        <TouchableOpacity style={STYLES.styles.submitBtn} onPress={() => onPressSubmit()} >
                            <Text style={STYLES.styles.submitbtnText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default inviteScreen
