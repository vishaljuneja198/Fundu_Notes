import React, { useContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../Navigations/AuthProvider';


const notesCollection = firestore().collection('UserNotes');
const FireStoreDatabase = () => {



  const { user } = useContext(AuthContext);

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

    try {
      const list = await notesCollection.doc(user.uid).collection('Notes').get();
      list.forEach(doc => {
        const data = doc.data(); //store doc data with help of data()
        data.key = doc.id;  //doc id into key
        notesArray.push(data);//push operation 
      });
    } catch (error) {
      console.log(error);
    }

    return notesArray;


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

    writingNoteToFireStore,
    updateNote,
    fetchingNote,

  };
};

export default FireStoreDatabase;