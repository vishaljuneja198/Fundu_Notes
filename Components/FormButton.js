import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { windowHeight, windowWidth } from '../utils/dimension';

const FormButton = ({ buttonTitle, ...rest }) => {

    return (

        <TouchableOpacity style={styles.buttonContainer}{...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>


    );
};

export default FormButton;

const styles = StyleSheet.create({

    buttonContainer: {

        marginTop: 10,
        width: 350,
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular'
    }
})