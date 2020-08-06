import * as actionTypes from "../actions";

const initialState = {
  displayModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_MODAL_DISPLAY_ON:
      return {
        ...initialState,
        displayModal: true,
      };
    case actionTypes.HANDLE_MODAL_DISPLAY_OFF:
      return {
        ...initialState,
        displayModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
