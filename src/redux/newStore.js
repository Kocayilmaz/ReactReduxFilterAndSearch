import { configureStore } from "@reduxjs/toolkit";
import cardData from "./toolkitReducers/CardDataSlice";
import suggestions from "./toolkitReducers/SuggestionsSlice";
import searchAndSelection from "./toolkitReducers/SearchAndSelectionSlice";
import uiState from "./toolkitReducers/Uistate";

export const store = configureStore({
  reducer: {
    cardData,
    suggestions,
    searchAndSelection,
    uiState,
  },
});
