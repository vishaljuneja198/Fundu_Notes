import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchNotesScreen = () => {
  const navigation = useNavigation();
  return (

    <View style={{ flex: 1 }}>
      <View style={Styles.view}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            style={{ marginLeft: '2%' }}
            name="arrowleft"
            size={30}
            color={'black'}
          />
        </TouchableOpacity>
        <TextInput
          style={Styles.textInput}

          placeholder="Search"
          placeholderTextColor={'gray'}
          onChangeText={() => { }}
        />
      </View>
    </View>
  )
}

export default SearchNotesScreen;

const Styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    // backgroundColor: 'gray',
    alignItems: 'center',
    height: '10%',
    margin: '2%',
  },
  textInput: {
    fontSize: 18,
    color: 'black',
  },
  cardview: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
    padding: '2%',
    borderWidth: 2,
    borderRadius: 10,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notesText: {
    color: 'black',
    fontSize: 18,
  },
});