import { Skeleton, Button } from "@mantine/core";
import { Suggestions } from "./Suggestions";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAndFilterData } from "../redux/reducers/CardDataReducer";

export const SuggestionsList = ({ head }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const suggestions = useSelector((store) => store.suggestions);

  const handleSuggestionClick = (tag) => {
    dispatch(fetchAndFilterData(tag));
  };

  const handleAllClick = () => {
    dispatch(fetchAndFilterData());
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
              <Suggestions
                key={tag}
                title={tag}
                onClick={() => handleSuggestionClick(tag)}
              />
            ))}
            <Button
              variant="gradient"
              gradient={{
                from: "rgba(0, 63, 145, 0.77)",
                to: "rgba(120, 218, 240, 0.81)",
                deg: 237,
              }}
              onClick={handleAllClick}
            >
              All
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
