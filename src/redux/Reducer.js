import {CHANGE_LANGUAGE} from './ActioType';

export const LanguageReducer = (state = 'ENGLISH', action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
