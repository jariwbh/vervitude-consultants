import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Dimensions, StatusBar, ToastAndroid, Platform } from 'react-native';
import { UserReviewService } from "../../services/UserService/UserService";
import MyPermissionController from '../../helpers/appPermission';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Feather from 'react-native-vector-icons/Feather';
import { AUTHUSER } from '../../context/actions/type';
import ImagePicker from 'react-native-image-picker';
import Loader from "../../components/loader/index";
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLE from './styles'
const WIDTH = Dimensions.get('window').width;

const documentScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [userDetails, setuserDetails] = useState(null);
    const [pancardnumber, setpancardnumber] = useState(null);
    const [pancardnumberError, setpancardnumberError] = useState(null);
    const [pancardimage, setpancardimage] = useState(null);
    const [aadharcardnumber, setaadharcardnumber] = useState(null);
    const [aadharcardnumberError, setaadharcardnumberError] = useState(null);
    const [frontaadharcard, setfrontaadharcard] = useState(null);
    const [backaadharcard, setbackaadharcard] = useState(null);
    const secondTextInputRef = React.createRef();

    useEffect(() => {
        checkPermission();
        getUserDetails();
    }, []);

    useEffect(() => {
    }, [loading, pancardnumber, pancardimage, aadharcardnumber, frontaadharcard,
        backaadharcard, aadharcardnumberError, pancardnumberError, userDetails])

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
            setpancardnumber(UserInfo.property.pancardnumber);
            setpancardimage({ url: UserInfo.property.pancardimage[0].attachment, change: false });
            setaadharcardnumber(UserInfo.property.aadharcardnumber);
            setfrontaadharcard({ url: UserInfo.property.frontaadharcard[0].attachment, change: false });
            setbackaadharcard({ url: UserInfo.property.backaadharcard[0].attachment, change: false });
        }
    }

    //REPLACE AND ADD LOCAL STORAGE FUNCTION
    const authenticateUser = (user) => {
        //AsyncStorage.removeItem(AUTHUSER);
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user));
    }

    //IMAGE CLICK TO GET CALL FUNCTION
    const handlePicker = (field) => {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                setloading(false);
                console.log('User cancelled image picker');
            } else if (response.error) {
                setloading(false);
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                setloading(false);
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setloading(true);
                onPressUploadFile(field, response);
            }
        });
    };

    //Upload Cloud storage function
    const onPressUploadFile = async (field, fileObj) => {
        if (fileObj != null) {
            const realPath = Platform.OS === 'ios' ? fileObj.uri.replace('file://', '') : fileObj.uri;
            await RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/dlopjt9le/upload', { 'Content-Type': 'multipart/form-data' },
                [{ name: 'file', filename: Platform.OS === 'ios' ? fileObj.fileSize : fileObj.fileName, type: fileObj.type, data: RNFetchBlob.wrap(decodeURIComponent(realPath)) },
                { name: 'upload_preset', data: 'gs95u3um' }])
                .then(response => response.json())
                .then(data => {
                    setloading(false);
                    if (data && data.url) {
                        let image = { url: data.url, change: true };
                        if (field === 'pancardnumberfont') {
                            setpancardimage(image)
                        } else if (field === 'aadharnumberfont') {
                            setfrontaadharcard(image)
                        } else if (field === 'aadharnumberback') {
                            setbackaadharcard(image)
                        } else if (field === 'profilepic') {
                            UpdateProfileService(image);
                        }
                    }
                }).catch(error => {
                    setloading(false);
                    alert("Uploading Failed!");
                })
        } else {
            setloading(false);
            alert('Please Select File');
        }
    }

    //UPLOAD PICTURE CLICK TO CALL FUNCTION
    const onChangePhoto = (field) => {
        handlePicker(field);
    }

    //PROFILE PICTURE CLICK TO CALL FUNCTION
    const onChangeProfilePic = (field) => {
        handlePicker(field);
    }

    //UPDATE PROFILE PICTURE API CALL
    const UpdateProfileService = async (profilepic) => {
        if (profilepic.change) {
            let body = {
                contextid: userDetails._id,
                onModel: 'User',
                formid: '6051da7ac49da515d8175b20',
                property: {
                    profilepic: profilepic.url
                }
            }
            try {
                const response = await UserReviewService(body);
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("Thank you your profile is been submitted for review", ToastAndroid.SHORT);
                    } else {
                        alert('Thank you your profile is been submitted for review');
                    }
                }
            }
            catch (error) {
                setloading(false);
                if (Platform.OS === 'android') {
                    ToastAndroid.show("Your Profile Not Update!", ToastAndroid.SHORT);
                } else { alert('Your Profile Not Update!') }
            }
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.show("Your Profile Not Update", ToastAndroid.SHORT);
            } else { alert('Your Profile Not Update') }
        }
    }

    //UPDATE PROFILE INFOMATION API CALL
    const UpdateUserInfo = async () => {
        try {
            if (!pancardnumber || !pancardimage || !aadharcardnumber || !frontaadharcard || !backaadharcard) {
                panCardNumberCheck(pancardnumber);
                aadhraNumberCheck(aadharcardnumber);
                if (!pancardimage) {
                    alert('Please Upload PanCard Photo');
                    return;
                } else if (!frontaadharcard) {
                    alert('Please Upload Front AadharCard Photo');
                    return;
                } else if (!backaadharcard) {
                    alert('Please Upload Back AadharCard Photo');
                    return;
                }
                return;
            }
            if (userDetails.property.pancardnumber != pancardnumber || userDetails.property.aadharcardnumber != aadharcardnumber
                || pancardimage.change || frontaadharcard.change || backaadharcard.change) {
                CheckAndUpdateUserInfo();
            }
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //UPDATE PROFILE INFOMATION API CALL
    const CheckAndUpdateUserInfo = async () => {
        setloading(true);
        let body = {
            contextid: userDetails._id,
            onModel: 'User',
            formid: '6051da7ac49da515d8175b20',
            property: {}
        }

        if (userDetails.property.pancardnumber != pancardnumber) {
            body.property.pancardnumber = pancardnumber;
        }
        if (userDetails.property.aadharcardnumber != aadharcardnumber) {
            body.property.aadharcardnumber = aadharcardnumber;
        }
        if (pancardimage.change) {
            body.property.pancardimage = pancardimage.url;
        }
        if (frontaadharcard.change) {
            body.property.frontaadharcard = frontaadharcard.url;
        }
        if (backaadharcard.change) {
            body.property.backaadharcard = backaadharcard.url;
        }
        if (body.property) {
            if (userDetails.property.pancardnumber != pancardnumber || userDetails.property.aadharcardnumber != aadharcardnumber
                || pancardimage.change || frontaadharcard.change || backaadharcard.change) {
                try {
                    await UserReviewService(body).then(response => {
                        if (response.data != null && response.data != 'undefind' && response.status == 200) {
                            setloading(false);
                            if (Platform.OS === 'android') {
                                ToastAndroid.show("Thank you your profile is been submitted for review", ToastAndroid.SHORT);
                            } else {
                                alert('Thank you your profile is been submitted for review');
                            }
                            props.navigation.navigate(SCREEN.BANKINFOSCREEN);
                        }
                    })
                }
                catch (error) {
                    setloading(false);
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("Your Information Not Update", ToastAndroid.SHORT);
                    } else { alert('Your Information Not Update') }
                }
            }
        }
    }

    //check aadharnumber validation
    const aadhraNumberCheck = (aadharcardnumber) => {
        // console.log(`aadharcardnumber`, aadharcardnumber)
        //const reg = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
        if (!aadharcardnumber || aadharcardnumber.length == 11) {
            setaadharcardnumberError('Aadharcard Number cannot be empty');
            return;
        }
        // if (!reg.test(aadharcardnumber)) {
        //     setaadharcardnumberError('Ooops! We need a valid Aadharcard Number ');
        //     return;
        // }
        setaadharcardnumber(aadharcardnumber);
        setaadharcardnumberError(null);
        return;
    }

    //check pancard number validation
    const panCardNumberCheck = (pancardnumber) => {
        const reg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (!pancardnumber || pancardnumber.length <= 0) {
            setpancardnumberError('Pan Card Number cannot be empty');
            return;
        }
        if (!reg.test(pancardnumber)) {
            setpancardnumberError('Ooops! We need a valid Pan Card Number');
            return;
        }
        setpancardnumber(pancardnumber);
        setpancardnumberError(null);
        return;
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

    return (
        <SafeAreaView style={STYLE.Documentstyles.container}>
            <StatusBar backgroundColor='#5AC8FA' barStyle='dark-content' />
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.replace(SCREEN.EDITSCREEN)}>
                            <AntDesign name='arrowleft' size={24} color='#FFFFFF' style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => UpdateUserInfo()}
                            style={STYLE.Editstyles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.Documentstyles.profileview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: userDetails ? userDetails.profilepic !== null && userDetails.profilepic ? userDetails.profilepic : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png' : null }}
                                style={{ marginTop: -50, width: 100, height: 100, borderRadius: 100 }} />
                            <TouchableOpacity onPress={() => onChangeProfilePic('profilepic')}
                                style={{ marginTop: -60 }}>
                                <Feather name='camera' size={24} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60, marginBottom: 10 }}>
                            <TouchableOpacity style={STYLE.Documentstyles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.EDITSCREEN) }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 15 }}>
                            <TouchableOpacity style={STYLE.Documentstyles.generalinfitext}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 20, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Pan Card</Text>
                        </View>
                        <View style={pancardnumberError == null ? STYLE.Documentstyles.inputView : STYLE.Documentstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Documentstyles.TextInput}
                                placeholder='Pan Card Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={pancardnumber}
                                onSubmitEditing={() => secondTextInputRef.current.focus()}
                                onChangeText={(pancardnumber) => panCardNumberCheck(pancardnumber)}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            {
                                pancardimage ?
                                    <View>
                                        <Image source={{ uri: pancardimage.url }}
                                            style={{ width: WIDTH - 60, height: 160, resizeMode: 'stretch' }} />
                                        <TouchableOpacity
                                            onPress={() => onChangePhoto('pancardnumberfont')}
                                            style={{ alignItems: 'center', position: 'absolute', marginVertical: 150 / 2, margin: WIDTH / 2 - 60 }}>
                                            <Feather name='camera' size={24} color='#000000' />
                                            <Text style={{ color: '#000000', fontSize: 12 }}>FRONT</Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View style={STYLE.Documentstyles.FontBoxStyle}>
                                        <TouchableOpacity onPress={() => onChangePhoto('pancardnumberfont')}>
                                            <Feather name='camera' size={24} color='#000000' />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#000000', fontSize: 12 }}>FRONT</Text>
                                    </View>
                            }
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Aadhar Card</Text>
                        </View>
                        <View style={aadharcardnumberError == null ? STYLE.Documentstyles.inputView : STYLE.Documentstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Documentstyles.TextInput}
                                placeholder='Aadhar Card Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={aadharcardnumber}
                                ref={secondTextInputRef}
                                onChangeText={(aadhranumber) => aadhraNumberCheck(aadhranumber)}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            {
                                frontaadharcard ?
                                    <View>
                                        <Image source={{ uri: frontaadharcard.url }}
                                            style={{ width: WIDTH - 60, height: 160, resizeMode: 'stretch' }} />
                                        <TouchableOpacity
                                            onPress={() => onChangePhoto('aadharnumberfont')}
                                            style={{ alignItems: 'center', position: 'absolute', marginVertical: 150 / 2, margin: WIDTH / 2 - 60 }}>
                                            <Feather name='camera' size={24} color='#000000' />
                                            <Text style={{ color: '#000000', fontSize: 12 }}>FRONT</Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View style={STYLE.Documentstyles.FontBoxStyle}>
                                        <TouchableOpacity
                                            onPress={() => onChangePhoto('aadharnumberfont')} >
                                            <Feather name='camera' size={24} color='#000000' />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#000000', fontSize: 12 }}>FRONT</Text>
                                    </View>
                            }
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            {
                                backaadharcard ?
                                    <View>
                                        <Image source={{ uri: backaadharcard.url }}
                                            style={{ width: WIDTH - 60, height: 160, resizeMode: 'stretch' }} />
                                        <TouchableOpacity
                                            onPress={() => onChangePhoto('aadharnumberback')}
                                            style={{ alignItems: 'center', position: 'absolute', marginVertical: 150 / 2, margin: WIDTH / 2 - 60 }}>
                                            <Feather name='camera' size={24} color='#000000' />
                                            <Text style={{ color: '#000000', fontSize: 12 }}>BACK</Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View style={STYLE.Documentstyles.FontBoxStyle}>
                                        <TouchableOpacity
                                            onPress={() => onChangePhoto('aadharnumberback')}>
                                            <Feather name='camera' size={24} color='#000000' />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#000000', fontSize: 12 }}>BACK</Text>
                                    </View>
                            }
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 5 }}>
                            <TouchableOpacity style={STYLE.Documentstyles.bankinfitext} onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 25 }}></View>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}></View>
            </ScrollView>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}

export default documentScreen;


