import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation, useTheme} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';

const ListenerScreen = () => {
  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();
  const {colors} = useTheme();
  // const afterClick = () => {
  //   Alert.alert('hi');
  // };

  // useEffect(() => {
  //   console.log(`Button pressed ${count} times`);
  // }, [count]);

  // const handlePress = () => {
  //   setCount(count + 1);
  // };
  // const handlePressIn = () => {
  //   setIsPressed(true);
  // };

  // const handlePressOut = () => {
  //   setIsPressed(false);
  // };

  // const handleLayout = event => {
  //   const {width: newWidth, height: newHeight} = event.nativeEvent.layout;
  //   setWidth(newWidth);
  //   setHeight(newHeight);
  // };

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  // useEffect(() => {
  //   const unsubribee = navigation.addListener('beforeRemove', e => {
  //     e.preventDefault();
  //     Alert.alert('back');
  //   });
  //   return unsubribee;
  // }, [navigation]);
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
        }}
        onPress={() => navigation.navigate('ListenerDetails')}>
        <Text style={{color: colors.text}}>GotoDetailsPAge</Text>
      </TouchableOpacity>
      <Switch
        style={{marginTop: RFValue(10)}}
        value={darkMode}
        onValueChange={val => {
          setDarkMode(val);
          EventRegister.emit('changeThemeEvent', val);
        }}
      />
      {/* <View>
        <Text style={styles.text}>Click Back button!</Text>
      </View>
     
      <Text>ListenerScreen</Text>
      <TouchableOpacity
        style={{
          padding: RFValue(10),
          backgroundColor: 'lightblue',
          borderRadius: RFValue(10),
          marginTop: RFValue(10),
        }}
        onPress={() => {
          handlePress();
        }}>
        <Text>`Press Me ${count}`</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: RFValue(10),
          backgroundColor: 'lightblue',
          borderRadius: RFValue(10),
          marginTop: RFValue(10),
        }}
        onPress={() => {
          afterClick();
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: RFValue(10),
          backgroundColor: 'lightblue',
          borderRadius: RFValue(10),
          marginTop: RFValue(10),
        }}
        onLongPress={() => {
          afterClick();
        }}>
        <Text>Long Press</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: RFValue(10),
          backgroundColor: 'lightblue',
          borderRadius: RFValue(10),
          marginTop: RFValue(10),
        }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <Text>{isPressed ? 'Pressed!' : 'Press me!'}</Text>
      </TouchableOpacity>
      <View onLayout={handleLayout}>
        <Text>
          Width: {width}, Height: {height}
        </Text>
      </View> */}
    </View>
  );
};

export default ListenerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
