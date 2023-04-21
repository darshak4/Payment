import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import strings from './language/LocalizationString';
import {getlng, setlng} from './Helper/Changelanguage';

const LanguageScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    selectedlng();
  }, []);

  const selectedlng = async () => {
    const lngdata = await getlng();
    if (!!lngdata) {
      strings.setLanguage(lngdata);
    }
    console.log('lngdata', lngdata);
  };
  const onChangeLan = lng => {
    if (lng === 'English') {
      setlng('English');
      return;
    }
    if (lng === 'Hindi') {
      setlng('Hindi');
      return;
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{strings.WelcomeText}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          paddingHorizontal: RFValue(50),
          borderRadius: RFValue(10),
          height: RFValue(40),
          justifyContent: 'center',
          marginTop: RFValue(10),
          //   position: 'absolute',
          //   bottom: RFValue(30),
          alignSelf: 'center',
        }}
        onPress={() => {
          onChangeLan('English');
        }}>
        <Text>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          paddingHorizontal: RFValue(50),
          borderRadius: RFValue(10),
          height: RFValue(40),
          justifyContent: 'center',
          marginTop: RFValue(10),
          //   position: 'absolute',
          //   bottom: RFValue(30),
          alignSelf: 'center',
        }}
        onPress={() => {
          onChangeLan('Hindi');
        }}>
        <Text>Hindi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({});
