import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = useState(visible)
    useEffect(

        () => { toggleMethod() }, [visible]);

    const toggleMethod = () => {

        if (visible) {

            setShowModal(true);
        } else {

            setShowModal(false);
        }



    }

   
    return (

        <Modal transparent visible={showModal}>

            <View style={styles.modalBackGround}>
                <View style={styles.modalContainer}>{children}</View>


            </View>


        </Modal>

    )
}

export default ModalPopup;

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