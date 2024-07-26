const SET_LOADING = "SET_LOADING";

export const setLoadingAction = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
