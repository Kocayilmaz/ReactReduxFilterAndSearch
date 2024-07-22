import React, { useState, useEffect, useCallback, useContext } from "react";
import { Skeleton } from "@mantine/core";
import _ from "lodash";
import makeAnimated from "react-select/animated";
import AsyncSelect from "react-select/async";
import axios from "axios";
import "../App.scss";
import { filterItems } from "../util/filterItems";
import { Context } from "./MainContainer";

const animatedComponents = makeAnimated();

export const SearchContainer = ({ head, title, desc }) => {
  const {
    setFilteredData,
    loading,
    setLoading,
    selectedOption,
    setSelectedOption,
    searchBar,
    setSearchBar,
    setSelectedImage,
  } = useContext(Context);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const fetchCharacterOptions = (inputValue, cb) => {
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/character/?name=${inputValue}`,
    })
      .then((res) => {
        cb(res.data.results ?? []);
      })
      .catch((err) => {
        cb([err]);
      });
  };

  const handleOptionChange = async (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const debouncedSearch = useCallback(
    _.debounce((term) => {
      filterItems(term, (filteredItems) => {
        setFilteredData(filteredItems);
      });
    }, 1500),
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
        <div className="content">
          <h1 className="greeting">{head}</h1>
          <div className="search-container">
            <AsyncSelect
              className="filter"
              components={animatedComponents}
              cacheOptions
              defaultOptions
              getOptionValue={(opt) => opt.id}
              getOptionLabel={(opt) => opt.name}
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

          {!!selectedOption && (
            <div className="image-container">
              <img alt={selectedOption.name} src={selectedOption.image} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
