import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LOGINSCREEN from "../screen/loginScreen/loginScreen";
import FORGOTPASSWORDSCREEN from "../screen/forgotPasswordScreen/forgotPasswordScreen";
import REGISTERSCREEN from "../screen/registerScreen/registerScreen";
import HOMESCREEN from "../screen/homeScreen/homeScreen";
import MYPROFILESCREEN from '../screen/myProfileScreen/myProfileScreen';
import MYTRANSFERSSCREEN from '../screen/myWalletScreen/myTransfersScreen';
import INVITESCREEN from '../screen/inviteConsultant/inviteScreen';
import MYEARINGSCREEN from '../screen/myWalletScreen/myEaringScreen';
import NOTIFICATIONSCREEN from '../screen/notificationScreen/notificationScreen';
import BANKINFOSCREEN from '../screen/myProfileScreen/bankInfoScreen';
import DOCUMENTSCREEN from '../screen/myProfileScreen/documentScreen';
import EDITSCREEN from '../screen/myProfileScreen/editScreen';
import SELECTCATEGORYSCREEN from '../screen/selectCategoryScreen/selectCategoryScreen';
import CHATHISTORYSCREEN from '../screen/chatHistoryScreen/chatHistoryScreen'
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
        </HomeStack.Navigator>
    );
};

export default navigationsApp