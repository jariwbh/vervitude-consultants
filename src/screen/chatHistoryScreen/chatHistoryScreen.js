import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, ScrollViewBase } from 'react-native'
import * as SCREEN from '../../context/screen/screenName';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import ChatMenu from '../../components/ChatMenu/ChatMenu'
import AntDesign from 'react-native-vector-icons/AntDesign';
import BackButton from '../../components/BackButton/BackButton'

function chatHistoryScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('5%') }}>
                <TouchableOpacity style={styles.categoryIcon} onPress={props.onPress} >
                    <AntDesign name="arrowleft" size={24} color="#00D9CE" />
                </TouchableOpacity>
                <View style={{ marginTop: hp('0 %'), justifyContent: 'center', alignItems: 'center', marginLeft: hp('25%') }}>
                    <Image source={require('../../assets/images/chat.png')} style={{ width: 70, height: 35 }} />
                    <Text style={{ fontSize: hp('2.5 %'), position: 'absolute', }}>20K</Text>
                </View>
                <View style={{ marginLeft: hp('0%') }}>
                    <ChatMenu onPress={() => { }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                <View>
                    <Text style={{ width: wp('25%'), fontSize: hp('3%'), marginLeft: hp('2%') }}>Marketing</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
            </View>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(MYPROFILESCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#00D9CE', marginLeft: hp('2%'), fontSize: hp('2.5%') }}>New</Text>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('-15%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Ruby</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: hp('3%'), width: 30, height: 30, marginTop: hp('5%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('7%'), backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF', }}>5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('2%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Ruby</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 0.00</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                    <View>
                        <Text style={{ width: wp('20%'), fontSize: hp('3%'), marginLeft: hp('2%') }}>DESIGN</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('-15%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Michele</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: hp('3%'), width: 30, height: 30, marginTop: hp('5%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('7%'), backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF', }}>5</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('2%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Maria</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 20.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('-15%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Ranjan</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: hp('3%'), width: 30, height: 30, marginTop: hp('5%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('7%'), backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF', }}>5</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                    <View>
                        <Text style={{ width: wp('60%'), fontSize: hp('3%'), marginLeft: hp('2%') }}>BUSINESS CONSULTING</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('2%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Ruby</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 20.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('-15%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Michele</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: hp('3%'), width: 30, height: 30, marginTop: hp('5%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('7%'), backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF', }}>5</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ color: '#000000', fontSize: hp('2.5%'), marginRight: hp('2%') }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-0%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('3%'),
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('2%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Ruby</Text>
                                <Text style={{ fontSize: hp('2.5%') }}>+ ₹ 20.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: hp('5%') }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default chatHistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE"
    },
    chatview: {
        width: wp('90%'),
        backgroundColor: '#FFFFFF',
        marginTop: hp('0%'),
        borderRadius: hp('3%'),
        height: hp('20%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,

    },
    categoryIcon: {
        width: wp("7%"),
        height: wp("7%"),
        borderRadius: hp('6%'),
        marginLeft: wp('5%'),
        alignItems: 'center',
        justifyContent: 'center'

    },
})