const initialState = [];

export const suggestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUGGESTIONS":
      return action.payload;
    default:
      return state;
  }
};

export const setSuggestionsAction = (suggestions) => ({
  type: "SET_SUGGESTIONS",
  payload: suggestions,
});
