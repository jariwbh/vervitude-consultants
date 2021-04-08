import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type'
import * as SCREEN from '../../context/screen/screenName';
import axiosConfig from '../../helpers/axiosConfig';

function SplashScreen(props) {
  // check AuthController use to Login Or Not Login
  useEffect(() => {
    async function AuthController() {
      var getUser = await AsyncStorage.getItem(AUTHUSER)
      var userData = JSON.parse(getUser);
      if (userData) {
        //set header auth user key
        let token = userData.addedby;
        axiosConfig(token);
        return props.navigation.navigate(SCREEN.MAINSCREEN)
      } else {
        props.navigation.navigate(SCREEN.LOGINSCREEN)
      }
    }
    AuthController();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar backgroundColor="#80caff" hidden barStyle="light-content" />
    </SafeAreaView>
  );
}

export default SplashScreen;
