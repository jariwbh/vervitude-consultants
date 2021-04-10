import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLES from './styles';

function myTransfersScreen(props) {
    return (
        <SafeAreaView style={STYLES.Transferstyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                            <AntDesign name="arrowleft" color="#5AC8FA" size={24} style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={STYLES.Transferstyles.wallatwbtn}>
                            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>5324.00</Text>
                            <View style={{ width: 24, height: 24, backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 100, justifyContent: 'center' }}>
                                <FontAwesome name="rupee" size={15} color='#04DE71' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLES.Transferstyles.abalanceview}>
                        <Text style={{ fontSize: 14, color: '#999999' }}>Available Balance</Text>
                        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#04DE71' }}> ₹ 5000.00</Text>
                    </View>

                    <View style={STYLES.Transferstyles.gamountview}>
                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                                <Text style={{ fontSize: 14, marginLeft: 15 }}>Gross Amount</Text>
                                <Image source={require('../../assets/images/squarefilled.png')} style={{ height: 15, width: 15, marginRight: 5 }} />
                            </View>
                            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#04DE71' }}> ₹ 2000.00</Text>
                            <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ fontSize: 12, marginLeft: 15, color: '#999999' }}>TDS(5%)</Text>
                                <Text style={{ fontSize: 12, color: '#04DE71', marginRight: 20 }}> ₹ 100</Text>
                            </View>
                            <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ fontSize: 12, marginLeft: 15, color: '#999999' }}>Net Earning</Text>
                                <Text style={{ fontSize: 12, color: '#04DE71', marginRight: 20 }}> ₹ 1900.00</Text>
                            </View>
                            <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ fontSize: 12, marginLeft: 15, color: '#999999' }}>Bank</Text>
                                <Text style={{ fontSize: 12, color: '#999999', marginRight: 20 }}>Kotak Mahindra Bank</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                                <Image source={require('../../assets/images/image1.png')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                                <View>
                                    <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>Kotak Mahindra Bank</Text>
                                    <Text style={{ fontSize: 12, color: '#999999', marginLeft: 15 }}>14/02/2021, 2:30PM</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={STYLES.Transferstyles.bankview}>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.MYTRANSFERSSCREEN)}
                            style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ justifyContent: 'flex-start' }}>
                                <Image source={require('../../assets/images/image1.png')} style={{ height: 45, width: 45, borderRadius: 100, marginLeft: 10 }} />
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: -50 }}>
                                <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>Kotak Mahindra Bank</Text>
                                <Text style={{ fontSize: 14, color: '#999999', marginLeft: 15 }}>14/02/2021, 2:30PM</Text>
                            </View>

                            <View style={{ justifyContent: 'flex-end' }}>
                                <Text style={{ fontSize: 14, color: '#04DE71', marginTop: 5, marginRight: 30 }}> ₹ 1500.00</Text>
                            </View>

                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default myTransfersScreen



