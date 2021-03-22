import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LOGINSCREEN from "../screen/loginScreen/loginScreen";
import FORGOTPASSWORDSCREEN from "../screen/forgotPasswordScreen/forgotPasswordScreen";
import REGISTERSCREEN from "../screen/registerScreen/registerScreen";
import HOMESCREEN from "../screen/homeScreen/homeScreen";
import MYPROFILESCREEN from '../screen/myProfileScreen/myProfileScreen';
import MYTRANSFERSSCREEN from '../screen/myWalletScreen/myTransfersScreen'
import INVITESCREEN from '../screen/inviteConsultant/inviteScreen'
import MYEARINGSCREEN from '../screen/myWalletScreen/myEaringScreen'
import NOTIFICATIONSCREEN from '../screen/notificationScreen/notificationScreen'
import BANKINFOSCREEN from '../screen/myProfileScreen/bankInfoScreen'
import DOCUMENTSCREEN from '../screen/myProfileScreen/documentScreen'
import EDITSCREEN from '../screen/myProfileScreen/editScreen'
import MenuButton from '../components/MenuButton/MenuButton';
import ChatMenu from '../components/ChatMenu/ChatMenu';
import SwitchButton from '../components/SwittchButton/SwitchButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as SCREEN from '../context/screen/screenName'
const Stack = createStackNavigator();

const navigationsApp = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={LOGINSCREEN}>
                <Stack.Screen name="loginScreen" component={LOGINSCREEN} />
                <Stack.Screen name="forgotPasswordScreen" component={FORGOTPASSWORDSCREEN} />
                <Stack.Screen name="registerScreen" component={REGISTERSCREEN} />
                <Stack.Screen name="MainScreen" component={MainNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeStack = createStackNavigator();
function MainNavigation({ navigation }) {
    return (
        <HomeStack.Navigator headerMode='none' initialRouteName='homeScreen'>
            <HomeStack.Screen name="homeScreen" component={HOMESCREEN} />
            <HomeStack.Screen name="myProfileScreen" component={MYPROFILESCREEN} />
            <HomeStack.Screen name="myTransfersScreen" component={MYTRANSFERSSCREEN} />
            <HomeStack.Screen name="invitescreen" component={INVITESCREEN} />
            <HomeStack.Screen name="editScreen" component={EDITSCREEN} />
            <HomeStack.Screen name="documentScreen" component={DOCUMENTSCREEN} />
            <HomeStack.Screen name="bankInfoScreen" component={BANKINFOSCREEN} />
            <HomeStack.Screen name="notificationScreen" component={NOTIFICATIONSCREEN} />
            <HomeStack.Screen name="myEaringScreen" component={MYEARINGSCREEN} />
        </HomeStack.Navigator>
    );
};

export default navigationsApp