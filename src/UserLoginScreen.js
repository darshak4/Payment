import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from './utils';
import {useSelector} from 'react-redux';

const UserLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [selectedLang, setselectedLang] = useState(0);
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const theme = useSelector(state => state.ThemeReducer);
  console.log('+-+-+-+-+-+--+-++--+-+-', theme);
  useEffect(() => {
    getlang();
  }, []);

  const getlang = async () => {
    console.log('*-*-*-**-*-', await AsyncStorage.getItem('LANG'));
    setselectedLang(parseInt(await AsyncStorage.getItem('LANG')));
  };
  return (
    <SafeAreaView
      style={{
        flex: RFValue(1),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme == 'DARK' ? '#000' : '#fff',
      }}>
      <Text
        style={[
          styles.loginviewStyle,
          {color: theme == 'DARK' ? '#fff' : '#000'},
        ]}>
        {selectedLang == 0
          ? translation[1].English
          : selectedLang == 1
          ? translation[1].Hindi
          : selectedLang == 2
          ? translation[1].Gujrati
          : selectedLang == 3
          ? translation[1].Punjabi
          : null}
      </Text>
      <TextInput
        style={[styles.TextInputView]}
        value={email}
        placeholderTextColor={theme == 'DARK' ? '#FFF' : '#000'}
        keyboardType={'email-address'}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="Enter Mail"
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={[styles.TextInputView]}
          value={password}
          placeholderTextColor={theme == 'DARK' ? '#FFF' : '#000'}
          secureTextEntry={hidePassword}
          onChangeText={text => {
            setPassword(text);
          }}
          placeholder="Enter Password"
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            style={styles.imageView}
            source={
              hidePassword
                ? require('./assets/images/hide.png')
                : require('./assets/images/view.png')
            }
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonview}>
        <Text style={styles.buttonTextView}>Login</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          // flex: 1,
          // justifyContent: 'center',
          marginTop: RFValue(10),
        }}>
        <Text style={{color: theme == 'DARK' ? '#FFF' : '#000'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: RFValue(5)}}
          onPress={() => navigation.navigate('UseRegistrationScreen')}>
          <Text style={{color: 'blue', textAlign: 'center'}}>
            Registraion here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserLoginScreen;

const styles = StyleSheet.create({
  containervire: {
    flex: RFValue(1),
  },
  loginviewStyle: {
    fontSize: RFValue(15),
    color: 'black',
    alignSelf: 'center',
    marginTop: RFValue(40),
    fontWeight: 'bold',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TextInputView: {
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    width: RFPercentage(40),
    alignSelf: 'center',
    height: RFValue(40),
    marginTop: RFValue(15),

    borderColor: 'lightblue',
  },
  buttonview: {
    backgroundColor: 'lightblue',
    width: RFValue(90),
    padding: RFValue(10),
    borderRadius: RFValue(15),
    alignSelf: 'center',
    marginTop: RFValue(20),
  },
  buttonTextView: {
    textAlign: 'center',
    fontSize: RFValue(11),
    color: 'black',
    // fontFamily: font.PoppinsBlack,
    // alignSelf: 'center',
  },
  goolebuttonView: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    width: RFValue(150),
    padding: RFValue(10),
    borderRadius: RFValue(15),
    alignSelf: 'center',
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  errorTextView: {
    color: 'red',
    fontSize: RFValue(11),
    marginLeft: RFValue(40),
    marginTop: RFValue(5),
  },
  imageView: {
    height: RFValue(20),
    width: RFValue(20),
    position: 'absolute',
    right: RFValue(10),
  },
});
