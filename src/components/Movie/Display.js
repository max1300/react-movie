import React from "react";
import { getMovies } from "../../services/MovieService";

const Display = () => {
  const movies = getMovies();

  return (
    <div className="uk-container">
      {movies &&
        movies.map(movie => (
          <p className="uk-margin" style={{ color: "white" }}>
            <img
              src={movie.Poster}
              alt=""
              style={{ height: "200px", width: "150px" }}
            />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </p>
        ))}
    </div>
  );
};

export default Display;
