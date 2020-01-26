export default (state = { isToggled: false }, action) => {
    switch (action.type) {
        case 'POPUP_TOGGLE':
            let toggleState = action.payload;
            if (toggleState === undefined) toggleState = !state.isToggled;
            return { ...state, isToggled: toggleState };
        default:
            return state;
    }
};
