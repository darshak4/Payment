import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const navigation = useNavigation();
  const saveEmail = async () => {
    try {
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('PASSWORD', password);
      navigation.navigate('Contact');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={[styles.containervire]}>
      <Text style={{fontSize: RFValue(15), fontWeight: 'bold'}}>Login</Text>

      <TextInput
        style={styles.TextInputView}
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="Enter EMail"
      />

      <TextInput
        style={[styles.TextInputView]}
        value={password}
        onChangeText={text => {
          setpassword(text);
        }}
        secureTextEntry={true}
        placeholder="Enter Password"
      />

      <TouchableOpacity
        onPress={() => {
          saveEmail();
        }}
        style={styles.buttonview}>
        <Text style={styles.buttonTextView}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  containervire: {
    flex: RFValue(1),
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: '#ACDDDE',
  },
  buttonview: {
    backgroundColor: '#ACDDDE',

    padding: RFValue(10),
    borderRadius: RFValue(10),
    alignSelf: 'center',
    marginTop: RFValue(20),
    width: RFPercentage(40),
  },
  buttonTextView: {
    textAlign: 'center',
    fontSize: RFValue(12),
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
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
