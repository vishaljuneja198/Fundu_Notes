import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';
import { windowHeight, windowWidth } from '../utils/dimension';
import { AuthContext } from '../Navigations/AuthProvider';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const { login, googleLogin, fbLogin } = useContext(AuthContext);

    Login_validate_feild = () => {

        if ((email === undefined) || (password === undefined)) {

            alert("please enter the valid inputs")
        } else {
            login(email, password)

        }


    }

    return (

        <View style={styles.container}>

            <Image
                source={require('../assets/logo.jpg')}
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
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

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

})