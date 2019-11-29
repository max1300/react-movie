import React, {useState, useEffect} from "react";
import axios from "axios";

const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    const axiosData = async(e) => {
        e.preventDefault();
        const movieApi = await axios(`http://www.omdbapi.com/?apikey=a8c513b9&t=${title}&y=${year}`)
        setMovies(movieApi.data)
    }

    useEffect(() => {
        const postAxios = async() => {

            const movieApi = await axios.post(`https://chibre-b5ac2.firebaseio.com/`, {movies})

        }
        postAxios();
    })




    return (
        <>
        { loading &&
    <div className="uk-container">
        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
            <div className="uk-width-1-1@m">
                <div
                    className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                    <h3 className="uk-card-title uk-text-center">AJOUT DE FILM</h3>
                    <form className="uk-grid-small" uk-grid="true">
                        <div className="uk-margin">
                            <div className="uk-inline uk-width-1-1">
                                <input name="title" className="uk-input" placeholder="Title..."
                                       onChange={event => setTitle(event.target.value)}/>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-inline uk-width-1-1">
                                <input name="year" className="uk-input" placeholder="Year of distribution..."
                                       onChange={event => setYear(event.target.value)}/>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <button className="uk-button uk-button-primary uk-button-large uk-width-1-1"
                                    onClick={axiosData}>Soumettre la recherche</button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
}
</>
    );
}
export default AddMovie;