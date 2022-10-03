import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import labelsFireBase from '../../services/labelFireStoreDatabase';
import { heightPercentage, widthPercentage, } from '../../utils/dimension';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const LabelCards = ({ item, navigation}) => {
    const [value, setValue] = useState(item.labelName);
    const [iconVisibility, setIconVisiility] = useState(false);
    const { updateLabelData, fetchLabelData, deleteLabelData } = labelsFireBase();

    //console.log(item)
    const handleUpdate = () => {
        console.log("on press holder")

        updateLabelData(item.key, value);
        fetchLabelData();
        setIconVisiility(false);
    };

    const handleDelete = () => {
        console.log(item.key)
        console.log("in handle delete",item)
        deleteLabelData(item.key)
        //.then(()=>{fetchLabelData()});//ashwini mam
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.lableView}>
                {iconVisibility ? (
                    <TouchableOpacity onPress={handleDelete}>
                    <View style={{padding:5}}>
                    <DeleteIcon
                        name="delete"
                        size={24}
                        color="black"
                        
                    />
                    </View>
                    </TouchableOpacity>
                    
                ) : (
                    <View style={{padding:5}}>
                    <MaterialIcons name="label-outline" size={24} color="black" /></View>
                )}
                <View style={Styles.textView}>
                    <TextInput
                        style={Styles.text}
                        value={value}


                        onChangeText={text => { setValue(text); }}
                       // onBlur={() => {
                         //   setIconVisiility(false);

                        //}}
                        onPressIn={() => {
                            setIconVisiility(true);
                        }}
                    />
                </View>
            </View>
            <View>
                {iconVisibility ? (
                    <TouchableOpacity onPress={handleUpdate}>
                    <View style={{padding:5}}>
                    <MaterialIcons
                        name="done"
                        size={24}
                        color="blue"
                        
                    />
                    </View>
                    </TouchableOpacity>
                ) : (
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color="black"

                    />
                )}
            </View>
        </View>

    );
};

export default LabelCards;

const Styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: 'black',
        width: '75%',
        marginLeft: '3%',
        marginRight: '2%',
    },
    icon: {
        marginRight: '3%',
    },
    textView: {
        paddingLeft: widthPercentage('4%'),
    },

    container: {
        marginTop: heightPercentage('-1%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: widthPercentage('4%'),
        padding: widthPercentage('1%'),
    },

    lableView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});