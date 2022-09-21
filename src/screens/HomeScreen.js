import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UpperBar from '../components/UpperBar';
import BottomBar from '../components/BottomBar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import NoteCard from '../components/NoteCard';
import fireStoreDatabase from '../services/fireStoreDatabase';


const HomeScreen = ({ navigation }) => {
    const [notesList, setNotesList] = useState([]);
    const { fetchingNote } = fireStoreDatabase();

    useEffect(() => {
        storingNoteData();
    }, []);

    const storingNoteData = async () => {

        const value = await fetchingNote()

        setNotesList(value)



    }

    console.log(notesList)
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1 }}>
                <UpperBar />
            </View>
            <View style={{ flex: 0.8, marginEnd: 10 }}>
                <ScrollView>

                    {notesList.map((item) => (
                        <NoteCard data={item} navigation={navigation} key={item.key} />

                    ))}

                </ScrollView>

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