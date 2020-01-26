export default (state = { response: {} }, action) => {
    switch (action.type) {
        case 'POST_CLIENT':
            return { ...state, response: action.payload.response };
        default:
            return state;
    }
};
