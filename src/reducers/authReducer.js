export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...action.payload.response };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};
