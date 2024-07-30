import { createSlice } from "@reduxjs/toolkit";
import { fetchCardData } from "../asyncThunks/fetchCardData";

const initialState = {
  cardData: [],
  suggestions: [],
  loading: false,
};

export const cardDataSlice = createSlice({
  name: "cardData",
  initialState,
  reducers: {
    cardDataAction: (state, action) => {
      state.cardData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.pending, (state, action) => {
      state.loading = true;
      console.log(state.loading, "Fetching card data...");
    });

    builder.addCase(fetchCardData.fulfilled, (state, action) => {
      console.log(action.payload, "Action payload in fulfilled");
      if (action.payload) {
        state.cardData = action.payload.filteredItems || [];
        state.suggestions = action.payload.tagData || [];
      } else {
        state.cardData = [];
        state.suggestions = [];
      }
      state.loading = false;
      console.log(state.loading, "Fetching card data completed.");
      console.log(state.cardData);
      console.log(state.suggestions);
    });

    builder.addCase(fetchCardData.rejected, (state, action) => {
      state.loading = false;
      console.log(state.loading, "Failed to fetch card data.");
    });
  },
});

export const { cardDataAction } = cardDataSlice.actions;

export default cardDataSlice.reducer;
