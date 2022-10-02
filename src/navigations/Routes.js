import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DisplayStack from './DisplayStack';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import AppStack from './AppStack';
import { Provider } from 'react-redux';
import {Store} from '../services/redux/Store'

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;
    return (
        <Provider store={Store}>
        <NavigationContainer>
            {user ? <AppStack /> : <DisplayStack />}
        </NavigationContainer>
        </Provider>
    );
};

export default Routes;