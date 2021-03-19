import React from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import * as STYLES from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'




const myTransfersScreen = () => {
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={40} color='#00D9CE' style={{ marginLeft: hp('0%') }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('myTransfersScreen') }}
                    style={{ width: wp('30%'), backgroundColor: '#34a853', flexDirection: 'row', borderRadius: hp('3%'), alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFFFFF', }}>5324.00</Text>
                    <View style={{ width: 25, height: 25, backgroundColor: '#FFFFFF', alignItems: 'center', marginLeft: hp('2%'), borderRadius: hp('3%'), justifyContent: 'center' }}>
                        <FontAwesome name="rupee" size={20} color='#34a853' style={{ marginLeft: hp('0%') }} />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={STYLES.styles.abalanceview}>
                    <Text style={{ fontSize: hp('2%') }}>Available Balance</Text>
                    <Text style={{ fontSize: hp('4%'), color: '#34a853' }}> ₹ 5000.00</Text>
                </View>
                <View style={STYLES.styles.gamountview}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), }}>Gross Amount</Text>
                        <Image source={require('../../assets/images/ant-designup-square-filled.png')} style={{ height: 20, width: 20, marginRight: hp('3%') }} />
                    </View>
                    <Text style={{ fontSize: hp('4%'), color: '#34a853' }}> ₹ 2000.00</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), }}>TDS(5%)</Text>
                        <Text style={{ fontSize: hp('2%'), color: '#34a853', marginRight: hp('3%') }}> ₹ 100</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), }}>Net Earning</Text>
                        <Text style={{ fontSize: hp('2%'), color: '#34a853', marginRight: hp('3%') }}> ₹ 1900.00</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), }}>Bank</Text>
                        <Text style={{ fontSize: hp('2%'), color: '#34a853', marginRight: hp('3%') }}>Kotak Mahindra Bank</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('1%'), marginLeft: hp('2%') }}>
                        <Image source={require('../../assets/images/image1.png')} style={{ height: 40, width: 40, borderRadius: hp('5%') }} />
                        <View>
                            <Text style={{ fontSize: hp('2%'), color: '#34a853', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                            <Text style={{ fontSize: hp('2%'), color: '#000000', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
                        </View>
                    </View>
                </View>
                <View style={STYLES.styles.bankview}>
                    <View style={{ flexDirection: 'row', marginTop: hp('1%'), marginLeft: hp('2%') }}>
                        <View >
                            <Image source={require('../../assets/images/image1.png')} style={{ height: 40, width: 40, borderRadius: hp('5%') }} />
                            <Text style={{ fontSize: hp('2%'), color: '#34a853', marginRight: hp('3%') }}> ₹ 1900.00</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: hp('2%'), color: '#34a853', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                            <Text style={{ fontSize: hp('2%'), color: '#000000', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default myTransfersScreen



