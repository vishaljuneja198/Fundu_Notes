import React, { useContext, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigations/AuthProvider';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLabels } from './redux/Action';


const response = firestore().collection('UserNotes');
const labelsFireBase = () => {
  const { user } = useContext(AuthContext);
  const [labelData, setLabelData] = useState([]);
  const dispatch = useDispatch();



  const storeLabelsData = async labelName => {
    if (labelName !== '') {
      try {
        await response.doc(user.uid).collection('labels').add({
          labelName: labelName,
        });
        console.log('data stored');
      } catch (error) {
        console.log('error....', error);
      }
    }
  };

  const fetchLabelData = async () => {
    let labelArray = [];
    let list = await response.doc(user.uid).collection('labels').get();
    list.forEach(doc => {
      const data = doc.data();
      data.key = doc.id;
      labelArray.push(data);
    });
    setLabelData(labelArray);
   


    dispatch(fetchLabels(labelArray));
    return labelArray
  };





  const updateLabelData = async (key, labelName) => {
    console.log('updated data');
    if (labelName !== '') {
      try {
        await response.doc(user.uid).collection('labels').doc(key).update({
          labelName: labelName,
        });
        console.log('updated data');
      } catch (error) {
        console.log('error....', error);
      }
    }
  };

  const deleteLabelData = async key => {
  
    try {

      await response.doc(user.uid).collection('labels').doc(key).delete();
      console.log('deleted data');
    } catch (error) {
      console.log('error....', error);
    }
  };
  return {
    storeLabelsData,
    fetchLabelData,
    labelData,
    updateLabelData,
    deleteLabelData,
  };
};

export default labelsFireBase;