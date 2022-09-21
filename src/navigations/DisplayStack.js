import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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