import React from 'react';
import { Suggestions } from './Suggestions';

export const SuggestionsList = ({ head }) => {
    return (
        <div className="suggestions">
            <h2>{head}</h2>
            <Suggestions title={"Slider"} />
            <Suggestions title={"Tutorial"} />
            <Suggestions title={"Html"} />
            <Suggestions title={"Prototyping"} />
            <Suggestions title={"Css 3"} />
        </div>
    );
};
