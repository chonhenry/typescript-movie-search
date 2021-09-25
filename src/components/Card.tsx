import React from "react";
import { Movie } from "../api/api";
import "./Card.css";

interface Props {
  movie: Movie;
}

const Card: React.FC<Props> = ({ movie }) => {
  return (
    <div className="card">
      <div className="poster-container">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className="information-container">
        <h1 className="title">{movie.title}</h1>
      </div>
    </div>
  );
};

export default Card;
