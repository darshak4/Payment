import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'UserDatabase1.db'});
const AddNewUserScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [address, setAddrees] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(50), user_address VARCHAR(255))',
              [],
            );
          } else {
            console.log('user Already Created');
          }
        },
      );
    });
  }, []);

  const saveData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO table_user(user_name ,user_email,user_address) VALUES (?,?,?)',
        [name, email, address],
        (txt, res) => {
          if (res.rowsAffected == 1) {
            navigation.goBack();
          } else {
            console.log('-+-+-+-+-+--+--+', res);
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  return (
    <SafeAreaView style={[styles.containervire]}>
      <Text style={{fontSize: RFValue(15), fontWeight: 'bold'}}>
        Add UserData
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
          saveData();
        }}
        style={styles.buttonview}>
        <Text style={styles.buttonTextView}>Save Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddNewUserScreen;

const styles = StyleSheet.create({
  containervire: {
    flex: RFValue(1),
    alignItems: 'center',
    justifyContent: 'center',
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
    width: RFPercentage(40),
    padding: RFValue(10),
    borderRadius: RFValue(10),
    alignSelf: 'center',
    marginTop: RFValue(20),
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
