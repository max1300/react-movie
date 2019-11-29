import React, {useState} from "react";

const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [score, setScore] = useState();

    return (
        <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                <div className="uk-width-1-1@m">
                    <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                        <h3 className="uk-card-title uk-text-center">AJOUT DE FILM</h3>
                        <form className="uk-grid-small" uk-grid="true">
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <input name="title" className="uk-input" placeholder="Title..." onChange={title => setTitle(title)} />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <input name="year" className="uk-input" placeholder="Year of distribution..." onChange={year => setYear(year)} />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <a href={`/movies/${title}&${year}`} className="uk-button uk-button-primary uk-button-large uk-width-1-1">Soumettre la recherche</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddMovie;