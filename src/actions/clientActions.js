import cinemaBack from '../apis/cinemaBack';

export const postClient = client => async dispatch => {
    if (!client || !client.Email || !client.Name || !client.Surname || !client.Secret) return null;
    let response;
    try {
        response = await cinemaBack.post('client/', { ...client });
    } catch (e) {
        response = { status: 400 };
        console.error(e);
        dispatch({ type: 'POST_CLIENT', payload: { response } });
        return;
    }
    localStorage.setItem('token', response.data.secret);

    dispatch({ type: 'POST_CLIENT', payload: { response } });
    dispatch({ type: 'LOGIN', payload: { response: response.data } });
};
