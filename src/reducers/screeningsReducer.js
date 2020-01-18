export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SCREENING':
            return { ...state, [action.payload.id]: action.payload };
        case 'CLEAR_SCREENING':
            return {};
        default:
            return state;
    }
};
