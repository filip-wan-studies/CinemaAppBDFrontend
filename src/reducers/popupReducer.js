export default (state = { isToggled: false, isRegisterToggled: false }, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            let toggleState = action.payload.isToggled === undefined ? !state.isToggled : action.payload.isToggled;
            return { ...state, isToggled: toggleState };
        case 'TOGGLE_REGISTER_POPUP':
            let toggleRegisterState =
                action.payload.isToggled === undefined ? !state.isToggled : action.payload.isToggled;
            return { ...state, isRegisterToggled: toggleRegisterState };
        default:
            return state;
    }
};
