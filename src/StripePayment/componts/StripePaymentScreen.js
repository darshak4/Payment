import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStripe} from '@stripe/stripe-react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const StripePaymentScreen = () => {
  const [name, setName] = useState('');
  const stripe = useStripe();

  const subscribe = async () => {
    try {
      const response = await fetch('http://192.168.29.128:8080/pay', {
        method: 'POST',
        body: JSON.stringify({name}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      // console.log('-+-+-+-+-+-+-++-+-', clientSecret);
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Merchant Name',
      });
      console.log('initsheet', initSheet);
      if (initSheet.error)
        return Alert.alert(initSheet.error.message, '--++*---');
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert('Payment complete, thank you!');
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong');
    }
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={val => setName(val)}
        placeholder="Enter User Name"
        style={{
          width: RFValue(300),
          fontSize: RFValue(15),
          padding: RFValue(5),
          borderWidth: RFValue(1),
          borderRadius: RFValue(10),
          paddingLeft: RFValue(10),
        }}
      />

      <TouchableOpacity
        onPress={() => subscribe()}
        style={{
          justifyContent: 'center',
          padding: RFValue(11),
          borderRadius: RFValue(10),
          backgroundColor: 'lightblue',
          alignItems: 'center',
          marginTop: RFValue(10),
        }}>
        <Text style={{fontWeight: 'bold'}}>Subscribe ₹25</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StripePaymentScreen;

const styles = StyleSheet.create({});
