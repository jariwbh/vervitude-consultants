import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, FlatList, RefreshControl, StatusBar } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLE from './styles'
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type';
import Loader from '../../components/loader/index';
import { WalletDetailService, WalletHistory } from '../../services/WalletService/WalletService';
import moment from 'moment';
import GeneralStatusBarColor from '../../components/StatusBarStyle/GeneralStatusBarColor';
import crashlytics, { firebase } from "@react-native-firebase/crashlytics";

function myEaringScreen(props) {
  const [loading, setloading] = useState(false);
  const [walletBalance, setWalletBalance] = useState(null);
  const [walletList, setWalletList] = useState([]);
  const [UserId, setUserID] = useState(null);
  const [refreshing, setrefreshing] = useState(false);

  useEffect(() => {
  }, [loading, walletBalance, walletList, UserId, refreshing]);

  useEffect(() => {
    setloading(true);
    AsyncStorage.getItem(AUTHUSER).then(async (res) => {
      let id = JSON.parse(res)._id;
      getWalletBalance(id);
      getWalletBalanceHistory(id);
      setUserID(id);
    });
  }, []);

  const getWalletBalance = async (id) => {
    try {
      const response = await WalletDetailService(id);
      if (response.data != null && response.data.length != 0 && response.data != 'undefind' && response.status == 200) {
        setWalletBalance(response.data[0]);
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      firebase.crashlytics().recordError(error);
    }
  }

  const getWalletBalanceHistory = async (id) => {
    try {
      const response = await WalletHistory(id);
      if (response.data != null && response.data.length != 0 && response.data != 'undefind' && response.status == 200) {
        setWalletList(response.data);
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      firebase.crashlytics().recordError(error);
    }
  }

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = () => {
    setrefreshing(true);
    WalletDetailService(UserId);
    getWalletBalanceHistory(UserId);
    wait(3000).then(() => setrefreshing(false));
  }

  //select to collapsible (show data)
  const onPressToSelectWalletCard = (item, index, val) => {
    const walletCard = walletList.map((item) => {
      item.selected = false;
      return item;
    });

    if (val == false) {
      walletCard[index].selected = false;
    }
    if (val == true) {
      walletCard[index].selected = true;
    }
    setWalletList(walletCard);
  }

  const renderWalletList = ({ item, index }) => (
    item
      ?
      item.selected == true ?
        <View style={STYLE.Transferstyles.gamountview}>
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
              <Text style={{ fontSize: 14, marginLeft: 5 }}>Gross Amount</Text>
              <TouchableOpacity onPress={() => onPressToSelectWalletCard(item, index, false)}>
                <Image source={require('../../assets/images/squarefilled.png')} style={{ height: 15, width: 15, marginRight: 5 }} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#04DE71' }}> ₹ {item.property.amount}</Text>
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
              <Text style={{ fontSize: 12, marginLeft: 15, color: '#999999' }}>TDS(5%)</Text>
              <Text style={{ fontSize: 12, color: '#04DE71', marginRight: 20 }}> ₹ 0</Text>
            </View>
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
              <Text style={{ fontSize: 12, marginLeft: 15, color: '#999999' }}>Net Earning</Text>
              <Text style={{ fontSize: 12, color: '#04DE71', marginRight: 20 }}> ₹ {item.property.amount}</Text>
            </View>
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></View>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
              <Text style={{ fontSize: 12, marginLeft: 15, color: '#999999' }}>Bank</Text>
              <Text style={{ fontSize: 12, color: '#999999', marginRight: 20 }}>{item.property.bankname}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
              <Image source={require('../../assets/images/image1.png')} style={{ height: 45, width: 45, borderRadius: 100 }} />
              <View>
                <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>{item.property.bankname}</Text>
                <Text style={{ fontSize: 12, color: '#999999', marginLeft: 15 }}>{item.property.date && moment(item.property.date).format('DD/MM/YYYY') + ', ' + moment(item.property.date).format('LT')}</Text>
              </View>
            </View>
          </View>
        </View>
        :
        <View style={STYLE.Wallatestyles.bankview}>
          <TouchableOpacity onPress={() => onPressToSelectWalletCard(item, index, true)}
            style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

            <View style={{ justifyContent: 'flex-start' }}>
              <Image source={require('../../assets/images/image1.png')} style={{ height: 45, width: 45, borderRadius: 100, marginLeft: 10 }} />
            </View>

            <View style={{ flexDirection: 'column', marginLeft: -50 }}>
              <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>{item.property.bankname}</Text>
              <Text style={{ fontSize: 12, color: '#999999', marginLeft: 15 }}>{item.property.date && moment(item.property.date).format('DD/MM/YYYY') + ', ' + moment(item.property.date).format('LT')}</Text>
            </View>

            <View style={{ justifyContent: 'flex-end' }}>
              <Text style={{ fontSize: 14, color: '#04DE71', marginTop: 5, marginRight: 30 }}> ₹ {item.property.amount}</Text>
            </View>
          </TouchableOpacity>
        </View>
      : null
  )

  return (
    <SafeAreaView style={STYLE.Wallatestyles.container}>
      <GeneralStatusBarColor hidden={false} translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5AC8FA" titleColor="#5AC8FA" colors={["#5AC8FA"]} onRefresh={() => onRefresh()} />}>
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
          <View style={{ justifyContent: 'flex-start' }}>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <AntDesign name='arrowleft' color='#5AC8FA' size={24} style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(SCREEN.MYEARINGSCREEN)}
              style={STYLE.Wallatestyles.wallatwbtn}>
              <Text style={{ fontSize: 16, color: '#FFFFFF', marginLeft: 10 }}>{walletBalance && walletBalance.wallet && walletBalance.wallet.balance ? (walletBalance.wallet.balance).toFixed(2) : 0}</Text>
              <View style={{ width: 24, height: 24, backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 100, justifyContent: 'center', marginLeft: 10, marginRight: 10, }}>
                <FontAwesome name='rupee' size={15} color='#04DE71' />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={STYLE.Wallatestyles.balanceview}>
            <Text style={{ fontSize: 14, color: '#999999' }}>Available Balance</Text>
            <Text style={{ fontSize: 26, color: '#04DE71', fontWeight: 'bold' }} >
              {walletBalance && walletBalance.wallet && walletBalance.wallet.balance ? '₹ ' + (walletBalance.wallet.balance).toFixed(2) : '₹ ' + 0}
            </Text>
          </View>
          {(walletList == null) || (walletList && walletList.length <= 0) ?
            (loading ? null :
              <Text style={{ textAlign: 'center', fontSize: 16, color: '#747474', marginTop: 50 }}>Data Not available</Text>
            )
            :
            <FlatList
              data={walletList}
              renderItem={renderWalletList}
              keyExtractor={item => item._id}
            />
          }
        </View>
      </ScrollView>
      {loading ? <Loader /> : null}
    </SafeAreaView>
  )
}

export default myEaringScreen;