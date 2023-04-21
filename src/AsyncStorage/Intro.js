import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checklogin();
    }, 3000);
  }, []);

  const checklogin = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    console.log(email);
    if (email !== null) {
      navigation.navigate('Contact');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View
      style={{
        flex: RFValue(1),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Intro</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({});
