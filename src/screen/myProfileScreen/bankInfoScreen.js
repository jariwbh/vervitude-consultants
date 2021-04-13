import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Feather from 'react-native-vector-icons/Feather';
import * as STYLE from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type';
import MyPermissionController from '../../helpers/appPermission';

const bankInfoScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [userDetails, setuserDetails] = useState(null);

    const [nameofaccount, setnameofaccount] = useState(null);
    const [bankname, setbankname] = useState(null);
    const [ifsccode, setifsccode] = useState(null);
    const [accounttype, setaccounttype] = useState(null);
    const [accountnumber, setaccountnumber] = useState(null);
    const [repeataccountnumber, setrepeataccountnumber] = useState(null);
    const [cancelcheque, setcancelcheque] = useState(null);

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
            setcancelcheque(UserInfo.property.cancelcheque);

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

    return (
        <SafeAreaView style={STYLE.Bankstyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack(null) }}>
                            <AntDesign name='arrowleft' size={24} color='#FFFFFF' style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate(SCREEN.MYPROFILESCREEN) }}
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
                            <TouchableOpacity style={{ marginTop: -60 }}>
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
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Name on Account'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={nameofaccount}
                            />

                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Bank Name</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Bank Name'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={bankname}
                            />

                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>IFSC Code</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='IFSC Code'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={ifsccode}
                            />
                            <TouchableOpacity>
                                <Feather name='search' size={20} color='#555555' style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Account Type</Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: 'row', marginLeft: 20 }}>
                            <TouchableOpacity style={{ width: 100, backgroundColor: '#80d4ff', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginRight: 10 }}>
                                <Text style={{ color: '#000000', fontSize: 12 }}>Saving</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, backgroundColor: '#F4F4F4', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                                <Text style={{ color: '#000000', fontSize: 12 }}>Currrent</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Account Number</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Account Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={accountnumber}
                            />

                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Repeat Account Number</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder='Repeat Account Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={repeataccountnumber}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <View style={STYLE.Bankstyles.ChequeBoxStyle}>
                                <TouchableOpacity>
                                    <Feather name='camera' size={24} color='#000000' />
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontSize: 12 }}>CANCELD CHEQUE</Text>
                            </View>
                            <View style={{ marginBottom: 25 }}></View>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default bankInfoScreen

