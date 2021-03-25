import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as SCREEN from '../../context/screen/screenName';

function documentScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('5%') }}>
                    <AntDesign name="arrowleft" size={24} color='#FFFFFF' style={{ marginLeft: hp('2%') }} />
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }}
                        style={styles.submitbtn}>
                        <Text style={{ fontSize: hp('2%'), color: '#00D9CE' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.profileview}>
                        <View>
                            <Image source={require('../../assets/images/profile.png')}
                                style={{ marginTop: hp('-5%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('22%') }} />
                            <TouchableOpacity>
                                <Feather name="camera" size={24} color='#FFFFFF' style={{ marginLeft: hp('27%'), marginTop: hp('-10%') }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%'), marginBottom: hp('1%') }}>
                            <TouchableOpacity style={styles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.EDITSCREEN) }}>
                                <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#FFFFFF' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('1%'), marginBottom: hp('2%') }}>
                            <TouchableOpacity style={styles.generalinfitext}>
                                <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#FFFFFF' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: hp('3%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Pan Card</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="BGAAFDASDFA"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="BGAAFDASDFA"
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={{ width: wp('85%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', borderColor: '#000000', borderWidth: hp('0.1%') }}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' style={{}} />
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontSize: hp('2%') }}>FRONT</Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: hp('3s%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Aadhar Card</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="123SDFGSDFGSDF"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="123SDFGSDFGSDF"
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={{ width: wp('85%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', borderColor: '#000000', borderWidth: hp('0.1%') }}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' />
                                </TouchableOpacity>
                                <Text>FRONT</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={{ width: wp('85%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', borderColor: '#000000', borderWidth: hp('0.1%') }}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' />
                                </TouchableOpacity>
                                <Text>BACK</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%'), marginBottom: hp('1%') }}>
                            <TouchableOpacity style={styles.bankinfitext} onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }}>
                                <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#FFFFFF' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: hp('5%') }}></View>
                    </View>
                </View>
                <View style={{ marginBottom: hp('3%') }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default documentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00D9CE"
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
        elevation: 2
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#EFEFEF",
        borderColor: '#FFFFFF',
        width: wp('85%'),
        height: hp('5%'),
        marginTop: hp('0.5%'),
        marginLeft: hp('3%'),
        alignItems: "center",
        borderRadius: 3
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('1%')
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
    generalinfitext: {
        width: wp('90%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5EA2FC',
        borderRadius: hp('3%'),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 0
    },
    bankinfitext: {
        width: wp('90%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00D9CE',
        borderRadius: hp('3%'),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 0
    }
})
