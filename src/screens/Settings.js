import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const SettingsScreen = () => {
    const navigation = useNavigation();
    return (

        <View style={Styles.header}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}>
                <AntDesign name="arrowleft" size={25} color={'black'} />
            </TouchableOpacity>
            <Text style={Styles.headerText}>Settings</Text>
        </View>
    )
}

export default SettingsScreen;

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: 'black',
        marginLeft: '5%',
    },
    textInput: {
        fontSize: 18,
        color: 'black',
        width: '75%',
        marginLeft: '3%',
        marginRight: '2%',
    },
    icon: {
        marginRight: '3%',
    },
});