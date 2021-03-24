import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const notificationScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: hp('5%') }}>
                <View style={{ flexDirection: 'row', }}>
                    <AntDesign name="arrowleft" size={24} color='#FFFFFF' style={{ marginLeft: hp('2%') }} />
                </View>
                <View style={{ justifyContent: "space-around", flexDirection: 'row', marginTop: hp('-3.5%') }}>
                    <Ionicons name="notifications" size={24} color='#FFFFFF' style={{}} />
                    <View style={{ width: wp('20%'), backgroundColor: '#FFFFFF', borderRadius: hp('2%'), alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Clear</Text>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.notificationview}>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: hp('1%'), }}>
                        <Text style={{ fontSize: hp('2%'), marginRight: hp('3%') }}>Just now</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: hp('2%'), alignItems: 'center' }}>
                        <View style={{ width: 25, height: 25, backgroundColor: '#cccccc', borderRadius: hp('5%'), justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="rupee" size={15} color='green' style={{ marginLeft: hp('0%') }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: hp('2%') }}>
                            <Text style={{ color: '#F67742' }} >#Transaction</Text>
                            <Text>Your Feb transaction have been completed please check your account</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.notificationview}>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: hp('1%'), }}>
                        <Text style={{ fontSize: hp('2%'), marginRight: hp('3%') }}>Yesterday</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: hp('2%'), alignItems: 'center' }}>
                        <View style={{ width: 25, height: 25, backgroundColor: '#cccccc', borderRadius: hp('5%'), justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="rupee" size={15} color='green' style={{ marginLeft: hp('0%') }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: hp('2%') }}>
                            <Text style={{ color: '#F67742' }} >#Transaction</Text>
                            <Text>Your jan transaction have been completed please check your account</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default notificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00D9CE",
    },
    notificationview: {
        height: hp('15%'),
        width: wp('90%'),
        backgroundColor: '#FFFFFF',
        marginTop: hp('5%'),
        borderRadius: hp('3%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
    },
})