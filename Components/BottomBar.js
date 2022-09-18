import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { windowHeight, windowWidth } from '../utils/dimension';

import ModalImageNote from '../Components/ModalImageNote';
const BottomBar = ({ }) => {

    const navigation = useNavigation();
    const [visibleImageNote, setvisibleImageNote] = useState(false)

    return (
        <SafeAreaView>
            <View style={styles.bottomContainer}>


                <ModalImageNote visibleImageNote={visibleImageNote}>

                    <View style={styles.headerModal}>




                        <Text style={styles.text}>Add Image</Text>

                        <TouchableOpacity style={styles.buttonContainer1} onPress={()=>{}}>
                  <Text style={styles.buttonText1}>Camara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1} onPress={()=>{}}>
                  <Text style={styles.buttonText1}>Gallary</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer1}onPress={() => setvisibleImageNote(false)}>
                  <Text style={styles.buttonText1}>Cancel</Text>
                </TouchableOpacity>
                    </View>
                    

                </ModalImageNote>

                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { }}>
                    <Image style={{ height: 25, width: 25 }}
                        source={require('../assets/tick.jpg')} />
                </TouchableOpacity >

                <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => { }}>
                    <Image style={{ height: 25, width: 25 }}
                        source={require('../assets/brush.jpg')} />
                </TouchableOpacity >

                <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => setvisibleImageNote(true)}>
                    <Image style={{ height: 25, width: 25 }}
                        source={require('../assets/gallery.jpg')} />
                </TouchableOpacity >

                <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => { }}>
                    <Image style={{ height: 25, width: 25 }}
                        source={require('../assets/microphone.jpg')} />
                </TouchableOpacity >

                <TouchableOpacity style={styles.plusButton} onPress={() => navigation.navigate('Note', { sample: "vishal" })}   >
                    <Image style={{ resizeMode: "contain", height: 35, width: 35, tintColor: '#000000' }}
                        source={require('../assets/plus.jpg')} />
                </TouchableOpacity >


            </View>

        </SafeAreaView>
    );
};

export default BottomBar;

const styles = StyleSheet.create({

    bottomContainer: {

        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',


        padding: 2,
        backgroundColor: 'RED',
    },

    bottomButton: {
        paddingLeft: 5,

    },

    plusButton: {
        marginLeft: 145,
        top: -40,
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'RED',
        justifyContent: 'center',
        alignItems: 'center',

    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
        alignContent:'center',
        alignContent:'center',
      
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Lato-Regular',

    },
    buttonContainer1: {

        marginTop: 10,
        width: 250,
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginHorizontal:15,
      },
      buttonText1: {
        marginTop:1,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Lato-Regular',
        
      },


});