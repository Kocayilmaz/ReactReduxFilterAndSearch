import { combineReducers } from "redux";
import { cardDataReducer } from "./CardDataReducer";

export default combineReducers({
  cardData: cardDataReducer,
});
