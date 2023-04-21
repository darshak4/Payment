import AsyncStorage from '@react-native-async-storage/async-storage';

export const setlng = data => {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('language', data);
};
export const getlng = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('language').then(data => {
      resolve(JSON.parse(data));
    });
  });
};
