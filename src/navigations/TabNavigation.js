import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawingScreen from '../screens/DrawingScreen';
import AudioScreen from '../screens/AudioScreen';
import ImageScreen from '../screens/ImageScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
    <TabNavigation.Navigator>
        <Tabs.Screen name="ImageScreen" component={ImageScreen} />
        <Tabs.Screen name="AudioScreen" component={AudioScreen} />
        <Tabs.Screen name="DrawingScreen" component={DrawingScreen} />
    </TabNavigation.Navigator>
}