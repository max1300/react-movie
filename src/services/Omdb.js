import React from "react";
import axios from "axios";
import {API_URL} from "../utils/Constants";

export const getMovie = async(title, year) => {
    const movieApi = await axios(`${API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&t=${title}&y=${year}`)
    const data = movieApi.data;
    return data;
}
