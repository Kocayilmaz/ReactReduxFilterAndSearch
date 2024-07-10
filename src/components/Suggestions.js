import React from 'react';

export const Suggestions = ({ title, onClick }) => {
  return (
    <button className="suggestion-item" onClick={onClick}>
      {title}
    </button>
  );
};
