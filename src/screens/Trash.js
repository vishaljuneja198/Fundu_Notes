import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import TrashList from '../components/TrashList';
import fireStoreDatabase from '../services/fireStoreDatabase';

const DeletedScreen = () => {
  const navigation = useNavigation();
  const { deleteList, fetchingNote } = fireStoreDatabase();
  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
        fetchingNote();
    });
    return unSubscribe;
}, [navigation, fetchingNote]);

  return (
    <View style={Styles.container}>
      <View style={{ flex: 0.09 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: '2.5%',
            }}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Icon name="menu" color={'black'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Text style={Styles.text}>Deleted</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>


      <View style={Styles.notes}>
                <TrashList
                    navigation={navigation}
                    deleteList={deleteList}

                />
            </View>
    </View>
  )
}

export default DeletedScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  deleteView: {
    alignSelf: 'center',
    marginTop: '70%',
    alignItems: 'center',
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
  view: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
    padding: '2%',
    borderWidth: 1,
    borderRadius: 10,
  },
  notes: {
    flex: 0.91,
    backgroundColor: 'white',
    padding: 2,
    paddingHorizontal: 2,
},
});