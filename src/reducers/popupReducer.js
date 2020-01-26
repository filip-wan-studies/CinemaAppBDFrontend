export default (state = { isToggled: false }, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            let toggleState = action.payload.isToggled === undefined ? !state.isToggled : action.payload.isToggled;
            return { ...state, isToggled: toggleState };
        default:
            return state;
    }
};
