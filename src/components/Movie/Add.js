import React, { useState } from "react";
import { getMovieByTitleAndYear } from "../../services/OmdbService";
import { AddMovie } from "../../services/MovieService";

const Add = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const addMovie = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const movieData = await getMovieByTitleAndYear(title, year);
      AddMovie(movieData);
      setLoading(false);
    } catch(e) {
      // TODO: Gestion d'erreurs dans l'interface avec affichage d'une alerte
      console.log("Une erreur est survenue", e);
    }
  };

  return (
    <div className="uk-container">
      <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
        <div className="uk-width-1-1@m">
          <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
            <h3 className="uk-card-title uk-text-center">AJOUT DE FILM</h3>
            <form className="uk-grid-small" uk-grid="true">
              <div className="uk-margin">
                <div className="uk-inline uk-width-1-1">
                  <input
                    name="title"
                    className="uk-input"
                    placeholder="Title..."
                    onChange={event => setTitle(event.target.value)}
                  />
                </div>
              </div>
              <div className="uk-margin">
                <div className="uk-inline uk-width-1-1">
                  <input
                    name="year"
                    className="uk-input"
                    placeholder="Year of distribution..."
                    onChange={event => setYear(event.target.value)}
                  />
                </div>
              </div>
              <div className="uk-margin">
                {loading ? (
                  "Patientez..."
                ) : (
                  <button
                    className="uk-button uk-button-primary uk-button-large uk-width-1-1"
                    onClick={addMovie}
                  >
                    Soumettre la recherche
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
