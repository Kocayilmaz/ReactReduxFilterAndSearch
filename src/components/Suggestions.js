import React from 'react';

export const Suggestions = ({ title }) => {
    return (
        <div className="suggestions-list">
            <div className="suggestion-box"><a href="#">{title}</a></div>
        </div>
    );
};
