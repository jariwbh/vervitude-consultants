import * as React from 'react';
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
import SELECTCATEGORYSCREEN from '../screen/selectCategoryScreen/selectCategoryScreen'

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
                <Stack.Screen name="editScreen" component={EDITSCREEN} />
                <Stack.Screen name="documentScreen" component={DOCUMENTSCREEN} />
                <Stack.Screen name="bankInfoScreen" component={BANKINFOSCREEN} />
                <Stack.Screen name="notificationScreen" component={NOTIFICATIONSCREEN} />
                <Stack.Screen name="myEaringScreen" component={MYEARINGSCREEN} />
                <Stack.Screen name="selectCategoryScreen" component={SELECTCATEGORYSCREEN} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default navigationsApp