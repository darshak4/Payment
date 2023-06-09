import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import English from './English';
import Hindi from './English';
i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: English,
    hd: Hindi,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
