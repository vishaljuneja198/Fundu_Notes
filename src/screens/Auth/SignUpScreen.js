import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import { windowHeight, windowWidth } from '../utils/dimension';
import { AuthContext } from '../../navigations/AuthProvider';


const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();
    const { register } = useContext(AuthContext);
    signUp_validate_feild = () => {
        if ((email === undefined) || (password === undefined) || (ConfirmPassword === undefined)) {
            alert("Enter the Valid Inputs")
        } else {
            if (password === ConfirmPassword) {
                register(email, password)
            } else {
                alert("Password not matched please fill carefully")
            }
        }
    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput
                labelValue={ConfirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />


            <FormButton
                buttonTitle="Sign Up"
                onPress={() => signUp_validate_feild()}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.colortextPrivate}>By registering,you confirm that you accept our</Text>
                <TouchableOpacity>
                    <Text style={[styles.colortextPrivate, { color: '#e88832' }]}>Terms of service</Text>
                </TouchableOpacity>
                <Text style={styles.colortextPrivate}> and </Text>
                <Text style={[styles.colortextPrivate, { color: '#e88832' }]}>Privacy Policy </Text>
            </View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({

    container: {

        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    colortextPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    }
})