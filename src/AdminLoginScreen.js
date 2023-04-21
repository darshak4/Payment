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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from './utils';
import {useSelector} from 'react-redux';

const AdminLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLang, setselectedLang] = useState(0);

  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useNavigation();
  const theme = useSelector(state => state.ThemeReducer);
  console.log('+-+-+-+-+-+--+-++--+-+-', theme);
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

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
          {color: theme == 'DARK' ? '#FFF' : '#000'},
        ]}>
        {selectedLang == 0
          ? translation[2].English
          : selectedLang == 1
          ? translation[2].Hindi
          : selectedLang == 2
          ? translation[2].Gujrati
          : selectedLang == 3
          ? translation[2].Punjabi
          : null}
      </Text>
      <TextInput
        style={[styles.TextInputView]}
        value={email}
        keyboardType={'email-address'}
        placeholderTextColor={theme == 'DARK' ? '#FFF' : '#000'}
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
    </SafeAreaView>
  );
};

export default AdminLoginScreen;

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
