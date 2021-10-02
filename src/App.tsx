import React, { useState, useEffect } from "react";
import {
  fetchSingleMovie,
  fetchPopularMovies,
  Movie,
  searchMovies,
  Result,
} from "./api/api";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

const App: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const id = await fetchPopularMovies();
      const res = await fetchSingleMovie(id);
      setMovie(res);
    };

    fetchMovie();
  }, []);

  const searchMovie = async (searchTerm: string) => {
    const res = await searchMovies(searchTerm);
    setResults(res);
  };

  const selectMovie = async (id: number) => {
    const movie = await fetchSingleMovie(id);
    setMovie(movie);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "",
      }}
      onClick={() => setResults([])}
    >
      <div className="backdrop" />
      <div className="container">
        <Navbar
          searchMovie={searchMovie}
          results={results}
          selectMovie={selectMovie}
          setResults={setResults}
        />
        {movie !== null && <Card movie={movie} />}
        <footer className="footer">
          <div>
            <a
              className="footer-link color-text"
              href="https://www.henrychon.co"
              target="_blank"
              rel="noreferrer"
            >
              Developed by Henry Chon
            </a>
          </div>
          <div>
            <a
              className="footer-link color-text"
              href="https://github.com/chonhenry/typescript-movie-search"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" style={{ marginRight: "5px" }}></i>{" "}
              View Code
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
