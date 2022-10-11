import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../utils/dimension';
import Chip from './label/chip';
import {useSelector} from 'react-redux';
const NoteCard = ({ item, navigation, gridView }) => {

  const {labelData} = useSelector(state => state.userReducer);
  
  let chipData = labelData.filter(labels => {
    console.log("enter in filter ")

    for (let index = 0; index < item?.labelData?.length; index++) {
      console.log("enter in for loop")
      console.log(labels.key)
      console.log(item.labelData[index])
     if (labels.key==(item.labelData[index].key)) {
        // console.log("enter in if loop")
         return item.labelData[index].key ;
       }
    }
  });

  console.log("--------start chipdata---------")
  console.log(chipData);
  console.log("--------end chipdata---------")
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NotesScreen', { ...item })
      }}>


      <View style={[

        { width: gridView ? widthPercentage('44%') : null },
        styles.container]}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.note}>{item.Note}</Text>
     

        <Chip chipData={chipData} />
      </View>
    </TouchableOpacity>
  );
};
export default NoteCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: widthPercentage('1%'),
    paddingHorizontal: widthPercentage('2%'),
    borderColor: '#75848e',
    marginHorizontal: widthPercentage('2%'),
    marginBottom: heightPercentage('1%'),
    paddingBottom: heightPercentage('1%'),
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  note: {
    fontSize: 18,
    color: 'black',
  },
});