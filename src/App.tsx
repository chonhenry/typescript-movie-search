import React, { useState, useEffect } from "react";
import { fetchSingleMovie, fetchPopularMovies, Movie } from "./api/api";
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

  return <div className="App">{movie && movie.title}</div>;
};

export default App;
