import { combineReducers } from "redux";
import { cardDataReducer } from "./CardDataReducer";
import { filteredDataReducer } from "./filteredDataReducer";
import { tagDataReducer } from "./TagDataReducer";

export default combineReducers({
  cardData: cardDataReducer,
  filteredData: filteredDataReducer,
  tagData: tagDataReducer,
});
