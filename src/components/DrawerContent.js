import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BellIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { heightPercentage, widthPercentage, } from '../utils/dimension';
import labelsFireBase from '../services/labelFireStoreDatabase';
import { useSelector } from 'react-redux';
import LabelCards from './label/LabelCard';
import DrawerLabelCards from './label/DrawerLabelCard';
const DrawerContent = (props) => {
    const navigation = useNavigation();
    const { labelData } = useSelector(state => state.userReducer);
    const { fetchLabelData } = labelsFireBase();


    useEffect(() => {
        fetchLabelData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView props={props}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 28, color: 'blue' }}>F</Text>
                    <Text style={{ fontSize: 28, color: 'red' }}>u</Text>
                    <Text style={{ fontSize: 28, color: 'yellow' }}>n</Text>
                    <Text style={{ fontSize: 28, color: 'blue' }}>d</Text>
                    <Text style={{ fontSize: 28, color: 'green' }}>u</Text>
                    <Text style={{ fontSize: 28, color: '#7D7A7A' }}> Notes</Text>
                </View>

                <DrawerItem
                    label={() => (
                        <Text style={{ color: 'black', fontSize: 14 }}>Notes</Text>
                    )}
                    icon={() => (
                        <Icon name="lightbulb-outline" color={'black'} size={24} />
                    )}
                    onPress={() => navigation.navigate('Home')}
                    activeTintColor="blue"
                />
                <DrawerItem
                    icon={() => (
                        <BellIcon name="bell-outline" color={'black'} size={24} />
                    )}
                    label={() => (
                        <Text style={{ color: 'black', fontSize: 14 }}>Reminders</Text>
                    )}
                    onPress={() => navigation.navigate('Reminders')}
                />




                <View style={styles.labelView}>
                    {labelData.length > 0 ? (
                        <View style={styles.labelHeader}>
                            <Text style={styles.labelText}>Labels</Text>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Label') }
                                }>
                                <Text style={styles.labelText}>Edits</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null}

                    <DrawerLabelCards labelData={labelData} navigation={navigation} />
                    <DrawerItem
                        icon={() => (
                            <AntDesign name="plus" color={'black'} size={24} />
                        )}
                        label={() => (
                            <Text style={{ color: 'black', fontSize: 14 }}>Create New Label</Text>
                        )}
                        onPress={() => { navigation.navigate('Label') }}
                    />


                </View>
                <DrawerItem
                    icon={() => (
                        <Ionicons name="archive-outline" color={'black'} size={24} />
                    )}
                    label={() => (
                        <Text style={{ color: 'black', fontSize: 14 }}>Archive</Text>
                    )}
                    onPress={() => { navigation.navigate('Archive') }}
                />
                <DrawerItem
                    icon={() => <DeleteIcon name="delete" color={'black'} size={24} />}
                    label={() => (
                        <Text style={{ color: 'black', fontSize: 14 }}>Deleted</Text>
                    )}
                    onPress={() => { navigation.navigate('Deleted') }}
                />
                <DrawerItem
                    icon={() => (
                        <Ionicons name="settings-outline" color={'black'} size={24} />
                    )}
                    label={() => (
                        <Text style={{ color: 'black', fontSize: 14 }}>Settings</Text>
                    )}
                    onPress={() => {
                        navigation.navigate('Settings')
                    }}
                />
            </DrawerContentScrollView>

        </View>
    )
}

export default DrawerContent;
const styles = StyleSheet.create({
    title: {
        paddingTop: heightPercentage('2%'),
        paddingHorizontal: widthPercentage('2%'),
        paddingBottom: heightPercentage('2%'),
        flexDirection: 'row',
    },
    drawerItems: {
        backgroundColor: 'red'
    },
    labelText: {
        fontSize: 15,
        color: 'black',
    },
    labelHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5%',
    },
    labelView: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        borderTopColor: 'blue',
        borderTopWidth: 1,
    },

});