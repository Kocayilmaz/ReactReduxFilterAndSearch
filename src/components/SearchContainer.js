// SearchContainer.js
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mantine/core';
import { fetchCardItems } from '../util/fetchCardItems';
import _ from 'lodash';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const SearchContainer = ({ head, title, desc, setFilteredData }) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchBar, setSearchBar] = useState('');

  useEffect(() => {
    fetchCardItems()
      .then((res) => {
        const tags = _.uniq(_.flatten(res.data.items.map(item => item.tags)));
        const optionsTopping = tags.map(tag => ({ value: tag, label: tag }));
        setOptions(optionsTopping);
        setLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    if (selectedOption) {
      const tag = selectedOption.value;
      fetchCardItems()
        .then((res) => {
          const filteredItems = res.data.items.filter((item) => item.tags.includes(tag));
          setFilteredData(filteredItems);
        })
        .catch((err) => console.error(err.message));
    } else {
      fetchCardItems()
        .then((res) => {
          setFilteredData(res.data.items);
        })
        .catch((err) => console.error(err.message));
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchBar(term);

    fetchCardItems()
      .then((res) => {
        const filteredItems = res.data.items.filter((item) => 
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
        );
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
            <Select
              className="filter"
              components={animatedComponents}
              options={options}
              value={selectedOption}
              onChange={handleOptionChange}
              placeholder={title}
              isClearable
            />
            <input 
              type="text" 
              placeholder={desc} 
              className="search-input" 
              value={searchBar} 
              onChange={handleSearch} 
            />
          </div>
        </>
      )}
    </>
  );
};
