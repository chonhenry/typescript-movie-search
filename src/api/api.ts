export const fetchSingleMovie = async (movieID: string) => {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  let movie = await res.json();
  return movie;
};
