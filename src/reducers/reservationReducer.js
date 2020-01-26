export default (state = { seats: [], isReady: false }, action) => {
    switch (action.type) {
        case 'RESERVE_SEAT':
            let s = { ...state };
            if (s.seanceId !== action.payload.seanceId) s = { seats: [], seanceId: action.payload.seanceId };

            s.seats.push({ SeatId: action.payload.seatId });
            return s;
        case 'RESERVE_SEAT_CANCEL':
            if (state.seanceId !== action.payload.seanceId) return state;
            return { ...state, seats: state.seats.filter(s => s.SeatId !== action.payload.seatId) };
        case 'CONFIRM_RESERVATION':
            return { ...state, Email: action.payload.Email, ClientId: action.payload.ClientId, isReady: true };
        case 'UNCONFIRM_RESERVATION':
            return { ...state, isReady: false };
        case 'CLEAR_RESERVATION':
            return { seats: [] };
        case 'POST_RESERVATION': {
            return {
                ...state,
                response: action.payload
            };
        }
        default:
            return state;
    }
};
