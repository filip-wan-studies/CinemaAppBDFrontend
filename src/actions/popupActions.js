export const togglePopup = isToggled => dispatch => {
    dispatch({ type: 'TOGGLE_POPUP', payload: { isToggled } });
};

export const popupToggleRegister = isToggled => dispatch => {
    dispatch({ type: 'TOGGLE_REGISTER_POPUP', payload: { isToggled } });
};
