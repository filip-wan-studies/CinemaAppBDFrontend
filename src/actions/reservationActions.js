import cinemaBack from '../apis/cinemaBack';

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

export const confirmReservationForUser = id => dispatch => {
    if (!id || typeof id !== 'number') return;
    dispatch({ type: 'CONFIRM_RESERVATION', payload: { ClientId: id } });
};

export const unconfirmReservation = () => dispatch => {
    dispatch({ type: 'UNCONFIRM_RESERVATION' });
};

export const postReservation = reservation => async dispatch => {
    if (
        !reservation ||
        (!reservation.Email && !reservation.ClientId) ||
        !reservation.seanceId ||
        !reservation.seats ||
        reservation.seats.length < 1
    )
        return null;

    let response = [];

    await reservation.seats.forEach(async s => {
        const r = await cinemaBack.post('reservation/', {
            Email: reservation.Email,
            ClientId: reservation.ClientId,
            Ticket: { ScreeningId: reservation.seanceId, ScreenSeatId: s.SeatId }
        });
        await response.push(r);
    });
    dispatch({ type: 'POST_RESERVATION', payload: { response } });
};
