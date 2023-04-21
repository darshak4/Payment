import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

const Contact = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    const contacts = await AsyncStorage.getItem('CONTACT');
    console.log(JSON.parse(contacts));
    setContactList(JSON.parse(contacts));
    // const password = await AsyncStorage.getItem('PASSWORD');
    // console.log(email + '' + password);
  };

  const DeleteContact = async index => {
    const tempdata = contactList;
    const selecteDta = await tempdata.filter((item, ind) => {
      return ind != index;
    });
    setContactList(selecteDta);
    await AsyncStorage.setItem('CONTACT', JSON.stringify(selecteDta));
  };

  const Logout = async () => {
    await AsyncStorage.setItem('EMAIL', '');
    await AsyncStorage.setItem('PASSWORD', '');
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={{flex: RFValue(1)}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={contactList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: RFValue(15),
                margin: RFValue(10),
                elevation: RFValue(5),
                borderRadius: RFValue(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text>{item.name}</Text>
                <Text style={{marginLeft: RFValue(30)}}>{item.mobile}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  DeleteContact(index);
                }}>
                <Image
                  style={{width: RFValue(15), height: RFValue(15)}}
                  source={require('../assets/images/delete.png')}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('AddContact')}
        style={styles.adduserStyle}>
        <Text style={{fontVariant: ['small-caps'], fontWeight: 'bold'}}>
          Add New User
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Logout();
        }}
        style={[styles.adduserStyle, {right: 280}]}>
        <Text style={{fontVariant: ['small-caps'], fontWeight: 'bold'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contact;

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
