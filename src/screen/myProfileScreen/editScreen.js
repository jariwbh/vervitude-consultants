import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView, ToastAndroid, Platform } from 'react-native';
import UpdateUserService from '../../services/UserService/UserService';
import AsyncStorage from '@react-native-community/async-storage';
import MyPermissionController from '../../helpers/appPermission';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { AUTHUSER } from '../../context/actions/type';
import ImagePicker from 'react-native-image-picker';
import Loader from '../../components/loader/index';
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLE from './styles';

const editScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [userDetails, setuserDetails] = useState(null);
    const [newProfilePath, setnewProfilePath] = useState(null);

    const [first_name, setfirst_name] = useState(null);
    const [last_name, setlast_name] = useState(null);
    const [mobile, setmobile] = useState(null);
    const [primaryemail, setprimaryemail] = useState(null);
    const [usertag, setusertag] = useState(null);
    const [location, setlocation] = useState(null);
    const [about, setabout] = useState(null);

    //get AsyncStorage current user Details
    const getUserDetails = async () => {
        //get AsyncStorage current user Details
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                props.navigation.replace(SCREEN.LOGINSCREEN)
            }, 3000);;
        } else {
            var UserInfo = JSON.parse(getUser);
            setuserDetails(UserInfo);
            setfirst_name(UserInfo.property.first_name);
            setlast_name(UserInfo.property.last_name);
            setmobile(UserInfo.property.mobile);
            setprimaryemail(UserInfo.property.primaryemail);
            setusertag(UserInfo.property.usertag);
            setlocation(UserInfo.property.location);
            setabout(UserInfo.property.about);
        }
    }

    //REPLACE AND ADD LOCAL STORAGE FUNCTION
    const authenticateUser = (user) => {
        //AsyncStorage.removeItem(AUTHUSER);
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user));
    }

    //check permission 
    const checkPermission = () => {
        setTimeout(
            () => {
                MyPermissionController.checkAndRequestStoragePermission()
                    .then((granted) => console.log('>Storage Permission Granted'))
                    .catch((err) => console.log(err))
            },
            500
        );
    }

    useEffect(() => {
        checkPermission();
        getUserDetails();
    }, []);

    const onPressSubmit = () => {
    }

    //IMAGE CLICK TO GET CALL FUNCTION
    const handlePicker = () => {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setloading(true);
                onPressUploadFile(response);
            }
        });
    };

    //Upload Cloud storage function
    const onPressUploadFile = async (fileObj) => {
        if (fileObj != null) {
            await RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/dlopjt9le/upload', { 'Content-Type': 'multipart/form-data' },
                [{ name: 'file', filename: fileObj.fileName, type: fileObj.type, data: RNFetchBlob.wrap(fileObj.uri) },
                { name: 'upload_preset', data: 'gs95u3um' }])
                .then(response => response.json())
                .then(data => {
                    setloading(false);
                    if (data && data.url) {
                        setnewProfilePath(data.url);
                        UpdateProfileService();
                    }
                }).catch(error => {
                    alert("Uploading Failed!");
                })
        } else {
            alert('Please Select File');
        }
    }

    //PROFILE PICTURE CLICK TO CALL FUNCTION
    const onChangeProfilePic = () => {
        handlePicker();
    }

    //UPDATE PROFILE PICTURE API CALL
    const UpdateProfileService = () => {
        let body = {
            _id: userDetails._id,
            profilepic: newProfilePath
        }

        try {
            UpdateUserService(body).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    authenticateUser(response.data);
                    getUserDetails();
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("Your Profile Update!", ToastAndroid.SHORT);
                    } else {
                        alert('Your Profile Update!');
                    }
                }
            })
        }
        catch (error) {
            setloading(false);
            if (Platform.OS === 'android') {
                ToastAndroid.show("Your Profile Not Update!", ToastAndroid.SHORT);
            } else { alert('Your Profile Not Update!') }
        }
    }

    return (
        <SafeAreaView style={STYLE.Editstyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack(null) }}>
                            <AntDesign name='arrowleft' size={24} color='#FFFFFF' style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }}
                            style={STYLE.Editstyles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.Editstyles.profileview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: userDetails ? userDetails.profilepic !== null && userDetails.profilepic ? userDetails.profilepic : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png' : null }}
                                style={{ marginTop: -50, width: 100, height: 100, borderRadius: 100 }} />
                            <TouchableOpacity onPress={() => onChangeProfilePic()}
                                style={{ marginTop: -60 }}>
                                <Feather name='camera' size={24} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60, marginBottom: 15 }}>
                            <TouchableOpacity style={STYLE.Editstyles.generalinfitext}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>First Name</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInputbold}
                                defaultValue={first_name}
                                placeholder='First Name'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Last Name</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInputbold}
                                placeholder='Last Name'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={last_name}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>User Tag</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='User Tag'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={usertag}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Phone Number</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='Phone Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={mobile}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Email Address</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='exmple@gmail.com'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={primaryemail}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Location</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='Location'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={location}
                            />
                            <Ionicons name='location' size={24} color='#000000' />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>About</Text>
                        </View>
                        <View style={STYLE.Editstyles.textAreainputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextareaInput}
                                placeholder='Write Description'
                                type='clear'
                                returnKeyType='done'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                numberOfLines={3}
                                multiline={true}
                                defaultValue={about}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 5 }}>
                            <Text style={{ fontSize: 14 }}>Add Brands</Text>
                        </View>

                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/a1.png')} style={{
                                    width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name='closecircleo' size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/b1.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name='closecircleo' size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/c1.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name='closecircleo' size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/d1.png')} style={{
                                    width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name='closecircleo' size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/e1.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name='closecircleo' size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/PLUS.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }} style={STYLE.Editstyles.generalinfitext}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }} style={STYLE.Editstyles.generalinfitext}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 20 }}></View>
                    </View>
                    <View style={{ marginBottom: 20 }}></View>
                </View>
            </ScrollView>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}
export default editScreen;
