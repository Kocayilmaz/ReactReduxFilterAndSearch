import React from 'react';
import { Navbar } from './Navbar';
import { SearchContainer } from './SearchContainer';
import { SuggestionsList } from './SuggestionsList';
import { BoxContainer } from './BoxContainer';

export const MainContainer = () => {
    return (
        <div className="container">
        <Navbar title={"RF"} />
        <SearchContainer head={"Hello, May I Help You?"} title={"All Categories"} desc={"Type your questions"}/>
        <SuggestionsList head={"Suggestions:"} />
        <BoxContainer/>
    </div>
    );
};