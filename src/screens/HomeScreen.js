import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UpperBar from '../components/UpperBar';
import BottomBar from '../components/BottomBar';
import NoteCard from '../components/NoteCard';
import fireStoreDatabase from '../services/fireStoreDatabase';
import NoteList from '../components/NoteList';


const HomeScreen = ({ navigation }) => {
    
    const { fetchingNote,pinnedList,unpinnedList,archiveList,pin,notesList } = fireStoreDatabase();

    useEffect(() => {
        const unSubscribe = navigation.addListener('focus', () => {
          fetchingNote();
        });
        return unSubscribe;
      }, [navigation, fetchingNote]);


    
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1 }}>
                <UpperBar />
            </View>
            <View style={{ flex: 0.8, marginEnd: 10 }}>
                <NoteList
                 navigation={navigation}
                 pinnedList={pinnedList}
                 unpinnedList={unpinnedList}
                 archiveList={archiveList}
                 notesList={notesList}
                 pin={pin}               
                />
                </View>

            <View style={{ flex: 0.10, marginBottom: -18 }}><BottomBar /></View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: 'black'
    }
});