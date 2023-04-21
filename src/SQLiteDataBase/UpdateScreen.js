import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation, useRoute} from '@react-navigation/native';

let db = openDatabase({name: 'UserDatabase1.db'});
const UpdateScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [address, setAddrees] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(route.params.name);
    setEmail(route.params.email);
    setAddrees(route.params.address);
  }, []);

  const updateData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'UPDATE table_user set user_name=? ,user_email=? ,user_address=? where user_id=?',
        [name, email, address, route.params.id],

        (txt, res) => {
          console.log(res);

          navigation.goBack();
        },
      );
    });
  };

  return (
    <SafeAreaView style={[styles.containervire]}>
      <Text style={{fontSize: RFValue(15), fontWeight: 'bold'}}>
        Update Data
      </Text>
      <TextInput
        style={[styles.TextInputView]}
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholder="Enter Name"
      />
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
        value={address}
        onChangeText={text => {
          setAddrees(text);
        }}
        placeholder="Enter Address"
      />

      <TouchableOpacity
        onPress={() => {
          updateData();
        }}
        style={styles.buttonview}>
        <Text style={styles.buttonTextView}>Update Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UpdateScreen;

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
