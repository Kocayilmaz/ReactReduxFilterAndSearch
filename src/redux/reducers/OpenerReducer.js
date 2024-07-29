export const SET_OPENED = "SET_OPENED";

export const setOpenedAction = (isOpened) => ({
  type: SET_OPENED,
  payload: isOpened,
});

const initialState = {
  opened: false,
};

export const openerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPENED:
      return { ...state, opened: action.payload };
    default:
      return state;
  }
};
