import React from "react";
import { Movie } from "../api/api";
import "./Card.css";

interface Props {
  movie: Movie;
}

const Card: React.FC<Props> = ({ movie }) => {
  type genre = typeof movie.genres;
  type company = typeof movie.production_companies;

  const genresOrCompanies = (data: genre | company): string => {
    let array: string[] = [];

    data.forEach((item) => {
      array.push(item.name);
    });

    return array.join(", ");
  };

  const formatRevenue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div className="card">
      <div className="poster-container">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className="information-container">
        <h1 className="title">{movie.title}</h1>
        <div className="tagline color-text">{movie.tagline}</div>
        <div className="overview">{movie.overview}</div>
        <div className="genres color-text">
          {genresOrCompanies(movie.genres)}
        </div>
        <div className="compines">
          {genresOrCompanies(movie.production_companies)}
        </div>
        <div className="numbers-section">
          <div className="number-container">
            <div className="">Original Release:</div>
            <div className="color-text number">{movie.release_date}</div>
          </div>
          <div className="number-container">
            <div className="">Running Time:</div>
            <div className="color-text number">{movie.runtime} mins</div>
          </div>
        </div>
        <div className="numbers-section">
          <div className="number-container">
            <div className="">Box Office:</div>
            <div className="color-text number">
              {formatRevenue.format(movie.revenue)}
            </div>
          </div>
          <div className="number-container">
            <div className="">Vote Average:</div>
            <div className="color-text number">{movie.rating}/10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
