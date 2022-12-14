import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import NotesBottom from '../components/NotesBottom';
import NotesHeader from '../components/NotesHeader'
import Notes from '../components/Notes'
import { useRoute } from '@react-navigation/native';
import fireStoreDatabase from '../services/fireStoreDatabase';
import { useSelector } from 'react-redux';
const NotesScreen = ({ navigation }) => {

    const noteData = useRoute().params;
    const { writingNoteToFireStore, updateNote } = fireStoreDatabase();
    const [title, setTitle] = useState(noteData?.Title || '');
    const [note, setNote] = useState(noteData?.Note || '');
    const [archive, setArchive] = useState(noteData?.Archive || false);
    const [del, setDel] = useState(noteData?.Delete || false);
    const [pin, setPin] = useState(noteData?.Pin || false);
    const [id, setId] = useState(noteData?.key || '');
    const { labelData } = useSelector(state => state.userReducer);
    const states = {
        title, note, setTitle, setNote, pin, setPin, archive, setArchive, del, setDel,
    };
    console.log(id)
    console.log(pin)
    const onBackPress = async () => {
        if (id) {
            await updateNote(id, title, note, pin, archive, del, labelData);
            console.log(id)
        } else {
            await writingNoteToFireStore(
                title,
                note,
                pin,
                archive,
                del,
                labelData
            );
        }
        navigation.goBack();
    };

    const handleDeleteButton = async () => {
        console.log("welcome to delete function")
        await updateNote(id, title, note, pin, archive, true);


    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 0.1 }}>
                <NotesHeader
                    states={states}
                    onBackPress={onBackPress}
                />
            </View>

            <View style={{ flex: 0.8 }}>
                <Notes  {...states} />

            </View>
            <View style={{ flex: 0.1 }}>
                <NotesBottom
                    states={states}
                    handleDeleteButton={handleDeleteButton} />
            </View>
        </SafeAreaView>
    )
}
export default NotesScreen;