import LocalizedStrings from 'react-native-localization';
import English from './English';
import Hindi from './Hindi';

let strings = new LocalizedStrings({
  English: English,
  Hindi: Hindi,
});
export default strings;
