import React from 'react';
import { Text, View, Dimensions, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import MenuButton from '../../components/MenuButton/MenuButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLES from './styles';

function myProfileScreen(props) {
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ marginTop: hp('5%'), justifyContent: 'space-around', flexDirection: 'row' }} >
                        <View style={{ marginRight: hp('2%') }}>
                            <MenuButton onPress={() => { props.navigation.navigate(SCREEN.HOMESCREEN) }} />
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.NOTIFICATIONSCREEN)}>
                            <Ionicons name="notifications" size={40} color='#FFFFFF' style={{ marginLeft: hp('0%') }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: wp('35%'), backgroundColor: '#FFFFFF', flexDirection: 'row', borderRadius: hp('3%'), alignItems: 'center', justifyContent: 'center', marginLeft: wp('20%') }}>
                            <Text style={{ fontSize: hp('2.8%'), color: '#34a853' }}>5324.00</Text>
                            <View style={{ width: 25, height: 25, backgroundColor: '#34a853', alignItems: 'center', marginLeft: hp('2%'), borderRadius: hp('3%'), justifyContent: 'center' }}>
                                <FontAwesome name="rupee" size={20} color='#FFFFFF' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={STYLES.styles.centerView}>
                    <View style={STYLES.styles.cardview}>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: hp('3%') }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: hp('3%') }}>Ranjan  Pathak</Text>
                                <Text>#protima123</Text>
                            </View>
                            <Image source={require('../../assets/images/profile.png')}
                                style={STYLES.styles.profileImage}
                            />
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.EDITSCREEN)}
                            style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                            <Image source={require('../../assets/images/profileicon.png')} style={{ height: 33, width: 30, marginLeft: hp('3%') }} />
                            <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.CHATHISTORYSCREEN)}
                            style={{ flexDirection: 'row', marginTop: hp('3.5%') }}>
                            <Image source={require('../../assets/images/conversation.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                            <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My conversation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3.5%') }}
                            onPress={() => props.navigation.navigate(SCREEN.MYEARINGSCREEN)}>
                            <Image source={require('../../assets/images/Group.png')} style={{ height: 20, width: 29, marginLeft: hp('3%') }} />
                            <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My Earnings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3.5%') }}
                            onPress={() => props.navigation.navigate(SCREEN.SELECTCATEGORYSCREEN)}>
                            <Image source={require('../../assets/images/categories.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                            <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3.5%') }}>
                            <Image source={require('../../assets/images/Help.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                            <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>Help & Support</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3.5%') }} onPress={() => props.navigation.navigate(SCREEN.INVITESCREEN)}>
                            <Image source={require('../../assets/images/invite.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                            <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>invite a Consultant</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('12%') }} onPress={() => props.navigation.navigate(SCREEN.LOGINSCREEN)}>
                            <Image source={require('../../assets/images/logout.png')} style={{ height: 25, width: 30, marginLeft: hp('3%') }} />
                            <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default myProfileScreen;

