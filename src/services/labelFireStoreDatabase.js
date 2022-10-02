import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigations/AuthProvider';
import {useSelector, useDispatch} from 'react-redux';
import {setLabelData} from '../services/redux/Action';

const labelCollections = firestore().collection('UserNotes');
const LabelsData = () => {
  const {user} = useContext(AuthContext);
  const [labelsList, setLabelsList] = useState([]);
  const {lableData} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();



  const writingLabelToFireStore = async label => {
    try {
      if (label !== '') {
        await labelCollections.doc(user.id).collection('Labels').add({
          Label: label,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateLabel = async (label, key) => {
    try {
      if (label !== '') {
        await labelCollections.doc(user.id).collection('Labels').doc(key).update({
          Label: label,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLabel = async key => {
    try {
      await labelCollections.doc(user.id).collection('Labels').doc(key).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLabel = async () => {
    let labelsArray = [];
    const list = await labelCollections.doc(user.id).collection('Labels').get();
    list.forEach(doc => {
      let data = doc.data();
      data.key = doc.id;
      labelsArray.push(data);
    });
    dispatch(setLabelData(labelsArray));
  };

  console.log("---------enter in label array --------")
  console.log(LabelsData)
  console.log("---------end of label aary --------")

  return {
    writingLabelToFireStore,
    fetchLabel,
    updateLabel,
    labelsList,
    deleteLabel,
  };
};

export default LabelsData;