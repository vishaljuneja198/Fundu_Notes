import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LableHeader from '../components/label/LabelHeader';
import NewLabel from '../components/label/NewLabel';
import LabelsData from '../services/labelFireStoreDatabase';
import { Provider } from 'react-redux';
import { Store } from '../services/redux/Store'
import labelsFireBase from '../services/labelFireStoreDatabase';
import LabelCards from '../components/label/LabelCard';
import {useSelector} from 'react-redux';

const LabelScreen = () => {
  const navigation = useNavigation();
  const [cross, setCross] = useState(false);
  const [plus, setPlus] = useState(false);
  const [right, setRight] = useState(false);
  const [labelName, setLabelName] = useState('');
  const { storeLabelsData, fetchLabelData } = labelsFireBase();

  const { labelData } = useSelector(state => state.userReducer);


 // console.log("enter of label data ")
  //console.log(labelData)
  //console.log("end of label data ")

  const states = {
    cross,
    plus,
    right,
    labelName,
    setLabelName,
    setCross,
    setPlus,
    setRight,
  };

  const OnPressHandler = async () => {
    if (labelName.length) {
      await storeLabelsData(labelName);
      await fetchLabelData();
      setLabelName('');
    } else {
      setCross(!cross);
      setRight(!right);
    }
  };


  useEffect(() => {
    fetchLabelData();
  }, []);





  return (


    <View>
      <LableHeader navigation={navigation} />
      <NewLabel states={states} OnPressHandler={OnPressHandler} />

      <FlatList
        data={labelData}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <LabelCards item={item} navigation={navigation}/>
        )}
      />
    </View>
  )
}

export default LabelScreen;

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    marginLeft: '5%',
  },
  textInput: {
    fontSize: 18,
    color: 'black',
    width: '75%',
    marginLeft: '3%',
    marginRight: '2%',
  },
  icon: {
    marginRight: '3%',
  },
});