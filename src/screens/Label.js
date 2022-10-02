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
import {Store} from '../services/redux/Store'


const LabelScreen = () => {
    const navigation = useNavigation();
    const [cross, setCross] = useState(false);
    const [plus, setPlus] = useState(false);
    const [right, setRight] = useState(false);
    const [input, setInput] = useState('');
    const {writingLabelToFireStore, fetchLabel, labelsList} = LabelsData();


    const states = {
        cross,
        plus,
        right,
        input,
        setInput,
        setCross,
        setPlus,
        setRight,
      };
      
      const handleDoneIcon = async () => {
        if (input.length) {
          await writingLabelToFireStore(input);
          await fetchLabel();
          setInput('');
        } else {
          setCross(!cross);
          setRight(!right);
        }
      };
      
    
      useEffect(() => {
        fetchLabel();
      }, []);
    
      
    return (

     
          <View>
           <LableHeader navigation={navigation}/>
           <NewLabel states={states} handleDoneIcon={handleDoneIcon} />
     
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