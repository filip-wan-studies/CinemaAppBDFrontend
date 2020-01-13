import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';

export default combineReducers({
    films: filmsReducer
});
