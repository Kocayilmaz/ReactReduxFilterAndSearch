import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  nav: {
    communicationOpen: false,
    profileOpen: false,
  },
  opener: {
    opened: false,
  },
};

const uiStateSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    toggleCommunication(state) {
      state.nav.communicationOpen = !state.nav.communicationOpen;
    },
    toggleProfile(state) {
      state.nav.profileOpen = !state.nav.profileOpen;
    },
    setOpened(state, action) {
      state.opener.opened = action.payload;
    },
  },
});

export const { setLoading, toggleCommunication, toggleProfile, setOpened } =
  uiStateSlice.actions;
export default uiStateSlice.reducer;
