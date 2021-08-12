import React, { Component } from 'react';
import {
    Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image,
    TextInput, ScrollView, ToastAndroid, StatusBar, Platform, Keyboard
} from 'react-native';
import RegisterService from '../../services/RegisterService/RegisterService';
import { LOGINSCREEN } from '../../context/screen/screenName';
import axiosConfig from '../../helpers/axiosConfig';
import Loader from '../../components/loader';
import * as STYLES from './styles';

export default class registerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: null,
            fullnameerror: null,
            username: null,
            usererror: null,
            mobile_number: null,
            mobile_numbererror: null,
            loading: false
        };
        this.setFullname = this.setFullname.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setMobile_number = this.setMobile_number.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
        this.thirdTextInputRef = React.createRef();
    }

    setFullname(fullname) {
        if (!fullname || fullname <= 0) {
            return this.setState({ fullnameerror: 'Full Name cannot be empty' });
        }
        return this.setState({ fullname: fullname, fullnameerror: null });
    }

    setEmail(email) {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            return this.setState({ usererror: 'Email Id can not be empty', username: null });
        }
        if (!re.test(email)) {
            return this.setState({ usererror: 'Ooops! We need a valid email address', username: null });
        }
        return this.setState({ username: email, usererror: null })
    }

    setMobile_number(mobile_number) {
        const reg = /^\d{10}$/;
        if (!mobile_number || mobile_number.length <= 0) {
            return this.setState({ mobile_numbererror: 'Mobile Number cannot be empty', mobile_number: null });
        }
        if (!reg.test(mobile_number)) {
            return this.setState({ mobile_numbererror: 'Ooops! We need a valid Mobile Number' });
        }
        return this.setState({ mobile_number: mobile_number, mobile_numbererror: null })
    }

    resetScreen() {
        this.setState({
            fullname: null,
            fullnameerror: null,
            username: null,
            usererror: null,
            mobile_number: null,
            mobile_numbererror: null,
            loading: false
        });
    }

    onPressSubmit = () => {
        const { username, fullname, mobile_number } = this.state;
        if (!username || !fullname || !mobile_number) {
            this.setEmail(username);
            this.setFullname(fullname);
            this.setMobile_number(mobile_number);
            return;
        }
        axiosConfig('606abd8799e17f1678300c12');
        const body = {
            'property': {
                'fullname': fullname,
                'mobile': mobile_number,
                'primaryemail': username,
                'type': 'consultant'
            }
        }
        this.setState({ loading: true });
        try {
            RegisterService(body).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    this.setState({ loading: false })
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Request Submited', ToastAndroid.LONG);
                    } else {
                        alert('Request Submited');
                    }
                    this.props.navigation.navigate(LOGINSCREEN);
                }
            })
        }
        catch (error) {
            this.setState({ loading: false })
            if (Platform.OS === 'android') {
                ToastAndroid.show('Request Submited Failed', ToastAndroid.SHORT);
            } else {
                alert('Request Submited Failed');
            }
        }
    }

    render() {
        const { loading, usererror, mobile_numbererror, fullnameerror } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <StatusBar backgroundColor='tarferent' barStyle='light-content' translucent />
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={STYLES.styles.circle}>
                        <Image source={require('../../assets/images/icon.png')} style={STYLES.styles.imageView} />
                    </View>
                    <ImageBackground
                        source={require('../../assets/images/3.png')}
                        style={STYLES.styles.backgroundImage}></ImageBackground>
                    <View>
                        <View style={{ marginTop: -200 }}>
                            <Text style={STYLES.styles.textColor}>Help, People</Text>
                            <Text style={STYLES.styles.textColor}>Find answers</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={STYLES.styles.textColor}>Be an Expert</Text>
                        </View>
                        <View style={STYLES.styles.centeView}>
                            <View style={STYLES.styles.boxView}>
                                <View style={{ marginTop: 15 }}>
                                    <View style={fullnameerror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder='Full Name'
                                            type='clear'
                                            returnKeyType='next'
                                            placeholderTextColor='#000000'
                                            defaultValue={this.state.fullname}
                                            blurOnSubmit={false}
                                            onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                            onChangeText={(fullname) => this.setFullname(fullname)}
                                        />
                                    </View>
                                    <View style={usererror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder='Email Address'
                                            type='clear'
                                            returnKeyType='next'
                                            placeholderTextColor='#000000'
                                            defaultValue={this.state.username}
                                            ref={this.secondTextInputRef}
                                            blurOnSubmit={false}
                                            onSubmitEditing={() => { this.thirdTextInputRef.current.focus() }}
                                            onChangeText={(username) => this.setEmail(username)}
                                        />
                                    </View>
                                    <View style={mobile_numbererror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder='Mobile Number'
                                            type='clear'
                                            keyboardType='number-pad'
                                            returnKeyType='done'
                                            placeholderTextColor='#000000'
                                            defaultValue={this.state.mobile_number}
                                            ref={this.thirdTextInputRef}
                                            blurOnSubmit={false}
                                            onSubmitEditing={() => Keyboard.dismiss()}
                                            onChangeText={(mobile_number) => this.setMobile_number(mobile_number)}
                                        />
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                    <TouchableOpacity style={STYLES.styles.submitBtn} onPress={() => this.onPressSubmit()} >
                                        <Text style={STYLES.styles.submitbtnText}>Join Us</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={STYLES.styles.centeView} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={STYLES.styles.loginText}>Already have an account?</Text>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate(LOGINSCREEN), this.resetScreen() }} >
                                    <Text style={STYLES.styles.loginText}>{' ' + 'Login'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={STYLES.styles.centeView} >
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate(LOGINSCREEN), this.resetScreen() }} >
                                <Text style={STYLES.styles.loginText}>{' ' + ' Go to Back Login'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginVertical: 20 }} />
                </ScrollView>
                {loading ? <Loader /> : null}
            </SafeAreaView>
        )
    }
}
