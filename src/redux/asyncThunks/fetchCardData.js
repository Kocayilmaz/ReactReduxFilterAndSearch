import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCardItems } from "../../util/fetchCardItems";
import _ from "lodash";

export const fetchCardData = createAsyncThunk(
  "CARDS/FETCH",
  async (tag = null, { getState }) => {
    try {
      const { searchBar } = getState().searchAndSelection;

      const res = await fetchCardItems();

      if (!res.data) {
        throw new Error("Fetch response has no data");
      }

      const tagData = _.uniq(_.flatten(res.data.map((item) => item.tags)));

      const filteredItems = res.data.filter((card) => {
        const isTagged = tag ? card.tags.includes(tag) : true;
        const isSearched = searchBar
          ? card.title.toLowerCase().includes(searchBar.toLowerCase()) ||
            card.tags.some((t) =>
              t.toLowerCase().includes(searchBar.toLowerCase())
            )
          : true;

        return isTagged && isSearched;
      });

      return { filteredItems, tagData };
    } catch (e) {
      console.error("Error in fetchCardData:", e);
      throw e;
    }
  }
);
