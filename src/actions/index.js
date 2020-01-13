import _ from 'lodash';
import omdb from '../apis/omdb';
import cinemaBack from '../apis/cinemaBack';

export const fetchFilms = () => async dispatch => {
    const response = await cinemaBack.get('film/');
    dispatch({ type: 'FETCH_FILMS', payload: response.data });
};
