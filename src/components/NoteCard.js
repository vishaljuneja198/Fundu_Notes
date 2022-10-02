import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../utils/dimension';
const NoteCard = ({ item, navigation, gridView }) => {


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