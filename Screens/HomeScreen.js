import React, {useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormButton from '../Components/FormButton';
import { AuthContext } from '../Navigations/AuthProvider';
import UpperBar from '../Components/UpperBar';
import BottomBar from '../Components/BottomBar';
import { ScrollView } from 'react-native-gesture-handler';

import FireStoreDatabase from '../Services/FireStoreDatabase';
import NoteCard from '../Components/NoteCard';




const HomeScreen = ({navigation}) => {

    
    const [notesList, setNotesList] = useState([]);
    const { user, logout } = useContext(AuthContext);
    const { fetchingNote } = FireStoreDatabase();

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