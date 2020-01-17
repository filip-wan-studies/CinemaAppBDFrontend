import _ from 'lodash';
import omdb from '../apis/omdb';
import cinemaBack from '../apis/cinemaBack';

export const fetchFilms = () => async dispatch => {
    const response = await cinemaBack.get('film/');
    dispatch({ type: 'FETCH_FILMS', payload: response.data });
};

export const fetchFilm = id => async dispatch => {
    dispatch({ type: 'FETCH_FILM', payload: {} });

    let responseCinemaBack = await cinemaBack.get('film/' + id);

    if (_.isEmpty(responseCinemaBack.data)) return;

    let responseOmdb = await omdb.get('', { params: { t: responseCinemaBack.data.title, plot: 'full' } });

    let film;

    if (responseOmdb.data.Response === 'True') {
        film = { ...responseCinemaBack.data, imdb: responseOmdb.data };
        dispatch({ type: 'FETCH_FILM', payload: film });
        return;
    }

    responseOmdb = await omdb.get('', { params: { s: responseCinemaBack.data.title } });
    if (!responseOmdb.data.totalResults >= 1) return;

    responseOmdb = await omdb.get('', { params: { i: responseOmdb.data.Search[0].imdbID, plot: 'full' } });

    film = { ...responseCinemaBack.data, imdb: responseOmdb.data };

    dispatch({ type: 'FETCH_FILM', payload: film });
};

export const fetchScreening = id => async dispatch => {
    const response = await cinemaBack.get('screening/' + id);
    const date = new Date(response.data.dateScreening);

    dispatch({ type: 'FETCH_SCREENING', payload: { ...response.data, dateScreening: date } });
};

export const clearScreenings = () => async dispatch => {
    dispatch({ type: 'CLEAR_SCREENING' });
};
