import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SELECTCATEGORYSCREEN from '../screen/selectCategoryScreen/selectCategoryScreen';
import NOTIFICATIONSCREEN from '../screen/notificationScreen/notificationScreen';
import CHATHISTORYSCREEN from '../screen/chatHistoryScreen/chatHistoryScreen';
import MYTRANSFERSSCREEN from '../screen/myWalletScreen/myTransfersScreen';
import MYPROFILESCREEN from '../screen/myProfileScreen/myProfileScreen';
import RUBYCHATSCREEN from '../screen/chatHistoryScreen/rubychatScreen';
import BANKINFOSCREEN from '../screen/myProfileScreen/bankInfoScreen';
import DOCUMENTSCREEN from '../screen/myProfileScreen/documentScreen';
import REGISTERSCREEN from "../screen/registerScreen/registerScreen";
import MYEARINGSCREEN from '../screen/myWalletScreen/myEaringScreen';
import INVITESCREEN from '../screen/inviteConsultant/inviteScreen';
import SPLASHSCREEN from '../screen/SplashScreen/splashScreen';
import EDITSCREEN from '../screen/myProfileScreen/editScreen';
import LOGINSCREEN from "../screen/loginScreen/loginScreen";
import HOMESCREEN from "../screen/homeScreen/homeScreen";

const Stack = createStackNavigator();
const navigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={SPLASHSCREEN}>
                <Stack.Screen name="splashScreen" component={SPLASHSCREEN} />
                <Stack.Screen name="loginScreen" component={LOGINSCREEN} />
                <Stack.Screen name="registerScreen" component={REGISTERSCREEN} />
                <Stack.Screen name="MainScreen" component={MainNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeStack = createStackNavigator();
function MainNavigation() {
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
            <HomeStack.Screen name="selectCategoryScreen" component={SELECTCATEGORYSCREEN} />
            <HomeStack.Screen name="chatHistoryScreen" component={CHATHISTORYSCREEN} />
            <HomeStack.Screen name="rubychatScreen" component={RUBYCHATSCREEN} />
        </HomeStack.Navigator>
    );
};

export default navigationsApp