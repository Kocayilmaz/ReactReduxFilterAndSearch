import React from 'react';

export const SearchContainer = ({ head, title, desc  }) => {
    return (
        <>
        <h1 className="greeting">{head}</h1>
        <div className="search-container">
            <select className="filter">
                <option value="all">{title}</option>
            </select>
            <input type="text" placeholder={desc} className="search-input" />
        </div>
        </>
    );
};
