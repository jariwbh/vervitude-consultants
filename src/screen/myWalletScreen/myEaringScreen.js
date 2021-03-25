import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';

function myEaringScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: hp('5%') }}>
          <AntDesign name="arrowleft" color="#00D9CE" size={24} />
          <TouchableOpacity
            style={{ height: hp('6%'), width: wp('35%'), backgroundColor: '#34A853', flexDirection: 'row', borderRadius: hp('3%'), alignItems: 'center', justifyContent: 'center', marginLeft: wp('40%') }}>
            <Text style={{ fontSize: hp('2.8%'), color: '#FFFFFF' }}>5324.00</Text>
            <View style={{ width: 25, height: 25, backgroundColor: '#FFFFFF', alignItems: 'center', marginLeft: hp('2%'), borderRadius: hp('3%'), justifyContent: 'center' }}>
              <FontAwesome name="rupee" size={20} color='#34A853' />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.balanceview}>
            <Text style={{ fontSize: hp('2%'), color: '#999999' }}>Unpaid Balance</Text>
            <Text style={{ fontSize: hp('4%'), color: '#34A853', fontWeight: 'bold' }} > ₹ 5000.00</Text>
          </View>

          <View style={styles.bankview}>
            <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.MYTRANSFERSSCREEN)}
              style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
              <Image source={require('../../assets/images/image1.png')} style={{ height: 40, width: 40, borderRadius: hp('5%'), marginLeft: wp('2%') }} />
              <View style={{ flexDirection: 'column', marginLeft: wp('-25%') }}>
                <Text style={{ fontSize: hp('2%'), color: '#000000', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                <Text style={{ fontSize: hp('2%'), color: '#999999', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
              </View>
              <Text style={{ fontSize: hp('2%'), color: '#34a853', marginTop: hp('1%'), marginRight: hp('3%') }}> ₹ 2000.00</Text>
            </TouchableOpacity>
            <View>
            </View>
          </View>

          <View style={styles.bankview}>
            <TouchableOpacity onPress={() => props.navigation.navigate(SCREEN.MYTRANSFERSSCREEN)}
              style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
              <Image source={require('../../assets/images/image1.png')} style={{ height: 40, width: 40, borderRadius: hp('5%'), marginLeft: wp('2%') }} />
              <View style={{ flexDirection: 'column', marginLeft: wp('-25%') }}>
                <Text style={{ fontSize: hp('2%'), color: '#000000', marginLeft: hp('2%') }}>Kotak Mahindra Bank</Text>
                <Text style={{ fontSize: hp('2%'), color: '#999999', marginLeft: hp('2%') }}>14/02/2021, 2:30PM</Text>
              </View>
              <Text style={{ fontSize: hp('2%'), color: '#34a853', marginTop: hp('1%'), marginRight: hp('3%') }}> ₹ 2000.00</Text>
            </TouchableOpacity>
            <View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default myEaringScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE"
  },
  balanceview: {
    height: hp('25%'),
    width: wp('95%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('3%'),
    borderRadius: hp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 3
  },
  bankview: {
    height: hp('10%'),
    width: wp('95%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('2%'),
    borderRadius: hp('3%'),
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  }
})