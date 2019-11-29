import Axios from "axios";

export const getMovieByTitleAndYear = async (title, year) => {
  const movieApi = await Axios(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${title}&y=${year}`
  );

  return movieApi.data;
};