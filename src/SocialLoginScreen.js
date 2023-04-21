import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import LanguageLoader from './LanguageLoader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from './utils';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from './redux/action';
import {languages} from './Languages';
import {changetheme} from './redux/ThemeAction';
const SocialLoginScreen = () => {
  const navigation = useNavigation();
  const [langMoadlVisiable, setlangMoadlVisiable] = useState(false);
  const [selectedLang, setselectedLang] = useState(0);
  const dispatch = useDispatch();
  const saveSelectedLanguage = async index => {
    await AsyncStorage.setItem('LANG', index + '');
  };
  const language = useSelector(state => state.LanguageReducer);
  console.log('+-+-+-+-+-+--+-++--+-+-', language);

  const theme = useSelector(state => state.ThemeReducer);
  console.log('+-+-+-+-+-+--+-++--+-+-', theme);

  return (
    <SafeAreaView
      style={{
        flex: RFValue(1),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme == 'DARK' ? '#000' : '#fff',
      }}>
      <Text
        style={{
          color: theme == 'DARK' ? '#fff' : '#000',
          marginBottom: RFValue(10),
          fontWeight: 'bold',
        }}>
        {/* {language === 'ENGLISH' ? translation[0].Hindi : translation[0].English} */}
        {selectedLang == 0
          ? translation[0].English
          : selectedLang == 1
          ? translation[0].Hindi
          : selectedLang == 2
          ? translation[0].Gujrati
          : selectedLang == 3
          ? translation[0].Punjabi
          : null}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AdminLoginScreen')}
        style={{
          backgroundColor: 'lightblue',
          paddingHorizontal: RFValue(100),
          borderRadius: RFValue(10),
          height: RFValue(40),
          justifyContent: 'center',
        }}>
        <Text>AdminLogin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserLoginScreen')}
        style={{
          backgroundColor: 'lightblue',
          paddingHorizontal: RFValue(100),
          borderRadius: RFValue(10),
          height: RFValue(40),
          justifyContent: 'center',
          marginTop: RFValue(10),
        }}>
        <Text>UserLogin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          paddingHorizontal: RFValue(50),
          borderRadius: RFValue(10),
          height: RFValue(40),
          justifyContent: 'center',
          marginTop: RFValue(10),
          position: 'absolute',
          bottom: RFValue(90),
          alignSelf: 'center',
        }}
        onPress={() => {
          if (theme === 'DARK') {
            dispatch(changetheme('LIGHT'));
          } else {
            dispatch(changetheme('DARK'));
          }
        }}>
        <Text>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          paddingHorizontal: RFValue(50),
          borderRadius: RFValue(10),
          height: RFValue(40),
          justifyContent: 'center',
          marginTop: RFValue(10),
          position: 'absolute',
          bottom: RFValue(30),
          alignSelf: 'center',
        }}
        onPress={() => {
          // if (language === 'ENGLISH') {
          //   dispatch(changeLanguage('HINDI'));
          // } else {
          //   dispatch(changeLanguage('ENGLISH'));
          // }
          setlangMoadlVisiable(!langMoadlVisiable);
        }}>
        <Text>Select Languages</Text>
      </TouchableOpacity>
      <LanguageLoader
        langModalVisiable={langMoadlVisiable}
        setlangMoadlVisiable={setlangMoadlVisiable}
        onSelectlang={x => {
          setselectedLang(x);
          saveSelectedLanguage(x);
        }}
      />
    </SafeAreaView>
  );
};

export default SocialLoginScreen;

const styles = StyleSheet.create({});
