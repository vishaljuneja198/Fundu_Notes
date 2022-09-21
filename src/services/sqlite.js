import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => { },
  err => {
    console.log(err);
  },
);
const SQLiteDatabase = () => {

  const createTable = async () => {
    await db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS' +
        'UserNotes' +
        '(ID INTEGER PRIMARY KEY AUTOINCREMENT, title text,note text);',
      );
    });
  };

  const setData = async () => {
    if (title.length !== 0 || note.length !== 0) {
      try {
        await db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO UserNotes (title,note) VALUES (' +
            title +
            ',' +
            note +
            ')',
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };


}

export default SQLiteDatabase;