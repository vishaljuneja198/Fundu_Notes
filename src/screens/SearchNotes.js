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


import fireStoreDatabase from '../services/fireStoreDatabase';
const SearchNotes = ({ }) => {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const { notesList, fetchingNote } = fireStoreDatabase();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchingNote();
  }, []);

  const OnChangeTextInput = text => {
    setValue(text);
    let array = notesList.filter(
      data =>
        (text && data.Title.toLowerCase().includes(text.toLowerCase())) ||
        (text && data.Note.toLowerCase().includes(text.toLowerCase())),
    );
    setSearchData(array);
  };

  const onPressUpdate = item => {
    navigation.navigate('NotesScreen', { ...item, isUpDate: true });
  };

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
          value={value}
          placeholder="Search"
          placeholderTextColor={'gray'}
          onChangeText={OnChangeTextInput}
        />
      </View>
      {searchData ? (
        <FlatList
          data={searchData}
          numColumns={1}
          key={1}
          keyExtractor={item => item?.key}
          renderItem={({ item }) =>
            item ? (
              <View style={Styles.cardview}>
                <TouchableOpacity
                  onPress={() => {
                    onPressUpdate(item);
                  }}>
                  <Text style={Styles.titleText}> {item?.Title}</Text>
                  <Text style={Styles.notesText}>{item?.Note}</Text>
                </TouchableOpacity>
              </View>
            ) : null
          }
        />
      ) : null}
    </View>
  );
};

export default SearchNotes;

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