import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import NotesBottom from '../components/NotesBottom';
import NotesHeader from '../components/NotesHeader'
import Notes from '../components/Notes'
import { useRoute } from '@react-navigation/native';
import fireStoreDatabase from '../services/fireStoreDatabase';
const NotesScreen = ({ navigation }) => {

    const noteData = useRoute().params;
    const { writingNoteToFireStore, updateNote } = fireStoreDatabase();
    const [title, setTitle] = useState(noteData?.Title || '');
    const [note, setNote] = useState(noteData?.Note || '');
    const [archive, setArchive] = useState(noteData?.Archive || false);
    const [del, setDel] = useState(noteData?.Delete || false);
    const [pin, setPin] = useState(noteData?.Pin || false);
    const [id, setId] = useState(noteData?.key || '');
    const states = {
        title, note, setTitle, setNote, pin, setPin, archive, setArchive, del, setDel,
    };

    const onBackPress = async () => {

        await writingNoteToFireStore(
            title,
            note,
            pin,
            archive,
            del,
        );
        navigation.goBack();
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
                <NotesBottom />
            </View>
        </SafeAreaView>
    )
}
export default NotesScreen;