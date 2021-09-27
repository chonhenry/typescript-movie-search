import React, { useState, useEffect } from "react";
import {
  fetchSingleMovie,
  fetchPopularMovies,
  Movie,
  searchMovies,
} from "./api/api";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

const App: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const id = await fetchPopularMovies();
      const res = await fetchSingleMovie(id);
      setMovie(res);
    };

    fetchMovie();
  }, []);

  const searchMovie = (searchTerm: string) => {
    searchMovies(searchTerm);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "",
      }}
    >
      <div className="backdrop" />
      <div className="container">
        <Navbar searchMovie={searchMovie} />
        {movie !== null && <Card movie={movie} />}
        <footer className="footer">
          <div>
            <a
              className="footer-link color-text"
              href="https://www.henrychon.co"
              target="_blank"
            >
              Developed by Henry Chon
            </a>
          </div>
          <div>
            <a
              className="footer-link color-text"
              href="https://github.com/chonhenry/typescript-movie-search"
              target="_blank"
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
