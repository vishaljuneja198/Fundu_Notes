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


const LabelScreen = () => {
    const navigation = useNavigation();
    return (

        <View>
            <View style={Styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <AntDesign name="arrowleft" size={25} color={'black'} />
                </TouchableOpacity>
                <Text style={Styles.headerText}>EditLabels</Text>
            </View>
            <View
                style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1 }}>

                <TouchableOpacity style={{ marginLeft: '3%' }}>
                    <AntDesign name="plus" color={'black'} size={24} />
                </TouchableOpacity>
                <TextInput
                    style={Styles.textInput}

                    placeholder="Create New Label"
                    placeholderTextColor={'black'}
                    onChangeText={() => { }}

                    onPress={() => { }}
                />

            </View>

        </View>
    )
}

export default LabelScreen;

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