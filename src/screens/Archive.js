
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import ArchiveList from '../components/ArchiveList';
import { windowHeight, windowWidth } from '../utils/dimension';
import fireStoreDatabase from '../services/fireStoreDatabase';
import {useSelector, useDispatch} from 'react-redux';
import { setGridView, SET_GRID_VIEW } from '../services/redux/Action';

const ArchiveScreen = () => {
    const navigation = useNavigation();
    const { archiveList, fetchingNote } = fireStoreDatabase();
    const {gridView} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const unSubscribe = navigation.addListener('focus', () => {
            fetchingNote();
        });
        return unSubscribe;
    }, [navigation, fetchingNote]);

    return (

        <View style={styles.container}>
            <View style={{ flex: 0.09 }}>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: '2.5%', }}>
                        <TouchableOpacity
                            style={{ marginRight: 10 }}
                            onPress={() => {
                                navigation.openDrawer();
                            }}>
                            <Icon name="menu" color={'black'} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.text}>Archive</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            margin: '2.5%',
                        }}>
                        <TouchableOpacity style={{ marginRight: 10 }}>
                            <Icon name="search" color={'black'} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>  dispatch(setGridView(!gridView))}>
                            {gridView ? (
                                <FontAwesome5 name="equals" size={30} color="black" />
                            ) : (
                                <Entypo name="grid" size={30} color="black" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.notes}>
                <ArchiveList
                    navigation={navigation}
                    archiveList={archiveList}
                

                />
            </View>
        </View>


    )
}

export default ArchiveScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    ArchieveView: {
        alignSelf: 'center',
        marginTop: '70%',
        alignItems: 'center',
    },
    titleText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    notesText: {
        color: 'black',
        fontSize: 18,
    },
    view: {
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '2%',
        padding: '2%',
        borderWidth: 1,
        borderRadius: 10,
    },
    notes: {
        flex: 0.91,
        backgroundColor: 'white',
        padding: 2,
        paddingHorizontal: 2,
    },

});