import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,

} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Avatar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { windowHeight, windowWidth } from '../utils/dimension';
import { DrawerActions } from '@react-navigation/native';
import ModalPopup from './ModalPopup';
import FormButton from './FormButton';
import { AuthContext } from '../navigations/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import ModalProfile from './ModalProfile';
import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { setGridView, SET_GRID_VIEW } from '../services/redux/Action';
  import userReducer from '../services/redux/Reducers';
  import {useSelector, useDispatch} from 'react-redux';

const UpperBar = ({
  
}) => {

  const navigation = useNavigation();
  const { user, logout } = useContext(AuthContext);
  const [image, setImage] = useState(require('../assets/profile.jpg'))
  const [visible, setVisible] = useState(false)
  const [visibleProfile, setVisibleProfile] = useState(false)
  const {gridView} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(imageObject => {
      console.log(imageObject);
    });

  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(imageObject => {
      console.log(imageObject);
      setImage(imageObject.path)
      setVisibleProfile(false)
    });

  }
  const dialogueBox = () => {
    setVisibleProfile(false)
  }
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={24} style={{ paddingHorizontal: 0 }} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SearchNotes');
              }}>
              <Text style={styles.text}>Search your notes</Text>
            </TouchableOpacity>
          </View>
          <View>

          <TouchableOpacity onPress={() => dispatch(setGridView (!gridView))}>
          {gridView ?(
          <FontAwesome5 name="equals" size={24} color="black" style={{ paddingLeft: 3 }}/>
          ) : (
            <Feather name="grid" size={24} style={{ paddingLeft: 3 }} />
            )}
        </TouchableOpacity>
           
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <ModalProfile visibleProfile={visibleProfile}>
              <View style={styles.headerModal}>
                <View style={{ marginLeft: 230 }}>
                  <TouchableOpacity onPress={dialogueBox}>
                    <Image style={{ height: 20, width: 20 }}
                      source={require('../assets/cross.jpg')} />
                  </TouchableOpacity >
                </View>
                <Text style={styles.buttonText1}>Upload Profile Picture</Text>
                <TouchableOpacity style={styles.buttonContainer1} onPress={takePhotoFromCamera}>
                  <Text style={styles.buttonText}>Camara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1} onPress={choosePhotoFromLibrary}>
                  <Text style={styles.buttonText}>Gallary</Text>
                </TouchableOpacity>
              </View>
            </ModalProfile>
            <ModalPopup visible={visible}>
              <View style={styles.headerModal}>
                <View style={{ marginLeft: 230 }}>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Image style={{ height: 20, width: 20 }}
                      source={require('../assets/cross.jpg')} />
                  </TouchableOpacity >
                </View>
                <TouchableOpacity onPress={() => setVisibleProfile(true)}>
                  <Image style={{ height: 200, width: 200 }}
                    source={image} />
                </TouchableOpacity>
                <Text style={styles.emailText}> {user.email}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => logout()}>
                  <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </ModalPopup>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Avatar.Image size={28} source={image} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpperBar;

const styles = StyleSheet.create({
  header: {
    marginTop: 8,
    marginLeft: 5,
    marginRight: 5,
    borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 20,
    borderRadius: 20,
  },
  border: {
    backgroundColor: 'yellow',
    padding: 15,
    flexDirection: 'row',
    borderRadius: 30,
    borderRadius: 30,
  },
  searchbarstyle: {

    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 3,
    paddingBottom: 5,
    width: 275,
    borderColor: 'white',
    borderWidth: 1,
    height: windowHeight / 15,
    shadowColor: 'white',

  },
  inputContainer: {

    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: 'white',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    padding: 5,
    justifyContent: 'center',

  },

  headerModal: {

    width: '100%',
    height: 500,
    alignItems: 'center',

  },

  buttonContainer: {

    marginTop: 10,
    width: 200,
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular'
  },

  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Lato-Regular',
    paddingBottom: 20,
  },

  text: {
    fontSize: 20,
    color: 'black',
    width: 275,
    paddingLeft: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  buttonContainer1: {

    marginTop: 50,
    width: 200,
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  buttonText1: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Lato-Regular'
  },

});