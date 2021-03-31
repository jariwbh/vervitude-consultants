import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as SCREEN from '../../context/screen/screenName';

const bankInfoScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('5%') }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.MYPROFILESCREEN) }}>
                        <AntDesign name="arrowleft" size={24} color='#FFFFFF' style={{ marginLeft: hp('2%') }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.MYPROFILESCREEN) }}
                        style={styles.submitbtn}>
                        <Text style={{ fontSize: hp('2%'), color: '#5AC8FA' }}>Save</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.profileview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/profile.png')} style={{
                                marginTop: hp('-5%'), width: 100, height: 100, borderRadius: hp('8%'), marginLeft: hp('0%'),
                            }} />
                            <TouchableOpacity>
                                <Feather name="camera" size={24} color='#FFFFFF' style={{ marginLeft: hp('0%'), marginTop: hp('-10%') }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%') }}>
                            <TouchableOpacity style={styles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.EDITSCREEN) }}>
                                <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#FFFFFF' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%') }}>
                            <TouchableOpacity style={styles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }}>
                                <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#FFFFFF' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%') }}>
                            <TouchableOpacity style={styles.generalinfitext} >
                                <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#FFFFFF' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Name on Account</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Ranjan Pathak"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="Ranjan Pathak"
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Bank Name</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="ICIC Bank"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="ICIC Bank"
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>IFSC Code</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="ICIC0323"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="ICIC0323"
                            />
                            <Feather name="search" size={20} color='#555555' style={{ marginRight: hp('2%') }} />
                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Account Type</Text>
                        </View>
                        <View style={{ marginTop: hp('1%'), flexDirection: 'row', marginLeft: hp('2%') }}>
                            <TouchableOpacity style={{ width: hp('15%'), backgroundColor: '#80d4ff', height: hp('5%'), justifyContent: 'center', alignItems: 'center', borderRadius: hp('3%') }}>
                                <Text>Saving</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: hp('15%'), backgroundColor: '#F4F4F4', height: hp('5%'), justifyContent: 'center', alignItems: 'center', borderRadius: hp('3%') }}>
                                <Text>Currrent</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Account Number</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="1234567890"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="1234567890"
                            />

                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Repeat Account Number</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="1234567890"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="1234567890"
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={{ width: wp('85%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', borderColor: '#000000', borderWidth: hp('0.1%') }}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' style={{}} />
                                </TouchableOpacity>
                                <Text>CANCELD CHEQUE</Text>
                            </View>
                            <View style={{ marginBottom: hp('5%') }}></View>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: hp('3%') }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default bankInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5AC8FA",
    },
    profileview: {
        width: wp('95%'),
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
        backgroundColor: "#EFEFEF",
        borderColor: '#FFFFFF',
        width: wp('85%'),
        height: hp('5%'),
        marginTop: hp('0.5%'),
        marginLeft: hp('2%'),
        alignItems: "center",
        borderRadius: 3
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('1%'),
    },
    generalinfitext: {
        width: wp('90%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5AC8FA',
        borderRadius: hp('3%'),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 0,
    },
    submitbtn: {
        flexDirection: 'row',
        marginRight: hp('2%'),
        width: wp('25%'),
        height: hp('5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: hp('2%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
})