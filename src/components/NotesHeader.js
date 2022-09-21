import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {heightPercentage,widthPercentage} from '../utils/dimension';

const NotesHeader = ({
  states,
  onBackPress
}) => {
console.log(states.archive)
  return (
    <>
      <View style={styles.container}>
        <View style={styles.arrow}>
          <IconButton
            icon={'keyboard-backspace'}
            size={24}
            color="black"
            onPress={onBackPress}
          />
        </View>
        <View style={styles.group}>
          <IconButton
            icon={'pin-outline'}
            size={24}
            color={states.pin ? 'blue' : 'black'}
            onPress={() => states.setPin(!states.pin)}
          />
          <View style={{ paddingRight: widthPercentage('3%') }}>
            <IconButton
              icon={'bell-outline'}
              size={24}
              color="black"
              onPress={() => { }}
            />
          </View>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              name="archive-outline"
              color={states.archive ? 'blue' : 'black'}
              size={24}
              onPress={() => states.setArchive(!states.archive)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default NotesHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentage('1.5%'),
  },
  arrow:
  {
    flexDirection: 'row',
    paddingRight:
    widthPercentage('2%')
  },

  group: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPercentage('5%'),
  },
});