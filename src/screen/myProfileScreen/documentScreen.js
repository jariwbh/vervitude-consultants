import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MyPermissionController from '../../helpers/appPermission';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Feather from 'react-native-vector-icons/Feather';
import { AUTHUSER } from '../../context/actions/type';
import * as STYLE from './styles'

const documentScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [userDetails, setuserDetails] = useState(null);

    const [pancardnumber, setpancardnumber] = useState(null);
    const [pancardimage, setpancardimage] = useState(null);
    const [aadharcardnumber, setaadharcardnumber] = useState(null);
    const [frontaadharcard, setfrontaadharcard] = useState(null);
    const [backaadharcard, setbackaadharcard] = useState(null);

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
            setpancardimage(UserInfo.property.pancardimage);
            setaadharcardnumber(UserInfo.property.aadharcardnumber);
            setfrontaadharcard(UserInfo.property.frontaadharcard);
            setbackaadharcard(UserInfo.property.backaadharcard);
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
        <SafeAreaView style={STYLE.Documentstyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack(null) }}>
                            <AntDesign name='arrowleft' size={24} color='#FFFFFF' style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }}
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
                            <TouchableOpacity style={{ marginTop: -60 }}>
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
                        <View style={STYLE.Documentstyles.inputView}>
                            <TextInput
                                style={STYLE.Documentstyles.TextInput}
                                placeholder='Pan Card Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={pancardnumber}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <View style={STYLE.Documentstyles.FontBoxStyle}>
                                <TouchableOpacity>
                                    <Feather name='camera' size={24} color='#000000' />
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontSize: 12 }}>FRONT</Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Aadhar Card</Text>
                        </View>
                        <View style={STYLE.Documentstyles.inputView}>
                            <TextInput
                                style={STYLE.Documentstyles.TextInput}
                                placeholder='Aadhar Card Number'
                                type='clear'
                                returnKeyType='next'
                                placeholderTextColor='#000000'
                                blurOnSubmit={false}
                                defaultValue={aadharcardnumber}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <View style={STYLE.Documentstyles.FontBoxStyle}>
                                <TouchableOpacity>
                                    <Feather name='camera' size={24} color='#000000' />
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontSize: 12 }}>FRONT</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <View style={STYLE.Documentstyles.FontBoxStyle}>
                                <TouchableOpacity>
                                    <Feather name='camera' size={24} color='#000000' />
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontSize: 12 }}>BACK</Text>
                            </View>
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
        </SafeAreaView>
    )
}

export default documentScreen;


