import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import { AuthContext } from '../../navigations/AuthProvider';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState();
    const { passwordReset } = useContext(AuthContext);
    console.log(email)
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/password.jpg')}
                style={styles.logo}
            />
            <Text style={styles.text}>Fundu Notes</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Enter Register Email ID"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormButton

                buttonTitle="Reset Password"
                onPress={() => passwordReset(email)}
            />
        </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({

    container: {

        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    logo: {

        height: 200,
        width: 200,
        resizeMode: 'cover',

    },
    text: {

        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },

    forgotButton: {

        marginVertical: 15,
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },

    forgotButtonView: {
        alignSelf: 'flex-start',
    },

})