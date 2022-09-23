import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import { windowHeight, windowWidth } from '../utils/dimension';
import { AuthContext } from '../../navigations/AuthProvider';


const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirm_pass_error, setconfirm_pass_error] = useState('');
    const { register } = useContext(AuthContext);

    const FirstNameValidation = () => {
        if (firstName === '') { setErrorFirstName('Enter the First Name '); }
        else {
            setErrorFirstName('');
        }
    };

    const LastNameValidation = () => {
        if (lastName === '') { setErrorLastName('Enter the Last Name '); }
        else {
            setErrorLastName('');
        }
    };

    const EmailValidation = () => {
        const emailPattern = new RegExp(
            '^[a-zA-Z0-9]+([-_+.]?[a-zA-Z0-9])*[@]([A-Za-z0-9])+[.][A-Za-z]{2,}([.][A-Za-z]{2,}){0,1}$',);
        if (email === '') {
            setEmailError('Enter the email');
        } else if (!emailPattern.test(email)) {
            setEmailError('invalid email');
        }
        if (emailPattern.test(email)) {
            setEmailError('');
        }
    };

    const PasswordValidation = () => {
        const passwordPattern = new RegExp(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
        );
        if (password === '') {
            setPasswordError('*required');
        }
        if (!passwordPattern.test(password)) {
            setPasswordError('Password Shouls be one capital Alphabet, one special characher, one numeric ');
        }
        if (passwordPattern.test(password)) {
            setPasswordError('');
        }
    };

    const confirmpasswordValidation = () => {
        if (password === confirmPassword) {
            setconfirm_pass_error('');
        }
        if (password !== confirmPassword) {
            setconfirm_pass_error('password mismatch');
        }
    };


    signUp_validate_feild = () => {
        if (email === '' && firstName === '' && lastName === '' && password === '' && confirmPassword === '') {
            setErrorFirstName('Enter  some Input');
            setErrorLastName('Enter some')
            setEmailError('Enter  some Input');
            setPasswordError('Enter  some Input');
            setconfirm_pass_error('Enter  some Input');
        } else if (email !== '' && firstName === '' && lastName === '' && password === '' && confirmPassword === '') {
            setErrorFirstName('Enter  some Input');
            setErrorLastName('Enter some input')
            setPasswordError('Enter  some Input');
            setconfirm_pass_error('Enter  some Input');
        } else if (email !== '' && firstName !== '' && lastName === '' && password === '' && confirmPassword === '') {
            setErrorLastName('Enter some input')
            setPasswordError('Enter  some Input');
            setconfirm_pass_error('Enter  some Input');
        } else if (email !== '' && firstName !== '' && lastName !== '' && password === '' && confirmPassword === '') {
            setPasswordError('Enter  some Input');
            setconfirm_pass_error('Enter  some Input');

        } else if (email !== '' && firstName !== '' && lastName !== '' && password !== '' && confirmPassword === '') {
            setconfirm_pass_error('Enter  some Input');
        } else if (!(errorFirstName !== '' || errorLastName !== '' || emailError !== '' || passwordError !== '' || confirm_pass_error !== '')) {

            register(email, password)
        }
    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            <FormInput
                labelValue={firstName}
                onChangeText={(userFirstName) => setFirstName(userFirstName)}
                placeholderText="First Name"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={FirstNameValidation}
            />

            <View style={styles.errorMeaasgeView}>

                <Text style={styles.errorMessageText}>{errorFirstName}</Text>
            </View>
            <FormInput
                labelValue={lastName}
                onChangeText={(userLastName) => setLastName(userLastName)}
                placeholderText="Last Name"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={LastNameValidation}
            />
            <View style={styles.errorMeaasgeView}>
                <Text style={styles.errorMessageText}>{errorLastName}</Text>
            </View>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={EmailValidation}

            />
            <View style={styles.errorMeaasgeView}>

                <Text style={styles.errorMessageText}>{emailError}</Text>
            </View>
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                onBlur={PasswordValidation}
            />
            <View style={styles.errorMeaasgeView}>

                <Text style={styles.errorMessageText}>{passwordError}</Text>
            </View>

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
                onBlur={confirmpasswordValidation}
            />

            <View style={styles.errorMeaasgeView}>

                <Text style={styles.errorMessageText}>{confirm_pass_error}</Text>
            </View>
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
    },
    errorMeaasgeView: {
        marginTop: -8,
        alignSelf: 'flex-start',
    },

    errorMessageText: {
        fontSize: 10,
        color: 'red',
        fontFamily: 'Lato-Regular',

    }

})