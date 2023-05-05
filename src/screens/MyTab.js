import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const MyTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Settings' component={Settings} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default MyTab