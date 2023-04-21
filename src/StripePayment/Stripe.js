import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {SP_KEY} from '@env';
import StripePaymentScreen from './componts/StripePaymentScreen';

const Stripe = () => {
  return (
    <View style={styles.container}>
      <StripeProvider
        publishableKey={SP_KEY}
        merchantIdentifier="merchant.identifier"
        urlScheme="your-uri-scheme">
        <StripePaymentScreen />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
};

export default Stripe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
