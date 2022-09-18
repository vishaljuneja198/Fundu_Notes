import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawingScreen from '../Screens/DrawingScreen';
import AudioScreen from '../Screens/AudioScreen';
import ImageScreen from '../Screens/ImageScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tabs=createBottomTabNavigator();

const TabNavigation=()=>{

<TabNavigation.Navigator>

<Tabs.Screen name ="ImageScreen" component={ImageScreen}/>
<Tabs.Screen name ="AudioScreen" component={AudioScreen}/>
<Tabs.Screen name ="DrawingScreen" component={DrawingScreen}/>
</TabNavigation.Navigator>


}