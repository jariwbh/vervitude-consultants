import React, { Component } from 'react'
import { Text, View, Modal, ImageBackground, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, ToastAndroid, StatusBar, BackHandler, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import { MAINSCREEN, REGISTERSCREEN } from '../../context/screen/screenName';
import LoginService from '../../services/LoginService/LoginService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type';
import axiosConfig from '../../helpers/axiosConfig';
import Loader from '../../components/loader';
import * as STYLES from './styles';

export default class loginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
            showModalVisible: false,
            showMessageModalVisible: false
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
        this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        });

        this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        });
    }

    showModalVisible = (visible) => {
        this.setState({ showModalVisible: visible });
    }

    showModalVisibleSubmit = (visible) => {
        this.setState({ showModalVisible: visible });
        this.showMessageModalVisible(true);
    }

    showMessageModalVisible = (visible) => {
        this.setState({ showMessageModalVisible: visible });
    }

    componentWillUnmount() {
        this._unsubscribeSiFocus();
        this._unsubscribeSiBlur();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    //mobile back press to call
    handleBackButton = () => {
        BackHandler.exitApp()
        return true;
    }

    //check email validation
    setEmail(email) {
        if (!email || email <= 0) {
            return this.setState({ usererror: 'User Name cannot be empty' });
        }
        return this.setState({ username: email, usererror: null });
    }

    //check password validation
    setPassword(password) {
        if (!password || password.length <= 0) {
            return this.setState({ passworderror: 'Password cannot be empty' });
        }
        return this.setState({ password: password, passworderror: null });
    }

    //clear Field up data
    resetScreen() {
        this.setState({
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false
        });
    }

    //add local storage Records
    authenticateUser = (user) => (
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user))
    )

    //SIGN IN BUTTON ONPRESS TO PROCESS
    onPressSubmit = () => {
        const { username, password } = this.state;
        if (!username || !password) {
            this.setEmail(username);
            this.setPassword(password);
            return;
        }
        const body = {
            username: username,
            password: password
        }
        this.setState({ loading: true });
        try {
            LoginService(body)
                .then(response => {
                    console.log('response', response);
                    if (response.data.type && response.data.type == 'Error') {
                        this.setState({ loading: false })
                        if (Platform.OS === 'android') {
                            ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG)
                        } else {
                            alert("Username and Password Invalid!");
                        }
                        this.resetScreen();
                        return
                    }

                    if (response.data != null && response.data != 'undefind' && response.status == 200) {
                        let token = response.data.user._id;
                        //set header auth user key
                        axiosConfig(token);
                        this.authenticateUser(response.data.user);
                        this.setState({ loading: false })
                        if (Platform.OS === 'android') {
                            ToastAndroid.show("SignIn Success!", ToastAndroid.LONG);
                        } else {
                            alert("SignIn Success!");
                        }
                        this.props.navigation.navigate(MAINSCREEN);
                        return
                    }
                })
        }
        catch (error) {
            console.log('error', error);
            this.setState({ loading: false });
            this.resetScreen();
            if (Platform.OS === 'android') {
                ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG);
            } else {
                alert("Username and Password Invalid!");
            }
        };
    }

    render() {
        const { loading, showModalVisible, showMessageModalVisible, usererror, passworderror } = this.state;
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
                                    <View style={usererror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder="Email Address"
                                            type='clear'
                                            returnKeyType="next"
                                            defaultValue={this.state.username}
                                            placeholderTextColor="#000000"
                                            blurOnSubmit={false}
                                            onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                            onChangeText={(email) => this.setEmail(email)}
                                        />
                                    </View>
                                    <View style={passworderror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder="Password"
                                            type='clear'
                                            defaultValue={this.state.password}
                                            placeholderTextColor="#000000"
                                            secureTextEntry={true}
                                            returnKeyType="done"
                                            ref={this.secondTextInputRef}
                                            onSubmitEditing={() => this.onPressSubmit()}
                                            onChangeText={(password) => this.setPassword(password)}
                                        />
                                    </View>
                                </View>
                                <View style={STYLES.styles.centeView} >
                                    <TouchableOpacity onPress={() => this.showModalVisible(true)} >
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
                    <View style={{ marginBottom: hp('25%') }}></View>
                </ScrollView>
                { loading ? <Loader /> : null}
                {/* Help & Support model Pop */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModalVisible}
                    onRequestClose={() => { this.showModalVisible(!showModalVisible) }}
                >

                    <View style={STYLES.styles.centerView}>
                        <View style={STYLES.styles.modalView}>
                            <View style={{ marginTop: hp('5%') }}></View>
                            <View style={STYLES.styles.modelInputView}>
                                <TextInput
                                    style={STYLES.styles.modelTextInput}
                                    placeholder="Subject"
                                    type='clear'
                                    returnKeyType="next"
                                    placeholderTextColor="#999999"
                                />
                            </View>

                            <View style={STYLES.styles.modelTextAreainputView}>
                                <TextInput
                                    style={STYLES.styles.modelTextareaInput}
                                    placeholder="Write Your Descripation"
                                    type='clear'
                                    returnKeyType="done"
                                    placeholderTextColor="#999999"
                                    blurOnSubmit={false}
                                    numberOfLines={3}
                                    multiline={true}
                                />
                            </View>

                        </View>
                        <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { this.showModalVisibleSubmit(!showModalVisible) }}
                                style={STYLES.styles.savebtn}>
                                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.showModalVisible(!showModalVisible) }}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: hp('2%'), color: '#000000' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* message model Pop */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showMessageModalVisible}
                    onRequestClose={() => { this.showMessageModalVisible(!showMessageModalVisible) }}
                >
                    <View style={STYLES.styles.centerView}>
                        <View style={STYLES.styles.msgModalView}>
                            <Image source={require('../../assets/images/smileicon.png')} style={{ marginTop: hp('2%'), height: 40, width: 40 }} />
                            <Text style={{ marginTop: hp('2%'), fontSize: hp('2%') }}>Sorry to hear about the issue</Text>
                            <Text style={{ fontSize: hp('2%') }}>Your quiry has been Submit</Text>
                            <Text style={{ marginTop: hp('2%'), fontSize: hp('2%') }}>You will hear from us very soon</Text>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: hp('2%') }}>
                            <TouchableOpacity onPress={() => { this.showMessageModalVisible(!showMessageModalVisible) }}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: hp('2%'), color: '#000000' }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}
