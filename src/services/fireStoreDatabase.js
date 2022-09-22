import React, { useContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigations/AuthProvider';

const notesCollection = firestore().collection('UserNotes');
const fireStoreDatabase = () => {
 
  const {user} = useContext(AuthContext);
  const [pinnedList, setPinnedList] = useState([]);
  const [unpinnedList, setunpinnedList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [notesList, setNotesList] = useState([]);

  const writingNoteToFireStore = async (
    title,
    note,
    pin,
    archive,
    del
  ) => {
    try {

      if (title !== '' || note !== '') {

        //degug statement work properly 
        await notesCollection.doc(user.uid).collection('Notes').add({
          Title: title,
          Note: note,
          Pin: pin,
          Archive: archive,
          Delete: del,
        });
        console.log(user.uid)
      }
    } catch (error) {
      console.log(error);
    }

  };
  const fetchingNote = async () => {
    let notesArray = [];// asiginig note array 
    let pinnedArray = [];
    let unpinnedArray = [];
    let archiveArray = [];

    try {
      const list = await notesCollection.doc(user.uid).collection('Notes').get();
      list.forEach(doc => {
        const data = doc.data(); //store doc data with help of data()
        data.key = doc.id;  //doc id into key
        notesArray.push(data);//push operation 

         if (data.Pin && !data.Archive) {
          pinnedArray.push(data);
        } else if (!data.Pin && !data.Archive ) {
          unpinnedArray.push(data);
        } else {
          archiveArray.push(data);
        }


      });
    } catch (error) {
      console.log(error);
    }

    setNotesList(notesArray);
    setPinnedList(pinnedArray);
    setunpinnedList(unpinnedArray);
    setArchiveList(archiveArray);
    
    console.log("---------Starting of notes array")
    console.log(notesArray)
    console.log("---------Starting of pinned")
    console.log(pinnedArray)
    console.log("---------Starting of unpinned")
    console.log(unpinnedArray)
    console.log("---------Starting of archive")
    console.log(archiveArray)

  };



  const updateNote = async (
    id,
    title,
    note,
    pin,
    archive,
    del,
  ) => {
    try {
      await notesCollection.doc(user.uid).collection('Notes').doc(id).update({
        Title: title,
        Note: note,
        Pin: pin,
        Archive: archive,
        Delete: del,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {

    fetchingNote,
    pinnedList,
    unpinnedList,
    writingNoteToFireStore,
    updateNote,
    archiveList,
    notesList,

  };
};

export default fireStoreDatabase;