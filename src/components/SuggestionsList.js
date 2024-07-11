import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mantine/core';
import { Suggestions } from './Suggestions';
import { fetchCardItems } from '../util/fetchCardItems';
import _ from 'lodash';

export const SuggestionsList = ({ head, setFilteredData }) => {
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchCardItems()
      .then((res) => {
        const tags = _.uniq(_.flatten(res.data.items.map(item => item.tags)));
        setSuggestions(tags);
        setLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const handleSuggestionClick = (tag) => {
    fetchCardItems()
      .then((res) => {
        const filteredItems = res.data.items.filter((item) => {
          return item.tags.includes(tag); // Sadece tıklanan etikete sahip öğeleri filtrele
        });
        setFilteredData(filteredItems);
      })
      .catch((err) => console.error(err.message));
  };
  const handleAllClick = () => {
    fetchCardItems()
      .then((res) => {
        setFilteredData(res.data.items); // Tüm öğeleri getirir
      })
      .catch((err) => console.error(err.message));
  };

  
  return (
    <div className="suggestions">
      {loading ? (
        <>
          <Skeleton height={20} width="40%" mb="sm" />
          <div className="suggestions-list">
            <Skeleton height={40} width="20%" mr="sm" />
            <Skeleton height={40} width="20%" mr="sm" />
            <Skeleton height={40} width="20%" mr="sm" />
            <Skeleton height={40} width="20%" />
          </div>
        </>
      ) : (
        <>
           <h2>{head}</h2>
          <div className="suggestions-list">
            {suggestions.map((tag) => (
              <Suggestions key={tag} title={tag} onClick={() => handleSuggestionClick(tag)} />
            ))}
            <button className="suggestion-all" onClick={handleAllClick}>
              All
            </button>
          </div>
        </>
      )}
    </div>
  );
};
