import decode from 'jwt-decode';
import cinemaBack from '../apis/cinemaBack';

export const checkToken = () => async dispatch => {
    const token = localStorage.getItem('token');
    if (!token) return;

    var decodedToken = decode(token);

    if (decodedToken.exp < new Date().getTime() / 1000) {
        localStorage.removeItem('token');
        return;
    }
    let response;
    try {
        response = await cinemaBack.get('client/' + decodedToken.unique_name);
    } catch (e) {
        response = { status: 400 };
        console.error(e);
    }
    dispatch({ type: 'LOGIN', payload: { response: response.data } });
};

export const login = credentials => async dispatch => {
    if (!credentials || !credentials.Email || !credentials.Secret) return null;
    let response;
    try {
        response = await cinemaBack.post('client/authenticate', { ...credentials });
    } catch (e) {
        return null;
    }
    if (response.status !== 200) return null;

    localStorage.setItem('token', response.data.secret);

    dispatch({ type: 'LOGIN', payload: { response: response.data } });
};

export const logout = () => async dispatch => {
    localStorage.removeItem('token');

    dispatch({ type: 'LOGOUT' });
};
