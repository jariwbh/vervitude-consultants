import React, { useState, useEffect } from 'react';
import {
    Text, View, Dimensions, SafeAreaView, Image, TouchableOpacity, ScrollView, Modal,
    TextInput, ToastAndroid, Platform, Pressable, ActivityIndicator, StatusBar, Keyboard
} from 'react-native';
import HelpSupportService from '../../services/HelpSupportService/HelpSupportService'
import MenuButton from '../../components/ProfileMenuButton/ProfileMenuButton';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as SCREEN from '../../context/screen/screenName';
import { AUTHUSER } from '../../context/actions/type'
import Loader from '../../components/loader/index';
import * as STYLES from './styles';
import { getByIdUserService } from '../../services/UserService/UserService';
import { WalletDetailService } from '../../services/WalletService/WalletService';
import { NotificationService } from '../../services/NotificationService/NotificationService';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import { useFocusEffect } from '@react-navigation/native';

const myProfileScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [showModalVisible, setshowModalVisible] = useState(false);
    const [showMessageModalVisible, setshowMessageModalVisible] = useState(false);
    const [userDetails, setuserDetails] = useState(null);
    const [subject, setsubject] = useState(null);
    const [subjecterror, setsubjecterror] = useState(null);
    const [description, setdescription] = useState(null);
    const [descriptionerror, setdescriptionerror] = useState(null);
    const [walletBalance, setWalletBalance] = useState(null);
    const [notification, setNotification] = useState(0);
    const [userId, setUserId] = useState(null);
    const secondTextInputRef = React.createRef();

    useEffect(() => {
    }, [userDetails, subject, subjecterror, description, descriptionerror, loading, walletBalance, notification, userId]);

    useFocusEffect(
        React.useCallback(() => {
            getUserData();
        }, [])
    );

    //get AsyncStorage current user Details
    const getUserData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var UserInfo = JSON.parse(getUser);
            setUserId(UserInfo._id);
            setuserDetails(UserInfo);
            await getWalletDetail(UserInfo._id);
            await getNotification(UserInfo._id);
            await getByIdUser(UserInfo._id);
        }
    }

    //get notification count
    const getNotification = async (id) => {
        try {
            const response = await NotificationService(id);
            setNotification(response.data.length);
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //get wallet balance details
    const getWalletDetail = async (id) => {
        try {
            const response = await WalletDetailService(id);
            if (response.data != null && response.data.length != 0 && response.data != 'undefind' && response.status == 200) {
                setWalletBalance(response.data[0]);
            }
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //get member details 
    const getByIdUser = async (id) => {
        try {
            const response = await getByIdUserService(id);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                authenticateUser(response.data);
                setuserDetails(UserInfo);
            }
        } catch (error) {
            setloading(false);
        }
    }

    //REPLACE AND ADD LOCAL STORAGE FUNCTION
    const authenticateUser = (user) => {
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user));
    }

    //LogOut Button click to call 
    const onPressLogout = () => {
        AsyncStorage.removeItem(AUTHUSER);
        if (Platform.OS === 'android') {
            ToastAndroid.show('Log Out Success!', ToastAndroid.SHORT);
        } else {
            alert('Log Out Success!');
        }
        props.navigation.replace(SCREEN.LOGINSCREEN);
    }

    //check validation of subject
    const setSubject = (subject) => {
        if (!subject || subject <= 0) {
            return setsubjecterror('subject cannot be empty');
        }
        setsubject(subject);
        setsubjecterror(null);
        return;
    }

    //check validation of description
    const setDescription = (description) => {
        if (!description || description <= 0) {
            return setdescriptionerror('description cannot be empty');
        }
        setdescription(description);
        setdescriptionerror(null);
        return;
    }

    //help model pop up submit button touch to called
    const onPressSubmit = () => {
        if (!description || !subject) {
            setSubject(subject);
            setDescription(description);
            return;
        }
        const body = {
            'status': 'Requested',
            'subject': subject,
            'customerid': userId,
            'onModel': 'User',
            'category': 'System Enhancements',
            'content': description
        }
        setloading(true);
        try {
            HelpSupportService(body).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {

                    setloading(false);
                    setshowModalVisible(false);
                    setshowMessageModalVisible(true);
                    getNotification(userId);
                    setsubject(null)
                    setsubjecterror(null);
                    setdescription(null);
                    setdescriptionerror(null);
                }
            })
        }
        catch (error) {
            console.log(`error`, error);
            setloading(false);
            if (Platform.OS === 'android') {
                ToastAndroid.show('Message Sending Failed!', ToastAndroid.SHORT);
            } else {
                alert('Message Sending Failed!');
            }
            onPressCancel();
        }
    }

    //help model pop up cancel button touch to called
    const onPressCancel = () => {
        setsubject(null);
        setdescription(null);
        setsubjecterror(null);
        setdescriptionerror(null);
        setshowModalVisible(false);
    }

    //view profile function
    const onTouchViewProfile = () => {
        let userProfileImage = userDetails && userDetails.profilepic ? userDetails.profilepic : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png'
        props.navigation.navigate(SCREEN.VIEWPROFILESCREEN, { userProfileImage });
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <StatusBar backgroundColor='#5AC8FA' barStyle='dark-content' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 30, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <MenuButton onPress={() => { props.navigation.navigate(SCREEN.HOMESCREEN) }} />
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.NOTIFICATIONSCREEN)}
                            style={{ marginLeft: 30, marginTop: -10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/notificationicon.png')} style={{ height: 25, width: 20 }} />
                            <View style={{ marginLeft: 15, marginTop: -40, height: 22, width: 22, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EB5757' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FFFFFF' }}>{notification}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.MYEARINGSCREEN)}
                            style={{ height: 40, backgroundColor: '#FFFFFF', flexDirection: 'row', borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                            <Text style={{ fontSize: 16, color: '#5AC8FA', marginLeft: 10 }}>{walletBalance && walletBalance.wallet && walletBalance.wallet.balance ? (walletBalance.wallet.balance).toFixed(2) : 0}</Text>
                            <View style={{ width: 25, height: 25, backgroundColor: '#5AC8FA', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 20, justifyContent: 'center' }}>
                                <FontAwesome name='rupee' size={18} color='#FFFFFF' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={STYLES.styles.centerView}>
                    <View style={STYLES.styles.cardview}>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>
                            <View >
                                <Text style={{ fontWeight: 'bold', fontSize: 20, textTransform: 'capitalize' }}>{userDetails ? userDetails.fullname : null}</Text>
                                <Text style={{ fontSize: 14, textTransform: 'capitalize' }}>{userDetails ? userDetails.property.usertag && userDetails.property.usertag : null}</Text>
                            </View>
                            <Pressable onPress={() => onTouchViewProfile()}
                                style={STYLES.styles.profileImageView}>
                                <Image source={{ uri: userDetails ? userDetails.profilepic !== null && userDetails.profilepic ? userDetails.profilepic : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png' : null }}
                                    style={STYLES.styles.profileImage} />
                            </Pressable>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.EDITSCREEN)}
                            style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/images/profileicon.png')} style={{ height: 25, width: 25, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>My Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.CHATHISTORYSCREEN)}
                            style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Image source={require('../../assets/images/conversation.png')} style={{ height: 25, width: 25, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>My Conversations</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 5 }}
                            onPress={() => props.navigation.navigate(SCREEN.MYEARINGSCREEN)}>
                            <Image source={require('../../assets/images/Group.png')} style={{ height: 15, width: 25, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>My Earnings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 25 }}
                            onPress={() => props.navigation.navigate(SCREEN.SELECTCATEGORYSCREEN)}>
                            <Image source={require('../../assets/images/categories.png')} style={{ height: 22, width: 22, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>My Categories</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }} onPress={() => { setshowModalVisible(true) }}>
                            <Image source={require('../../assets/images/Help.png')} style={{ height: 25, width: 25, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>Help & Support</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }} onPress={() => props.navigation.navigate(SCREEN.INVITESCREEN)}>
                            <Image source={require('../../assets/images/invite.png')} style={{ height: 25, width: 25, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>Invite a Consultant</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 100 }} onPress={() => onPressLogout()}>
                            <Image source={require('../../assets/images/logout.png')} style={{ height: 25, width: 30, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 30 }}></View>
            </ScrollView>
            {/* Help & Support model Pop */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={showModalVisible}
                onRequestClose={() => { setshowModalVisible(!showModalVisible) }}
            >
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ position: 'absolute', bottom: 20 }}>
                        <View style={STYLES.styles.modalView}>
                            <View style={{ marginTop: 20 }}></View>
                            <View style={subjecterror == null ? STYLES.styles.inputView : STYLES.styles.inputViewError}>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder='Subject'
                                    type='clear'
                                    returnKeyType='next'
                                    placeholderTextColor='#999999'
                                    defaultValue={subject}
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => { secondTextInputRef.current.focus() }}
                                    onChangeText={(subject) => setSubject(subject)}
                                />
                            </View>
                            <View style={descriptionerror == null ? STYLES.styles.textAreainputView : STYLES.styles.textAreainputViewError}>
                                <TextInput
                                    style={STYLES.styles.TextareaInput}
                                    placeholder='Write Your Description'
                                    type='clear'
                                    returnKeyType='done'
                                    placeholderTextColor='#999999'
                                    blurOnSubmit={false}
                                    numberOfLines={3}
                                    multiline={true}
                                    defaultValue={description}
                                    blurOnSubmit={false}
                                    ref={secondTextInputRef}
                                    onChangeText={(description) => setdescription(description)}
                                    onSubmitEditing={() => Keyboard.dismiss()}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => { onPressSubmit(), Keyboard.dismiss() }}
                                style={STYLES.styles.savebtn}>
                                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressCancel()}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* message model Pop */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={showMessageModalVisible}
                onRequestClose={() => { setshowMessageModalVisible(false) }}
            >
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ position: 'absolute', bottom: 20 }}>
                        <View style={STYLES.styles.msgModalView}>
                            <Image source={require('../../assets/images/smileicon.png')} style={{ marginTop: 25, height: 40, width: 40 }} />
                            <Text style={{ fontSize: 14, color: '#000000', marginTop: 15 }}>Thank you for your Feedback</Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>We will get back you shortly</Text>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity onPress={() => { setshowMessageModalVisible(false) }}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}
export default myProfileScreen;



