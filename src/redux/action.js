import {CHANGE_LANGUAGE} from './ActioType';

export const changeLanguage = type => ({
  type: CHANGE_LANGUAGE,
  payload: type,
});
