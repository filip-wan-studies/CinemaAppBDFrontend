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

export const postReservation = reservation => async dispatch => {
    if (
        !reservation ||
        !reservation.Email ||
        !reservation.SeanceId ||
        !reservation.seats ||
        reservation.seats.length < 1
    )
        return null;

    let response = [];

    await reservation.seats.forEach(async s => {
        const r = await cinemaBack.post('reservation/', {
            Email: reservation.Email,
            Ticket: { ScreeningId: reservation.SeanceId, SeatId: s.SeatId }
        });
        await response.push(r);
    });
    dispatch({ type: 'POST_RESERVATION', payload: { response } });
};
