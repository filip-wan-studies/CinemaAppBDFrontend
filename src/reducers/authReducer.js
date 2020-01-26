export default (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...action.payload.response, isLoggedIn: true };
        case 'LOGOUT':
            return { isLoggedIn: false };
        default:
            return state;
    }
};
