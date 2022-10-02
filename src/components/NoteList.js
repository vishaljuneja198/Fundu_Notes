import React, { useState } from 'react';
import { FlatList, SectionList, Text, View, StyleSheet } from 'react-native';
import NoteCard from './NoteCard';
import {useSelector} from 'react-redux';

const NotesList = ({
    navigation,
    unpinnedList,
    pinnedList,
    
}) => {
    const DATA_SECTIONS = [

        { title: 'pinned', data: [{ list: pinnedList }] },
        { title: 'withoutPinned', data: [{ list: unpinnedList }] }
    ]
    const {gridView} = useSelector(state => state.userReducer);
    let numCols = gridView ? 2 : 0;

    console.log(numCols)
    console.log(gridView)
 
    const renderSectionList = ({ item }) => {
        return (
            <FlatList
                numColumns={numCols}
                data={item.list}
                renderItem={renderItem}
                key={numCols}
            />

        )
    }

    const renderItem = ({item}) => {
        return <NoteCard item={item} navigation={navigation} gridView={gridView} />;
      };

    return (
        <SectionList
            sections={DATA_SECTIONS}
            renderItem={renderSectionList}
        />

    )
}

export default NotesList;