import React, { useEffect, createContext } from "react";
import { Navbar } from "./Navbar";
import { SearchContainer } from "./SearchContainer";
import { SuggestionsList } from "./SuggestionsList";
import { BoxContainer } from "./BoxContainer";
import { useDispatch } from "react-redux";
import { fetchCardData } from "../redux/asyncThunks/fetchCardData";
/* import { cardDataAction } from "../redux/toolkitReducers/CardDataSlice";
import { useSelector } from "react-redux"; */

export const MainContainer = () => {
  /*  const cardData = useSelector((store) => store.cardData); */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar title={"RF"} />
      <SearchContainer
        head={"Hello, May I Help You?"}
        title={"Pick Your Character"}
        desc={"Type your questions"}
      />
      <SuggestionsList head={"Suggestions:"} />
      <BoxContainer />
    </div>
  );
};
