import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

const ModalProfile = ({ visibleImageNote, children }) => {
    const [showModal2, setShowModal2] = useState(visibleImageNote)
    useEffect(
        () => { toggleMethod2() }, [visibleImageNote]);
    const toggleMethod2 = () => {
        if (visibleImageNote) {
            setShowModal2(true);
        } else {
            setShowModal2(false);
        }
    }
    return (
        <Modal transparent visible={showModal2}>
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
        height: 240,
    }
})