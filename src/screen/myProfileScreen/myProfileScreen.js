import React from 'react'
import { Text, View, Dimensions, SafeAreaView, Image, TouchableOpacity, ViewBase } from 'react-native'
import * as STYLES from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as SCREEN from '../../context/screen/screenName';



function myProfileScreen(props) {
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View>
                <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.NOTIFICATIONSCREEN)}>
                        <Ionicons name="notifications" size={40} color='#FFFFFF' style={{ marginLeft: hp('2%') }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: wp('30%'), backgroundColor: '#FFFFFF', flexDirection: 'row', borderRadius: hp('3%'), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#34a853', }}>5324.00</Text>
                        <View style={{ width: 25, height: 25, backgroundColor: '#34a853', alignItems: 'center', marginLeft: hp('2%'), borderRadius: hp('3%'), justifyContent: 'center' }}>
                            <FontAwesome name="rupee" size={20} color='#FFFFFF' style={{ marginLeft: hp('0%') }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={STYLES.styles.cardview}>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: hp('3%') }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: hp('3%') }}>Ranjan  Pathak</Text>
                        <Text>#protima123</Text>
                    </View>
                    <Image source={require('../../assets/images/profile.png')}
                        style={{ alignItems: 'center', height: 75, width: 75, marginTop: 2, borderRadius: 50 }}
                    />
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.EDITSCREEN)}
                    style={{ flexDirection: 'row', marginTop: hp('5%') }}>
                    <EvilIcons name="user" size={40} color='#96D3FF' style={{ marginLeft: hp('2%') }} />
                    <Text style={{ marginLeft: wp('4%'), fontSize: hp('2.5%') }}>My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3%') }}>
                    <Image source={require('../../assets/images/conversation.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                    <Text style={{ marginLeft: wp('4%'), fontSize: hp('2.5%') }}>My conversation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3%') }}
                    onPress={() => props.navigation.navigate(SCREEN.MYEARINGSCREEN)}>
                    <Image source={require('../../assets/images/Group.png')} style={{ height: 20, width: 29, marginLeft: hp('3%') }} />
                    <Text style={{ marginLeft: wp('4%'), fontSize: hp('2.5%') }}>My Earnings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3%') }}>
                    <Image source={require('../../assets/images/categories.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                    <Text style={{ marginLeft: wp('4%'), fontSize: hp('2.5%') }}>My Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3%') }}>
                    <Image source={require('../../assets/images/Help.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                    <Text style={{ marginLeft: wp('4%'), fontSize: hp('2.5%') }}>Help & Support</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3%') }} onPress={() => props.navigation.navigate(SCREEN.INVITESCREEN)}>
                    <Image source={require('../../assets/images/invite.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                    <Text style={{ marginLeft: wp('4%'), fontSize: hp('2.5%') }}>invite a Consultant</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('10%') }}>
                    <Image source={require('../../assets/images/logout.png')} style={{ height: 25, width: 30, marginLeft: hp('3%') }} />
                    <Text style={{ marginLeft: wp('4%'), fontSize: hp('2.5%') }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default myProfileScreen;

