import {combineReducers, createStore} from 'redux';
import {LanguageReducer} from '../redux/Reducer';
import {ThemeReducer} from '../redux/ThemeReducer';

const totalReducer = combineReducers({LanguageReducer, ThemeReducer});

export const store = createStore(totalReducer);
