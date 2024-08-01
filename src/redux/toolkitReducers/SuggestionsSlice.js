import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    setSuggestions(state, action) {
      return action.payload;
    },
  },
});

export const { setSuggestions } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;
