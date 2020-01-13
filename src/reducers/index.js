import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import filmReducer from './filmReducer';

export default combineReducers({
    films: filmsReducer,
    film: filmReducer
});
