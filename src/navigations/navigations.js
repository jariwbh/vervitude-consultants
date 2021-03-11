import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SCREENNAME from '../context/screen/screenName'
import * as TYPE from '../context/actions/type'
import * as COMPONENT from '../context/screen/import'
const Stack = createStackNavigator();

export default navigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={TYPE.NONE} initialRouteName={COMPONENT.LOGINSCREEN}>
                <Stack.Screen name={SCREENNAME.LOGINSCREEN} component={COMPONENT.LOGINSCREEN} />
                <Stack.Screen name={SCREENNAME.FORGOTPASSWORDSCREEN} component={COMPONENT.FORGOTPASSWORDSCREEN} />
                <Stack.Screen name={SCREENNAME.REGISTERSCREEN} component={COMPONENT.REGISTERSCREEN} />
                <Stack.Screen name={SCREENNAME.HOMESCREEN} component={COMPONENT.HOMESCREEN} />
                <Stack.Screen name={SCREENNAME.MYPROFILESCREEN} component={COMPONENT.MYPROFILESCREEN} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};