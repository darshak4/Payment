import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {openDatabase} from 'react-native-sqlite-storage';
import {useIsFocused} from '@react-navigation/native';

let db = openDatabase({name: 'UserDatabase1.db'});

const HomeScreen = ({navigation}) => {
  const [userList, setUserlist] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM table_user', [], (txt, res) => {
        console.log('Display User Data', res.rows.item);
        var temp = [];
        for (let i = 0; i < res.rows.length; i++) {
          console.log(res.rows.item(i));
          temp.push(res.rows.item(i));
          setUserlist(temp);
        }
      });
    });
  };

  const deleteUser = id => {
    db.transaction(txn => {
      txn.executeSql(
        'DELETE FROM table_user where user_id=?',
        [id],
        (tx, res) => {
          Alert.alert(
            'Success',
            'User deleted successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ],
            {cancelable: false},
          );

          getData();
        },
      );
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: RFValue(1),
      }}>
      <FlatList
        data={userList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: RFValue(10),
                margin: RFValue(10),
                elevation: RFValue(5),
                borderRadius: RFValue(10),
              }}>
              <Text>{'Name:- ' + item.user_name}</Text>
              <Text>{'Email:- ' + item.user_email}</Text>
              <Text>{'Address:- ' + item.user_address}</Text>
              <View style={styles.imageviewstyle}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UpdateScreen', {
                      name: item.user_name,
                      email: item.user_email,
                      address: item.user_address,
                      id: item.user_id,
                    })
                  }>
                  <Image
                    style={{width: RFValue(15), height: RFValue(15)}}
                    source={require('../assets/images/editing.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteUser(item.user_id)}>
                  <Image
                    style={{width: RFValue(15), height: RFValue(15)}}
                    source={require('../assets/images/delete.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('AddNewUserScreen')}
        style={styles.adduserStyle}>
        <Text style={{fontVariant: ['small-caps'], fontWeight: 'bold'}}>
          Add New User
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  adduserStyle: {
    backgroundColor: '#ACDDDE',
    padding: RFValue(10),
    borderRadius: RFValue(10),
    position: 'absolute',
    bottom: RFValue(30),
    right: RFValue(20),
  },
  imageviewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: RFValue(10),
    backgroundColor: '#ACDDDE',
    padding: RFValue(10),
    borderRadius: RFValue(10),
  },
});
