import React from 'react';
import {FlatList} from 'react-native';
import NoteCard from './NoteCard';
import {useSelector, useDispatch} from 'react-redux';

const TrashList = ({navigation,deleteList}) => {
  const renderItem = ({item}) => (
    <NoteCard navigation={navigation} item={item}/>
  );


  
  return (    
      <FlatList
        data={deleteList}
        renderItem={renderItem}       
      />   
  );
};

export default TrashList;