import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTab from './MyTab';
import TextInputView from './TextInputView';

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Tab" component={MyTab} />
                <Stack.Screen name="Login" component={TextInputView} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack