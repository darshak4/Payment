import {CHANGE_THEME} from './ActioType';

export const ThemeReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};
