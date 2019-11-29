import { movieStorageKey } from "../Constants";

export const AddMovie = movieData => {
  let movies = getMovies();
  // TODO: check for duplicates
  movies.push(movieData);

  localStorage.setItem(movieStorageKey, JSON.stringify(movies));
};

export const getMovies = () => {
  let movies = localStorage.getItem(movieStorageKey);
  // W3 Specs : getItem returns null if key is not defined
  // https://www.w3.org/TR/webstorage/#dom-storage-getitem
  if (movies === null) {
    movies = "[]";
  }

  return JSON.parse(movies);
};
