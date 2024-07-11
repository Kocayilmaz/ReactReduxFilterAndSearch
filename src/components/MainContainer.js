import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { SearchContainer } from './SearchContainer';
import { SuggestionsList } from './SuggestionsList';
import { BoxContainer } from './BoxContainer';

export const MainContainer = () => {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="container">
      <Navbar title={"RF"} />
      <SearchContainer head={"Hello, May I Help You?"} title={"All Categories"} desc={"Type your questions"} setFilteredData={setFilteredData} />
      <SuggestionsList head={"Suggestions:"} setFilteredData={setFilteredData} />
      <BoxContainer filteredData={filteredData} />
    </div>
  );
};
