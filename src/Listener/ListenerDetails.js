import {
  Alert,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

const ListenerDetails = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  useEffect(() => {
    const unsubribee = navigation.addListener('beforeRemove', e => {
      //   e.preventDefault();
      //   Alert.alert('back');
      return true;
    });
    return unsubribee;
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          padding: RFValue(10),
          backgroundColor: colors.card,
          borderRadius: RFValue(10),
          marginTop: RFValue(10),
        }}>
        <Text style={{color: colors.text}}>ListenerDetails</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListenerDetails;

const styles = StyleSheet.create({});
