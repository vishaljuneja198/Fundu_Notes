import React, { useState, useReducer, useCallback,useEffect} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import NotesBottom from '../Components/NotesBottom';
import NotesHeader from '../Components/NotesHeader'
import Notes from '../Components/Notes'
import { useRoute } from '@react-navigation/native';
import FireStoreDatabase from '../Services/FireStoreDatabase';
import { useNavigation } from '@react-navigation/native';

const NotesScreen = () => {
   
    const navigation = useNavigation();
    const noteData = useRoute().params;
    const { WritingNoteToFireStore, UpdateNote } = FireStoreDatabase();
    const [title, setTitle] = useState(noteData?.Title || '');
    const [note, setNote] = useState(noteData?.Note || '');
    const [archive, setArchive] = useState(noteData?.Archive || false);
    const [del, setDel] = useState(noteData?.Delete || false);
    const [pin, setPin] = useState(noteData?.Pin || false);
    const [id, setId] = useState(noteData?.key || '');
    const states = {
        title, note,  setTitle,setNote, pin,setPin,archive, setArchive, del,setDel,
    };
console.log("staring of key")
console.log(id)
console.log("ending of key")
    console.log("notescreen") //debug
    console.log(states.archive) //debug
    console.log("notescreen")  //debug
    console.log(states.pin)  //debug
    const onBackPress = async () => {
        await WritingNoteToFireStore(
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