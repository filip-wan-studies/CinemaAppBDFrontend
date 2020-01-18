import cinemaBack from '../apis/cinemaBack';

export default () => async dispatch => {
    const response = await cinemaBack.get('film/');
    dispatch({ type: 'FETCH_FILMS', payload: response.data });
};
