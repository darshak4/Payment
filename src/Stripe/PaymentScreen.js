import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  CardField,
  confirmPayment,
  createToken,
  useStripe,
} from '@stripe/stripe-react-native';
import ButtonComponts from './componts/ButtonComponts';
import creatPaymentIntent from './api/StripeApi';
import {RFValue} from 'react-native-responsive-fontsize';
import generateToken from './api/PaypalApi';

const PaymentScreen = () => {
  const [cardInfo, setCardInfo] = useState(null);

  const featchCartDetails = cardDetails => {
    // console.log('CardDetails', cardDetails);
    if (cardDetails.complete) {
      setCardInfo(cardDetails);
    } else {
      setCardInfo(null);
    }
  };

  const onDone = async () => {
    let apidata = {
      amount: 700000,
      currency: 'INR',
    };
    try {
      const res = await creatPaymentIntent(apidata);
      console.log('payment success', res);
      if (res.data.paymentIntent) {
        let confirmPaymentIntent = await confirmPayment(
          res.data.paymentIntent,
          {
            paymentMethodType: 'Card',
          },
        );
        console.log('ConfirmPayment', confirmPaymentIntent);
        Alert.alert('Payment SucccessFull');
      }
    } catch (error) {
      console.log('Error Raised Create Token', error);
    }
    // console.log('cardinfo-+-+-++-+-+', cardInfo);
    // if (!!cardInfo) {
    //   try {
    //     const resToken = await createToken({...cardInfo, type: 'Card'});
    //     console.log('resTokrn', resToken);
    //   } catch (error) {
    //     Alert.alert('Error Raised Create Tokemnn');
    //   }
    // }
  };

  const onPressPaypal = async () => {
    try {
      const res = await generateToken();
      console.log('Token Respobnse', res);
    } catch (error) {
      console.log('error+-+-+-+-', error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black',
      }}>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '90%',
          height: 50,
          marginVertical: 30,
          backgroundColor: 'grey',
        }}
        onCardChange={cardDetails => {
          featchCartDetails(cardDetails);
          // console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <ButtonComponts onPress={onDone} disabled={!cardInfo} />

      {/* <ButtonComponts
        onPress={onPressPaypal}
        disabled={false}
        btnstyle={{backgroundColor: '#0fafa3', marginVertical: RFValue(10)}}
      /> */}
      <TouchableOpacity
        onPress={() => {
          onPressPaypal();
        }}>
        <Text>press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
