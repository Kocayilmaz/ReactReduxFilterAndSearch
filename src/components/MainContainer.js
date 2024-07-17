import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { SearchContainer } from "./SearchContainer";
import { SuggestionsList } from "./SuggestionsList";
import { BoxContainer } from "./BoxContainer";
import { fetchCardItems } from "../util/fetchCardItems";

export const MainContainer = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchCardItems()
      .then((res) => {
        setCardData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="container">
      <Navbar title={"RF"} />
      <SearchContainer
        head={"Hello, May I Help You?"}
        title={"Pick Your Character"}
        desc={"Type your questions"}
        setFilteredData={setFilteredData}
      />
      <SuggestionsList
        head={"Suggestions:"}
        cardData={cardData}
        setFilteredData={setFilteredData}
      />
      <BoxContainer filteredData={filteredData} />
    </div>
  );
};
