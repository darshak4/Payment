import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLoginScreen from './UserLoginScreen';
import AdminLoginScreen from './AdminLoginScreen';
import UseRegistrationScreen from './UseRegistrationScreen';
import SocialLoginScreen from './SocialLoginScreen';
import LanguageScreen from './LanguageScreen';
import AddNewUserScreen from './SQLiteDataBase/AddNewUserScreen';
import HomeScreen from './SQLiteDataBase/HomeScreen';
import UpdateScreen from './SQLiteDataBase/UpdateScreen';

import Contact from './AsyncStorage/Contact';
import AddContact from './AsyncStorage/AddContact';
import Login from './AsyncStorage/Login';
import Intro from './AsyncStorage/Intro';

import ViewUser from './Sqlitedemo/ViewUser';
import ViewAllUser from './Sqlitedemo/ViewAllUser';
import UpdateUser from './Sqlitedemo/UpdateUser';
import RegisterUser from './Sqlitedemo/RegisterUser';
import DeleteUser from './Sqlitedemo/DeleteUser';
import ListenerScreen from './Listener/ListenerScreen';
import ListenerDetails from './Listener/ListenerDetails';

import {EventRegister} from 'react-native-event-listeners';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const apptheme = darkMode ? DarkTheme : DefaultTheme;
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeThemeEvent',
      data => {
        alert(data);
        setDarkMode(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
      true;
    };
  }, []);
  return (
    <NavigationContainer theme={apptheme}>
      <Stack.Navigator>
        {/* <Stack.Screen name="LanguageScreen" component={LanguageScreen} /> */}
        {/* <Stack.Screen name="SocialLoginScreen" component={SocialLoginScreen} />
        <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
        <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        <Stack.Screen
          name="UseRegistrationScreen"
          component={UseRegistrationScreen}
        /> */}
        {/* SQLite DataBase */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddNewUserScreen" component={AddNewUserScreen} />
        <Stack.Screen name="UpdateScreen" component={UpdateScreen} /> */}

        {/* AsyncStorage  */}
        {/* <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="AddContact" component={AddContact} /> */}

        {/* sqlitedemo Navigation */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="View" component={ViewUser} />
        <Stack.Screen name="ViewAll" component={ViewAllUser} />
        <Stack.Screen name="Update" component={UpdateUser} />
        <Stack.Screen name="Register" component={RegisterUser} />
        <Stack.Screen name="Delete" component={DeleteUser} /> */}

        {/* Listener Screen */}

        <Stack.Screen name="ListenerScreen" component={ListenerScreen} />
        <Stack.Screen name="ListenerDetails" component={ListenerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
