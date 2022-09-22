import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { heightPercentage, widthPercentage } from '../utils/dimension';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const NotesBottom = () => {

const controlDeleteButton=()=>{
    bs.current.snapTo(1)

    


}

    const renderInner = () => (
        <View style={styles.bottomContainer}>
            <View style={{ marginLeft: 350, paddingTop: 5 }}>
                <TouchableOpacity onPress={controlDeleteButton}>
                    <Image style={{ height: 20, width: 20 }}
                        source={require('../assets/cross.jpg')} />
                </TouchableOpacity >
            </View>
            <View style={styles.deleteView}>
                <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
                    <View style={styles.deleteIconView}>
                        <DeleteIcon name="delete" color="black" size={24} />
                        <Text style={styles.text}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.labelView}>
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.deleteIconView}>
                        <MaterialIcons name="label-outline" size={24} color="black" />
                        <Text style={styles.text}>Label</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>


    )
    const renderHeader = () => (
        <View styles={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )
    bs = React.createRef();
    fall = new Animated.Value(1);
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <IconButton
                    icon={'plus-box-outline'}
                    size={24}
                    color="black"
                    onPress={() => { }}
                />

                <IconButton icon={'palette-outline'} size={24} color="black" />
            </View>
            <View style={{ justifyContent: 'center' }}>
            </View>
            <View>
                <IconButton
                    icon={'dots-vertical'}
                    size={24}
                    color="black"
                    onPress={() => bs.current.snapTo(0)}
                />
            </View>
            <BottomSheet
                ref={bs}
                snapPoints={[130, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
        </View>
    );
};

export default NotesBottom;

const styles = StyleSheet.create({
    container: {
        padding: heightPercentage('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: heightPercentage('20%'),
        flexDirection: 'column',
    },
    deleteView: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 5,

    },
    labelView: {
        flexDirection: 'row',
        flex: 1,
        marginTop: heightPercentage('-5%'),
    },
    deleteIconView: {
        flex: 1,
        margin: widthPercentage('3%'),
        flexDirection: 'row',
    },
    labelMargin: {
        backgroundColor: '#fff',
        width: '100%',
        height: heightPercentage('2%'),
        flexDirection: 'row',

    },
    text: {
        fontSize: 18,
        color: 'black',
        paddingLeft: widthPercentage('5%'),
    },

    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },


    panelHeader: {
        alignItems: 'center',
    },

    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },





});