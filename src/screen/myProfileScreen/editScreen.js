import React, { useState, useEffect } from 'react';
import {
    View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, StatusBar,
    ScrollView, ToastAndroid, Platform, Keyboard, FlatList, Modal
} from 'react-native';
import { SendEmailService, SendSmsService } from '../../services/SendEmailandSmsService/SendEmailandSmsService';
import { UserReviewService } from '../../services/UserService/UserService';
import AsyncStorage from '@react-native-community/async-storage';
import MyPermissionController from '../../helpers/appPermission';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { AUTHUSER } from '../../context/actions/type';
import Loading from '../../components/loader/Loading';
import ImagePicker from 'react-native-image-picker';
import Loader from '../../components/loader/index';
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLE from './styles';
import OtpInputs from 'react-native-otp-inputs';

const editScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [btnloading, setBtnloading] = useState(false);
    const [verifyloading, setVerifyloading] = useState(false);
    const [userDetails, setuserDetails] = useState(null);
    const [first_name, setfirst_name] = useState(null);
    const [first_nameError, setfirst_nameError] = useState(null);
    const [last_name, setlast_name] = useState(null);
    const [last_nameError, setlast_nameError] = useState(null);
    const [mobile, setmobile] = useState(null);
    const [mobileError, setmobileError] = useState(null);
    const [primaryemail, setprimaryemail] = useState(null);
    const [primaryemailError, setprimaryemailError] = useState(null);
    const [usertag, setusertag] = useState(null);
    const [usertagError, setusertagError] = useState(null);
    const [location, setlocation] = useState(null);
    const [locationError, setlocationError] = useState(null);
    const [about, setabout] = useState(null);
    const [aboutError, setaboutError] = useState(null);
    const [brand, setbrand] = useState([]);
    const [oldEmail, setOldEmail] = useState(null);
    const [oldMobile, setOldMobile] = useState(null);

    const [verifyOtpNumber, setverifyOtpNumber] = useState(null);
    const [inputOtpNumber, setinputOtpNumber] = useState(null);
    const [inputOtpNumberError, setinputOtpNumberError] = useState(null);
    const [showModel, setShowModel] = useState(false);
    const [username, setUsername] = useState(null);
    const [usererror, setUsererror] = useState(null);
    const [sendEmailbtnDisable, setSendEmailbtnDisable] = useState(false);
    const [verifybtnDisable, setVerifybtnDisable] = useState(true);

    const secondTextInputRef = React.createRef();
    const thirdTextInputRef = React.createRef();
    const fourTextInputRef = React.createRef();
    const fifthTextInputRef = React.createRef();
    const sixTextInputRef = React.createRef();
    const sevenTextInputRef = React.createRef();

    useEffect(() => {
    }, [loading, first_name, last_name, mobile, first_nameError, last_nameError, mobileError, primaryemailError,
        locationError, aboutError, primaryemail, usertag, usertagError, location, about, brand, userDetails, btnloading,
        verifyOtpNumber, inputOtpNumber, showModel, verifyloading, inputOtpNumberError])

    //check first name validation
    const first_nameCheck = (first_name) => {
        if (!first_name || first_name <= 0) {
            setfirst_nameError('First Name cannot be empty');
            return;
        }
        setfirst_name(first_name);
        setfirst_nameError(null);
        return;
    }

    //check last name validation
    const last_nameCheck = (last_name) => {
        if (!last_name || last_name <= 0) {
            setlast_nameError('Last Name cannot be empty');
            return;
        }
        setlast_name(last_name);
        setlast_nameError(null);
        return;
    }

    //check mobile validation
    const mobileCheck = (mobile) => {
        const reg = /^\d{10}$/;
        if (!mobile || mobile.length <= 0) {
            setmobileError('Mobile Number cannot be empty');
            return;
        }
        if (!reg.test(mobile)) {
            setmobileError('Ooops! We need a valid Mobile Number');
            return;
        }
        setmobile(mobile);
        setmobileError(null);
        return;
    }

    //check email validation
    const primaryemailCheck = (email) => {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            setprimaryemailError('Email Id can not be empty')
            return;
        }
        if (!re.test(email)) {
            setprimaryemailError('Ooops! We need a valid email address')
            return;
        }
        setprimaryemail(email);
        setprimaryemailError(null);
        return;
    }

    //check userTag validation
    const usertagCheck = (usertag) => {
        if (!usertag || usertag <= 0) {
            setusertagError('User Tag cannot be empty');
            return;
        }
        setusertag(usertag);
        setusertagError(null);
        return;
    }

    //check location validation
    const locationCheck = (location) => {
        if (!location || location <= 0) {
            setlocationError('location cannot be empty');
            return;
        }
        setlocation(location);
        setlocationError(null);
        return;
    }

    //check aboout validation
    const aboutCheck = (about) => {
        if (!about || about <= 0) {
            setaboutError('location cannot be empty');
            return;
        }
        setabout(about);
        setaboutError(null);
        return;
    }

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
            setbrand([...UserInfo.property.add_brand, { add: true, change: false }]);
            setOldEmail(UserInfo.property.primaryemail);
            setOldMobile(UserInfo.property.mobile);
        }
    }

    //REPLACE AND ADD LOCAL STORAGE FUNCTION
    const authenticateUser = (user) => {
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
                    if (data) {
                        if (field === 'brand') {
                            let photoObj = {
                                "attachment": data.url,
                                "extension": data.format,
                                "originalfilename": data.original_filename
                            }
                            let filteredLists = [];
                            if (brand) {
                                filteredLists = brand.filter(({ add = false }) => {
                                    return add === false
                                });
                            }
                            setbrand([...filteredLists, photoObj, { add: true, change: true }]);
                        } else if (field === 'profilepic') {
                            let image = { url: data.url, change: true }
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

    //PROFILE PICTURE CLICK TO CALL FUNCTION
    const onChangeProfilePic = (field) => {
        handlePicker(field);
    }

    //UPLOAD PHOTO CLICK TO CALL FUNCTION
    const onChangeBrandPhoto = (field) => {
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

    //on press to remove brand
    const onPressRemoveBrand = (item) => {
        let filteredLists = [];
        if (brand) {
            filteredLists = brand.filter(x => x.originalfilename != item.originalfilename);
        }
        if (filteredLists.length == 0) {
            filteredLists.push({ add: true, change: true })
        }
        let nwefilteredLists = filteredLists.map(el => (
            el.add === true ? { ...el, change: true } : el
        ))
        setbrand(nwefilteredLists);
    }

    //render Brand Photo 
    const renderAddBrand = ({ item }) => (
        item.add == true ?
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 40 }}>
                <TouchableOpacity
                    onPress={() => onChangeBrandPhoto('brand')}
                    style={STYLE.Editstyles.brandstyle}>
                    <Image source={require('../../assets/images/PLUS.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                </TouchableOpacity>
            </View>
            :
            <View style={{ paddingHorizontal: 15, paddingVertical: 40 }}>
                <Image source={{ uri: item.attachment }}
                    style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                <TouchableOpacity
                    onPress={() => onPressRemoveBrand(item)}
                    style={{ backgroundColor: '#FFFFFF', borderRadius: 100, marginLeft: 55, marginTop: -80 }}>
                    <AntDesign name='closecircleo' size={20} color='#262626' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                </TouchableOpacity>
            </View>
    );

    //UPDATE PROFILE INFOMATION API CALL
    const UpdateUserInfo = async () => {
        try {
            if (!first_name || !last_name || !mobile || !primaryemail || !usertag || !location || !about) {
                setfirst_name(first_name);
                setlast_name(last_name);
                setmobile(mobile);
                setprimaryemail(primaryemail);
                setusertag(usertag);
                setlocation(location);
                about(about);
                return;
            }

            if (oldMobile != mobile && oldEmail != primaryemail) {
                alert('For the Security of the account you can only change one contact information(email or phone number) at a time');
                return;
            }

            if (oldMobile != mobile || oldEmail != primaryemail) {
                setShowModel(true);
                if (oldMobile != mobile) {
                    setUsername(mobile);
                }
                if (oldEmail != primaryemail) {
                    setUsername(primaryemail);
                }
                return;
            }
            let filtercheck = [];
            if (brand) {
                filtercheck = brand.filter(x => x.change === true);
            }

            if (userDetails.property.first_name != first_name || userDetails.property.last_name != last_name || userDetails.property.mobile != mobile
                || userDetails.property.primaryemail != primaryemail || userDetails.property.usertag != usertag || userDetails.property.location != location
                || userDetails.property.about != about || filtercheck && filtercheck.length != 0) {
                CheckAndUpdateUserInfo();
            }
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //SEND OTP IN BUTTON ONPRESS TO PROCESS
    const onPressSubmitOTP = async () => {
        const verifyOtpNum = Math.floor(1000 + Math.random() * 9000);
        setverifyOtpNumber(verifyOtpNum);
        let mobilebody;
        let emailbody;
        if (mobile) {
            mobilebody = {
                "messagetype": "SMS",
                "message": {
                    "content": `Dear User, Use this 4-digit OTP ${verifyOtpNum} to verify your mobile number with Vervitude app. Please note that this code is only valid for 2 minutes. A brand by E-QUEST CONSULTING SOLUTIONS.`,
                    "to": mobile,
                    "subject": "Profile OTP Verification E-QUEST CONSULTING"
                }
            }
        }

        if (primaryemail) {
            emailbody = {
                "messagetype": "EMAIL",
                "message": {
                    "content": `Dear User, Use this 4-digit OTP ${verifyOtpNum} to verify your mobile number with Vervitude app. Please note that this code is only valid for 2 minutes. A brand by E-QUEST CONSULTING SOLUTIONS.`,
                    "to": primaryemail,
                    "subject": "Profile OTP Verification E-QUEST CONSULTING"
                }
            }
        }
        setBtnloading(true);
        try {
            if (primaryemail) {
                const response = await SendEmailService(emailbody);
                if (response.data != 'undefind' && response.status == 200) {
                    setBtnloading(false);
                }
            }

            if (mobile) {
                const response1 = await SendSmsService(mobilebody);
                if (response1.data != 'undefind' && response1.status == 200) {
                    setBtnloading(false);
                }
            }

            if (Platform.OS === 'android') {
                ToastAndroid.show('OTP Sending', ToastAndroid.LONG);
            } else {
                alert('OTP Sending');
            }
        }
        catch (error) {
            console.log(`error`, error);
            setBtnloading(false);
            if (Platform.OS === 'android') {
                ToastAndroid.show('OTP Sending Problem', ToastAndroid.LONG);
            } else {
                alert('OTP Sending Problem');
            }
        };
    }

    //user input Code set
    const handleChange = (code) => {
        setinputOtpNumber(code);
        if (Number(code) === Number(verifyOtpNumber)) {
            setVerifybtnDisable(false);
        }
    }

    //OTP verify Button function
    const otpVerify = async () => {
        if (!username) {
            setUsererror('error');
            return;
        }
        if (!inputOtpNumber) {
            setinputOtpNumberError('error');
            return;
        }
        setVerifyloading(true);
        try {
            if (Number(inputOtpNumber) === Number(verifyOtpNumber)) {
                setVerifyloading(false);
                CheckAndUpdateUserInfo();
            } else {
                setVerifyloading(false);
                setinputOtpNumber(null);
                if (Platform.OS === 'android') {
                    ToastAndroid.show('OTP not Match!', ToastAndroid.LONG)
                } else {
                    alert('OTP not Match!');
                }
            }
        }
        catch (error) {
            setVerifyloading(false);
            if (Platform.OS === 'android') {
                ToastAndroid.show('OTP not Match!', ToastAndroid.LONG);
            } else {
                alert('OTP not Match!');
            }
        };
    }

    //UPDATE PROFILE INFOMATION API CALL
    const CheckAndUpdateUserInfo = async () => {
        setloading(false);
        let filteredLists = [];
        let filtercheck = [];
        if (brand) {
            filteredLists = brand.filter(({ add = false }) => {
                return add === false
            });
        }

        let body = {
            contextid: userDetails._id,
            onModel: 'User',
            formid: '6051da7ac49da515d8175b20',
            property: {}
        }

        if (userDetails.property.first_name != first_name) {
            body.property.first_name = first_name;
        }
        if (userDetails.property.last_name != last_name) {
            body.property.last_name = last_name;
        }
        if (userDetails.property.mobile != mobile) {
            body.property.mobile = mobile;
        }
        if (userDetails.property.primaryemail != primaryemail) {
            body.property.primaryemail = primaryemail;
        }
        if (userDetails.property.usertag != usertag) {
            body.property.usertag = usertag;
        }
        if (userDetails.property.location != location) {
            body.property.location = location;
        }
        if (userDetails.property.about != about) {
            body.property.about = about;
        }
        if (brand) {
            filtercheck = brand.filter(x => x.change === true);
            if (filtercheck && filtercheck.length != 0 && filtercheck[0].change == true) {
                body.property.add_brand = filteredLists;
            }
        }

        if (body.property) {
            if (userDetails.property.first_name != first_name || userDetails.property.last_name != last_name || userDetails.property.mobile != mobile
                || userDetails.property.primaryemail != primaryemail || userDetails.property.usertag != usertag || userDetails.property.location != location
                || userDetails.property.about != about || filtercheck && filtercheck.length != 0) {
                try {
                    await UserReviewService(body).then(response => {
                        if (response.data != null && response.data != 'undefind' && response.status == 200) {
                            setShowModel(false);
                            setUsername(null);
                            setUsererror(null);
                            setinputOtpNumber(null);
                            setloading(false);
                            if (Platform.OS === 'android') {
                                ToastAndroid.show("Thank you your profile is been submitted for review", ToastAndroid.SHORT);
                            } else {
                                alert('Thank you your profile is been submitted for review');
                            }
                            props.navigation.navigate(SCREEN.DOCUMENTSCREEN);
                        }
                    })
                }
                catch (error) {
                    console.log(`error`, error);
                    setloading(false);
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("Your Information Not Update", ToastAndroid.SHORT);
                    } else { alert('Your Information Not Update') }
                }
            }
        }
    }

    return (
        <SafeAreaView style={STYLE.Editstyles.container}>
            <StatusBar backgroundColor='#5AC8FA' barStyle='dark-content' />
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.replace(SCREEN.MYPROFILESCREEN)} >
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
                    <View style={STYLE.Editstyles.profileview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: userDetails ? userDetails.profilepic !== null && userDetails.profilepic ? userDetails.profilepic : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png' : null }}
                                style={{ marginTop: -50, width: 100, height: 100, borderRadius: 100 }} />
                            <TouchableOpacity onPress={() => onChangeProfilePic('profilepic')}
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
                        <View style={first_nameError == null ? STYLE.Editstyles.inputView : STYLE.Editstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Editstyles.TextInputbold}
                                defaultValue={first_name}
                                placeholder='First Name'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                autoCapitalize='none'
                                onSubmitEditing={() => secondTextInputRef.current.focus()}
                                onChangeText={(first_name) => first_nameCheck(first_name)}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Last Name</Text>
                        </View>
                        <View style={last_nameError == null ? STYLE.Editstyles.inputView : STYLE.Editstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Editstyles.TextInputbold}
                                placeholder='Last Name'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={last_name}
                                autoCapitalize='none'
                                ref={secondTextInputRef}
                                onSubmitEditing={() => thirdTextInputRef.current.focus()}
                                onChangeText={(last_name) => last_nameCheck(last_name)}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>User Tag</Text>
                        </View>
                        <View style={usertagError == null ? STYLE.Editstyles.inputView : STYLE.Editstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='User Tag'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={usertag}
                                autoCapitalize='none'
                                ref={thirdTextInputRef}
                                onSubmitEditing={() => fourTextInputRef.current.focus()}
                                onChangeText={(usertag) => usertagCheck(usertag)}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Phone Number</Text>
                        </View>
                        <View style={mobileError == null ? STYLE.Editstyles.inputView : STYLE.Editstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='Phone Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                keyboardType='number-pad'
                                blurOnSubmit={false}
                                defaultValue={mobile}
                                ref={fourTextInputRef}
                                onSubmitEditing={() => fifthTextInputRef.current.focus()}
                                onChangeText={(mobile) => mobileCheck(mobile)}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Email Address</Text>
                        </View>
                        <View style={primaryemailError == null ? STYLE.Editstyles.inputView : STYLE.Editstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='exmple@gmail.com'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={primaryemail}
                                autoCapitalize='none'
                                keyboardType='email-address'
                                ref={fifthTextInputRef}
                                onSubmitEditing={() => sixTextInputRef.current.focus()}
                                onChangeText={(email) => primaryemailCheck(email)}
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Location</Text>
                        </View>
                        <View style={locationError == null ? STYLE.Editstyles.inputView : STYLE.Editstyles.inputViewError}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder='Location'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={location}
                                autoCapitalize='none'
                                ref={sixTextInputRef}
                                onSubmitEditing={() => sevenTextInputRef.current.focus()}
                                onChangeText={(location) => locationCheck(location)}
                            />
                            {/* <Ionicons name='location' size={24} color='#000000' /> */}
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>About</Text>
                        </View>
                        <View style={aboutError == null ? STYLE.Editstyles.textAreainputView : STYLE.Editstyles.textAreainputViewError}>
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
                                autoCapitalize='none'
                                ref={sevenTextInputRef}
                                onSubmitEditing={() => Keyboard.dismiss()}
                                onChangeText={(about) => aboutCheck(about)}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 5, marginBottom: -25 }}>
                            <Text style={{ fontSize: 12 }}>Add Brands</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <FlatList
                                renderItem={renderAddBrand}
                                data={brand}
                                horizontal={false}
                                numColumns={3}
                                keyExtractor={(item, index) => index}
                            />
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

            {/* verify Profile Model model Pop */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={showModel}
                onRequestClose={() => setShowModel(false)}
            >
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ position: 'absolute', bottom: 20 }}>
                        <View style={STYLE.Editstyles.boxView}>
                            <TouchableOpacity
                                onPress={() => setShowModel(false)}
                                style={STYLE.Editstyles.crossbtn}>
                                <AntDesign name='closecircleo' size={28} color='#000000' style={{ backgroundColor: '#FFFFFF', borderRadius: 100 }} />
                            </TouchableOpacity>
                            <View style={{ marginTop: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View pointerEvents="none" style={usererror == null ? STYLE.Editstyles.inputView2 : STYLE.Editstyles.inputErrorView2}>
                                        <TextInput
                                            defaultValue={username}
                                            style={STYLE.Editstyles.TextInput}
                                            placeholder='Username'
                                            type='clear'
                                            returnKeyType='done'
                                            placeholderTextColor='#B5B5B5'
                                            onSubmitEditing={() => Keyboard.dismiss()}
                                            onChangeText={(email) => setEmail(email)}
                                        />
                                    </View>
                                    <TouchableOpacity style={STYLE.Editstyles.otpBtndisable1} disabled={sendEmailbtnDisable} onPress={() => onPressSubmitOTP()}>
                                        {btnloading == true ? <Loading /> : <Text style={STYLE.Editstyles.otpbtnText1}>Send OTP</Text>}
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 0.5, marginTop: 30, marginLeft: 5, marginRight: 5 }}>
                                    <OtpInputs
                                        handleChange={(code) => handleChange(code)}
                                        numberOfInputs={4}
                                        inputStyles={STYLE.Editstyles.inputView1}
                                        defaultValue={inputOtpNumber}
                                    />
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                                    <TouchableOpacity style={verifybtnDisable ? STYLE.Editstyles.otpBtndisable : STYLE.Editstyles.otpBtn} disabled={verifybtnDisable} onPress={() => otpVerify()}>
                                        {verifyloading == true ? <Loading /> : <Text style={STYLE.Editstyles.otpbtnText1}>Verify OTP</Text>}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}
export default editScreen;
