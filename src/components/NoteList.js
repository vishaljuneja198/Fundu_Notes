import React, { useState } from 'react';
import { FlatList, SectionList, Text, View, StyleSheet } from 'react-native';
import NoteCard from './NoteCard';

const NotesList = ({
    navigation,
    unpinnedList,
    pinnedList,
    archiveList,
    notesList
}) => {
    const DATA_SECTIONS = [

        { title: 'pinned', data: [{ list: pinnedList }] },
        { title: 'withoutPinned', data: [{ list: unpinnedList }] }
    ]
    const renderSectionList = ({ item }) => {
        return (
            <FlatList
                data={item.list}
                renderItem={renderItem}
            />

        )
    }

    const renderItem = ({item}) => {
        return <NoteCard item={item} navigation={navigation} />;
      };

    return (
        <SectionList
            sections={DATA_SECTIONS}
            renderItem={renderSectionList}
        />

    )
}

export default NotesList;