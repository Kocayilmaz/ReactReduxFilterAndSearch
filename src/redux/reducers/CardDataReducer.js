import { fetchCardItems } from "../../util/fetchCardItems";
import _ from "lodash";

const CARD_DATA = "DEMO/CARD_DATA";
const FETCH_AND_FILTER_DATA = "FETCH_AND_FILTER_DATA";
const FETCH_AND_ALL_TAG_DATA = "FETCH_AND_ALL_TAG_DATA";

export function cardDataAction(data, tag = null) {
  return {
    type: CARD_DATA,
    payload: {
      cardData: data,
      tag: tag,
    },
  };
}

export function cardDataReducer(state = [], { type, payload }) {
  switch (type) {
    case CARD_DATA:
      if (payload.tag) {
        return payload.cardData.filter((item) =>
          item.tags.includes(payload.tag)
        );
      }
      return payload.cardData;
    case FETCH_AND_FILTER_DATA:
      return payload.cardData;
    case FETCH_AND_ALL_TAG_DATA:
      return payload.cardData;
    default:
      return state;
  }
}

export function fetchAndFilterData(term = "") {
  return async (dispatch) => {
    try {
      const res = await fetchCardItems();
      const filteredItems = res.data.filter(
        (item) =>
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(term.toLowerCase())
          )
      );
      dispatch(cardDataAction(filteredItems));
    } catch (err) {
      console.error(err.message);
    }
  };
}

export function FetchAndAllTagData() {
  return async (dispatch) => {
    try {
      const res = await fetchCardItems();
      if (res.Data.length > 0) {
        const AllTagData = _.uniq(_.flatten(res.data.map((item) => item.tags)));
        dispatch(cardDataAction(AllTagData));
      }
    } catch (err) {
      console.error(err.message);
    }
  };
}
