import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (

        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password).then(() => {
                            console.log('User account created & signed in!');
                          })
                          .catch(error => {
                            if (error.code === 'auth/user-not-found') {
                              console.log('User Name not Exist ');
                              alert("User Name not exist")
                            }
                        
                            if (error.code === 'auth/wrong-password') {
                              console.log('Password is incorrect');
                              alert("Password is incorrect")

                            }

                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                                alert("That email address is invalid!")
  
                              }
                        
                            console.error(error);
                          });
                    } catch (e) {
                        console.log(e);
                    }
                },
                googleLogin: async () =>{  
                    try {

                        const { idToken } = await GoogleSignin.signIn();
                       
                        // Create a Google credential with the token
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(googleCredential);
                    } catch (error) {
                        console.log({  error });
                    
                    } 

                },


                fbLogin:async ()=>{
                    try{
                        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                        if (result.isCancelled) {
                          throw 'User cancelled the login process';
                        }
                      
                        // Once signed in, get the users AccesToken
                        const data = await AccessToken.getCurrentAccessToken();
                      
                        if (!data) {
                          throw 'Something went wrong obtaining access token';
                        }
                      
                        // Create a Firebase credential with the AccessToken
                        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
                      
                        // Sign-in the user with the credential
                        await auth().signInWithCredential(facebookCredential);
                        
                    }catch(error){
                        console.log(error)
                    }

                },

                register: async (email, password) => {
                    try {
                        
                        await auth().createUserWithEmailAndPassword(email, password).then(() => {
                            console.log('User account created & signed in!');
                          })
                          .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                              console.log('That email address is already in use!');
                              alert("That email address is already in use!")
                            }
                        
                            if (error.code === 'auth/invalid-email') {
                              console.log('That email address is invalid!');
                              alert("That email address is invalid!")

                            }
                        
                            console.error(error);
                          });
                    } catch (e) {
                        console.log(e);

                    }
                },

                logout: async () => {

                    try {
                        await auth().signOut() .then(() => console.log('User signed out!'));
                        alert("User signed out!")
                    } catch (e) {
                        console.log(e);
                    }
                },

                passwordReset: async (email) => {

                    try {
                       
                        await auth().sendPasswordResetEmail(email);
                        alert("Mail Send to registered email")
                    } catch (e) {
                        console.log(e);
                    }
                },
                
                
                
                

            }}


        >
            {children}
        </AuthContext.Provider>
    );
}