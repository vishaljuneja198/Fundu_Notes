import React from 'react';
import {FlatList} from 'react-native';
import NoteCard from './NoteCard';
import {useSelector, useDispatch} from 'react-redux';

const ArchiveList = ({navigation, archiveList}) => {
  const renderItem = ({item}) => (
    <NoteCard navigation={navigation} item={item}/>
  );

  return (    
      <FlatList
        data={archiveList}
        renderItem={renderItem}       
      />   
  );
};

export default ArchiveList;