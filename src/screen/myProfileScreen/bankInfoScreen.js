import React, { useState, useEffect } from 'react';
import {
    View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView,
    Dimensions, Keyboard, StatusBar, ToastAndroid, Platform
} from 'react-native'
import { UserReviewService } from "../../services/UserService/UserService";
import AsyncStorage from '@react-native-community/async-storage';
import MyPermissionController from '../../helpers/appPermission';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Feather from 'react-native-vector-icons/Feather';
import * as UPLOADKEY from '../../context/actions/type';
import { AUTHUSER } from '../../context/actions/type';
import ImagePicker from 'react-native-image-picker';
import Loader from "../../components/loader/index";
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLE from './styles';
import GeneralStatusBarColor from '../../components/StatusBarStyle/GeneralStatusBarColor';
import crashlytics, { firebase } from "@react-native-firebase/crashlytics";
const WIDTH = Dimensions.get('window').width;

const bankInfoScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [userDetails, setuserDetails] = useState(null);
    const [nameofaccount, setnameofaccount] = useState(null);
    const [nameofaccountError, setnameofaccountError] = useState(null);
    const [bankname, setbankname] = useState(null);
    const [banknameError, setbanknameError] = useState(null);
    const [ifsccode, setifsccode] = useState(null);
    const [ifsccodeError, setifsccodeError] = useState(null);
    const [accounttype, setaccounttype] = useState(null);
    const [accountnumber, setaccountnumber] = useState(null);
    const [accountnumberError, setaccountnumberError] = useState(null);
    const [repeataccountnumber, setrepeataccountnumber] = useState(null);
    const [repeataccountnumberError, setrepeataccountnumberError] = useState(null);
    const [cancelcheque, setcancelcheque] = useState(null);
    const secondTextInputRef = React.createRef();
    const thirdTextInputRef = React.createRef();
    const fourTextInputRef = React.createRef();
    const fifthTextInputRef = React.createRef();


    useEffect(() => {
        checkPermission();
        getUserDetails();
    }, []);

    useEffect(() => {
    }, [loading, nameofaccount, bankname, ifsccode, accounttype, nameofaccountError, banknameError, ifsccodeError,
        repeataccountnumberError, accountnumberError, accountnumber, repeataccountnumber, cancelcheque, userDetails])

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
            setnameofaccount(UserInfo.property.nameofaccount);
            setbankname(UserInfo.property.bankname);
            setifsccode(UserInfo.property.ifsccode);
            setaccounttype(UserInfo.property.accounttype);
            setaccountnumber(UserInfo.property.accountnumber);
            setrepeataccountnumber(UserInfo.property.repeataccountnumber);
            setcancelcheque({ url: UserInfo.property.cancelcheque[0].attachment, change: false });
        }
    }

    //Check Validation name of acccount
    const nameofaccountCheck = (name) => {
        if (!name || name <= 0) {
            setnameofaccountError('Name of Account cannot be empty')
            return;
        }
        setnameofaccount(name);
        setnameofaccountError(null);
        return;
    }

    //Check Validation bank name
    const banknameCheck = (bankname) => {
        if (!bankname || bankname <= 0) {
            setbanknameError('Bank Name cannot be empty')
            return;
        }
        setbankname(bankname);
        setbanknameError(null);
        return;
    }

    //Check Validation IFSC Code
    const ifsccodeCheck = (ifsccode) => {
        if (!ifsccode || ifsccode <= 0) {
            setifsccodeError('IFSC Code cannot be empty')
            return;
        }
        setifsccode(ifsccode);
        setifsccodeError(null);
        return;
    }

    //Check Validation account number
    const accountnumberCheck = (accountnumber) => {
        if (!accountnumber || accountnumber <= 0) {
            setaccounttypeError('Account Number cannot be empty')
            return;
        }
        setaccountnumber(accountnumber);
        setaccountnumberError(null);
        return;
    }

    //Check Validation Repeate account number
    const repeataccountnumberCheck = (repeataccountnumber) => {
        if (!repeataccountnumber || repeataccountnumber <= 0) {
            setrepeataccountnumberError('Repeat Account Number cannot be empty')
            return;
        }
        setrepeataccountnumber(accountnumber);
        setrepeataccountnumberError(null);
        return;
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

    //IMAGE CLICK TO GET CALL FUNCTION
    const handlePicker = (field) => {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                setloading(false);
                firebase.crashlytics().recordError(response);
                // console.log('User cancelled image picker');
            } else if (response.error) {
                firebase.crashlytics().recordError(response);
                setloading(false);
                // console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                firebase.crashlytics().recordError(response);
                setloading(false);
                // console.log('User tapped custom button: ', response.customButton);
            } else {
                firebase.crashlytics().recordError(response);
                setloading(true);
                onPressUploadFile(field, response);
            }
        });
    };

    //Upload Cloud storage function
    const onPressUploadFile = async (field, fileObj) => {
        if (fileObj != null) {
            const realPath = Platform.OS === 'ios' ? fileObj.uri.replace('file://', '') : fileObj.uri;
            await RNFetchBlob.fetch('POST', UPLOADKEY.CLOUD_URL, { 'Content-Type': 'multipart/form-data' },
                [{ name: 'file', filename: Platform.OS === 'ios' ? fileObj.fileSize : fileObj.fileName, type: fileObj.type, data: RNFetchBlob.wrap(decodeURIComponent(realPath)) },
                { name: 'upload_preset', data: UPLOADKEY.UPLOAD_PRESET }])
                .then(response => response.json())
                .then(data => {
                    setloading(false);
                    if (data && data.url) {
                        let image = { url: data.url, change: true }
                        if (field === 'cancelcheque') {
                            setcancelcheque(image);
                        } else if (field === 'profilepic') {
                            UpdateProfileService(image);
                        }
                    }
                }).catch(error => {
                    firebase.crashlytics().recordError(error);
                    setloading(false);
                    alert("Uploading Failed!");
                })
        } else {
            setloading(false);
            alert('Please Select File');
        }
    }

    //UPLOAD PHOTO CLICK TO CALL FUNCTION
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
                await UserReviewService(body).then(response => {
                    if (response.data != null && response.data != 'undefind' && response.status == 200) {
                        if (Platform.OS === 'android') {
                            ToastAndroid.show("Thank you your profile is been submitted for review", ToastAndroid.SHORT);
                        } else {
                            alert('Thank you your profile is been submitted for review');
                        }
                    }
                })
            }
            catch (error) {
                firebase.crashlytics().recordError(error);
                // console.log(`error`, error);
                setloading(false);
                if (Platform.OS === 'android') {
                    ToastAndroid.show("Your Profile Not Update", ToastAndroid.SHORT);
                } else { alert('Your Profile Not Update') }
            }
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.show("Your Profile Not Update", ToastAndroid.SHORT);
            } else { alert('Your Profile Not Update') }
        }
    }

    //UPDATE PROFILE INFOMATION API CALL
    const UpdateUserInfo = async () => {
        if (!nameofaccount || !bankname || !ifsccode || !accountnumber || !repeataccountnumber) {
            setrepeataccountnumberError(repeataccountnumber);
            setnameofaccountError(nameofaccount);
            setaccountnumberError(accountnumber);
            setbanknameError(bankname);
            setifsccodeError(ifsccode);
            if (!cancelcheque) {
                alert('Please Upload Cancel Cheque Photo');
                return;
            } else if (!accounttype) {
                alert('Please Select Your Account Type');
                return;
            }
            return;
        }

        try {
            if (userDetails.property.nameofaccount != nameofaccount || userDetails.property.bankname != bankname || userDetails.property.ifsccode != ifsccode
                || userDetails.property.accounttype != accounttype || userDetails.property.accountnumber != accountnumber
                || userDetails.property.repeataccountnumber != repeataccountnumber || cancelcheque.change) {
                CheckAndUpdateUserInfo();
            }
        }
        catch (error) {
            firebase.crashlytics().recordError(error);
            setloading(false);
            if (Platform.OS === 'android') {
                ToastAndroid.show("Your Information Not Update", ToastAndroid.SHORT);
            } else { alert('Your Information Not Update') }
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

        if (userDetails.property.nameofaccount != nameofaccount) {
            body.property.nameofaccount = nameofaccount;
        }
        if (userDetails.property.bankname != bankname) {
            body.property.bankname = bankname;
        }
        if (userDetails.property.ifsccode != ifsccode) {
            body.property.ifsccode = ifsccode;
        }
        if (userDetails.property.accounttype != accounttype) {
            body.property.accounttype = accounttype;
        }
        if (userDetails.property.accountnumber != accountnumber) {
            body.property.accountnumber = accountnumber;
        }
        if (userDetails.property.repeataccountnumber != repeataccountnumber) {
            body.property.repeataccountnumber = repeataccountnumber;
        }
        if (cancelcheque.change) {
            body.property.cancelcheque = cancelcheque.url;
        }
        if (body.property) {
            if (userDetails.property.nameofaccount != nameofaccount || userDetails.property.bankname != bankname || userDetails.property.ifsccode != ifsccode
                || userDetails.property.accounttype != accounttype || userDetails.property.accountnumber != accountnumber
                || userDetails.property.repeataccountnumber != repeataccountnumber || cancelcheque.change) {
                try {
                    await UserReviewService(body).then(response => {
                        if (response.data != null && response.data != 'undefind' && response.status == 200) {
                            setloading(false);
                            if (Platform.OS === 'android') {
                                ToastAndroid.show("Thank you your profile is been submitted for review", ToastAndroid.SHORT);
                            } else {
                                alert('Thank you your profile is been submitted for review');
                            }
                            props.navigation.navigate(SCREEN.MYPROFILESCREEN);
                        }
                    })
                }
                catch (error) {
                    firebase.crashlytics().recordError(error);
                    //  console.log(`error`, error);
                    setloading(false);
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("Your Information Not Update", ToastAndroid.SHORT);
                    } else { alert('Your Information Not Update') }
                }
            }
        }
    }

    const onPressToSelectService = (type) => {
        if (type == 'saving') {
            setaccounttype(type);
        } else {
            setaccounttype(type);
        }
    }

    return (
        <SafeAreaView style={STYLE.Bankstyles.container}>
            <GeneralStatusBarColor hidden={false} translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.replace(SCREEN.DOCUMENTSCREEN)}>
                            <AntDesign name='arrowleft' size={24} color='#FFFFFF' style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => UpdateUserInfo()}
                            style={STYLE.Bankstyles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.Bankstyles.profileview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: userDetails ? userDetails.profilepic !== null && userDetails.profilepic ? userDetails.profilepic : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png' : null }}
                                style={{ marginTop: -50, width: 100, height: 100, borderRadius: 100 }} />
                            <TouchableOpacity onPress={() => onChangeProfilePic('profilepic')}
                                style={{ marginTop: -60 }}>
                                <Feather name='camera' size={24} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                            <TouchableOpacity style={STYLE.Bankstyles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.EDITSCREEN) }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={STYLE.Bankstyles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={STYLE.Bankstyles.generalinfitext} >
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Name on Account</Text>
                        </View>
                        <View style={nameofaccountError == null ? STYLE.Bankstyles.inputView : STYLE.Bankstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Name on Account'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={nameofaccount}
                                onSubmitEditing={() => secondTextInputRef.current.focus()}
                                onChangeText={(nameofaccount) => nameofaccountCheck(nameofaccount)}
                            />
                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Bank Name</Text>
                        </View>
                        <View style={banknameError == null ? STYLE.Bankstyles.inputView : STYLE.Bankstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Bank Name'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={bankname}
                                ref={secondTextInputRef}
                                onSubmitEditing={() => thirdTextInputRef.current.focus()}
                                onChangeText={(bankname) => banknameCheck(bankname)}
                            />
                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>IFSC Code</Text>
                        </View>
                        <View style={ifsccodeError == null ? STYLE.Bankstyles.inputView : STYLE.Bankstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='IFSC Code'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={ifsccode}
                                ref={thirdTextInputRef}
                                onSubmitEditing={() => fourTextInputRef.current.focus()}
                                onChangeText={(ifsccode) => ifsccodeCheck(ifsccode)}
                            />
                            {/* <TouchableOpacity>
                                <Feather name='search' size={20} color='#555555' style={{ marginRight: 10 }} />
                            </TouchableOpacity> */}
                        </View>

                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Account Type</Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: 'row', marginLeft: 15 }}>
                            <TouchableOpacity
                                onPress={() => onPressToSelectService('saving')}
                                style={accounttype == 'saving' ? STYLE.Bankstyles.OnChangeAccoutTypeStyle : STYLE.Bankstyles.accoutTypeStyle}>
                                <Text style={{ color: '#000000', fontSize: 12, textTransform: 'capitalize' }}>saving</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => onPressToSelectService('current')}
                                style={accounttype == 'current' ? STYLE.Bankstyles.OnChangeAccoutTypeStyle : STYLE.Bankstyles.accoutTypeStyle}>
                                <Text style={{ color: '#000000', fontSize: 12, textTransform: 'capitalize' }}>current</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Account Number</Text>
                        </View>
                        <View style={accountnumberError == null ? STYLE.Bankstyles.inputView : STYLE.Bankstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Account Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={accountnumber}
                                ref={fourTextInputRef}
                                onSubmitEditing={() => fifthTextInputRef.current.focus()}
                                onChangeText={(accountnumber) => accountnumberCheck(accountnumber)}
                            />
                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Repeat Account Number</Text>
                        </View>
                        <View style={repeataccountnumberError == null ? STYLE.Bankstyles.inputView : STYLE.Bankstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Repeat Account Number'
                                type='clear'
                                returnKeyType='done'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={repeataccountnumber}
                                ref={fifthTextInputRef}
                                onSubmitEditing={() => Keyboard.dismiss()}
                                onChangeText={(repeataccountnumber) => repeataccountnumberCheck(repeataccountnumber)}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            {
                                cancelcheque ?
                                    <View>
                                        <Image source={{ uri: cancelcheque.url }}
                                            style={{ width: WIDTH - 60, height: 160, resizeMode: 'stretch' }} />
                                        <TouchableOpacity
                                            onPress={() => onChangePhoto('cancelcheque')}
                                            style={{ alignItems: 'center', position: 'absolute', marginVertical: 150 / 2, margin: WIDTH / 2 - 60 }}>
                                            <Feather name='camera' size={24} color='#000000' />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#000000', fontSize: 12, position: 'absolute', marginVertical: 150 / 2 + 25, marginLeft: WIDTH / 2 - 100 }}>CANCELD CHEQUE</Text>
                                    </View>
                                    :
                                    <View style={STYLE.Bankstyles.ChequeBoxStyle}>
                                        <TouchableOpacity onPress={() => onChangePhoto('cancelcheque')}>
                                            <Feather name='camera' size={24} color='#000000' />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#000000', fontSize: 12 }}>CANCELD CHEQUE</Text>
                                    </View>
                            }
                            <View style={{ marginBottom: 25 }}></View>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}></View>
            </ScrollView>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}

export default bankInfoScreen;

