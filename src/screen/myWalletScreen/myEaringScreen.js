import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as SCREEN from '../../context/screen/screenName';

function myEaringScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: hp('5%') }}>
        <AntDesign name="arrowleft" size={24} color='#00D9CE' style={{}} />
        <TouchableOpacity
          style={{ flexDirection: 'row', width: wp('25%'), height: hp('5%'), backgroundColor: 'green', borderRadius: hp('5%'), alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>5000.00</Text>
          <FontAwesome name="rupee" size={20} color='#FFFFFF' style={{ marginLeft: hp('1%') }} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.balanceview}>
          <Text style={{ fontSize: hp('2%') }}> Unpaid Balance</Text>
          <Text style={{ fontSize: hp('4%'), color: 'green' }} > ₹ 5000.00</Text>
        </View>
        <View style={styles.bankview}>
          <View >
            <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.MYTRANSFERSSCREEN)}
              style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
              <Image source={require('../../assets/images/image1.png')} style={{ height: 40, width: 40, borderRadius: hp('5%'), marginLeft: wp('2%') }} />
              <View style={{ flexDirection: 'column', marginLeft: wp('-25%') }}>
                <Text style={{ fontSize: hp('2%'), color: '#34a853', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                <Text style={{ fontSize: hp('2%'), color: '#000000', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
              </View>
              <Text style={{ fontSize: hp('2%'), color: '#34a853', marginRight: hp('3%') }}> ₹ 2000.00</Text>
            </TouchableOpacity>
            <View>
            </View>
          </View>
        </View>
        <View style={styles.bankview}>
          <View >
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
              <Image source={require('../../assets/images/image1.png')} style={{ height: 40, width: 40, borderRadius: hp('5%'), marginLeft: wp('2%') }} />
              <View style={{ flexDirection: 'column', marginLeft: wp('-25%') }}>
                <Text style={{ fontSize: hp('2%'), color: '#34a853', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                <Text style={{ fontSize: hp('2%'), color: '#000000', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
              </View>
              <Text style={{ fontSize: hp('2%'), color: '#34a853', marginRight: hp('3%') }}> ₹ 1500.00</Text>
            </View>
            <View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default myEaringScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  balanceview: {
    height: hp('20%'),
    width: wp('90%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('5%'),
    borderRadius: hp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 4,
  },
  bankview: {
    height: hp('10%'),
    width: wp('90%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('5%'),
    borderRadius: hp('3%'),
    // alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 4,
  },
})