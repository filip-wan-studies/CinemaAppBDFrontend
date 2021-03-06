import _ from 'lodash';
import omdb from '../apis/omdb';
import cinemaBack from '../apis/cinemaBack';

export const fetchFilm = id => async dispatch => {
    var skip = false;
    dispatch({ type: 'FETCH_FILM', payload: {} });

    let responseCinemaBack = await cinemaBack.get('film/' + id);

    if (_.isEmpty(responseCinemaBack.data)) return;

    let responseOmdb = await omdb.get('', { params: { t: responseCinemaBack.data.imdbID, plot: 'full' } });

    let film;

    if (responseOmdb.data.Response === 'True') {
        film = { ...responseCinemaBack.data, imdb: responseOmdb.data };
        dispatch({ type: 'FETCH_FILM', payload: film });
        return;
    }

    responseOmdb = await omdb.get('', { params: { s: responseCinemaBack.data.title } });
    if (!responseOmdb.data.totalResults >= 1) skip = true;

    if (!skip) responseOmdb = await omdb.get('', { params: { i: responseOmdb.data.Search[0].imdbID, plot: 'full' } });

    if (!skip) film = { ...responseCinemaBack.data, imdb: responseOmdb.data };
    else film = { ...responseCinemaBack.data, imbd: null };

    dispatch({ type: 'FETCH_FILM', payload: film });
};

export const fetchFilms = () => async dispatch => {
    const response = await cinemaBack.get('film/');
    dispatch({ type: 'FETCH_FILMS', payload: response.data });
};
