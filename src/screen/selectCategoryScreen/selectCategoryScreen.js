import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as SCREEN from '../../context/screen/screenName';

function selectCategoryScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('5%') }}>
                    <AntDesign name="arrowleft" size={24} color='#00D9CE' style={{ marginLeft: hp('2%') }} />
                    <TouchableOpacity
                        style={styles.submitbtn}>
                        <Text style={{ fontSize: hp('2%'), color: '#00D9CE' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%') }}>
                    <View style={styles.graficview}>
                        <Text style={{ fontSize: hp('3%'), marginLeft: hp('5%') }}>Graphic Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('0%'), marginRight: hp('2%') }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.uxview}>
                        <Text style={{ fontSize: hp('3%'), marginLeft: hp('5%') }}>UX Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('0%'), marginRight: hp('2%') }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.interiorview}>
                        <Text style={{ fontSize: hp('3%'), marginLeft: hp('5%') }}>Interior Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('0%'), marginRight: hp('2%') }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: hp('3%'), justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>BUSINESS</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>MARKETING</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp('5%'), justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/grommeticonstechnology.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>TECHNOLOGY</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>BUSINESS</Text>
                    </View>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp('5%'), justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/grommeticonstechnology.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>TECHNOLOGY</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>BUSINESS</Text>
                    </View>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 70, height: 70, borderRadius: hp('1%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', marginTop: hp('1%') }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                    <TouchableOpacity style={styles.applyview} onPress={() => { props.navigation.navigate(SCREEN.MYPROFILESCREEN) }}>
                        <Text style={{ fontSize: hp('2.5'), color: '#FFFFFF' }}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: hp('15%') }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default selectCategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
    },
    submit: {
        flexDirection: 'row',
        marginRight: hp('2%'),
        width: wp('25%'),
        height: hp('5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
    },
    graficview: {
        flexDirection: 'row',

        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#34A853',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    uxview: {
        flexDirection: 'row',
        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#FFD46B',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp('2%')
    },
    interiorview: {
        flexDirection: 'row',
        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#96D3FF',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp('2%')

    },
    category: {
        width: wp('15%'),
        height: hp('10%'),
        backgroundColor: '#FFFFFF',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    applyview: {
        flexDirection: 'row',
        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#00D9CE',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'center'
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