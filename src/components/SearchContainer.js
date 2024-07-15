import React, { useState, useEffect, useCallback } from 'react';
import { Skeleton } from '@mantine/core';
import { fetchCardItems } from '../util/fetchCardItems';
import _ from 'lodash';
import makeAnimated from 'react-select/animated';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import '../App.css';
import { filterItems } from '../util/filterItems';

const animatedComponents = makeAnimated();

export const SearchContainer = ({ head, title, desc, setFilteredData }) => {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchBar, setSearchBar] = useState('');

  useEffect(() => {
    setLoading(false);
  }, []);

  const fetchCharacterOptions = (inputValue, cb) => {
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?name=${inputValue}`
    }).then((res) => {
       cb(res.data.results ?? [])
    }).catch((err) => {
       cb([err])
    })
    
  };

  const handleOptionChange = async (selectedOption) => {
    debugger
    setSelectedOption(selectedOption);
    
  };

  const debouncedSearch = useCallback(
    _.debounce((term) => {
      filterItems(term, (filteredItems) => {
        setFilteredData(filteredItems);
      });
    }, ),
    []
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchBar(term);
    debouncedSearch(term);
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
            <AsyncSelect
              className="filter"
              components={animatedComponents}
              cacheOptions
              defaultOptions
              getOptionValue={ (opt) => opt.id}
              getOptionLabel={ (opt) => opt.name}
              loadOptions={fetchCharacterOptions}
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
          
            {!!selectedOption && <div className="image-container">
              <img alt={selectedOption.name} src={selectedOption.image} />
            </div>}
        </>
      )}
    </>
  );
};
