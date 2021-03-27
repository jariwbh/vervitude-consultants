import React from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import * as STYLES from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as SCREEN from '../../context/screen/screenName';

function myTransfersScreen(props) {
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: hp('5%') }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.MYEARINGSCREEN) }}>
                        <AntDesign name="arrowleft" color="#5AC8FA" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ height: hp('7%'), width: wp('35%'), backgroundColor: '#04DE71', flexDirection: 'row', borderRadius: hp('5%'), alignItems: 'center', justifyContent: 'center', marginLeft: wp('40%') }}>
                        <Text style={{ fontSize: hp('2.8%'), color: '#FFFFFF' }}>5324.00</Text>
                        <View style={{ width: 25, height: 25, backgroundColor: '#FFFFFF', alignItems: 'center', marginLeft: hp('2%'), borderRadius: hp('3%'), justifyContent: 'center' }}>
                            <FontAwesome name="rupee" size={20} color='#04DE71' />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLES.styles.abalanceview}>
                        <Text style={{ fontSize: hp('2%'), color: '#999999' }}>Available Balance</Text>
                        <Text style={{ fontSize: hp('4%'), fontWeight: 'bold', color: '#04DE71' }}> ₹ 5000.00</Text>
                    </View>

                    <View style={STYLES.styles.gamountview}>
                        <View style={{ marginLeft: wp('3%'), marginRight: wp('3%') }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('2%') }}>
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), }}>Gross Amount</Text>
                                <Image source={require('../../assets/images/squarefilled.png')} style={{ height: 20, width: 20, marginRight: hp('2%') }} />
                            </View>
                            <Text style={{ fontSize: hp('4%'), fontWeight: 'bold', color: '#04DE71' }}> ₹ 2000.00</Text>
                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#999999' }}>TDS(5%)</Text>
                                <Text style={{ fontSize: hp('2%'), color: '#04DE71', marginRight: hp('3%') }}> ₹ 100</Text>
                            </View>
                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#999999' }}>Net Earning</Text>
                                <Text style={{ fontSize: hp('2%'), color: '#04DE71', marginRight: hp('3%') }}> ₹ 1900.00</Text>
                            </View>
                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#999999' }}>Bank</Text>
                                <Text style={{ fontSize: hp('2%'), color: '#999999', marginRight: hp('3%') }}>Kotak Mahindra Bank</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: hp('3%'), marginLeft: hp('2%') }}>
                                <Image source={require('../../assets/images/image1.png')} style={{ height: 50, width: 50, borderRadius: hp('5%') }} />
                                <View>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#000000', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#999999', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={STYLES.styles.bankview}>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.MYTRANSFERSSCREEN)}
                            style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                            <Image source={require('../../assets/images/image1.png')} style={{ height: 50, width: 50, borderRadius: hp('5%'), marginLeft: wp('2%') }} />
                            <View style={{ flexDirection: 'column', marginLeft: wp('-25%') }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000000', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                                <Text style={{ fontSize: hp('2%'), color: '#999999', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
                            </View>
                            <Text style={{ fontSize: hp('2%'), color: '#04DE71', marginTop: hp('1%'), marginRight: hp('3%') }}> ₹ 1500.00</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ marginBottom: hp('10%') }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default myTransfersScreen



