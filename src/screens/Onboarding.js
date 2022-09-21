import React, { useState } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import { Button } from 'react-native-paper';

const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }}     {...props}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}> Done </Text>
    </TouchableOpacity>
)
const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            DoneButtonComponent={Done}
            onSkip={() => navigation.navigate('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image style={styles.image}
                        source={require('../assets/onboarding1.jpg')} />,
                    title: 'Fundu Notes',
                    subtitle: ' Be Smarter With Fundo Notes',
                },
                {
                    backgroundColor: 'white',
                    image: <Image Image style={styles.image}

                        source={require('../assets/onboarding2.jpg')} />,
                    title: 'Fundu Notes',
                    subtitle: 'Be Cooler With Fundo Notes',
                },

                {
                    backgroundColor: 'white',
                    image: <Image Image style={styles.image}

                        source={require('../assets/onboarding3.jpg')} />,
                    title: 'Fundu Notes',
                    subtitle: 'Welcome to the world of smarter notes ',
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({

    container: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        alignContent: 'center',
        height: 300,
        width: 200,
        resizeMode: 'stretch',

    },
})
