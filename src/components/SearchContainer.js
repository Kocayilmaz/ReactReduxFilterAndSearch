import React, { useEffect, useCallback } from "react";
import { Skeleton } from "@mantine/core";
import _ from "lodash";
import makeAnimated from "react-select/animated";
import AsyncSelect from "react-select/async";
import axios from "axios";
import "../App.scss";
/* import { Context } from "./MainContainer"; */
import { useSelector, useDispatch } from "react-redux";
import { fetchAndFilterData } from "../redux/reducers/CardDataReducer";
import { setSearchBarAction } from "../redux/reducers/searchBarReducer";
import { setSelectedOptionAction } from "../redux/reducers/selectedOptionReducer";
import { setLoadingAction } from "../redux/reducers/loadingReducer";

const animatedComponents = makeAnimated();

export const SearchContainer = ({ head, title, desc }) => {
  const dispatch = useDispatch();
  const cardData = useSelector((store) => store.cardData);
  const searchBar = useSelector((store) => store.searchBar);
  const selectedOption = useSelector((store) => store.selectedOption);
  const loading = useSelector((store) => store.loading);
  /* const { loading, setLoading } = useContext(Context); */

  useEffect(() => {
    dispatch(setLoadingAction(false));
    /* setLoading(false); */
  }, [/* setLoading  */ dispatch]);

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
    dispatch(setSelectedOptionAction(selectedOption));
  };

  const debouncedSearch = useCallback(
    _.debounce((term) => {
      dispatch(fetchAndFilterData(term, cardData));
    }, 1500)
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(setSearchBarAction(term));
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
