import React, { useContext, useEffect, useState } from "react";
import { Skeleton, Button } from "@mantine/core";
import { Suggestions } from "./Suggestions";
import _ from "lodash";
import { Context } from "./MainContainer";

export const SuggestionsList = ({ head }) => {
  const { cardData, setFilteredData } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const tags = _.uniq(_.flatten(cardData.map((item) => item.tags)));
    setSuggestions(tags);
    setLoading(false);
  }, [cardData]);

  const handleSuggestionClick = (tag) => {
    const filteredItems = cardData.filter((item) => item.tags.includes(tag));
    setFilteredData(filteredItems);
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
