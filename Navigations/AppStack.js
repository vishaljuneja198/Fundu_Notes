import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import NotesScreen from '../Screens/NotesScreen';
import SearchNotesScreen from'../Screens/SearchNotesScreen';
const Stack = createStackNavigator();

const AppStack = () => {

    return (

        <Stack.Navigator>
         
            <Stack.Screen name='drawer' component={DrawerNavigation} options={{ header: () => null }} />
            <Stack.Screen name='Note' component={NotesScreen} options={{ header: () => null }} />
            <Stack.Screen name='SearchNotes' component={SearchNotesScreen} options={{ header: () => null }} />
        </Stack.Navigator>


    );
}

export default AppStack;