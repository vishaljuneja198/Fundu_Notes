import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

const ModalProfile = ({ visibleProfile, children }) => {
    const [showModal1, setShowModal1] = useState(visibleProfile)
    useEffect(

        () => { toggleMethod1() }, [visibleProfile]);

    const toggleMethod1 = () => {

        if (visibleProfile) {

            setShowModal1(true);
        } else {

            setShowModal1(false);
        }
    }

    return (

        <Modal transparent visible={showModal1}>

            <View style={styles.modalBackGround}>
                <View style={styles.modalContainer}>{children}</View>


            </View>


        </Modal>

    )
}

export default ModalProfile;

const styles = StyleSheet.create({

    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {

        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 20,
        height: 500
    }






})