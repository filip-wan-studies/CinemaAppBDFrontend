import { combineReducers } from 'redux';

export default combineReducers({
    films: (state = [], action) => {
        switch (action.type) {
            case 'FETCH_FILMS':
                return action.payload;
            default:
                return state;
        }
    }
});
