import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const { width, height } = Dimensions.get('window')
import * as SCREEN from '../../context/screen/screenName';

function documentScreen(props) {
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
                                marginTop: hp('-5%'), width: 95, height: 100, borderRadius: hp('7%'), marginLeft: hp('21%'),
                            }} />
                            <TouchableOpacity>
                                <Feather name="camera" size={24} color='#FFFFFF' style={{ marginLeft: hp('26%'), marginTop: hp('-8%') }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                            <TouchableOpacity style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#00D9CE', borderRadius: hp('3%') }}>
                                <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%') }}>
                            <TouchableOpacity style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#00D9CE', borderRadius: hp('3%') }}>
                                <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Pan Card</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="BGAAFDASDFA"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={{ width: wp('85%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', borderColor: '#000000', borderWidth: hp('0.1%') }}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' style={{}} />
                                </TouchableOpacity>
                                <Text>FRONT</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: hp('2.5%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Aadhar Card</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="123SDFGSDFGSDF"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={{ width: wp('85%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', borderColor: '#000000', borderWidth: hp('0.1%') }}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' style={{}} />
                                </TouchableOpacity>
                                <Text>FRONT</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={{ width: wp('85%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', borderColor: '#000000', borderWidth: hp('0.1%') }}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' style={{}} />
                                </TouchableOpacity>
                                <Text>BACK</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }}
                                style={{ width: wp('85%'), height: hp('6%'), backgroundColor: '#00D9CE', justifyContent: 'center', alignItems: 'center', borderRadius: hp('3%') }}>
                                <Text>Banking Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: hp('5%') }}></View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default documentScreen;

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
        marginTop: hp('2%'),
        marginLeft: hp('2%'),
        alignItems: "center",
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
})
