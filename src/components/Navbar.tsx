import React, { useState, useEffect, useRef } from "react";
import { Result, Movie } from "../api/api";
import SearchResult from "./SearchResult";
import "./Navbar.css";

interface Props {
  searchMovie: (s: string) => void;
  results: Result[];
  selectMovie: (id: number) => void;
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
}

const Navbar: React.FC<Props> = ({
  searchMovie,
  results,
  selectMovie,
  setResults,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e: any) => {
    if (!ref.current) return;

    if (ref.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    console.log(123);
    setResults([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) {
      searchMovie(e.target.value);
    }
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => window.open("https://www.themoviedb.org")}
      >
        <div className="logo-text-upper">powered by</div>
        <div className="logo-text-lower">the movie db</div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Movie Title"
          onChange={(e) => handleChange(e)}
          value={searchTerm}
        />
        <SearchResult results={results} selectMovie={selectMovie} />
      </div>
    </nav>
  );
};

export default Navbar;
