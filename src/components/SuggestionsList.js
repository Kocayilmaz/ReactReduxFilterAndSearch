import React, { useContext, useEffect, useState } from "react";
import { Skeleton, Button } from "@mantine/core";
import { Suggestions } from "./Suggestions";
import _ from "lodash";
import { Context } from "./MainContainer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterTagData } from "../redux/reducers/TagDataReducer";
import { tagDataReducer } from "../redux/reducers/TagDataReducer";
import { fetchAndFilterData } from "../redux/reducers/CardDataReducer";
import { cardDataAction } from "../redux/reducers/CardDataReducer";
import { tagDataAction } from "../redux/reducers/TagDataReducer";

export const SuggestionsList = ({ head }) => {
  const dispatch = useDispatch();
  const cardData = useSelector((store) => store.cardData);
  const tagData = useSelector((store) => store.tagData);

  const { setFilteredData, loading, setLoading, suggestions, setSuggestions } =
    useContext(Context);

  useEffect(() => {
    if (cardData.length > 0) {
      const tags = _.uniq(_.flatten(cardData.map((item) => item.tags)));
      setSuggestions(tags);
      setLoading(false);
    }
    dispatch(cardDataAction(cardData));
  }, [cardData, setLoading, dispatch]);

  const handleSuggestionClick = (tag) => {
    dispatch(tagDataAction(cardData, tag));
  };

  const handleAllClick = () => {
    setFilteredData(cardData);
  };

  return (
    <div className="suggestions">
      {loading ? (
        <>
          <Skeleton height={20} width="40%" mb="sm" />
          <div className="suggestions-list">
            <Skeleton height={40} width="20%" mr="sm" />
            <Skeleton height={40} width="20%" mr="sm" />
            <Skeleton height={40} width="20%" mr="sm" />
            <Skeleton height={40} width="20%" />
          </div>
        </>
      ) : (
        <>
          <h2>{head}</h2>
          <div className="suggestions-list">
            {suggestions.map((tag) => (
              <Suggestions
                key={tag}
                title={tag}
                onClick={() => handleSuggestionClick(tag)}
              />
            ))}
            <Button
              variant="gradient"
              gradient={{
                from: "rgba(0, 63, 145, 0.77)",
                to: "rgba(120, 218, 240, 0.81)",
                deg: 237,
              }}
              onClick={handleAllClick}
            >
              All
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
