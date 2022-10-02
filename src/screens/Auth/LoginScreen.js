import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import { windowHeight, windowWidth } from '../src/utils/dimension';
import { AuthContext } from '../../navigations/AuthProvider';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const { login, googleLogin, fbLogin } = useContext(AuthContext);

    Login_validate_feild = () => {

        if (email === '' && password === '') {
            setEmailError('Enter the email');
            setPasswordError('Enter the Pasword');
          } else if (email !== '' && password === '') {
            setPasswordError('Enter the Pasword');
          } else if (email === '' && password !== '') {
            setEmailError('Enter the Pasword');
          } else if (!(emailError !== '' || passwordError !== '')) {
            login(email, password)

        }

    }

    const EmailValidation = () => {
        const emailPattern = new RegExp(
          '^[a-zA-Z0-9]+([-_+.]?[a-zA-Z0-9])*[@]([A-Za-z0-9])+[.][A-Za-z]{2,}([.][A-Za-z]{2,}){0,1}$',
        );
        if (email === '') {
          setEmailError('Enter the email');
        } else if (!emailPattern.test(email)) {
          setEmailError('please enter the valid email');
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
          setPasswordError('Enter Password');
        }
        if (!passwordPattern.test(password)) {
          setPasswordError('Enter Correct Password');
        }
        if (passwordPattern.test(password)) {
          setPasswordError('');
        }
      };

    return (

        <View style={styles.container}>

            <Image
                source={require('../../assets/logo.jpg')}
                style={styles.logo}
            />
            <Text style={styles.text}>Fundu Notes</Text>

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

            <FormButton

                buttonTitle="Sign In"
                onPress={() => Login_validate_feild()}
            />

            <View style={styles.forgotButtonView}>
                <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.navButtonText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor={"#f5e7ea"}
                onPress={() => googleLogin()}
            />
            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor={"#e6eaf4"}
                onPress={() => fbLogin()}
            />

            <TouchableOpacity style={styles.forgotButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.navButtonText}>Don't have an acount? Create here</Text>
            </TouchableOpacity>

        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({

    container: {

        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    logo: {

        height: 150,
        width: 150,
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

    errorMessage: {
        color: 'red',
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