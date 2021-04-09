import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Modal, TextInput, ToastAndroid, Platform } from 'react-native';
import MenuButton from '../../components/ProfileMenuButton/ProfileMenuButton';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as SCREENNAME from '../../context/screen/screenName'
import * as SCREEN from '../../context/screen/screenName';
import { AUTHUSER } from '../../context/actions/type'
import * as STYLES from './styles';

const myProfileScreen = (props) => {
    //const [loading, setloading] = useState(false);
    const [showModalVisible, setshowModalVisible] = useState(false);
    const [showMessageModalVisible, setshowMessageModalVisible] = useState(false);
    const [userDetails, setuserDetails] = useState(null);

    const getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var UserInfo = JSON.parse(getUser);
            setuserDetails(UserInfo);
        }
    }

    useEffect(() => {
        getStudentData();
    }, []);

    //LogOut Button click to call 
    const onPressLogout = () => {
        AsyncStorage.removeItem(AUTHUSER);
        if (Platform.OS === 'android') {
            ToastAndroid.show("Log Out Success!", ToastAndroid.SHORT);
        } else {
            alert("Log Out Success!");
        }
        props.navigation.replace(SCREENNAME.LOGINSCREEN);
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 30, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                    <View style={{ justifyContent: 'flex-start' }}>
                        <MenuButton onPress={() => { props.navigation.navigate(SCREEN.HOMESCREEN) }} />
                    </View>

                    <View style={{ marginLeft: -150 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.NOTIFICATIONSCREEN)}>
                            <Image source={require('../../assets/images/notificationicon.png')} style={{ height: 25, width: 20 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ height: 40, width: 130, backgroundColor: '#FFFFFF', flexDirection: 'row', borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>5324.00</Text>
                            <View style={{ width: 25, height: 25, backgroundColor: '#5AC8FA', alignItems: 'center', marginLeft: 15, borderRadius: 20, justifyContent: 'center' }}>
                                <FontAwesome name="rupee" size={18} color='#FFFFFF' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={STYLES.styles.centerView}>
                    <View style={STYLES.styles.cardview}>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>
                            <View >
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{userDetails ? userDetails.fullname : null}</Text>
                                <Text>#{userDetails ? userDetails.property.primaryemail : null}</Text>
                            </View>
                            <View style={STYLES.styles.profileImageView}>
                                <Image source={{ uri: userDetails ? userDetails.profileimage ? userDetails.profileimage : "https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png" : null }}
                                    style={STYLES.styles.profileImage}
                                />
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.EDITSCREEN)}
                            style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/images/profileicon.png')} style={{ height: 25, width: 25, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>My Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.CHATHISTORYSCREEN)}
                            style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Image source={require('../../assets/images/conversation.png')} style={{ height: 25, width: 25, marginLeft: 20 }} />
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>My conversations</Text>
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
                            <Text style={{ marginLeft: 20, color: '#4D4D4D', fontSize: 16 }}>LogOut</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 30 }}></View>
            </ScrollView>
            {/* Help & Support model Pop */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModalVisible}
                onRequestClose={() => { setshowModalVisible(!showModalVisible) }}
            >
                <View style={STYLES.styles.centerView}>
                    <View style={STYLES.styles.modalView}>
                        <View style={{ marginTop: 20 }}></View>
                        <View style={STYLES.styles.inputView}>
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="Subject"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#999999"
                            />
                        </View>

                        <View style={STYLES.styles.textAreainputView}>
                            <TextInput
                                style={STYLES.styles.TextareaInput}
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
                    <View style={{ marginTop: 15, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { setshowModalVisible(false), setshowMessageModalVisible(true) }}
                            style={STYLES.styles.savebtn}>
                            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setshowModalVisible(false) }}
                            style={STYLES.styles.cancelbtn}>
                            <Text style={{ fontSize: 14, color: '#000000' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* message model Pop */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showMessageModalVisible}
                onRequestClose={() => { setshowMessageModalVisible(false) }}
            >
                <View style={STYLES.styles.centerView}>
                    <View style={STYLES.styles.msgModalView}>
                        <Image source={require('../../assets/images/smileicon.png')} style={{ marginTop: 15, height: 40, width: 40 }} />
                        <Text style={{ marginTop: 15, fontSize: 14, color: '#000000' }}>Sorry to hear about the issue</Text>
                        <Text style={{ fontSize: 14, color: '#000000' }}>Your quiry has been Submit</Text>
                        <Text style={{ marginTop: 15, fontSize: 14, color: '#000000' }}>You will hear from us very soon</Text>
                    </View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity onPress={() => { setshowMessageModalVisible(false) }}
                            style={STYLES.styles.cancelbtn}>
                            <Text style={{ fontSize: 14, color: '#000000' }}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default myProfileScreen;



