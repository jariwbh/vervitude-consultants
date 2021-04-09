import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Platform, ToastAndroid } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLES from './styles';

const inviteScreen = (props) => {
    function onPressSubmit() {
        if (Platform.OS === 'android') {
            ToastAndroid.show("User invited!", ToastAndroid.SHORT);
        } else {
            alert("User invited!");
        }
        props.navigation.replace(SCREEN.MYPROFILESCREEN);
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'flex-start', marginLeft: 20, marginTop: 30 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
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
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity style={STYLES.styles.submitBtn} onPress={() => onPressSubmit()} >
                                <Text style={STYLES.styles.submitbtnText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default inviteScreen
