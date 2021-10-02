import React, { useRef } from "react";
import { Result } from "../api/api";
import "./SearchResult.css";

interface Props {
  results: Result[];
  selectMovie: (id: number) => void;
}

const SearchResult: React.FC<Props> = ({ results, selectMovie }) => {
  const renderResult = () => {
    return results.map((result: Result) => (
      <li
        key={result.id}
        className="search-result"
        onClick={() => selectMovie(result.id)}
      >
        {result.title}
      </li>
    ));
  };

  return <ul className="results-list">{renderResult()}</ul>;
};

export default SearchResult;
