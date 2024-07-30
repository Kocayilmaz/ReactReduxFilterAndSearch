import React, { useEffect, createContext } from "react";
import { Navbar } from "./Navbar";
import { SearchContainer } from "./SearchContainer";
import { SuggestionsList } from "./SuggestionsList";
import { BoxContainer } from "./BoxContainer";
import { useDispatch } from "react-redux";
import { fetchCardData } from "../redux/asyncThunks/fetchCardData";

export const Context = createContext();
export const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardData());
  }, []);
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
