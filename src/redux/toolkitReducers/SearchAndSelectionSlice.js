import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBar: "",
  selectedOption: null,
};

const searchAndSelectionSlice = createSlice({
  name: "searchAndSelection",
  initialState,
  reducers: {
    setSearchBar(state, action) {
      state.searchBar = action.payload;
    },
    setSelectedOption(state, action) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSearchBar, setSelectedOption } =
  searchAndSelectionSlice.actions;
export default searchAndSelectionSlice.reducer;
