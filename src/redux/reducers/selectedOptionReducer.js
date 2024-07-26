const SET_SELECTED_OPTION = "SET_SELECTED_OPTION";

export const setSelectedOptionAction = (selectedOption) => ({
  type: SET_SELECTED_OPTION,
  payload: selectedOption,
});

const initialState = null;

export const selectedOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_OPTION:
      return action.payload;
    default:
      return state;
  }
};
