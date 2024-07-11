import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mantine/core';
import { fetchCardItems } from '../util/fetchCardItems';
import _ from 'lodash';

export const SearchContainer = ({ head, title, desc, setFilteredData }) => {
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState([]);

  useEffect(() => {
    fetchCardItems()
      .then((res) => {
        const tags = _.uniq(_.flatten(res.data.items.map(item => item.tags)));
        setOption(tags);
        setLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const handleOptionClick = (tag) => {
    fetchCardItems()
      .then((res) => {
        const filteredItems = res.data.items.filter((item) => item.tags.includes(tag));
        setFilteredData(filteredItems);
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <>
      {loading ? (
        <>
          <Skeleton height={32} mb="xl" width="50%" />
          <div className="search-container">
            <Skeleton height={40} width={100} mr="sm" />
            <Skeleton height={40} width="70%" />
          </div>
        </>
      ) : (
        <>
          <h1 className="greeting">{head}</h1>
          <div className="search-container">
            <select className="filter" onChange={(e) => handleOptionClick(e.target.value)}>
              <option value="all">{title}</option>
              {option.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <input type="text" placeholder={desc} className="search-input" />
          </div>
        </>
      )}
    </>
  );
};
