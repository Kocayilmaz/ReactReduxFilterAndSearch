import { combineReducers } from "redux";
import { cardDataReducer } from "./cardDataReducer";
import { filteredDataReducer } from "./filteredDataReducer";

export default combineReducers({
  cardData: cardDataReducer,
  filteredData: filteredDataReducer,
});
