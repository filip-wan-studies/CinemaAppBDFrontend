import cinemaBack from '../apis/cinemaBack';

export const fetchScreening = id => async dispatch => {
    const response = await cinemaBack.get('screening/' + id);
    const date = new Date(response.data.screeningDate);
    dispatch({ type: 'FETCH_SCREENING', payload: { ...response.data, screeningDate: date } });
};

export const clearScreenings = () => async dispatch => {
    dispatch({ type: 'CLEAR_SCREENING' });
};
