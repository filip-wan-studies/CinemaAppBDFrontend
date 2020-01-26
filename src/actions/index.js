import decode from 'jwt-decode';
import clearScreenings from './clearScreenings';
import fetchFilm from './fetchFilm';
import fetchFilms from './fetchFilms';
import fetchScreening from './fetchScreening';
import cinemaBack from '../apis/cinemaBack';

export { clearScreenings, fetchFilm, fetchFilms, fetchScreening };
export const reserveSeat = (seanceId, seatId) => dispatch => {
    if (!seatId || !seanceId) return null;
    dispatch({ type: 'RESERVE_SEAT', payload: { seatId: seatId, seanceId: seanceId } });
};

export const reserveSeatCancel = (seanceId, seatId) => dispatch => {
    if (!seatId || !seanceId) return null;
    dispatch({ type: 'RESERVE_SEAT_CANCEL', payload: { seatId: seatId, seanceId: seanceId } });
};

export const reservationClear = () => dispatch => {
    dispatch({ type: 'CLEAR_RESERVATION' });
};

export const confirmReservation = Email => dispatch => {
    if (!Email || typeof Email !== 'string') return;
    dispatch({ type: 'CONFIRM_RESERVATION', payload: { Email } });
};

export const unconfirmReservation = () => dispatch => {
    dispatch({ type: 'UNCONFIRM_RESERVATION' });
};

export const postReservation = reservation => async dispatch => {
    if (
        !reservation ||
        !reservation.Email ||
        !reservation.seanceId ||
        !reservation.seats ||
        reservation.seats.length < 1
    )
        return null;

    let response = [];

    await reservation.seats.forEach(async s => {
        const r = await cinemaBack.post('reservation/', {
            Email: reservation.Email,
            Ticket: { ScreeningId: reservation.seanceId, ScreenSeatId: s.SeatId }
        });
        await response.push(r);
    });
    dispatch({ type: 'POST_RESERVATION', payload: { response } });
};

export const togglePopup = isToggled => dispatch => {
    dispatch({ type: 'TOGGLE_POPUP', payload: { isToggled } });
};

export const popupToggleRegister = isToggled => dispatch => {
    dispatch({ type: 'TOGGLE_REGISTER_POPUP', payload: { isToggled } });
};

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

export const checkToken = () => async dispatch => {
    const token = localStorage.getItem('token');
    if (!token) return;

    var decodedToken = decode(token);
    console.log('Token: ', decodedToken, new Date().getTime() / 1000);

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
    console.log('Resp: ', response);
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
