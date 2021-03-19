import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LOGINSCREEN from "../screen/loginScreen/loginScreen";
import FORGOTPASSWORDSCREEN from "../screen/forgotPasswordScreen/forgotPasswordScreen";
import REGISTERSCREEN from "../screen/registerScreen/registerScreen";
import HOMESCREEN from "../screen/homeScreen/homeScreen";
import MYPROFILESCREEN from '../screen/myProfileScreen/myProfileScreen';
import MYTRANSFERSSCREEN from '../screen/myWalletScreen.js/myTransfersScreen'
import INVITESCREEN from '../screen/inviteConsultant/inviteScreen'

const Stack = createStackNavigator();

const navigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={LOGINSCREEN}>
                <Stack.Screen name="loginScreen" component={LOGINSCREEN} />
                <Stack.Screen name="forgotPasswordScreen" component={FORGOTPASSWORDSCREEN} />
                <Stack.Screen name="registerScreen" component={REGISTERSCREEN} />
                <Stack.Screen name="homeScreen" component={HOMESCREEN} />
                <Stack.Screen name="myProfileScreen" component={MYPROFILESCREEN} />
                <Stack.Screen name="myTransfersScreen" component={MYTRANSFERSSCREEN} />
                <Stack.Screen name="invitescreen" component={INVITESCREEN} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default navigationsApp