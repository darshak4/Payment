import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {translation} from './utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UseRegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddrees] = useState('');
  const [name, setName] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [selectedLang, setselectedLang] = useState(0);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const theme = useSelector(state => state.ThemeReducer);
  console.log('+-+-+-+-+-+--+-++--+-+-', theme);
  const navigation = useNavigation();
  useEffect(() => {
    getlang();
  }, []);

  const getlang = async () => {
    console.log('*-*-*-**-*-', await AsyncStorage.getItem('LANG'));
    setselectedLang(parseInt(await AsyncStorage.getItem('LANG')));
  };
  return (
    <SafeAreaView
      style={[
        styles.containervire,
        {backgroundColor: theme == 'DARK' ? '#000' : '#fff'},
      ]}>
      <Text
        style={[
          styles.loginviewStyle,
          {color: theme == 'DARK' ? '#fff' : '#000', fontWeight: 'bold'},
        ]}>
        {selectedLang == 0
          ? translation[3].English
          : selectedLang == 1
          ? translation[3].Hindi
          : selectedLang == 2
          ? translation[3].Gujrati
          : selectedLang == 3
          ? translation[3].Punjabi
          : null}
      </Text>

      <TextInput
        style={[styles.TextInputView]}
        value={name}
        placeholderTextColor={theme == 'DARK' ? '#FFF' : '#000'}
        onChangeText={text => {
          setName(text);
        }}
        placeholder="Enter Name"
      />
      <TextInput
        style={styles.TextInputView}
        value={email}
        placeholderTextColor={theme == 'DARK' ? '#FFF' : '#000'}
        keyboardType={'email-address'}
        onChangeText={text => {
          setEmail(text);
          //   setEmailError('');
        }}
        placeholder="Enter EMail"
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
      <TextInput
        style={[styles.TextInputView]}
        value={address}
        placeholderTextColor={theme == 'DARK' ? '#FFF' : '#000'}
        onChangeText={text => {
          setAddrees(text);
        }}
        placeholder="Enter Address"
      />

      <TouchableOpacity
        onPress={() => {
          console.log('....');
        }}
        style={styles.buttonview}>
        <Text style={styles.buttonTextView}>Register</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          //   flex: 1,
          justifyContent: 'center',
          marginTop: RFValue(10),
        }}>
        <Text style={{color: theme == 'DARK' ? '#fff' : '#000'}}>
          Alrady have an account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: RFValue(5)}}
          onPress={() => navigation.navigate('UserLoginScreen')}>
          <Text style={{color: 'blue'}}>Login here</Text>
        </TouchableOpacity>
      </View>

      {/* <Text></Text> */}
    </SafeAreaView>
  );
};

export default UseRegistrationScreen;

const styles = StyleSheet.create({
  containervire: {
    flex: RFValue(1),
  },
  loginviewStyle: {
    fontSize: RFValue(15),
    color: 'black',
    alignSelf: 'center',
    marginTop: RFValue(40),
  },
  TextInputView: {
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    width: RFPercentage(40),
    alignSelf: 'center',
    height: RFValue(40),
    marginTop: RFValue(20),
    // flex: 1,
    padding: 10,
    borderColor: 'lightblue',
  },
  buttonview: {
    backgroundColor: 'lightblue',
    width: RFValue(80),
    padding: RFValue(10),
    borderRadius: RFValue(15),
    alignSelf: 'center',
    marginTop: RFValue(20),
  },
  buttonTextView: {
    textAlign: 'center',
    fontSize: RFValue(10),
    color: 'black',
  },
  errorTextView: {
    color: 'red',
    fontSize: RFValue(11),
    marginLeft: RFValue(40),
    marginTop: RFValue(5),
  },
  imageView: {
    position: 'absolute',
    height: RFValue(20),
    width: RFValue(20),
    right: RFValue(10),
  },
});
