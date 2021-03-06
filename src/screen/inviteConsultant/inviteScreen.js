import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Platform, ToastAndroid, StatusBar } from 'react-native';
import RegisterService from '../../services/RegisterService/RegisterService';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Loader from '../../components/loader/index';
import * as STYLES from './styles';
import GeneralStatusBarColor from '../../components/StatusBarStyle/GeneralStatusBarColor';
import crashlytics, { firebase } from "@react-native-firebase/crashlytics";

const inviteScreen = (props) => {
    const [fullname, setfullname] = useState(null);
    const [fullnameerror, setfullnameerror] = useState(null);
    const [username, setusername] = useState(null);
    const [usererror, setusererror] = useState(null);
    const [mobile_number, setmobile_number] = useState(null);
    const [mobile_numbererror, setmobile_numbererror] = useState(null);
    const [loading, setloading] = useState(false);
    const secondTextInputRef = React.createRef();
    const thirdTextInputRef = React.createRef();

    //check validation of fullname
    const setFullname = (fullname) => {
        if (!fullname || fullname <= 0) {
            return setfullnameerror('Full Name cannot be empty');
        }
        setfullname(fullname);
        setfullnameerror(null);
        return;
    }

    //check validation of email
    const setEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            setusererror('Email Id can not be empty');
            setusername(null);
            return;
        }
        if (!re.test(email)) {
            setusererror('Ooops! We need a valid email address');
            setusername(null);
            return;
        }
        setusername(email);
        setusererror(null);
        return;
    }

    //check validation of mobile number
    const setMobile_number = (mobile_number) => {
        const reg = /^\d{10}$/;
        if (!mobile_number || mobile_number.length <= 0) {
            setmobile_number(null);
            setmobile_numbererror('Mobile Number cannot be empty');
            return;
        }
        if (!reg.test(mobile_number)) {
            setmobile_number(null);
            setmobile_numbererror('Ooops! We need a valid Mobile Number');
            return;
        }
        setmobile_number(mobile_number);
        setmobile_numbererror(null);
        return;
    }

    //reset all fields
    const resetScreen = () => {
        setfullname(null);
        setfullnameerror(null);
        setusername(null);
        setusererror(null);
        setmobile_number(null);
        setmobile_numbererror(null);
        setloading(false);
    }

    //submit button click to called
    const onPressSubmit = () => {
        if (!username || !fullname || !mobile_number) {
            setEmail(username);
            setFullname(fullname);
            setMobile_number(mobile_number);
            return;
        }

        const body = {
            'property': {
                'fullname': fullname,
                'mobile': mobile_number,
                'primaryemail': username,
                'type': 'consultant'
            }
        }
        setloading(true);
        try {
            RegisterService(body).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    setloading(false);
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('User invited!', ToastAndroid.SHORT);
                    } else {
                        alert('User invited!');
                    }
                    resetScreen();
                }
            })
            props.navigation.replace(SCREEN.MYPROFILESCREEN);
        }
        catch (error) {
            setloading(false);
            firebase.crashlytics().recordError(error);
            if (Platform.OS === 'android') {
                ToastAndroid.show('invited Failed!', ToastAndroid.SHORT);
            } else {
                alert('invited Failed!');
            }
            resetScreen();
        }
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <GeneralStatusBarColor hidden={false} translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                <View style={{ justifyContent: 'flex-start', marginLeft: 20, marginTop: 30 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                        <AntDesign name='arrowleft' color='#5AC8FA' size={24} />
                    </TouchableOpacity>
                </View>
                <View style={STYLES.styles.centeView}>
                    <View style={STYLES.styles.boxView}>
                        <Text style={STYLES.styles.invitetitle}>Invite</Text>
                        <View >
                            <Text style={STYLES.styles.fieldtitle}>Email Address</Text>
                            <View style={usererror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder='Email Address'
                                    type='clear'
                                    returnKeyType='next'
                                    placeholderTextColor='#404040'
                                    defaultValue={username}
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => { secondTextInputRef.current.focus() }}
                                    onChangeText={(username) => setEmail(username)}
                                />
                            </View>

                            <Text style={STYLES.styles.fieldtitle}>Phone Number</Text>
                            <View style={mobile_numbererror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder='Phone Number'
                                    type='clear'
                                    returnKeyType='next'
                                    placeholderTextColor='#404040'
                                    defaultValue={mobile_number}
                                    ref={secondTextInputRef}
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => { thirdTextInputRef.current.focus() }}
                                    onChangeText={(mobile_number) => setMobile_number(mobile_number)}
                                />
                            </View>

                            <Text style={STYLES.styles.fieldtitle}>Full Name</Text>
                            <View style={fullnameerror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder='Full Name'
                                    type='clear'
                                    returnKeyType='done'
                                    placeholderTextColor='#404040'
                                    defaultValue={fullname}
                                    blurOnSubmit={false}
                                    ref={thirdTextInputRef}
                                    onSubmitEditing={() => onPressSubmit()}
                                    onChangeText={(fullname) => setFullname(fullname)}
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
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}

export default inviteScreen
