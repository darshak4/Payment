/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import StripeScreen from './src/Stripe/StripeScreen';
import StripePaymentScreen from './src/StripePayment/componts/StripePaymentScreen';
import Stripe from './src/StripePayment/Stripe';

AppRegistry.registerComponent(appName, () => Stripe);
