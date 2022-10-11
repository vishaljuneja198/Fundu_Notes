import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Chip = ({ chipData }) => {
  console.log("--------start chipdata---------")
  console.log(chipData);
  console.log("--------end chipdata---------")

  let ChipArray = [];
  for (let index = 0; index < chipData.length; index++) {
    ChipArray.push(
      <View style={Styles.labelText} >
        <Text style={{ color: 'black' }}>{chipData[index].labelName}</Text>
      </View>,
    );
  }
  return ChipArray;
};

export default Chip;

const Styles = StyleSheet.create({
  labelText: {
    marginLeft: 10,

    marginBottom: '2%',

    color: 'black',

    backgroundColor: 'red',

  },
});