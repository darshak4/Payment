import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CardField,
  PaymentSheet,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SP_KEY} from '@env';
import PaymentScreen from './PaymentScreen';

const StripeScreen = () => {
  // console.log(SP_KEY);
  return (
    <StripeProvider
      publishableKey={SP_KEY}
      merchantIdentifier="merchant.identifier"
      urlScheme="your-uri-scheme">
      <PaymentScreen />
    </StripeProvider>
  );
};

export default StripeScreen;

const styles = StyleSheet.create({});
