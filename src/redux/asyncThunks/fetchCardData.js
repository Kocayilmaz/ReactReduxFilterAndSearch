import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCardItems } from "../../util/fetchCardItems";
import _ from "lodash";

export const fetchCardData = createAsyncThunk(
  "CARDS/FETCH",
  async (tag = null, { getState, dispatch }) => {
    try {
      const { cardData } = getState().cardData;
      const res = await fetchCardItems();

      if (!res.data) {
        throw new Error("Fetch response has no data");
      }

      const tagData = _.uniq(_.flatten(res.data.map((item) => item.tags)));
      const filteredItems = res.data.filter((card) => {
        const isTagged = tag ? card.tags.includes(tag) : true;
        const isSearched = cardData.length
          ? card.title.toLowerCase().indexOf(cardData.toLowerCase()) > -1 ||
            card.tags
              .map((tag) => tag.toLowerCase())
              .includes(cardData.toLowerCase())
          : true;
        return isSearched || isTagged;
      });

      return { filteredItems, tagData };
    } catch (e) {
      console.error("Error in fetchCardData:", e);
      throw e;
    }
  }
);
