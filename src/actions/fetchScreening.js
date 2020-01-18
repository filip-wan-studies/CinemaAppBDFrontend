import cinemaBack from '../apis/cinemaBack';

export default id => async dispatch => {
    const response = await cinemaBack.get('screening/' + id);
    const date = new Date(response.data.screeningDate);
    dispatch({ type: 'FETCH_SCREENING', payload: { ...response.data, screeningDate: date } });
};
