const SET_SEARCH_BAR = "SET_SEARCH_BAR";

export const setSearchBarAction = (searchBar) => ({
  type: SET_SEARCH_BAR,
  payload: searchBar,
});

const initialState = "";

export const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_BAR:
      return action.payload;
    default:
      return state;
  }
};
