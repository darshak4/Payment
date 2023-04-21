import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

const ButtonComponts = ({
  text = 'Pay Now',
  onPress = () => {},
  disabled = false,
  btnstyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: RFValue(10),
        borderRadius: RFValue(10),
        backgroundColor: !disabled ? 'lightblue' : 'grey',
        ...btnstyle,
      }}
      disabled={disabled}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponts;

const styles = StyleSheet.create({});
