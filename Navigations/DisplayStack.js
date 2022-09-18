import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { AsyncStorage } from '@react-native-async-storage/async-storage';
const FunduNotesStack = createStackNavigator();

const DisplayStack = () => {


  useEffect(() => {

    GoogleSignin.configure({

      webClientId: '330743912364-vv8f2vafeej6a9trkgn7qo86in7j43h6.apps.googleusercontent.com',
    }); 
  });

  

  return (

    <FunduNotesStack.Navigator headeMode="none">
      <FunduNotesStack.Screen name="OnBoarding" component={OnboardingScreen} options={{ header: () => null }} />
      <FunduNotesStack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
      <FunduNotesStack.Screen name="SignUp" component={SignUpScreen} options={({ navigation }) => ({
        title: 'Back to Login'
      })} />
<FunduNotesStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ header: () => null }} />

    </FunduNotesStack.Navigator>
  );
}

export default DisplayStack;