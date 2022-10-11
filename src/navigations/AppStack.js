import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import NotesScreen from '../screens/NotesScreen';
import SearchNotesScreen from'../screens/SearchNotes';
import LabelsList from '../components/label/LabelsList';
import { Provider } from 'react-native-paper';
import {Store} from '../services/redux/Store'
const Stack = createStackNavigator();

const AppStack = () => {

    return (

        <Stack.Navigator>
         
            <Stack.Screen name='drawer' component={DrawerNavigation} options={{ header: () => null }} />
            <Stack.Screen name='NotesScreen' component={NotesScreen} options={{ header: () => null }} />
            <Stack.Screen name='SearchNotes' component={SearchNotesScreen} options={{ header: () => null }} />
            <Stack.Screen name="LabelsList" component={LabelsList}  options={{ header: () => null }} /> 
        </Stack.Navigator>


    );
}

export default AppStack;