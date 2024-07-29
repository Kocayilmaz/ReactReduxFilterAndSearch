import { fetchCardItems } from "../../util/fetchCardItems";
import _ from "lodash";
import { setSuggestionsAction } from "../reducers/suggestionsReducer";
import { setLoadingAction } from "../reducers/loadingReducer";

const CARD_DATA = "DEMO/CARD_DATA";
const FETCH_AND_FILTER_DATA = "FETCH_AND_FILTER_DATA";
const FETCH_AND_ALL_TAG_DATA = "FETCH_AND_ALL_TAG_DATA";

export function cardDataAction(data) {
  return {
    type: CARD_DATA,
    payload: {
      cardData: data,
    },
  };
}

export function cardDataReducer(state = [], { type, payload }) {
  switch (type) {
    case CARD_DATA:
      return payload.cardData;
    case FETCH_AND_FILTER_DATA:
      return payload.cardData;
    case FETCH_AND_ALL_TAG_DATA:
      return payload.cardData;
    default:
      return state;
  }
}

export function fetchAndFilterData(tag = null) {
  return async (dispatch, getState) => {
    try {
      const { searchBar, suggestions } = getState();
      const res = await fetchCardItems();
      const tagData = _.uniq(_.flatten(res.data.map((item) => item.tags)));
      const filteredItems = res.data.filter((card) => {
        const isTagged = tag ? card.tags.includes(tag) : true;
        const isSearched = searchBar.length
          ? card.title.toLowerCase().indexOf(searchBar.toLowerCase()) > -1 ||
            card.tags
              .map((tag) => tag.toLowerCase())
              .includes(searchBar.toLowerCase())
          : null;
        return isSearched || isTagged;
      });
      if (!suggestions.length) {
        dispatch(setSuggestionsAction(tagData));
      }
      dispatch(cardDataAction(filteredItems));
      dispatch(setLoadingAction(false));
    } catch (err) {
      dispatch(setLoadingAction(false));
      console.error(err.message);
    }
  };
}
