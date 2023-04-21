import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
let contacts = [];
const AddContact = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const saveContact = async () => {
    let tempcontact;
    contacts = [];
    let x = JSON.parse(await AsyncStorage.getItem('CONTACT'));
    tempcontact = x;
    tempcontact.map(item => {
      contacts.push(item);
    });
    contacts.push({name: name, mobile: mobile});
    console.log('contact', contacts);
    await AsyncStorage.setItem('CONTACT', JSON.stringify(contacts));
    navigation.goBack();
  };
  return (
    <SafeAreaView style={[styles.containervire]}>
      <Text style={{fontSize: RFValue(15), fontWeight: 'bold'}}>
        Add Contact
      </Text>

      <TextInput
        style={styles.TextInputView}
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholder="Enter Name"
      />

      <TextInput
        style={[styles.TextInputView]}
        value={mobile}
        onChangeText={text => {
          setMobile(text);
        }}
        placeholder="Enter Number"
      />

      <TouchableOpacity
        onPress={() => {
          saveContact();
        }}
        style={styles.buttonview}>
        <Text style={styles.buttonTextView}>Save Contact</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddContact;

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
