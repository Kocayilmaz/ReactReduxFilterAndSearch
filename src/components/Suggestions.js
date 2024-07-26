import React from "react";

export const Suggestions = ({ title, onClick }) => {
  return (
    <button className="suggestions-item" onClick={onClick}>
      {title}
    </button>
  );
};
