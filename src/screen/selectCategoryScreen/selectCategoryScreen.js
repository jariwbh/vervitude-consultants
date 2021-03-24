import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

function selectCategoryScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('5%') }}>
                <AntDesign name="arrowleft" size={24} color='#00D9CE' style={{ marginLeft: hp('2%') }} />
                <TouchableOpacity style={styles.submit}>
                    <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>Submit</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                    <View style={styles.graficview}>
                        <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), }}>Graphic Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('0%'), marginRight: hp('2%') }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.uxview}>
                        <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), }}>UX Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('0%'), marginRight: hp('2%') }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={styles.interiorview}>
                        <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), }}>Interior Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={24} color='#00000' style={{ marginLeft: hp('0%'), marginRight: hp('2%') }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: hp('5%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>BUSINESS</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>MARKETING</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp('5%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/grommeticonstechnology.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>TECHNOLOGY</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>BUSINESS</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp('5%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/grommeticonstechnology.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>TECHNOLOGY</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>BUSINESS</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.category}>
                            <Image source={require('../../assets/images/entypoareagraph.png')} style={{
                                marginTop: hp('0%'), width: 30, height: 30, borderRadius: hp('0%'), marginLeft: hp('0%'),
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2%'), marginTop: hp('2%') }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                    <TouchableOpacity style={styles.applyview}>
                        <Text style={{ fontSize: hp('2.5'), color: '#FFFFFF' }}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: hp('5%') }}></View>
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
        marginRight: hp('2%'),
        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#34A853',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    uxview: {
        flexDirection: 'row',
        marginRight: hp('2%'),
        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#FFD46B',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    interiorview: {
        flexDirection: 'row',
        marginRight: hp('2%'),
        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#96D3FF',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'space-between',
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
        marginRight: hp('2%'),
        width: wp('90%'),
        height: hp('10%'),
        backgroundColor: '#34A853',
        borderRadius: hp('3%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
})