import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reducers from "./reducers/index";

const initialState = {
  cardData: [],
  searchBar: "",
  selectedOption: null,
  loading: false,
  suggestions: [],
};

console.log(reducers);

const composeEnhancers = composeWithDevTools({});
const middleware = applyMiddleware(reduxPromise, thunk);

export default createStore(
  reducers,
  initialState,
  composeEnhancers(middleware)
);
