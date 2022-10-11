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
  const [deleteList, setDeleteList] = useState([]);

  const writingNoteToFireStore = async (
    title,
    note,
    pin,
    archive,
    del,
    labelData,
   
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
          labelData: labelData,
         
         
        });
        console.log("notes added")
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
    let deleteArray = [];

    try {
      const list = await notesCollection.doc(user.uid).collection('Notes').get();
      list.forEach(doc => {
        const data = doc.data(); //store doc data with help of data()
        data.key = doc.id;  //doc id into key
        notesArray.push(data);//push operation 

        if (data.Delete) {
          deleteArray.push(data);
        } else if (data.Pin && !data.Archive && !data.Delete) {
          pinnedArray.push(data);
        } else if (!data.Pin && !data.Archive && !data.Delete) {
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
    setDeleteList(deleteArray);
    
   console.log(notesList)

  };



  const updateNote = async (
    id,
    title,
    note,
    pin,
    archive,
    del,
    labelData,
 

  ) => {
    try {
      await notesCollection.doc(user.uid).collection('Notes').doc(id).update({
        Title: title,
        Note: note,
        Pin: pin,
        Archive: archive,
        Delete: del,
        labelData: labelData,
      
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
    deleteList

  };
};

export default fireStoreDatabase;