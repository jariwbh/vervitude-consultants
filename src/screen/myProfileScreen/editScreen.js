import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const { width, height } = Dimensions.get('window')
import * as SCREEN from '../../context/screen/screenName';

export default function editScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('5%') }}>
                <AntDesign name="arrowleft" size={24} color='#FFFFFF' style={{ marginLeft: hp('2%') }} />
                <TouchableOpacity
                    style={{ flexDirection: 'row', marginRight: hp('2%'), width: wp('25%'), height: hp('5%'), backgroundColor: '#FFFFFF', borderRadius: hp('5%'), alignItems: 'center', justifyContent: 'center', marginLeft: hp('2%') }}>
                    <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>Submit</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.profileview}>
                        <View>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-5%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('22%'),
                            }} />
                            <TouchableOpacity>
                                <Feather name="camera" size={24} color='#FFFFFF' style={{ marginLeft: hp('27%'), marginTop: hp('-8%') }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                            <TouchableOpacity style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#00D9CE', borderRadius: hp('3%') }}>
                                <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Fist Name</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Ranjan"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Last Name</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Pathak"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Use Tag</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="#pathak"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Phone Number</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="+919923719601"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Email Address</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="ranjanpathak@gmail.com"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Location</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Mumbai"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />
                            <Ionicons name="location" size={24} color='#00000' style={{ marginLeft: hp('0%') }} />
                        </View>

                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>About</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Ranjan is UX Designer working with clients"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: hp('2.5%'), marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Add Brands</Text>
                        </View>

                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: hp('2%'), }}>
                            <TouchableOpacity style={{ color: '#888888', width: 80, height: 80, borderWidth: wp('0.1%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                <Image source={require('../../assets/images/A.png')} style={{
                                    width: 30, height: 30, borderRadius: hp('7%'),
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('-7%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ color: '#888888', width: 80, height: 80, borderWidth: wp('0.1%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                <Image source={require('../../assets/images/B.png')} style={{
                                    width: 30, height: 30, borderRadius: hp('7%'),
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('-7%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ color: '#888888', width: 80, height: 80, borderWidth: wp('0.1%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                <Image source={require('../../assets/images/c.png')} style={{
                                    width: 30, height: 30, borderRadius: hp('7%'),
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('-7%') }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: hp('2%'), }}>
                            <TouchableOpacity style={{ color: '#888888', width: 80, height: 80, borderWidth: wp('0.1%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                <Image source={require('../../assets/images/D.png')} style={{
                                    width: 30, height: 30, borderRadius: hp('7%'),
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('-7%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ color: '#888888', width: 80, height: 80, borderWidth: wp('0.1%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                <Image source={require('../../assets/images/E.png')} style={{
                                    width: 30, height: 30, borderRadius: hp('7%'),
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('-7%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.SELECTCATEGORYSCREEN) }}
                                style={{ color: '#888888', width: 80, height: 80, borderWidth: wp('0.1%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                <Image source={require('../../assets/images/clarityaddline.png')} style={{
                                    width: 30, height: 30, borderRadius: hp('7%'),
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('-7%') }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }}
                                style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#00D9CE', borderRadius: hp('3%') }}>
                                <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }}
                                style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#00D9CE', borderRadius: hp('3%') }}>
                                <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: hp('5%') }}></View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00D9CE",
    },
    profileview: {
        width: width - 20,
        backgroundColor: '#FFFFFF',
        marginTop: hp('5%'),
        borderRadius: hp('3%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#FFFFFF',
        width: wp('85%'),
        height: hp('8%'),
        marginTop: hp('1%'),
        marginLeft: hp('2%'),
        alignItems: "center",
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('1%'),
    },
})

