import React, { useEffect, useCallback } from "react";
import { Skeleton } from "@mantine/core";
import _ from "lodash";
import makeAnimated from "react-select/animated";
import AsyncSelect from "react-select/async";
import axios from "axios";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCardData } from "../redux/asyncThunks/fetchCardData";
import {
  setSearchBar,
  setSelectedOption,
} from "../redux/toolkitReducers/SearchAndSelectionSlice";
import { setLoading } from "../redux/toolkitReducers/Uistate";

const animatedComponents = makeAnimated();

export const SearchContainer = ({ head, title, desc }) => {
  const dispatch = useDispatch();
  const searchBar = useSelector((store) => store.searchAndSelection.searchBar);
  const selectedOption = useSelector(
    (store) => store.searchAndSelection.selectedOption
  );
  const loading = useSelector((store) => store.uiState.loading);

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

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
    dispatch(setSelectedOption(selectedOption));
  };

  const debouncedSearch = useCallback(
    _.debounce(() => {
      dispatch(fetchCardData());
    }, 500),
    [dispatch]
  );
  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(setSearchBar(term));
    debouncedSearch(searchBar);
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
