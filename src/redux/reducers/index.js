import { combineReducers } from "redux";
import { cardDataReducer } from "./CardDataReducer";
import { searchBarReducer } from "./searchBarReducer";
import { selectedOptionReducer } from "./selectedOptionReducer";
import { loadingReducer } from "./loadingReducer";
import { suggestionsReducer } from "./suggestionsReducer";

export default combineReducers({
  cardData: cardDataReducer,
  searchBar: searchBarReducer,
  selectedOption: selectedOptionReducer,
  loading: loadingReducer,
  suggestions: suggestionsReducer,
});
