import React from 'react'
import { View, Text, Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLE from './styles'
const WIDTH = Dimensions.get('window').width;

function myEaringScreen(props) {
  return (
    <SafeAreaView style={STYLE.Wallatestyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
          <View style={{ justifyContent: 'flex-start' }}>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <AntDesign name='arrowleft' color='#5AC8FA' size={24} style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity
              style={STYLE.Wallatestyles.wallatwbtn}>
              <Text style={{ fontSize: 16, color: '#FFFFFF' }}>5324.00</Text>
              <View style={{ width: 24, height: 24, backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 100, justifyContent: 'center' }}>
                <FontAwesome name='rupee' size={15} color='#04DE71' />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={STYLE.Wallatestyles.balanceview}>
            <Text style={{ fontSize: 14, color: '#999999' }}>Unpaid Balance</Text>
            <Text style={{ fontSize: 26, color: '#04DE71', fontWeight: 'bold' }} > ₹ 5000.00</Text>
          </View>

          <View style={STYLE.Wallatestyles.bankview}>
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

          <View style={STYLE.Wallatestyles.bankview}>
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

export default myEaringScreen;