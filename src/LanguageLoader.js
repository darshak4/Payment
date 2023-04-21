import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

const LanguageData = [
  {name: 'English', selected: true},
  {name: 'हिंदी', selected: false},
  {name: 'ગુજરાતી', selected: false},
  {name: 'ਪੰਜਾਬੀ', selected: false},
];

const LanguageLoader = ({
  langModalVisiable,
  setlangMoadlVisiable,
  onSelectlang,
}) => {
  const [language, setlanguage] = useState(LanguageData);
  const [selectlang, setSelectlang] = useState(0);

  const onSelect = index => {
    const temp = language;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
          setSelectlang(index);
        }
      } else {
        item.selected = false;
      }
    });
    let tmp2 = [];
    temp.map(item => {
      tmp2.push(item);
    });
    setlanguage(tmp2);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={langModalVisiable}
      onRequestClose={() => {
        setlangMoadlVisiable(!langModalVisiable);
      }}>
      <View style={styles.centerview}>
        <View style={styles.modalview}>
          <Text>Select Language</Text>
          <View style={{width: '100%'}}>
            <FlatList
              data={language}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      alignItems: 'center',
                      borderRadius: RFValue(10),
                      borderWidth: RFValue(0.5),
                      padding: RFValue(10),
                      margin: RFValue(2),
                      flexDirection: 'row',
                      paddingLeft: RFValue(10),
                    }}
                    onPress={() => {
                      onSelect(index);
                    }}>
                    {item.selected == true ? (
                      <Image
                        style={{
                          width: RFValue(20),
                          height: RFValue(20),
                          tintColor: 'blue',
                        }}
                        source={require('./assets/images/selected.png')}></Image>
                    ) : (
                      <Image
                        style={{width: RFValue(20), height: RFValue(20)}}
                        source={require('./assets/images/unselected.png')}></Image>
                    )}
                    <Text
                      style={{
                        paddingLeft: RFValue(10),
                        fontSize: RFValue(15),
                        color: item.selected == true ? 'blue' : 'black',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={{
                // width: RFValue(100),
                // height: RFValue(20),
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: RFValue(10),
                padding: RFValue(10),
                margin: RFValue(10),
              }}
              onPress={() => {
                setlangMoadlVisiable(false);
              }}>
              <Text>cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // width: RFValue(100),
                // height: RFValue(20),
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: RFValue(10),
                padding: RFValue(10),
                margin: RFValue(10),
              }}
              onPress={() => {
                setlangMoadlVisiable(false);
                onSelectlang(selectlang);
              }}>
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageLoader;

const styles = StyleSheet.create({
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalview: {
    margin: 20,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 2.5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
