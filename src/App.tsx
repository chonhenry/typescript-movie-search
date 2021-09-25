import React, { useState, useEffect } from "react";
import { fetchSingleMovie, fetchPopularMovies, Movie } from "./api/api";
import Navbar from "./components/Navbar";
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

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="backdrop"></div>
      <div className="container">
        <Navbar />
        {movie && movie.title}
      </div>
    </div>
  );
};

export default App;
