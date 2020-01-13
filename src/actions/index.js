import omdb from '../apis/omdb';
import cinemaBack from '../apis/cinemaBack';

export const fetchFilms = () => async dispatch => {
    const response = await cinemaBack.get('film/');
    dispatch({ type: 'FETCH_FILMS', payload: response.data });
};

export const fetchFilm = id => async dispatch => {
    dispatch({ type: 'FETCH_FILM', payload: {} });
    let response = await omdb.get('', { params: { t: id, plot: 'full' } });

    if (response.data.Response === 'True') {
        dispatch({ type: 'FETCH_FILM', payload: response.data });
        return;
    }

    response = await omdb.get('', { params: { s: id } });
    if (!response.data.totalResults >= 1) return;

    response = await omdb.get('', { params: { i: response.data.Search[0].imdbID, plot: 'full' } });

    dispatch({ type: 'FETCH_FILM', payload: response.data });
};
