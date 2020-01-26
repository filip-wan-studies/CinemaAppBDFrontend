import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import filmReducer from './filmReducer';
import screeningsReducer from './screeningsReducer';
import reservationReducer from './reservationReducer';
import popupReducer from './popupReducer';
import clientReducer from './clientReducer';

export default combineReducers({
    films: filmsReducer,
    film: filmReducer,
    screenings: screeningsReducer,
    reservation: reservationReducer,
    popup: popupReducer,
    client: clientReducer
});
