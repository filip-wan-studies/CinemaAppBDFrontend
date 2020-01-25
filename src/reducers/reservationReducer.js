export default (state = { seats: [] }, action) => {
    switch (action.type) {
        case 'RESERVE_SEAT':
            let s = { ...state };
            if (s.seanceId !== action.payload.seanceId) s = { seats: [], seanceId: action.payload.seanceId };

            s.seats.push({ SeatId: action.payload.seatId });
            return s;
        case 'RESERVE_SEAT_CANCEL':
            if (state.seanceId !== action.payload.seanceId) return state;
            return { ...state, seats: state.seats.filter(s => s.SeatId !== action.payload.seatId) };
        case 'CLEAR_RESERVATION':
            return { seats: [] };
        case 'POST_RESERVATION': {
            return {
                ...state,
                responce: action.payload
            };
        }
        default:
            return state;
    }
};
