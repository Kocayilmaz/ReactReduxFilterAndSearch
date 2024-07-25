import React, { useState, useEffect, createContext } from "react";
import { Navbar } from "./Navbar";
import { SearchContainer } from "./SearchContainer";
import { SuggestionsList } from "./SuggestionsList";
import { BoxContainer } from "./BoxContainer";
import { useDispatch } from "react-redux";
import { fetchAndFilterData } from "../redux/reducers/CardDataReducer";

export const Context = createContext();

const ContextProvider = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    dispatch(fetchAndFilterData());
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        suggestions,
        setSuggestions,
        selectedOption,
        setSelectedOption,
        searchBar,
        setSearchBar,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const MainContainer = () => {
  return (
    <div className="container">
      <ContextProvider>
        <Navbar title={"RF"} />
        <SearchContainer
          head={"Hello, May I Help You?"}
          title={"Pick Your Character"}
          desc={"Type your questions"}
        />
        <SuggestionsList head={"Suggestions:"} />
        <BoxContainer />
      </ContextProvider>
    </div>
  );
};
