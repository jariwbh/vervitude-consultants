import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, ToastAndroid, StatusBar } from 'react-native'
import { FORGOTPASSWORDSCREEN, HOMESCREEN, REGISTERSCREEN } from '../../context/screen/screenName';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type'

export default class loginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
    }

    setEmail(email) {
        if (!email || email <= 0) {
            return this.setState({ usererror: 'User Name cannot be empty' });
        }
        return this.setState({ username: email, usererror: null });
    }

    setPassword(password) {
        if (!password || password.length <= 0) {
            return this.setState({ passworderror: 'Password cannot be empty' });
        }
        return this.setState({ password: password, passworderror: null });
    }

    resetScreen() {
        this.setState({
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        });
    }

    authenticateUser = (user) => (
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user))
    )

    onPressSubmit = async () => {
        const { username, password } = this.state;
        // if (!username || !password) {
        //     this.setEmail(username);
        //     this.setPassword(password);
        //     return;
        // }
        const body = {
            username: username,
            password: password
        }
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false })
            ToastAndroid.show("SignIn Success!", ToastAndroid.LONG);
            this.props.navigation.navigate(HOMESCREEN);
        }, 3000);

    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <StatusBar backgroundColor="#80caff" hidden barStyle="light-content" />
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={STYLES.styles.circle}>
                        <Image source={require('../../assets/images/icon.png')} style={STYLES.styles.imageView} />
                    </View>
                    <ImageBackground
                        source={require('../../assets/images/3.png')}
                        style={STYLES.styles.backgroundImage}></ImageBackground>
                    <View>
                        <View style={{ marginTop: hp('-28%') }}>
                            <Text style={STYLES.styles.textColor}>Help, People</Text>
                            <Text style={STYLES.styles.textColor}>Find answers</Text>
                        </View>
                        <View style={{ marginTop: hp('1%') }}>
                            <Text style={STYLES.styles.textColor}>Be an Expert</Text>
                        </View>
                        <View style={STYLES.styles.centeView}>
                            <View style={STYLES.styles.boxView}>
                                <View style={{ marginTop: hp('2%') }}>
                                    <View style={STYLES.styles.inputView}>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder="Email Address"
                                            type='clear'
                                            returnKeyType="next"
                                            placeholderTextColor="#000000"
                                        />
                                    </View>
                                    <View style={STYLES.styles.inputView}>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder="Password"
                                            type='clear'
                                            returnKeyType="next"
                                            placeholderTextColor="#000000"
                                        />
                                    </View>
                                </View>
                                <View style={STYLES.styles.centeView} >
                                    <TouchableOpacity onPress={() => { }} >
                                        <Text style={STYLES.styles.supportText}>Support</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                                    <TouchableOpacity style={STYLES.styles.submitBtn} onPress={() => this.onPressSubmit()} >
                                        <Text style={STYLES.styles.submitbtnText}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={STYLES.styles.centeView} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(REGISTERSCREEN)} >
                                <Text style={STYLES.styles.createText}>Create An account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
