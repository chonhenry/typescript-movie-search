export interface Movie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  production_companies: {
    id: number;
    logo: string;
    name: string;
    country: string;
  }[];
  release_date: string;
  runtime: number;
  revenue: number;
  rating: number;
  backdrop_path: string;
  poster_path: string;
}

export interface Result {
  title: string;
  id: number;
}

export const fetchPopularMovies = async (): Promise<number> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const movies = await res.json();
  return movies.results[0].id;
};

export const fetchSingleMovie = async (movieID: number): Promise<Movie> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const data = await res.json();
  const movie = {
    id: data.id,
    title: data.original_title,
    tagline: data.tagline,
    overview: data.overview,
    genres: data.genres,
    production_companies: data.production_companies,
    release_date: data.release_date,
    runtime: data.runtime,
    revenue: data.revenue,
    rating: data.vote_average,
    backdrop_path: data.backdrop_path,
    poster_path: data.poster_path,
  };
  return movie;
};

export const searchMovies = async (searchTerm: string): Promise<Result[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = (await res.json()).results.slice(0, 5);
  return data.map((movie: any) => {
    return { title: movie.original_title, id: movie.id };
  });
};
