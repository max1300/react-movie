import React, {useState, useEffect} from "react";
import Axios from "axios";
import {API_URL} from "./Constants";

const Movies = (props) => {
    const [items, setItems] = useState([]);
    const [rate, setRate] = useState(0);
    const [loading, setLoading] = useState(true);

    const title = props.match.params.title;
    const year = props.match.params.year;

    // const rating = props.match.params.score;

    useEffect(() => {
        const axiosData = async () => {
            const movieApi = await Axios(`http://www.omdbapi.com/?apikey=a8c513b9&t=${title}&y=${year}`);
            console.log(movieApi.data)
            setItems(movieApi.data);
            setLoading(false);
        }
        axiosData();
    }, [title, year])

    return (
        <div className="uk-container">
            {items &&
            <div className="uk-margin">
                <p>${items.title}</p>
                <p>${items.year}</p>
            </div>
            }
        </div>
    );
}
export default Movies;